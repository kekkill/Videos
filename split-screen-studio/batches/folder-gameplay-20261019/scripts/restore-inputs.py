"""Download only missing supplied media, checking TLS and expected SHA-256."""
from pathlib import Path
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor
import urllib.request,urllib.parse,hashlib,json
R=Path(__file__).resolve().parents[1]
class Form(HTMLParser):
 def __init__(self):super().__init__();self.action=None;self.fields={}
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='form' and a.get('id')=='download-form':self.action=a['action']
  if tag=='input' and a.get('type')=='hidden':self.fields[a['name']]=a['value']
def sha(p):
 h=hashlib.sha256()
 with p.open('rb') as f:
  while block:=f.read(1024*1024):h.update(block)
 return h.hexdigest()
def restore(s):
 p=R/'public'/s['file'];p.parent.mkdir(parents=True,exist_ok=True)
 if p.exists():assert sha(p)==s['sha256'],f'Existing differing file preserved: {p}';return
 r=urllib.request.urlopen('https://drive.google.com/uc?export=download&id='+s['driveId'],timeout=60)
 if 'text/html' in r.headers.get('Content-Type',''):
  form=Form();form.feed(r.read().decode());r.close();assert form.action=='https://drive.usercontent.google.com/download'
  r=urllib.request.urlopen(form.action+'?'+urllib.parse.urlencode(form.fields),timeout=60)
 assert 'text/html' not in r.headers.get('Content-Type','')
 temp=p.with_suffix('.download')
 with r,temp.open('wb') as out:
  while block:=r.read(1024*1024):out.write(block)
 assert temp.stat().st_size==s['bytes'] and sha(temp)==s['sha256'],'Changed download preserved for inspection'
 temp.replace(p)
with ThreadPoolExecutor(max_workers=3) as pool:list(pool.map(restore,json.loads((R/'data/input-manifest.json').read_text())))
print('All six main videos and six gameplay recordings verified')
