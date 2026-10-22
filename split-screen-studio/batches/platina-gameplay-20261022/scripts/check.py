"""Verify final frame mapping, every keyed banner frame, source sound and accelerated ad."""
from pathlib import Path
import json,subprocess,hashlib,time,argparse
import numpy as np
from PIL import Image
from audio import decode
R=Path(__file__).resolve().parents[1];p=argparse.ArgumentParser();p.add_argument('--wait',action='store_true');a=p.parse_args()
clips=json.loads((R/'data/clips.json').read_text());banner=json.loads((R/'data/banner.json').read_text());w,h=banner['width'],banner['height'];x,y=banner['position'];bn=banner['frames'];keys=[np.array(Image.open(R/'public/banner-frames'/f'frame-{i:03}.png').convert('RGBA')) for i in range(bn)]
def cmd(*args):return ['ffmpeg','-v','error','-threads','1','-filter_threads','1','-filter_complex_threads','1',*map(str,args)]
def probe(p,*args):return json.loads(subprocess.check_output(['ffprobe','-v','error',*args,'-of','json',str(p)]))
def raw(p,vf,n=None,ss=None):
 args=['-ss',str(ss)] if ss is not None else [];args+=['-i',p,'-an','-vf',vf]
 if n is not None:args+=['-frames:v',n]
 return subprocess.check_output(cmd(*args,'-f','rawvideo','-pix_fmt','rgb24','-'))
def read_exact(f,n):
 chunks=[];left=n
 while left:
  b=f.read(left)
  if not b:break
  chunks.append(b);left-=len(b)
 return b''.join(chunks)
def snr(g,e):
 n=min(len(g),len(e));g=g[:n].astype(float);e=e[:n].astype(float);return float(10*np.log10((np.sum(e*e)+1e-12)/(np.sum((g-e)**2)+1e-12)))
