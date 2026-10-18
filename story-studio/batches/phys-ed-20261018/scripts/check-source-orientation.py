"""Compare each prepared montage's first frame with the mirrored original."""
import json,subprocess
from pathlib import Path
import numpy as np
r=Path(__file__).resolve().parents[1]
clips=json.loads((r/'data/clips.json').read_text())
def decode(args):
 return np.frombuffer(subprocess.check_output(['ffmpeg','-v','error','-threads','1','-filter_threads','1',*args]),dtype=np.uint8).reshape(-1,180,320,3)
reports=[]
for c in clips:
 start=c['segments'][0][0]
 expected=decode(['-ss',str(start),'-i',str(r/'public/media/episode.mp4'),'-an','-vf','hflip,scale=320:180:flags=area,format=rgb24','-frames:v','4','-fps_mode','passthrough','-f','rawvideo','-pix_fmt','rgb24','-'])
 actual=decode(['-i',str(r/'public/media'/c['file']),'-an','-vf','scale=320:180:flags=area,format=rgb24','-frames:v','1','-f','rawvideo','-pix_fmt','rgb24','-'])[0]
 differences=np.abs(expected.astype(np.int16)-actual.astype(np.int16)).mean(axis=(1,2,3))
 best=int(differences.argmin())
 assert differences[best]<3,(c['id'],float(differences[best]))
 record={'id':c['id'],'sourceStart':start,'meanRgbDifferenceFromMirroredSource':round(float(differences[best]),4),'originalUnmirroredMeanRgbDifference':round(float(np.abs(expected[best,:,::-1].astype(np.int16)-actual.astype(np.int16)).mean()),4)}
 reports.append(record);print(c['id'],'mirror verified',flush=True)
(r/'out/source-orientation-validation.json').write_text(json.dumps({'validation':'passed','clips':reports},indent=2))
