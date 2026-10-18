"""Restore missing user media; preserve and verify existing files. TLS and SHA-256 stay enabled."""
from pathlib import Path
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor
import urllib.request,urllib.parse,hashlib,json,subprocess
R=Path(__file__).resolve().parents[1];manifest=json.loads((R/'data/input-manifest.json').read_text())
def sha(p):
 h=hashlib.sha256()
 with p.open('rb') as f:
  while block:=f.read(1024*1024):h.update(block)
 return h.hexdigest()
class Form(HTMLParser):
 def __init__(self):super().__init__();self.action=None;self.fields={}
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='form' and a.get('id')=='download-form':self.action=a['action']
  if tag=='input' and a.get('type')=='hidden':self.fields[a['name']]=a['value']
def fetch(s):
 target=R/'public'/s['file'];target.parent.mkdir(parents=True,exist_ok=True)
 if target.exists():assert sha(target)==s['sha256'],f'Preserved differing file: {target}';return
 response=urllib.request.urlopen('https://drive.google.com/uc?export=download&id='+s['driveId'],timeout=60)
 if 'text/html' in response.headers.get('Content-Type',''):
  f=Form();f.feed(response.read().decode());response.close();assert f.action=='https://drive.usercontent.google.com/download'
  response=urllib.request.urlopen(f.action+'?'+urllib.parse.urlencode(f.fields),timeout=60)
 assert 'text/html' not in response.headers.get('Content-Type','')
 temporary=target.with_suffix('.download')
 with response,temporary.open('wb') as out:
  while block:=response.read(1024*1024):out.write(block)
 assert sha(temporary)==s['sha256'],'Drive source changed; retained download for inspection'
 temporary.replace(target)
with ThreadPoolExecutor(max_workers=3) as pool:list(pool.map(fetch,manifest['downloads']))
clips=json.loads((R/'data/clips.json').read_text());expected={s['file']:s for s in manifest['prepared']}
for c in clips:
 out=R/'public/media'/c['file']
 if out.exists():assert sha(out)==expected[c['file']]['sha256'],f'Preserved differing montage: {out}';continue
 cmd=['ffmpeg','-y','-v','error','-filter_complex_threads','1','-threads','1'];filters=[];labels=[]
 for i,(start,end) in enumerate(c['segments']):
  cmd+=['-ss',str(start),'-t',str(end-start),'-i',str(R/'public/media/episode.mp4')]
  filters += [f'[{i}:v]setpts=PTS-STARTPTS,hflip,scale=1280:720:flags=lanczos,setsar=1,fps=24[v{i}]',f'[{i}:a]asetpts=PTS-STARTPTS[a{i}]'];labels.append(f'[v{i}][a{i}]')
 filters.append(''.join(labels)+f'concat=n={len(labels)}:v=1:a=1[v][a]')
 temp=out.with_suffix('.building.mp4')
 cmd+=['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]','-c:v','libx264','-preset','veryfast','-crf','15','-threads','1','-pix_fmt','yuv420p','-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709','-color_range','tv','-c:a','aac','-b:a','256k','-ar','48000','-movflags','+faststart',str(temp)]
 subprocess.run(cmd,check=True)
 assert sha(temp)==expected[c['file']]['sha256'],'Encoder output changed; inspect retained montage before replacing'
 temp.replace(out)
print('Verified seven source downloads and all ten prepared montages')
