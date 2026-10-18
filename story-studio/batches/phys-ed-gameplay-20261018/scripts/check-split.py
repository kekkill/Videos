"""Validate every caption frame, exact source AAC packets, geometry and selected source pictures."""
from pathlib import Path
import subprocess,json,hashlib,math,argparse,time
import numpy as np
R=Path(__file__).resolve().parents[1];clips=json.loads((R/'data/clips.json').read_text())
p=argparse.ArgumentParser();p.add_argument('--wait',action='store_true');p.add_argument('--only');a=p.parse_args()
def probe(path,*args):return json.loads(subprocess.check_output(['ffprobe','-v','error',*args,'-of','json',str(path)]))
def ffmpeg(*args):return subprocess.check_output(['ffmpeg','-v','error','-threads','1','-filter_threads','1','-filter_complex_threads','1',*map(str,args)])
def audio(path):return probe(path,'-select_streams','a:0','-show_packets','-show_data_hash','sha256','-show_entries','packet=pts_time,dts_time,duration_time,data_hash')['packets']
def raw(path,vf,frames,channels=3,framerate=None):
 args=['-framerate',str(framerate)] if framerate else []
 return np.frombuffer(ffmpeg(*args,'-i',path,'-an','-vf',vf,'-frames:v',frames,'-fps_mode','passthrough','-f','rawvideo','-pix_fmt','rgba' if channels==4 else 'rgb24','-'),np.uint8)
reports=[]
assert json.loads((R/'out/layout-check.json').read_text())['validation']=='passed'
for c in clips:
 if a.only and c['id']!=a.only:continue
 folder=R/'out'/c['id'];out=R/'out'/f"phys-ed-gameplay-{c['id']}.mp4";source=R/'public/media'/c['file'];ready=folder/'split-export.json'
 while not ready.exists():
  if not a.wait:raise RuntimeError(f'Not exported: {c["id"]}')
  time.sleep(2)
 fingerprint=hashlib.sha256(out.read_bytes()).hexdigest();previous=folder/'split-validation.json'
 if previous.exists():
  cached=json.loads(previous.read_text())
  if cached.get('sha256')==fingerprint:reports.append(cached);print('Cached QA '+c['id'],flush=True);continue
 metadata=probe(out,'-show_streams','-show_format');streams=metadata['streams'];v=next(s for s in streams if s['codec_type']=='video');n=math.ceil(c['frames']/24*60)
 assert (v['width'],v['height'],v['sample_aspect_ratio'],v['avg_frame_rate'],int(v['nb_frames']))==(1080,1920,'1:1','60/1',n)
 assert len([s for s in streams if s['codec_type']=='audio'])==1
 assert abs(float(v['duration'])-c['frames']/24)<=1/60+.00001
 packets=audio(source);assert packets and packets==audio(out)
 times=sorted(float(x['pts_time']) for x in probe(out,'-select_streams','v:0','-show_packets','-show_entries','packet=pts_time')['packets'])
 assert len(times)==n and max(abs(t-i/60) for i,t in enumerate(times))<.000002
 ref=raw(folder/'sequence/frame-%05d.png','scale=270:50:flags=area,format=rgba,fps=60',n,4,24).reshape(-1,50,270,4)
 actual=raw(out,'crop=972:180:54:800,scale=270:50:flags=area,format=rgb24',n).reshape(-1,50,270,3)
 assert len(actual)==len(ref)==n
 mask=ref[...,3]>=252;assert mask.any()
 captiondiff=np.abs(actual.astype(np.int16)-ref[...,:3].astype(np.int16))[mask].mean()
 assert captiondiff<8,(c['id'],'captions',captiondiff)
 del ref,actual
 samples=sorted({0,60,min(n-1,120),n//2,n-1});expr='+'.join(f'eq(n\\,{x})' for x in samples)
 expected=raw(source,f'crop=1216:684:32:18,scale=960:540:flags=lanczos,fps=60,select={expr},scale=240:135:flags=area',len(samples)).reshape(-1,135,240,3)
 seen=raw(out,f'select={expr},crop=960:540:60:300,scale=240:135:flags=area',len(samples)).reshape(-1,135,240,3)
 main_diff=np.abs(seen.astype(np.int16)-expected.astype(np.int16)).mean();assert main_diff<3,(c['id'],'main',main_diff)
 header=next((folder/'header').glob('*.png'))
 h=raw(header,'crop=1080:270:0:50,scale=216:54:flags=area,format=rgba',1,4).reshape(54,216,4)
 hs=raw(out,f'select={expr},crop=864:216:108:90,scale=216:54:flags=area',len(samples)).reshape(-1,54,216,3)
 hm=h[...,3]>=252;hd=np.abs(hs.astype(np.int16)-h[...,:3].astype(np.int16))[:,hm].mean();assert hd<8,(c['id'],'header',hd)
 game_diffs=[];elapsed=0
 for segment in c['gameplay']:
  for local in [0,min(segment['duration']/2,5),max(0,segment['duration']-1/60)]:
   frame=min(n-1,round((elapsed+local)*60));local=frame/60-elapsed
   if local<0:continue
   game=R/'public/games'/f"game-{segment['game']:02}.mp4"
   game_ref=np.frombuffer(ffmpeg('-ss',segment['start']+local,'-i',game,'-an','-vf','crop=1080:1080:0:420,scale=900:900:flags=lanczos,scale=180:180:flags=area','-frames:v','1','-f','rawvideo','-pix_fmt','rgb24','-'),np.uint8).reshape(180,180,3)
   game_actual=raw(out,f'select=eq(n\\,{frame}),crop=900:900:50:970,scale=180:180:flags=area',1).reshape(180,180,3)
   gm=np.ones((180,180),bool);gm[:18,:40]=False
   delta=np.abs(game_actual.astype(np.int16)-game_ref.astype(np.int16))[gm].mean();assert delta<4,(c['id'],'game',frame,delta)
   game_diffs.append(round(float(delta),4))
  elapsed+=segment['duration']
 captions=json.loads((R/'data'/f"{c['id']}-captions.json").read_text())
 result={'id':c['id'],'file':out.name,'validation':'passed','width':1080,'height':1920,'fps':60,'frames':n,'duration':float(v['duration']),'sourceVideoDuration':c['frames']/24,'halfScreenDimensions':[1080,960],'audioPacketsCopiedExactly':len(packets),'gameplayAudioPresent':False,'captionFramesChecked':n,'captionWords':len(captions),'captionPages':sum(bool(w.get('pageBreakAfter')) for w in captions),'captionInkMeanRgbDifference':round(float(captiondiff),4),'headerInkMeanRgbDifference':round(float(hd),4),'mainPictureMeanRgbDifference':round(float(main_diff),4),'gamePictureMeanRgbDifferences':game_diffs,'fullDecodePassed':True,'additionalReflection':False,'gameScaleXY':[900/1080,900/1080],'sha256':fingerprint,'bytes':out.stat().st_size}
 previous.write_text(json.dumps(result,indent=2));reports.append(result);print('Verified '+c['id']+f': {n} frames, {len(packets)} identical audio packets',flush=True)
(R/'out/split-validation.json').write_text(json.dumps({'validation':'passed' if len(reports)==10 else 'partial','clips':reports},indent=2))
