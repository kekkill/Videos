from pathlib import Path
import subprocess,json,hashlib,numpy as np
R=Path(__file__).resolve().parents[1];SR=48000
def decode(p,duration=None):
 cmd=['ffmpeg','-v','error','-threads','1','-i',str(p),'-vn','-ar',str(SR),'-ac','2']
 if duration is not None:cmd+=['-t',str(duration)]
 return np.frombuffer(subprocess.check_output(cmd+['-f','f32le','-']),np.float32).reshape(-1,2).copy()
def prepare(c):
 folder=R/'out'/c['id'];main=decode(R/'public/media'/c['baseFile'],c['audioDuration']);target=round(c['audioDuration']*SR);main=np.pad(main,((0,max(0,target-len(main))),(0,0)))[:target]
 banner=decode(R/'assets/banner-audio.flac',c['bannerFrames']/60);at=c['insertFrame']*800;pause=c['pauseFrames']*800;tail=(c['bannerFrames']-c['pauseFrames'])*800;assert len(banner)==c['bannerFrames']*800
 before=main[:at].copy();after=main[at:].copy();fade=240;before[-fade:]*=np.linspace(1,0,fade,dtype=np.float32)[:,None]
 duck=10**(c['duckGainDb']/20);gain=np.ones(len(after),np.float32);gain[:tail]=duck;ramp=round(c['duckRestoreSeconds']*SR);gain[tail:tail+ramp]=np.linspace(duck,1,ramp,dtype=np.float32);gain[:fade]*=np.linspace(0,1,fade,dtype=np.float32);after*=gain[:,None]
 mix=np.concatenate((before,np.zeros((pause,2),np.float32),after));mix[at:at+len(banner)]+=banner;peak=float(np.abs(mix).max());limiter=peak>.995;assert peak<1.5,(c['id'],peak)
 out=folder/'mix.wav';subprocess.run(['ffmpeg','-y','-v','error','-f','f32le','-ar','48000','-ac','2','-i','-',*(['-af',f'alimiter=limit=0.98:level=0:attack=5:release=50:latency=1,atrim=end_sample={len(mix)}'] if limiter else []),'-c:a','pcm_f32le',str(out)],input=mix.tobytes(),check=True)
 (folder/'audio.json').write_text(json.dumps({'inputPeak':peak,'limiterApplied':limiter,'sourceSamples':len(main),'outputSamples':len(mix),'pauseSamples':pause,'duckAmplitude':duck,'bannerSpeed':1.3,'mixSha256':hashlib.sha256(out.read_bytes()).hexdigest()},indent=2));print(f'Audio {c["id"]}: peak{peak:.4f}, pause3.75s, tail-18dB',flush=True);return out
