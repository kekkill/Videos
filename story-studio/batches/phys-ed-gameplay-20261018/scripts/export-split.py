from pathlib import Path
import json,subprocess,hashlib,bisect,os,argparse,math
from concurrent.futures import ThreadPoolExecutor
R=Path(__file__).resolve().parents[1]
clips=json.loads((R/'data/clips.json').read_text())
p=argparse.ArgumentParser();p.add_argument('--only');p.add_argument('--sample',action='store_true');a=p.parse_args()
def export(c):
 folder=R/'out'/c['id'];m=json.loads((folder/'manifest.json').read_text())
 assert m['captionsSha256']==hashlib.sha256((R/'data'/f"{c['id']}-captions.json").read_bytes()).hexdigest()
 assert m['captionStyleSha256']==hashlib.sha256((R/'src/Common.tsx').read_bytes()).hexdigest()
 seq=folder/'sequence';seq.mkdir(exist_ok=True)
 states={int(f.stem.split('-')[-1]):f for f in (folder/'states').glob('*.png')}
 for f in range(c['frames']):
  target=seq/f'frame-{f:05}.png'
  if not target.exists():os.link(states[m['boundaries'][bisect.bisect_right(m['boundaries'],f)-1]],target)
 source=R/'public/media'/c['file'];header=next((folder/'header').glob('*.png'))
 output=R/'out'/f"phys-ed-gameplay-{c['id']}{'-sample' if a.sample else ''}.mp4"
 spec={'clip':c,'headerCrop':[0,50,1080,270],'headerScale':.8,'headerPosition':[108,90],'captionScale':.9,'captionPosition':[54,800],'mainPosition':[60,300,960,540],'mainCrop':[32,18,1216,684],'gameCrop':[0,420,1080,1080],'gamePosition':[50,970,900,900],'counterCrop':[380,1610,320,140],'counterPosition':[56,972,192,84],'fps':60,'crf':18,'preset':'fast','version':1}
 signature=hashlib.sha256(json.dumps(spec,sort_keys=True).encode()).hexdigest()
 report=folder/'split-export.json'
 if not a.sample and output.exists() and report.exists() and json.loads(report.read_text()).get('signature')==signature:
  print('Cached '+output.name,flush=True);return
 cmd=['ffmpeg','-y','-v','warning','-threads','1','-filter_complex_threads','1','-i',str(source),'-framerate','24','-i',str(seq/'frame-%05d.png'),'-loop','1','-framerate','24','-i',str(header)]
 for s in c['gameplay']:
  cmd+=['-threads','1','-ss',str(s['start']),'-t',str(s['duration']),'-i',str(R/'public/games'/f"game-{s['game']:02}.mp4")]
 filters=[]
 for i,s in enumerate(c['gameplay']):filters.append(f'[{i+3}:v]trim=duration={s["duration"]},setpts=PTS-STARTPTS,fps=60,setsar=1[g{i}]')
 filters.append(''.join(f'[g{i}]' for i in range(len(c['gameplay'])))+f'concat=n={len(c["gameplay"])}:v=1:a=0,split=3[gbg][gf][gc]')
 filters += ['[gbg]crop=64:1080:0:420,scale=135:120,boxblur=8:2,scale=1080:960[gameback]',
 '[gf]crop=1080:1080:0:420,scale=900:900:flags=lanczos[gamefield]',
 '[gc]crop=320:140:380:1610,scale=192:84:flags=lanczos[counter]',
 '[gameback][gamefield]overlay=50:10[gamebase]',
 '[gamebase][counter]overlay=56:12[bottom]',
 '[0:v]split=2[bg][fg]',
 '[bg]crop=810:720:235:0,scale=270:240,boxblur=10:2,scale=1080:960,eq=brightness=-0.3:saturation=0.65[back]',
 '[fg]crop=1216:684:32:18,scale=960:540:flags=lanczos[front]',
 '[back][front]overlay=60:300[base]',
 '[1:v]scale=972:180:flags=lanczos:in_range=full:out_range=tv:out_color_matrix=bt709,format=yuva420p[captions]',
 '[2:v]crop=1080:270:0:50,scale=864:216:flags=lanczos:in_range=full:out_range=tv:out_color_matrix=bt709,format=yuva420p[header]',
 '[base][header]overlay=108:90:format=yuv420[titled]',
 '[titled][captions]overlay=54:800:format=yuv420,fps=60[top]',
 '[top][bottom]vstack=inputs=2,setsar=1[out]']
 frames=min(180,math.ceil(c['frames']/24*60)) if a.sample else math.ceil(c['frames']/24*60)
 picture=folder/('sample-picture.mp4' if a.sample else 'split-picture.mp4')
 cmd+=['-filter_complex',';'.join(filters),'-map','[out]','-an','-frames:v',str(frames),'-c:v','libx264','-preset','fast','-crf','18','-threads','2','-pix_fmt','yuv420p','-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709','-color_range','tv','-movflags','+faststart',str(picture)]
 log=folder/('sample-encode.log' if a.sample else 'split-encode.log')
 print('Encoding '+output.name,flush=True)
 with log.open('w') as f:subprocess.run(cmd,stderr=f,check=True)
 mux=['ffmpeg','-y','-v','warning','-i',str(picture),'-i',str(source),'-map','0:v:0','-map','1:a:0','-c','copy','-movflags','+faststart']
 if a.sample:mux+=['-t','3']
 subprocess.run(mux+[str(output)],check=True)
 if not a.sample:report.write_text(json.dumps({'signature':signature,'spec':spec,'output':output.name,'bytes':output.stat().st_size,'videoFrames':frames,'gameplayAudioMapped':False,'sourceAudioCopied':True},ensure_ascii=False,indent=2))
 print('Exported '+output.name+f' {output.stat().st_size:,} bytes',flush=True)
selected=[c for c in clips if not a.only or c['id']==a.only]
with ThreadPoolExecutor(max_workers=1) as pool:list(pool.map(export,selected))
