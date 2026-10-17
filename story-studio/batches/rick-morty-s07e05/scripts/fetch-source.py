"""Restore the user-provided Drive source with TLS and checksum verification."""
from html.parser import HTMLParser
import hashlib
import json
from pathlib import Path
import urllib.parse
import urllib.request

ROOT=Path(__file__).resolve().parents[1]
target=ROOT/'public/media/episode.mkv'
target.parent.mkdir(parents=True,exist_ok=True)
expected=json.loads((ROOT/'data/source-metadata.json').read_text())['sourceSha256']

def digest(path):
    h=hashlib.sha256()
    with path.open('rb') as f:
        while chunk:=f.read(1024*1024): h.update(chunk)
    return h.hexdigest()

if target.exists():
    assert digest(target)==expected, 'Existing source differs; preserve it and inspect before replacing.'
    print('Existing source checksum verified')
    raise SystemExit(0)

class Form(HTMLParser):
    def __init__(self): super().__init__(); self.action=None; self.fields={}
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='form' and a.get('id')=='download-form': self.action=a['action']
        if tag=='input' and a.get('type')=='hidden': self.fields[a['name']]=a['value']

identifier=json.loads((ROOT/'data/selection.json').read_text())['sourceDriveId']
url='https://drive.google.com/uc?export=download&id='+urllib.parse.quote(identifier)
response=urllib.request.urlopen(url,timeout=30)
if 'text/html' in response.headers.get('Content-Type',''):
    form=Form(); form.feed(response.read().decode()); response.close()
    assert form.action=='https://drive.usercontent.google.com/download'
    response=urllib.request.urlopen(form.action+'?'+urllib.parse.urlencode(form.fields),timeout=30)
assert 'text/html' not in response.headers.get('Content-Type','')
temporary=target.with_suffix('.download')
with response,temporary.open('wb') as f:
    while chunk:=response.read(1024*1024): f.write(chunk)
assert digest(temporary)==expected, 'Downloaded file changed; retain it for inspection.'
temporary.replace(target)
print('Source downloaded and checksum verified')
