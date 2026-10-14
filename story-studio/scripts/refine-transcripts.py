"""Apply the inspected ASR corrections and remove omitted musical lead-ins."""
import json
from pathlib import Path
import re

ROOT=Path(__file__).resolve().parents[1]
edits={
 '01-family': [('смущает','смущай'),('завязывается','завязывай с')],
 '02-crystal': [('пулей','пули'),('Придеть','Нагнись')],
 '03-math': [('ставлюсь на','поставлю тебе')],
 '04-news': [('пойдем','падём')],
 '05-destiny-1': [('жить в них деньги','жить на их деньги'),('полетись','полети'),('я за тебя','из-за тебя')],
 '06-destiny-2': [('мой фильм','мультфильм'),('Почему-почему','Почему бы тебе')],
 '07-destiny-3': [('хак','х***')],
 '08-clones-1': [('Неперенаправленных','Перенаправление'),('норму','нормально'),('от вас социалистов','этого социалиста в')],
 '09-clones-2': [('сукинцы сын','сукин ты сын'),('Да ну меня','Да ну нафиг')],
 '10-clones-3': [('Рика с','Рик из'),('донни пальцы','да не парься'),('ужались','ужалить'),('засал','зассал'),('Пизду фашистиш','Bist du faschistisch')],
}
cuts={'07-destiny-3':(12.9,25.2), '10-clones-3':(34.15,38.45)}

def token(text): return re.sub(r'[^а-яёa-z0-9-]','',text.lower())

for clip in json.loads((ROOT/'data/clips.json').read_text()):
    path=ROOT/'data'/f"{clip['id']}-turbo-transcript.json"
    original=json.loads(path.read_text())
    words=[dict(w) for s in original for w in s['words']]
    changes=[]
    # The retained draft recognitions precede the tightened cuts. A fresh
    # recognition of the current montage must not have that cut applied twice.
    if clip['id'] in cuts and max(w['end'] for w in words)>clip['videoDuration']+2:
        start,end=cuts[clip['id']]
        removed=[w for w in words if w['start']<end and w['end']>start]
        words=[w for w in words if w['end']<=start or w['start']>=end]
        for w in words:
            if w['start']>=end:
                w['start']=round(w['start']-(end-start),4)
                w['end']=round(w['end']-(end-start),4)
        changes.append({'removedLeadInSeconds':[start,end], 'removedWords':[w['word'] for w in removed]})
    # Where the faster model swallowed speech during a crash/transition, use
    # the independently aligned small-model reading of that same source.
    rescue={'05-destiny-1':(61.50,67.0),'10-clones-3':(11.40,12.90)}
    if clip['id'] in rescue and (ROOT/'data'/f"{clip['id']}-transcript.json").exists():
        start,end=rescue[clip['id']]
        small=json.loads((ROOT/'data'/f"{clip['id']}-transcript.json").read_text())
        alternatives=[dict(w) for s in small for w in s['words'] if w['start']>=start and w['end']<=end]
        if alternatives:
            words=[w for w in words if w['end']<=start or w['start']>=end]+alternatives
            words.sort(key=lambda w:w['start'])
            changes.append({'alternativeModelSpan':[start,end],'words':[w['word'] for w in alternatives]})
    pairs=edits.get(clip['id'],[])
    if clip['id']=='05-destiny-1': pairs += [('Слышен','Сукин'),('мордик','Морти'),('идея','тебя')]
    for before,after in pairs:
        sought=[token(w) for w in before.split()]
        for i in range(len(words)-len(sought)+1):
            if [token(w['word']) for w in words[i:i+len(sought)]]!=sought: continue
            group=words[i:i+len(sought)]
            parts=after.split()
            first,last=group[0]['start'],group[-1]['end']
            punctuation=re.search(r'[.,!?;:]+$',group[-1]['word'])
            weight=sum(len(p) for p in parts)
            replacement=[]; elapsed=0
            for j,p in enumerate(parts):
                a=first+(last-first)*elapsed/weight
                elapsed+=len(p)
                b=first+(last-first)*elapsed/weight
                replacement.append({'word':' '+p+(punctuation.group() if j==len(parts)-1 and punctuation else ''),
                    'start':round(a,4),'end':round(b,4),'probability':min(w['probability'] for w in group)})
            words[i:i+len(sought)]=replacement
            changes.append({'before':before,'after':after,'start':first,'end':last})
            break
    provenance=ROOT/'data'/f"{clip['id']}-turbo-transcript-source.json"
    if clip['id']=='05-destiny-1' and provenance.exists() and json.loads(provenance.read_text()).get('sourceSegments')==[[185.30,260.85]]:
        start,end=54.70,60.25
        removed=sum(w['start']<end and w['end']>start for w in words)
        words=[w for w in words if w['end']<=start or w['start']>=end]
        for w in words:
            if w['start']>=end:
                w['start']=round(w['start']-(end-start),4)
                w['end']=round(w['end']-(end-start),4)
        changes.append({'omittedSideDialogueSeconds':[start,end],'omittedWordCount':removed})
    result=[{'start':0,'end':clip['videoDuration'],'text':''.join(w['word'] for w in words),'words':words}]
    (ROOT/'data'/f"{clip['id']}-reviewed-transcript.json").write_text(json.dumps(result,ensure_ascii=False,indent=2))
    (ROOT/'data'/f"{clip['id']}-review.json").write_text(json.dumps(changes,ensure_ascii=False,indent=2))
print('Reviewed transcripts written; original recognitions retained')
