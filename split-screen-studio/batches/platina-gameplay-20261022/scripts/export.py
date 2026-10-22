"""Freeze the entire base picture while banner speech plays; resume source without skipping frames."""
from pathlib import Path
import json,subprocess,hashlib,argparse,time
from audio import prepare
R=Path(__file__).resolve().parents[1];clips=json.loads((R/'data/clips.json').read_text());p=argparse.ArgumentParser();p.add_argument('--only');p.add_argument('--sample',action='store_true');a=p.parse_args()
banner=json.loads((R/'data/banner.json').read_text())
for c in clips:
 c['bannerPosition']=[*banner['position'],banner['width'],banner['height']]
 if a.only and c['id']!=a.only:continue
 folder=R/'out'/c['id'];folder.mkdir(exist_ok=True)
 output=R/'out'/f"{c['id']}-platina{'-sample' if a.sample else ''}.mp4";report=folder/'ad-export.json'
 spec={'clip':c,'assets':banner['assets'],'audioScript':hashlib.sha256((R/'scripts/audio.py').read_bytes()).hexdigest(),'version':2,'crf':18,'preset':'veryfast'}
 signature=hashlib.sha256(json.dumps(spec,sort_keys=True).encode()).hexdigest()
 if not a.sample and output.exists() and report.exists() and json.loads(report.read_text()).get('signature')==signature:
  print('Cached '+output.name,flush=True);continue
 base=R/'out'/f"{c['id']}-gameplay.mp4"
 while not (folder/'export.json').exists():time.sleep(2)
 source_link=R/'public/media'/c['baseFile']
 if not source_link.exists():source_link.hardlink_to(base)
 audio=prepare(c);t=c['insertFrame'];d=c['pauseFrames'];start=t/60;x,y,w,h=c['bannerPosition'];source=R/'public/media'/c['baseFile']
 tail=c['bannerFrames']-d
 graph=[f'[0:v]split=4[pi][fi][ti][qi]',f'[pi]trim=end_frame={t},setpts=PTS-STARTPTS[p]',
 f'[fi]trim=start_frame={t}:end_frame={t+1},loop=loop={d-1}:size=1:start=0,setpts=N/(60*TB)[f]',
 f'[ti]trim=start_frame={t}:end_frame={t+tail},setpts=PTS-STARTPTS[tail]',
 f'[qi]trim=start_frame={t+tail},setpts=PTS-STARTPTS[q]',
 '[f][tail]concat=n=2:v=1:a=0,fps=60,scale=in_color_matrix=bt709:in_range=tv:out_range=full,format=rgb24[back]',
 '[1:v]format=rgba,fps=60[ad]',
 f'[back][ad]overlay=x={x}:y={y}:eof_action=pass:repeatlast=0:format=rgb:alpha=straight,trim=end_frame={c["bannerFrames"]},scale=in_range=full:out_range=tv:out_color_matrix=bt709,format=yuv420p[middle]',
 '[p][middle][q]concat=n=3:v=1:a=0,fps=60,setsar=1[out]']
 (folder/'composition.ffscript').write_text(';\n'.join(graph))
 picture=folder/('sample-picture.mp4' if a.sample else 'picture.mp4')
 cmd=['ffmpeg','-y','-v','warning','-threads','1','-filter_complex_threads','1','-i',str(source),'-framerate','60','-i',str(R/'public/banner-frames/frame-%03d.png'),'-filter_complex_script',str(folder/'composition.ffscript'),'-map','[out]','-an']
 if a.sample:cmd+=['-ss',str(start-.6),'-t','9.0']
 else:cmd+=['-frames:v',str(c['frames']+d)]
 cmd+=['-c:v','libx264','-preset','veryfast','-crf','18','-threads','2','-pix_fmt','yuv420p','-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709','-color_range','tv','-video_track_timescale','15360','-movflags','+faststart',str(picture)]
 print('Encoding '+output.name,flush=True)
 with (folder/('sample-encode.log' if a.sample else 'encode.log')).open('w') as f:subprocess.run(cmd,stderr=f,check=True)
 mux=['ffmpeg','-y','-v','warning','-i',str(picture)]
 if a.sample:mux+=['-ss',str(start-.6)]
 mux+=['-i',str(audio),'-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','320k','-ar','48000','-movflags','+faststart']
 if a.sample:mux+=['-t','9.0']
 subprocess.run(mux+[str(output)],check=True)
 if not a.sample:report.write_text(json.dumps({'signature':signature,'spec':spec,'file':output.name,'frames':c['frames']+d,'bytes':output.stat().st_size},ensure_ascii=False,indent=2))
 print(f'Exported {output.name}: {output.stat().st_size:,} bytes',flush=True)
