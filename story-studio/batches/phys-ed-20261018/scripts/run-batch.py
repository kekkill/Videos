"""Run the resumable batch and retain progress/logs across chat tool reconnects."""
import argparse
import json
import os
from pathlib import Path
import signal
import subprocess
import time
import urllib.request

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'out'
PYTHON='/workspace/.venvs/snail-audio/bin/python'
parser=argparse.ArgumentParser()
parser.add_argument('--verify-only',action='store_true')
args=parser.parse_args()
environment={**os.environ,'npm_config_cache':'/workspace/.cache/npm',
    'PIP_CACHE_DIR':'/workspace/.cache/pip','HF_HOME':'/workspace/.cache/huggingface',
    'HF_XET_CACHE':'/workspace/.cache/huggingface/xet'}
def status(stage,**fields):
    (OUT/'batch-status.json').write_text(json.dumps({'pid':os.getpid(),'stage':stage,**fields},indent=2))
    print(stage,flush=True)
def start(command,name):
    log=(OUT/name).open('ab',buffering=0)
    return subprocess.Popen(command,cwd=ROOT,env=environment,stdout=log,stderr=subprocess.STDOUT,start_new_session=True)
def run(command,stage):
    status(stage)
    subprocess.run(command,cwd=ROOT,env=environment,check=True)

try:
    if not args.verify_only:
        status('rendering_and_exporting')
        render=start(['node','scripts/render-layers.cjs','--previews'],'render-batch.log')
        export=start([PYTHON,'scripts/export-clips.py','--wait-for-layers'],'export-batch.log')
        while render.poll() is None or export.poll() is None:
            if render.poll() not in [None,0] or export.poll() not in [None,0]:
                for child in [render,export]:
                    if child.poll() is None: os.killpg(child.pid,signal.SIGTERM)
                raise RuntimeError(f'Render/export failed: {render.poll()} / {export.poll()}')
            time.sleep(2)
        if render.returncode or export.returncode: raise RuntimeError('Batch failed')
    if not args.verify_only:
        run(['npm','run','lint'],'checking_types')
    # A frozen install replaces watched modules. Restore the preview process
    # before its functional readiness check if the existing server stopped.
    try:
        urllib.request.urlopen('http://127.0.0.1:3004',timeout=2).close()
    except OSError:
        status('starting_studio')
        studio=start(['npm','run','dev','--','--no-open','--port=3004'],'studio.log')
        (OUT/'studio-process.json').write_text(json.dumps({'pid':studio.pid}))
        deadline=time.monotonic()+30
        while True:
            try:
                urllib.request.urlopen('http://127.0.0.1:3004',timeout=2).close()
                break
            except OSError:
                if time.monotonic()>deadline: raise RuntimeError('Studio did not start')
                time.sleep(1)
    run([PYTHON,'scripts/check-source-orientation.py'],'checking_source_orientation')
    run(['node','scripts/check-layout.cjs'],'checking_layout')
    run([PYTHON,'scripts/check-exports.py'],'checking_all_video_frames_and_audio')
    run(['node','scripts/check-playback.cjs'],'checking_browser_playback')
    status('completed',validatedClips=len(json.loads((ROOT/'data/clips.json').read_text())))
except Exception as error:
    status('failed',error=str(error))
    raise
