"""Local CPU transcription with checkpointing and bounded decoder retries."""
import argparse
import json
from pathlib import Path
import subprocess

from faster_whisper import WhisperModel
import numpy as np

parser=argparse.ArgumentParser()
parser.add_argument('input')
parser.add_argument('output')
parser.add_argument('--words', action='store_true')
args=parser.parse_args()
target=Path(args.output)
audio=subprocess.check_output(['ffmpeg','-v','error','-threads','1','-i',args.input,
    '-ar','16000','-ac','1','-f','f32le','pipe:1'])
waveform=np.frombuffer(audio,dtype=np.float32).copy()
model=WhisperModel('small',device='cpu',compute_type='int8',cpu_threads=2,
    download_root='/workspace/.cache/huggingface')
segments,_=model.transcribe(waveform,language='ru',beam_size=1,best_of=1,
    temperature=0.0,condition_on_previous_text=False,word_timestamps=args.words,
    vad_filter=True,initial_prompt='Рик, Морти, Саммер, Джерри, Бет, Джессика. Кристаллы смерти.')
result=[]
for s in segments:
    segment={'start':s.start,'end':s.end,'text':s.text}
    if args.words:
        segment['words']=[{'word':w.word,'start':w.start,'end':w.end,'probability':w.probability} for w in s.words]
    result.append(segment)
    temporary=target.with_suffix('.partial.json')
    temporary.write_text(json.dumps(result,ensure_ascii=False,indent=2))
    print(f'{s.start:.2f}–{s.end:.2f} {s.text}',flush=True)
target.write_text(json.dumps(result,ensure_ascii=False,indent=2))
print(f'Transcription complete: {len(result)} segments',flush=True)
