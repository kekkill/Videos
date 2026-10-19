from pathlib import Path
import json,subprocess,argparse,hashlib
R=Path(__file__).resolve().parents[1];clips=json.loads((R/'data/clips.json').read_text())
p=argparse.ArgumentParser();p.add_argument('--only');p.add_argument('--sample',action='store_true');a=p.parse_args()
for c in clips:
 if a.only and c['id']!=a.only:continue
 folder=R/'out'/c['id'];folder.mkdir(exist_ok=True)
 spec={**c,'crf':18,'preset':c.get('preset','fast'),'version':1,'gamesField':[0,420,1080,1080],'gamesPosition':[50,970,900,900]}
 signature=hashlib.sha256(json.dumps(spec,sort_keys=True).encode()).hexdigest();report=folder/'export.json'
 output=R/'out'/f"{c['id']}-gameplay{'-sample' if a.sample else ''}.mp4"
 if not a.sample and output.exists() and report.exists() and json.loads(report.read_text())['signature']==signature:
  print('Cached '+output.name,flush=True);continue
 cmd=['ffmpeg','-y','-v','warning','-threads','1','-filter_complex_threads','1','-i',str(R/'public/media'/c['source'])]
 for s in c['games']:cmd+=['-threads','1','-ss',str(s['startFrame']/60),'-t',str(s['frames']/60),'-i',str(R/'public/games'/f"game-{s['game']:02}.mp4")]
 graph=[]
 for i,s in enumerate(c['games']):graph.append(f'[{i+1}:v]trim=end_frame={s["frames"]},setpts=PTS-STARTPTS,fps=60,setsar=1[g{i}]')
 graph.append(''.join(f'[g{i}]' for i in range(len(c['games'])))+f'concat=n={len(c["games"])}:v=1:a=0,split=3[gb][gf][gc]')
 x,y,w,h=c['mainCrop'];ox,oy,ow,oh=c['mainPosition']
 graph += [f'[0:v]crop={w}:{h}:{x}:{y},split=2[mb][mf]',
 '[mb]scale=180:240,boxblur=8:2,scale=1080:960,eq=brightness=-0.1[back]',
 f'[mf]scale={ow}:{oh}:flags=lanczos,setsar=1[front]',f'[back][front]overlay={ox}:{oy}[top]',
 '[gb]crop=64:1080:0:420,scale=135:120,boxblur=8:2,scale=1080:960[gameback]',
 '[gf]crop=1080:1080:0:420,scale=900:900:flags=lanczos[gamefield]',
 '[gc]crop=320:140:380:1610,scale=192:84:flags=lanczos[counter]',
 '[gameback][gamefield]overlay=50:10[base]', '[base][counter]overlay=56:12[bottom]',
 '[top][bottom]vstack=inputs=2,setsar=1[out]']
 (folder/'composition.ffscript').write_text(';\n'.join(graph))
 picture=folder/('sample-picture.mp4' if a.sample else 'picture.mp4');n=min(c['frames'],180) if a.sample else c['frames']
 cmd += ['-filter_complex_script',str(folder/'composition.ffscript'),'-map','[out]','-an','-frames:v',str(n),'-fps_mode','passthrough','-c:v','libx264','-preset',spec['preset'],'-crf','18','-threads','2','-pix_fmt','yuv420p','-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709','-color_range','tv','-video_track_timescale','15360','-movflags','+faststart',str(picture)]
 print('Encoding '+output.name,flush=True)
 with (folder/('sample.log' if a.sample else 'encode.log')).open('w') as f:subprocess.run(cmd,stderr=f,check=True)
 mux=['ffmpeg','-y','-v','warning','-i',str(picture),'-i',str(R/'public/media'/c['source']),'-map','0:v:0','-map','1:a:0','-c','copy','-video_track_timescale','15360','-movflags','+faststart']
 if a.sample:mux+=['-t','3']
 subprocess.run(mux+[str(output)],check=True)
 if not a.sample:report.write_text(json.dumps({'signature':signature,'spec':spec,'file':output.name,'frames':n,'bytes':output.stat().st_size,'audioCopied':True,'gameAudioMapped':False},ensure_ascii=False,indent=2))
 print(f'Exported {output.name} {output.stat().st_size:,} bytes',flush=True)
