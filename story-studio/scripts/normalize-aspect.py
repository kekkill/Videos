"""Correct sample-aspect metadata without encoding picture or audio again."""
import json
from pathlib import Path
import subprocess

ROOT=Path(__file__).resolve().parents[1]
clips=json.loads((ROOT/'data/clips.json').read_text())
for clip in clips:
    path=ROOT/'out'/f"rick-morty-{clip['id']}.mp4"
    info=json.loads(subprocess.check_output(['ffprobe','-v','error','-select_streams','v:0',
        '-show_entries','stream=sample_aspect_ratio,display_aspect_ratio','-of','json',str(path)]))['streams'][0]
    if info['sample_aspect_ratio']=='1:1' and info['display_aspect_ratio']=='9:16': continue
    temporary=path.with_name(path.stem+'.square.mp4')
    subprocess.run(['ffmpeg','-y','-v','error','-i',str(path),'-map','0','-c','copy',
        '-bsf:v','h264_metadata=sample_aspect_ratio=1/1','-aspect','9:16',
        '-movflags','+faststart',str(temporary)],check=True)
    temporary.replace(path)
    print('Square pixels restored:',path.name,flush=True)
