"""Validate every delivered picture, timestamp, audio packet and caption layer."""
import hashlib
import argparse
import json
from pathlib import Path
import subprocess

import numpy as np

ROOT=Path(__file__).resolve().parents[1]
clips=json.loads((ROOT/'data/clips.json').read_text())
parser=argparse.ArgumentParser()
parser.add_argument('--only')
args=parser.parse_args()
def probe(path,*args):
    return json.loads(subprocess.check_output(['ffprobe','-v','error',*args,'-of','json',str(path)]))
def ffmpeg(*args):
    return subprocess.check_output(['ffmpeg','-v','error','-threads','1','-filter_threads','1',
        '-filter_complex_threads','1',*map(str,args)])
def audio_packets(path):
    return probe(path,'-select_streams','a:0','-show_packets','-show_data_hash','sha256',
        '-show_entries','packet=pts_time,dts_time,duration_time,data_hash')['packets']
def frame_times(path):
    data=probe(path,'-select_streams','v:0','-show_packets','-show_entries','packet=pts_time,duration_time')['packets']
    return sorted((float(p['pts_time']),p.get('duration_time')) for p in data)

layout=json.loads((ROOT/'out/layout-check.json').read_text())
assert layout['validation']=='passed' and layout['clipsChecked']==10
reports=[]
for clip in clips:
    if args.only and clip['id']!=args.only: continue
    source=ROOT/'public/media'/clip['file']
    output=ROOT/'out'/f"rick-morty-{clip['id']}.mp4"
    metadata=probe(output,'-show_streams','-show_format')
    video=next(s for s in metadata['streams'] if s['codec_type']=='video')
    assert (video['width'],video['height'],video['sample_aspect_ratio'],video['display_aspect_ratio'])==(1080,1920,'1:1','9:16')
    assert int(video['nb_frames'])==clip['frames'] and video['avg_frame_rate']=='24000/1001'
    assert frame_times(source)==frame_times(output)
    audio=audio_packets(source)
    assert audio and audio==audio_packets(output)
    folder=ROOT/'out'/clip['id']
    manifest=json.loads((folder/'manifest.json').read_text())
    captions=json.loads((ROOT/'data'/f"{clip['id']}-captions.json").read_text())
    assert captions and all(0<=w['startMs']<w['endMs']<=round(clip['videoDuration']*1000) for w in captions)
    assert all(a['endMs']<=b['startMs'] for a,b in zip(captions,captions[1:]))
    assert manifest['captionsSha256']==hashlib.sha256((ROOT/'data'/f"{clip['id']}-captions.json").read_bytes()).hexdigest()
    # Reduced-resolution comparison keeps opaque letter interiors, excluding
    # antialiased edges, shadows and the transparent dynamic background.
    raw=ffmpeg('-framerate','24000/1001','-i',folder/'sequence/frame-%05d.png','-an',
        '-vf','scale=270:50:flags=area,format=rgba','-frames:v',clip['frames'],
        '-f','rawvideo','-pix_fmt','rgba','-')
    reference=np.frombuffer(raw,dtype=np.uint8).reshape(-1,50,270,4)
    raw=ffmpeg('-i',output,'-an','-vf','crop=1080:200:0:1320,scale=270:50:flags=area,format=rgb24',
        '-frames:v',clip['frames'],'-f','rawvideo','-pix_fmt','rgb24','-')
    actual=np.frombuffer(raw,dtype=np.uint8).reshape(-1,50,270,3)
    assert len(actual)==len(reference)==clip['frames']
    mask=reference[...,3]>=252
    visible_frames=int(mask.any(axis=(1,2)).sum())
    assert visible_frames>0
    difference=np.abs(actual.astype(np.int16)-reference[...,:3].astype(np.int16))[mask]
    assert difference.mean()<8,(clip['id'],float(difference.mean()))
    # Same prepared frame, same mirrored source orientation, only the planned
    # five-percent crop and resize of the main picture.
    samples=sorted({0,clip['frames']//3,clip['frames']-1})
    expression='+'.join(f'eq(n\\,{n})' for n in samples)
    expected=np.frombuffer(ffmpeg('-i',source,'-an','-vf',
        f'select={expression},crop=1216:684:32:18,scale=1080:608:flags=lanczos,scale=270:152:flags=area,format=rgb24',
        '-fps_mode','passthrough','-frames:v',len(samples),'-f','rawvideo','-pix_fmt','rgb24','-'),dtype=np.uint8).reshape(-1,152,270,3)
    observed=np.frombuffer(ffmpeg('-i',output,'-an','-vf',
        f'select={expression},crop=1080:608:0:580,scale=270:152:flags=area,format=rgb24',
        '-fps_mode','passthrough','-frames:v',len(samples),'-f','rawvideo','-pix_fmt','rgb24','-'),dtype=np.uint8).reshape(-1,152,270,3)
    delta=np.abs(expected.astype(np.int16)-observed.astype(np.int16))
    assert delta.mean()<3 and np.percentile(delta,99)<20,(clip['id'],float(delta.mean()))
    result={'id':clip['id'],'file':output.name,'validation':'passed','frames':clip['frames'],
        'duration':float(metadata['format']['duration']),'bytes':output.stat().st_size,
        'width':1080,'height':1920,'fps':video['avg_frame_rate'],
        'preparedAudioPacketsCopiedExactly':len(audio),'allFrameTimesUnchanged':True,
        'captionWords':len(captions),'captionPages':manifest['captionPages'],
        'captionFramesChecked':clip['frames'],'visibleCaptionFrames':visible_frames,
        'captionInkMeanRgbDifference':round(float(difference.mean()),4),
        'mainPictureMeanRgbDifference':round(float(delta.mean()),4),
        'fullVideoDecodePassed':True,'mirrorAppliedOnce':clip['mirrorApplied'],
        'advertisementLayers':0,'minecraftSignLayers':0,
        'sha256':hashlib.sha256(output.read_bytes()).hexdigest()}
    (folder/'validation.json').write_text(json.dumps(result,indent=2))
    reports.append(result)
    print(f"Verified {clip['id']}: {clip['frames']} frames, {len(audio)} audio packets",flush=True)
    del reference,actual,raw
if args.only:
    previous=json.loads((ROOT/'out/validation.json').read_text())['clips']
    updated={r['id']:r for r in previous}
    updated.update({r['id']:r for r in reports})
    reports=[updated[c['id']] for c in clips]
(ROOT/'out/validation.json').write_text(json.dumps({'validation':'passed','clips':reports},indent=2))
print('All ten exports verified',flush=True)
