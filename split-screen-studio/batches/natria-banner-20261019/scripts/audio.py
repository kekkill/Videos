"""Insert silence for the frozen picture, preserve source speech, and duck only the banner tail."""
from pathlib import Path
import json,subprocess,hashlib
import numpy as np
R=Path(__file__).resolve().parents[1];SR=48000

def decode(path,duration=None):
 cmd=['ffmpeg','-v','error','-threads','1','-i',str(path),'-vn','-ar',str(SR),'-ac','2']
 if duration is not None:cmd+=['-t',str(duration)]
 raw=subprocess.check_output(cmd+['-f','f32le','-'])
 return np.frombuffer(raw,np.float32).reshape(-1,2).copy()

def prepare(c):
 folder=R/'out'/c['id'];folder.mkdir(exist_ok=True)
 main=decode(R/'public/media'/c['baseFile'],c['audioDuration']);banner=decode(R/'assets/banner-audio.flac',7.2)
 target=round(c['audioDuration']*SR)
 if len(main)<target:main=np.pad(main,((0,target-len(main)),(0,0)))
 main=main[:target];at=c['insertFrame']*800;pause=c['pauseFrames']*800;tail=c['bannerFrames']*800-pause
 assert len(banner)==345600 and pause==240000
 before=main[:at].copy();after=main[at:].copy()
 fade=round(.005*SR);before[-fade:]*=np.linspace(1,0,fade,dtype=np.float32)[:,None]
 gain=np.ones(len(after),np.float32);duck=10**(c['duckGainDb']/20);gain[:tail]=duck
 ramp=round(c['duckRestoreSeconds']*SR);gain[tail:tail+ramp]=np.linspace(duck,1,ramp,dtype=np.float32)
 gain[:fade]*=np.linspace(0,1,fade,dtype=np.float32)
 after*=gain[:,None]
 mix=np.concatenate((before,np.zeros((pause,2),np.float32),after))
 mix[at:at+len(banner)]+=banner
 peak=float(np.max(np.abs(mix)));limiting=peak>.995
 assert peak<1.1,('Unexpected excessive source peak',c['id'],peak)
 output=folder/'mix.wav'
 subprocess.run(['ffmpeg','-y','-v','error','-f','f32le','-ar',str(SR),'-ac','2','-i','pipe:0',*(['-af',f'alimiter=limit=0.98:level=0:attack=5:release=50:latency=1,atrim=end_sample={len(mix)}'] if limiting else []),'-c:a','pcm_f32le',str(output)],input=mix.tobytes(),check=True)
 meta={'sampleRate':SR,'sourceSamples':len(main),'outputSamples':len(mix),'insertSample':at,'pauseSamples':pause,'tailSamples':tail,'duckAmplitude':duck,'restoreSamples':ramp,'fadeSamples':fade,'inputMixPeak':peak,'safetyLimiterApplied':limiting,'limiterCeiling':.98 if limiting else None,'sourceSpeedChanged':False,'sourceWordRemoved':False,'mixSha256':hashlib.sha256(output.read_bytes()).hexdigest()}
 (folder/'audio.json').write_text(json.dumps(meta,indent=2));print(f"Audio {c['id']}: peak {peak:.4f}, pause5s, duck-18dB",flush=True)
 return output

if __name__=='__main__':
 for clip in json.loads((R/'data/clips.json').read_text()):prepare(clip)
