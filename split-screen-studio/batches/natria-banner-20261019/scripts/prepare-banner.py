"""Finish edge despill and downscale in premultiplied alpha; retain source design."""
from pathlib import Path
import numpy as np,json,subprocess,hashlib,zipfile,argparse
from PIL import Image
R=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--source',required=True,type=Path,help='Original 1770x750,30fps NATRIA MP4');args=parser.parse_args()
source=args.source.resolve();frames=R/'public/banner-frames';native=R/'out/key-work'
frames.mkdir(parents=True,exist_ok=True);native.mkdir(parents=True,exist_ok=True);(R/'assets').mkdir(exist_ok=True)
probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-select_streams','v:0','-show_entries','stream=width,height,r_frame_rate,nb_frames','-of','json',str(source)]))['streams'][0]
assert (probe['width'],probe['height'],probe['r_frame_rate'],int(probe['nb_frames']))==(1770,750,'30/1',216),probe
subprocess.run(['ffmpeg','-y','-v','error','-threads','1','-filter_threads','1','-i',str(source),'-vf','chromakey=0x00ff00:0.12:0.06,format=rgba,despill=type=green:mix=0:green=-1:alpha=0','-threads','1',str(native/'frame-%03d.png')],check=True)
cmd=['ffmpeg','-v','error','-threads','1','-i',str(source),'-f','rawvideo','-pix_fmt','rgb24','-']
p=subprocess.Popen(cmd,stdout=subprocess.PIPE);size=1770*750*3;reports=[]
def exact(n):
 data=b''
 while len(data)<n:
  chunk=p.stdout.read(n-len(data))
  if not chunk:break
  data+=chunk
 return data
for index in range(216):
 raw=exact(size);assert len(raw)==size
 original=np.frombuffer(raw,np.uint8).reshape(750,1770,3)
 rgba=np.array(Image.open(native/f'frame-{index+1:03}.png').convert('RGBA'))
 contaminated=original[...,1].astype(np.int16)>np.maximum(original[...,0],original[...,2]).astype(np.int16)+6
 cap=np.maximum(rgba[...,0],np.rint(rgba[...,2].astype(np.float32)*.60).astype(np.uint8))
 rgba[...,1]=np.where(contaminated,np.minimum(rgba[...,1],cap),rgba[...,1])
 rgba[rgba[...,3]==0,:3]=0
 out=np.array(Image.fromarray(rgba).resize((944,400),Image.Resampling.LANCZOS))
 out[out[...,3]<2]=0
 out[...,1]=np.minimum(out[...,1],np.maximum(out[...,0],out[...,2]))
 green=int(((out[...,1].astype(int)>np.maximum(out[...,0],out[...,2]).astype(int)+5)&(out[...,3]>5)).sum());assert green==0
 holes=0
 if 33<=index<=195:holes=int((out[40:-40,40:-40,3]<250).sum());assert holes==0,(index,holes)
 Image.fromarray(out).save(frames/f'frame-{index:03}.png',compress_level=3)
 reports.append({'frame':index,'visiblePixels':int((out[...,3]>5).sum()),'greenPixels':green,'solidCoreHoles':holes,'alphaMin':int(out[...,3].min()),'alphaMax':int(out[...,3].max())})
p.stdout.close();assert p.wait()==0
subprocess.run(['ffmpeg','-y','-v','error','-i',str(source),'-vn','-af','atrim=end=7.2','-c:a','flac','-ar','48000',str(R/'assets/banner-audio.flac')],check=True)
with zipfile.ZipFile(R/'assets/keyed-banner-frames.zip','w',compression=zipfile.ZIP_STORED) as z:
 for f in sorted(frames.glob('*.png')):z.write(f,f.name)
meta={'width':944,'height':400,'fps':30,'frames':216,'duration':7.2,'position':[68,760],'sourceDimensions':[1770,750],'sourceSha256':hashlib.sha256(source.read_bytes()).hexdigest(),'keyColor':'00ff00','chromakeySimilarity':.12,'chromakeyBlend':.06,'edgeDespill':True,'premultipliedResize':True,'assets':{f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in [R/'assets/keyed-banner-frames.zip',R/'assets/banner-audio.flac']},'validation':'passed','frameChecks':reports}
(R/'data/banner.json').write_text(json.dumps(meta,indent=2));print('Prepared and verified216 transparent banner frames, zero green pixels and solid cores intact',flush=True)
