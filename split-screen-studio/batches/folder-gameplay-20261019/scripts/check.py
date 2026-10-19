"""Check all main picture frames, original audio packets, timeline and each game segment."""
from pathlib import Path
import json,subprocess,hashlib,time,argparse
import numpy as np
R=Path(__file__).resolve().parents[1];clips=json.loads((R/'data/clips.json').read_text());p=argparse.ArgumentParser();p.add_argument('--wait',action='store_true');a=p.parse_args()
def probe(path,*args):return json.loads(subprocess.check_output(['ffprobe','-v','error',*args,'-of','json',str(path)]))
def audio(path):return probe(path,'-select_streams','a:0','-show_packets','-show_data_hash','sha256','-show_entries','packet=pts_time,dts_time,duration_time,data_hash')['packets']
def times(path):return sorted((x['pts_time'],x.get('duration_time')) for x in probe(path,'-select_streams','v:0','-show_packets','-show_entries','packet=pts_time,duration_time')['packets'])
def command(*args):return ['ffmpeg','-v','error','-threads','1','-filter_threads','1','-filter_complex_threads','1',*map(str,args)]
def read_exact(f,count):
 chunks=[];remaining=count
 while remaining:
  block=f.read(remaining)
  if not block:break
  chunks.append(block);remaining-=len(block)
 return b''.join(chunks)
def process(path,vf):return subprocess.Popen(command('-i',path,'-an','-vf',vf,'-f','rawvideo','-pix_fmt','rgb24','-'),stdout=subprocess.PIPE)
def sample(path,ss,vf):return np.frombuffer(subprocess.check_output(command('-ss',ss,'-i',path,'-an','-vf',vf,'-frames:v','1','-f','rawvideo','-pix_fmt','rgb24','-')),np.uint8)
reports=[]
for c in clips:
 folder=R/'out'/c['id'];ready=folder/'export.json';output=R/'out'/f"{c['id']}-gameplay.mp4";source=R/'public/media'/c['source']
 while not ready.exists():
  if not a.wait:raise RuntimeError('Not exported: '+c['id'])
  time.sleep(2)
 fingerprint=hashlib.sha256(output.read_bytes()).hexdigest();report=folder/'validation.json'
 if report.exists() and json.loads(report.read_text()).get('sha256')==fingerprint:
  reports.append(json.loads(report.read_text()));print('Cached QA '+c['id'],flush=True);continue
 streams=probe(output,'-show_streams','-show_format');v=next(s for s in streams['streams'] if s['codec_type']=='video')
 assert (v['width'],v['height'],v['sample_aspect_ratio'],v['avg_frame_rate'],int(v['nb_frames']))==(1080,1920,'1:1','60/1',c['frames'])
 assert len([s for s in streams['streams'] if s['codec_type']=='audio'])==1
 assert times(source)==times(output)
 packets=audio(source);assert packets and packets==audio(output)
 assert abs(float(streams['format']['duration'])-c['audioDuration'])<.001
 x,y,w,h=c['mainCrop'];ox,oy,ow,oh=c['mainPosition']
 expected=process(source,f'crop={w}:{h}:{x}:{y},scale={ow}:{oh}:flags=lanczos,scale=270:360:flags=area')
 actual=process(output,f'crop={ow}:{oh}:{ox}:{oy},scale=270:360:flags=area')
 errors=[];caption_errors=[]
 try:
  for frame in range(c['frames']):
   e=read_exact(expected.stdout,270*360*3);o=read_exact(actual.stdout,270*360*3)
   assert len(e)==len(o)==270*360*3,(c['id'],frame,'missing frame')
   delta=np.abs(np.frombuffer(e,np.uint8).reshape(360,270,3).astype(np.int16)-np.frombuffer(o,np.uint8).reshape(360,270,3).astype(np.int16))
   errors.append(float(delta.mean()));caption_errors.append(float(delta[225:350].mean()))
  assert not expected.stdout.read(1) and not actual.stdout.read(1),'Extra frames'
 finally:
  expected.stdout.close();actual.stdout.close()
  assert expected.wait()==actual.wait()==0
 assert np.mean(errors)<3 and max(errors)<5,(c['id'],np.mean(errors),max(errors))
 assert np.mean(caption_errors)<3 and max(caption_errors)<6,(c['id'],'subtitles',max(caption_errors))
 gameplay=[];offset=0
 for s in c['games']:
  game=R/'public/games'/f"game-{s['game']:02}.mp4"
  for local in sorted({0,min(300,s['frames']//2),s['frames']-1}):
   e=sample(game,(s['startFrame']+local)/60,'crop=1080:1080:0:420,scale=900:900:flags=lanczos,scale=180:180:flags=area').reshape(180,180,3)
   o=sample(output,(offset+local)/60,'crop=900:900:50:970,scale=180:180:flags=area').reshape(180,180,3)
   mask=np.ones((180,180),bool);mask[:18,:40]=False
   diff=np.abs(e.astype(np.int16)-o.astype(np.int16))[mask].mean();assert diff<4,(c['id'],'game',offset+local,float(diff));gameplay.append(round(float(diff),4))
  offset+=s['frames']
 result={'id':c['id'],'title':c['title'],'file':output.name,'validation':'passed','frames':c['frames'],'allFrameTimestampsUnchanged':True,'audioPacketsCopiedExactly':len(packets),'gameplayAudioPresent':False,'mainPictureFramesCompared':len(errors),'mainPictureMeanRgbDifference':round(float(np.mean(errors)),4),'mainPictureWorstFrameMeanDifference':round(max(errors),4),'subtitleBandMeanRgbDifference':round(float(np.mean(caption_errors)),4),'subtitleBandWorstFrameMeanDifference':round(max(caption_errors),4),'gamePictureMeanRgbDifferences':gameplay,'mainCrop':c['mainCrop'],'mainPosition':c['mainPosition'],'halfSize':[1080,960],'gameScaleXY':[900/1080,900/1080],'fullDecodePassed':True,'sourceOrientationUnchanged':True,'width':1080,'height':1920,'fps':60,'duration':float(streams['format']['duration']),'bytes':output.stat().st_size,'sha256':fingerprint}
 report.write_text(json.dumps(result,ensure_ascii=False,indent=2));reports.append(result);print(f"Verified {c['id']}: {c['frames']} frames, {len(packets)} exact audio packets",flush=True)
(R/'out/validation.json').write_text(json.dumps({'validation':'passed','clips':reports},ensure_ascii=False,indent=2))
