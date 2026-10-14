"""Compose the vertical picture without changing the prepared speech or speed."""
import argparse
import bisect
import concurrent.futures
import json
import hashlib
import os
from pathlib import Path
import subprocess
import time

ROOT=Path(__file__).resolve().parents[1]
clips=json.loads((ROOT/'data/clips.json').read_text())
parser=argparse.ArgumentParser()
parser.add_argument('--only')
parser.add_argument('--wait-for-layers',action='store_true')
args=parser.parse_args()

def export(clip):
    folder=ROOT/'out'/clip['id']
    expectedHash=hashlib.sha256((ROOT/'data'/f"{clip['id']}-captions.json").read_bytes()).hexdigest()
    expectedStyle=hashlib.sha256((ROOT/'src/Common.tsx').read_bytes()).hexdigest()
    output=ROOT/'out'/f"rick-morty-{clip['id']}.mp4"
    oldReport=folder/'export.json'
    if oldReport.exists() and output.exists():
        old=json.loads(oldReport.read_text())
        if old.get('captionsSha256')==expectedHash and old.get('captionStyleSha256')==expectedStyle:
            print('Reusing completed export:',output.name,flush=True)
            return old
    while True:
        file=folder/'manifest.json'
        manifest=json.loads(file.read_text()) if file.exists() else {}
        if manifest.get('captionsSha256')==expectedHash and manifest.get('captionStyleSha256')==expectedStyle: break
        if not args.wait_for_layers: raise AssertionError('Caption layers need to be regenerated')
        time.sleep(2)
    assert manifest['captionsSha256']==expectedHash, 'Caption layers need to be regenerated'
    states={int(p.stem.split('-')[-1]):p for p in (folder/'states').glob('state-*.png')}
    assert set(manifest['boundaries'])<=states.keys()
    sequence=folder/'sequence'
    sequence.mkdir(exist_ok=True)
    for frame in range(clip['frames']):
        boundary=manifest['boundaries'][bisect.bisect_right(manifest['boundaries'],frame)-1]
        target=sequence/f'frame-{frame:05}.png'
        if target.exists(): target.unlink()
        os.link(states[boundary],target)
    header=next((folder/'header').glob('header-*.png'))
    picture=folder/'picture.mp4'
    source=ROOT/'public/media'/clip['file']
    subprocess.run(['ffmpeg','-y','-v','warning','-threads','1','-filter_complex_threads','1',
        '-i',str(source),'-framerate','24000/1001','-i',str(sequence/'frame-%05d.png'),
        '-loop','1','-framerate','24000/1001','-i',str(header),'-filter_complex',
        '[0:v]split=2[bg][fg];'
        '[bg]crop=406:720:438:0,scale=270:480:flags=bilinear,boxblur=10:2,'
        'scale=1080:1920:flags=bilinear,eq=brightness=-0.3:saturation=0.65[back];'
        '[fg]crop=1216:684:32:18,scale=1080:608:flags=lanczos[front];'
        '[back][front]overlay=0:580[base];'
        '[1:v]scale=in_range=full:out_range=tv:out_color_matrix=bt709,format=yuva420p[captions];'
        '[2:v]scale=in_range=full:out_range=tv:out_color_matrix=bt709,format=yuva420p[header];'
        '[base][header]overlay=0:190:format=yuv420[titled];'
        '[titled][captions]overlay=0:1320:shortest=1:format=yuv420,setsar=1[out]',
        '-map','[out]','-an','-frames:v',str(clip['frames']),'-c:v','libx264',
        '-preset','fast','-crf','19','-threads','1','-pix_fmt','yuv420p',
        '-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709',
        '-color_range','tv','-movflags','+faststart',str(picture)],check=True)
    subprocess.run(['ffmpeg','-y','-v','warning','-i',str(picture),'-i',str(source),
        '-map','0:v:0','-map','1:a:0','-c','copy','-movflags','+faststart',str(output)],check=True)
    result={**manifest,'output':output.name,'bytes':output.stat().st_size,
        'advertisementLayers':0,'minecraftSignLayers':0,
        'audioCopiedFromPreparedMontage':True,'speechSpeedChanged':False,
        'mainPictureCrop':{'x':32,'y':18,'width':1216,'height':684}}
    (folder/'export.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
    print(f"Exported {output.name}: {output.stat().st_size} bytes",flush=True)
    return result

selected=[c for c in clips if not args.only or c['id']==args.only]
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
    results=list(pool.map(export,selected))
(ROOT/'out/exports.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
