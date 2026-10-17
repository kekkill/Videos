"""Transcribe each prepared montage with local word timestamps and bounded retries."""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess

from faster_whisper import WhisperModel
import numpy as np

ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser()
parser.add_argument('--model',default='small')
parser.add_argument('--suffix',default='')
parser.add_argument('--only',nargs='+')
args=parser.parse_args()
clips=json.loads((ROOT/'data/clips.json').read_text())
model=WhisperModel(args.model,device='cpu',compute_type='int8',cpu_threads=2,
    download_root='/workspace/.cache/huggingface')
for clip in clips:
    if args.only and clip['id'] not in args.only: continue
    target=ROOT/'data'/f"{clip['id']}{args.suffix}-transcript.json"
    source=ROOT/'public/media'/clip['file']
    fingerprint=hashlib.sha256(source.read_bytes()).hexdigest()
    provenance=target.with_name(target.stem+'-source.json')
    if target.exists() and provenance.exists() and json.loads(provenance.read_text()).get('sha256')==fingerprint:
        print('Reusing',target.name,flush=True)
        continue
    audio=subprocess.check_output(['ffmpeg','-v','error','-threads','1','-i',str(source),
        '-ar','16000','-ac','1','-f','f32le','pipe:1'])
    waveform=np.frombuffer(audio,dtype=np.float32).copy()
    segments,_=model.transcribe(waveform,language='ru',beam_size=3,best_of=1,
        temperature=0.0,condition_on_previous_text=False,word_timestamps=True,
        vad_filter=True,initial_prompt='Рик Прайм, Злой Морти, Дайен, Слоу-Мобиус. Центральная конечная кривая. Устройство Омега.')
    result=[]
    for s in segments:
        result.append({'start':s.start,'end':s.end,'text':s.text,
            'words':[{'word':w.word,'start':w.start,'end':w.end,'probability':w.probability} for w in s.words]})
        print(f"{clip['id']} {s.start:.2f}–{s.end:.2f} {s.text}",flush=True)
    target.write_text(json.dumps(result,ensure_ascii=False,indent=2))
    provenance.write_text(json.dumps({'source':clip['file'],'sha256':fingerprint,
        'model':args.model,'sourceSegments':clip['segments']},ensure_ascii=False,indent=2))
    print(f"Saved {target.name}",flush=True)