reports=[]
for c in clips:
 f=R/'out'/c['id'];out=R/'out'/f"{c['id']}-platina.mp4";src=R/'public/media'/c['baseFile'];ready=f/'ad-export.json'
 while not ready.exists():
  if not a.wait:raise RuntimeError('Not exported '+c['id'])
  time.sleep(2)
 sha=hashlib.sha256(out.read_bytes()).hexdigest();report=f/'validation.json'
 if report.exists() and json.loads(report.read_text()).get('sha256')==sha:reports.append(json.loads(report.read_text()));print('Cached '+c['id'],flush=True);continue
 t=c['insertFrame'];d=c['pauseFrames'];tail=bn-d;n=c['frames']+d
 m=probe(out,'-show_streams','-show_format');v=next(v for v in m['streams'] if v['codec_type']=='video');assert (v['width'],v['height'],v['avg_frame_rate'],int(v['nb_frames']))==(1080,1920,'60/1',n)
 pts=sorted(float(v['pts_time']) for v in probe(out,'-select_streams','v:0','-show_packets','-show_entries','packet=pts_time')['packets']);assert len(pts)==n and max(abs(v-i/60) for i,v in enumerate(pts))<.000002
 assert abs(float(m['format']['duration'])-c['audioDuration']-d/60)<.003
 base=np.frombuffer(raw(src,'scale=162:288:flags=area'),np.uint8).reshape(-1,288,162,3);assert len(base)==c['frames']
 proc=subprocess.Popen(cmd('-i',out,'-an','-vf','scale=162:288:flags=area','-f','rawvideo','-pix_fmt','rgb24','-'),stdout=subprocess.PIPE)
 mask=np.ones((288,162),bool);mask[int(y*.15)-3:int((y+h)*.15)+4,int(x*.15)-3:int((x+w)*.15)+4]=False;errors=[]
 for frame in range(n):
  b=read_exact(proc.stdout,162*288*3);assert len(b)==162*288*3;idx=frame if frame<t else t if frame<t+d else frame-d
  actual=np.frombuffer(b,np.uint8).reshape(288,162,3);errors.append(float(np.abs(actual.astype(np.int16)-base[idx].astype(np.int16))[mask].mean()))
 assert not proc.stdout.read(1);proc.stdout.close();assert proc.wait()==0;assert np.mean(errors)<3 and max(errors)<5,(c['id'],'picture',max(errors));del base
 native=np.frombuffer(raw(src,f'crop={w}:{h}:{x}:{y}',tail+1,ss=t/60),np.uint8).reshape(-1,h,w,3)
 actual=np.frombuffer(raw(out,f'crop={w}:{h}:{x}:{y},scale={w//4}:{h//4}:flags=area',bn,ss=t/60),np.uint8).reshape(-1,h//4,w//4,3);assert len(actual)==bn
 whole=[];opaque=[];substantial=[];edges=[];blue=[];holes=[]
 for frame in range(bn):
  key=keys[frame];al=key[...,3:4].astype(np.float32)/255;back=native[0 if frame<d else frame-d].astype(np.float32)
  expected=(back*(1-al)+key[...,:3]*al).reshape(h//4,4,w//4,4,3).mean((1,3));alpha=key[...,3].reshape(h//4,4,w//4,4).mean((1,3));delta=np.abs(actual[frame].astype(float)-expected);whole.append(float(delta.mean()))
  if (alpha>=252).any():
   opaque.append(float(delta[alpha>=252].mean()))
   if (alpha>=252).sum()>=256:substantial.append(opaque[-1])
  edge=(alpha>5)&(alpha<250)
  if edge.any():edges.append(float(delta[edge].mean()))
  bg=alpha<1
  if bg.any():holes.append(float(delta[bg].mean()))
  ex=np.maximum(0,actual[frame,...,2].astype(float)-np.maximum(actual[frame,...,0],actual[frame,...,1]).astype(float));ee=np.maximum(0,expected[...,2]-np.maximum(expected[...,0],expected[...,1]));fg=alpha>25
  if fg.any():blue.append(float(np.maximum(0,ex[fg]-ee[fg]).mean()))
 assert max(whole)<5 and max(substantial)<8 and max(opaque)<24 and max(edges)<15 and max(holes)<8,(c['id'],'banner',max(whole),max(substantial),max(opaque),max(edges),max(holes))
 assert max(blue)<5,(c['id'],'blue spill',max(blue))
 original=decode(src,c['audioDuration']);heard=decode(out,c['audioDuration']+d/60);mix=decode(f/'mix.wav');ad=decode(R/'assets/banner-audio.flac',bn/60);assert len(ad)==bn*800
 mixsnr=snr(heard,mix);assert mixsnr>27,(c['id'],'mix',mixsnr)
 at=t*800;pause=d*800;voice=snr(heard[at+12000:at+pause-2400],ad[12000:pause-2400]);assert voice>27,(c['id'],'pause',voice)
 left=at+pause+240;right=at+bn*800-240;residual=heard[left:right]-ad[pause+240:bn*800-240];baseline=original[at+240:at+tail*800-240];gain=float(np.sum(residual.astype(float)*baseline)/(np.sum(baseline.astype(float)**2)+1e-15));assert .110<gain<.142,(c['id'],'duck',gain)
 after=at+bn*800+9600;restore=snr(heard[after:len(mix)],original[after-pause:]);assert restore>27,(c['id'],'restore',restore)
 assert abs(t/60-c['frames']/120)<=4
 result={'id':c['id'],'file':out.name,'validation':'passed','width':1080,'height':1920,'fps':60,'frames':n,'duration':float(m['format']['duration']),'insertTime':t/60,'pauseSeconds':d/60,'bannerDuration':bn/60,'bannerSpeed':1.3,'bannerCenter':[x+w/2,y+h/2],'quietTailSeconds':tail/60,'allSourceFramesRetained':True,'pictureFramesCompared':n,'pictureMeanRgbDifference':float(np.mean(errors)),'pictureWorstFrameDifference':max(errors),'bannerFramesCompared':bn,'bannerWorstCompositeDifference':max(whole),'bannerWorstOpaqueDifference':max(opaque),'bannerWorstEdgeDifference':max(edges),'bannerWorstBlueResidual':max(blue),'audioMixSnrDb':mixsnr,'pauseAudioSnrDb':voice,'measuredDuckedMainGain':gain,'restoredAudioSnrDb':restore,'gameplayAudioPresent':False,'sourceSpeedChanged':False,'sha256':sha,'bytes':out.stat().st_size}
 report.write_text(json.dumps(result,indent=2));reports.append(result);print(f'Verified {c["id"]}: {n} picture frames,250 ad frames, voice SNR{voice:.1f}',flush=True)
(R/'out/validation.json').write_text(json.dumps({'validation':'passed','clips':reports},indent=2))
