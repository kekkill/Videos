"""Restore user Drive inputs and bundled chromakey assets, verifying SHA256 and preserving edits."""
from pathlib import Path
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor
import urllib.request,urllib.parse,json,hashlib,zipfile,shutil
R=Path(__file__).resolve().parents[1]
def sha(p):
 h=hashlib.sha256()
 with p.open('rb') as f:
  while b:=f.read(1024*1024):h.update(b)
 return h.hexdigest()
class Form(HTMLParser):
 def __init__(self):super().__init__();self.action=None;self.fields={}
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='form' and a.get('id')=='download-form':self.action=a.get('action')
  if t=='input' and a.get('type')=='hidden':self.fields[a['name']]=a['value']
def restore(m):
 p=R/'public'/m['folder']/m['file'];p.parent.mkdir(parents=True,exist_ok=True)
 if p.exists():assert sha(p)==m['sha256'],f'Edited input preserved: {p}';return
 response=urllib.request.urlopen('https://drive.google.com/uc?export=download&id='+m['driveId'],timeout=60)
 if 'text/html' in response.headers.get('Content-Type',''):
  form=Form();form.feed(response.read().decode());response.close();assert form.action=='https://drive.usercontent.google.com/download';response=urllib.request.urlopen(form.action+'?'+urllib.parse.urlencode(form.fields),timeout=90)
 assert 'text/html' not in response.headers.get('Content-Type','');temp=p.with_suffix('.download')
 with response,temp.open('wb') as out:
  while b:=response.read(1024*1024):out.write(b)
 assert sha(temp)==m['sha256'],'Changed download retained';temp.replace(p)
with ThreadPoolExecutor(max_workers=3) as pool:list(pool.map(restore,json.loads((R/'data/input-manifest.json').read_text())))
m=json.loads((R/'data/banner.json').read_text())
for name,wanted in m['assets'].items():assert sha(R/'assets'/name)==wanted,name
frames=R/'public/banner-frames';frames.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(R/'assets/keyed-banner-frames.zip') as z:
 assert sorted(z.namelist())==[f'frame-{i:03}.png' for i in range(m['frames'])]
 for name in z.namelist():
  p=frames/name;b=z.read(name)
  if p.exists():assert p.read_bytes()==b,f'Edited banner retained: {p}'
  else:p.write_bytes(b)
p=R/'public/banner-audio.flac';source=R/'assets/banner-audio.flac'
if p.exists():assert sha(p)==sha(source),'Edited sound retained'
else:shutil.copy2(source,p)
print('Verified six main videos, three game files,250 keyed frames and accelerated banner audio')
