"""Build editable caption arrays with phrase pages and local montage timestamps."""
import argparse
import json
from pathlib import Path
import re

ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser()
parser.add_argument('--transcript-suffix',default='')
args=parser.parse_args()
clips=json.loads((ROOT/'data/clips.json').read_text())
source=["import {AbsoluteFill, Composition, Sequence, staticFile, useVideoConfig} from 'remotion';",
        "import {ClipHeader, DynamicCaptions, ScenePicture} from './Common';"]
registrations=[]
for number,clip in enumerate(clips,1):
    path=ROOT/'data'/f"{clip['id']}{args.transcript_suffix}-transcript.json"
    segments=json.loads(path.read_text())
    words=[]
    for s in segments:
        for raw in s['words']:
            word=dict(raw)
            if word['word'].strip().startswith('-') and words:
                words[-1]['word']+=word['word'].strip()
                words[-1]['end']=word['end']
            else: words.append(word)
    captions=[]
    discarded=[]
    for w in words:
        text=w['word'].strip()
        start=round(w['start']*1000); end=min(round(w['end']*1000),round(clip['videoDuration']*1000))
        if end <= start or not text: continue
        # Long runs of a single vowel are decoder hallucinations over effects/music.
        if len(text)>25 and re.search(r'(.)\1{12}',text,re.I):
            discarded.append({'text':text,'startMs':start,'endMs':end})
            continue
        replacements={'Мортик':'Морти','мортик':'Морти','Морчик':'Морти','морчик':'Морти',
            'Самар':'Саммер','самар':'Саммер','крестал':'кристалл','Крестал':'Кристалл'}
        for old,new in replacements.items(): text=re.sub(r'\b'+old+r'\b',new,text)
        captions.append({'text':' '+text,'startMs':start,'endMs':end,
            'timestampMs':(start+end)//2,'confidence':round(w['probability'],6)})
    for a,b in zip(captions,captions[1:]): a['endMs']=min(a['endMs'],b['startMs'])
    captions=[w for w in captions if w['startMs']<w['endMs']]
    page=[]
    for i,w in enumerate(captions):
        page.append(w)
        nxt=captions[i+1] if i+1<len(captions) else None
        text=''.join(v['text'] for v in page).strip()
        projected=len(text)+(len(nxt['text']) if nxt else 0)
        if not nxt or len(page)>=4 or projected>24 or re.search(r'[.!?;:]$',w['text']) or nxt['startMs']-w['endMs']>280:
            w['pageBreakAfter']=True; page=[]
    (ROOT/'data'/f"{clip['id']}-captions.json").write_text(json.dumps(captions,ensure_ascii=False,indent=2))
    (ROOT/'data'/f"{clip['id']}-caption-audit.json").write_text(json.dumps({'words':len(captions),
        'pages':sum(bool(w.get('pageBreakAfter')) for w in captions),'discardedNonSpeechHallucinations':discarded},ensure_ascii=False,indent=2))
    index=f'{number:02}'
    header='title={'+json.dumps(clip['title'],ensure_ascii=False)+'}'
    if clip.get('series'):
        header+=' series={'+json.dumps(clip['series'],ensure_ascii=False)+'} part={'+str(clip['part'])+'} parts={'+str(clip['parts'])+'}'
    source += [f'export const Header{index} = () => <ClipHeader {header} />;',
        f'export const Captions{index} = () => <DynamicCaptions captions={{',
        json.dumps(captions,ensure_ascii=False,indent=2), '} />;',
        f'export const Video{index} = () => {{', '  const {fps} = useVideoConfig();',
        '  return <AbsoluteFill style={{backgroundColor: "#101018"}}>',
        f'    <Sequence name="{clip["id"]}" durationInFrames={{{clip["frames"]}}} premountFor={{fps}}>',
        f'      <ScenePicture src={{staticFile("media/{clip["file"]}")}} />',
        f'      <div style={{{{position: "absolute", left: 0, top: 190}}}}><Header{index} /></div>',
        f'      <div style={{{{position: "absolute", left: 0, top: 1320}}}}><Captions{index} /></div>',
        '    </Sequence>', '  </AbsoluteFill>;', '};']
    for kind,component,width,height in [('Story',f'Video{index}',1080,1920),
        ('Captions',f'Captions{index}',1080,200),('Header',f'Header{index}',1080,380)]:
        registrations += [f'  <Composition id="{kind}-{index}" component={{{component}}} width={{{width}}} height={{{height}}}',
            f'    fps={{24000 / 1001}} durationInFrames={{{clip["frames"]}}} />']
source += ['export const StoryRoot = () => <>',*registrations,'</>;']
(ROOT/'src/Clips.tsx').write_text('\n'.join(source)+'\n')
print('Prepared caption arrays for all 10 clips')
