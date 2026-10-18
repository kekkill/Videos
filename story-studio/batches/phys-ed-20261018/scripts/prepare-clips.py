"""Make accurate scene cuts and mirror only the source picture, once."""
import argparse
import concurrent.futures
import json
from pathlib import Path
import subprocess

ROOT=Path(__file__).resolve().parents[1]
plan=json.loads((ROOT/'data/selection.json').read_text())
parser=argparse.ArgumentParser()
parser.add_argument('--only',nargs='+')
args=parser.parse_args()
source=ROOT/'public/media/episode.mp4'

def prepare(clip):
    output=ROOT/'public/media'/f"{clip['id']}.mp4"
    temporary=output.with_name(output.stem+'.building.mp4')
    command=['ffmpeg','-y','-v','error','-filter_complex_threads','1','-threads','1']
    for start,end in clip['segments']:
        assert 0 <= start < end <= 503.13
        command += ['-ss',str(start),'-t',str(end-start),'-i',str(source)]
    filters=[]
    labels=[]
    for i,_ in enumerate(clip['segments']):
        filters += [f'[{i}:v]setpts=PTS-STARTPTS,hflip,scale=1280:720:flags=lanczos,setsar=1,fps=24[v{i}]',
                    f'[{i}:a]asetpts=PTS-STARTPTS[a{i}]']
        labels += [f'[v{i}][a{i}]']
    filters += [''.join(labels)+f"concat=n={len(labels)}:v=1:a=1[v][a]"]
    command += ['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]',
        '-c:v','libx264','-preset','veryfast','-crf','15','-threads','1',
        '-pix_fmt','yuv420p','-color_primaries','bt709','-color_trc','bt709',
        '-colorspace','bt709','-color_range','tv','-c:a','aac','-b:a','256k',
        '-ar','48000','-movflags','+faststart',str(temporary)]
    subprocess.run(command,check=True)
    temporary.replace(output)
    info=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(output)]))
    v=next(s for s in info['streams'] if s['codec_type']=='video')
    record={**clip,'file':output.name,'frames':int(v['nb_frames']),
        'duration':float(info['format']['duration']),'videoDuration':float(v['duration']),
        'bytes':output.stat().st_size,'mirrorApplied':True,'sourceSpeechSpeedChanged':False}
    (ROOT/'data'/f"{clip['id']}-source.json").write_text(json.dumps(record,ensure_ascii=False,indent=2))
    print(f"Prepared {clip['id']}: {record['duration']:.2f}s / {record['frames']} frames",flush=True)
    return record

with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
    list(pool.map(prepare,[c for c in plan['clips'] if not args.only or c['id'] in args.only]))
clips=[json.loads((ROOT/'data'/f"{c['id']}-source.json").read_text()) for c in plan['clips']]
(ROOT/'data/clips.json').write_text(json.dumps(clips,ensure_ascii=False,indent=2))
print('All scene montages prepared',flush=True)
