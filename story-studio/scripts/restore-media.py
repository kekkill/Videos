"""Restore missing source media while preserving existing prepared montages."""
from pathlib import Path
import json
import subprocess
import sys

ROOT=Path(__file__).resolve().parents[1]
subprocess.run([sys.executable,str(ROOT/'scripts/fetch-source.py')],check=True)
clips=json.loads((ROOT/'data/selection.json').read_text())['clips']
missing=[c['id'] for c in clips if not (ROOT/'public/media'/f"{c['id']}.mp4").exists()]
if missing:
    subprocess.run([sys.executable,str(ROOT/'scripts/prepare-clips.py'),'--only',*missing],check=True)
else:
    print('All existing prepared montages preserved')
