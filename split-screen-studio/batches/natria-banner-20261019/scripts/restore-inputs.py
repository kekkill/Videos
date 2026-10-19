"""Restore published base videos and checked derivative banner assets without replacing edits."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import json,hashlib,urllib.request,zipfile,shutil
R=Path(__file__).resolve().parents[1]
def sha(p):
 h=hashlib.sha256()
 with p.open('rb') as f:
  while chunk:=f.read(1024*1024):h.update(chunk)
 return h.hexdigest()
def restore(m):
 p=R/'public/media'/m['file'];p.parent.mkdir(parents=True,exist_ok=True)
 if p.exists():assert sha(p)==m['sha256'],f'Differing source preserved: {p}';return
 temp=p.with_suffix('.download')
 with urllib.request.urlopen(m['url'],timeout=60) as response,temp.open('wb') as f:
  while chunk:=response.read(1024*1024):f.write(chunk)
 assert sha(temp)==m['sha256'],'Changed download preserved for inspection'
 temp.replace(p)
with ThreadPoolExecutor(max_workers=3) as pool:list(pool.map(restore,json.loads((R/'data/base-inputs.json').read_text())))
banner=json.loads((R/'data/banner.json').read_text())
for file,expected in banner['assets'].items():assert sha(R/'assets'/file)==expected,file
frames=R/'public/banner-frames';frames.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(R/'assets/keyed-banner-frames.zip') as z:
 assert sorted(z.namelist())==[f'frame-{i:03}.png' for i in range(216)]
 for name in z.namelist():
  p=frames/name;data=z.read(name)
  if p.exists():assert p.read_bytes()==data,f'Edited banner frame preserved: {p}'
  else:p.write_bytes(data)
sound=R/'public/banner-audio.flac';original=R/'assets/banner-audio.flac'
if sound.exists():assert sha(sound)==sha(original),'Edited banner sound preserved'
else:shutil.copy2(original,sound)
print('Verified six base videos,216 keyed banner frames and original banner sound')
