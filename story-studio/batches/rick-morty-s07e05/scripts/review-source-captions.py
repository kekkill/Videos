"""Review source-relative words, then map only complete selected utterances."""
import copy
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
JOB = ROOT.parent

def write_transcripts(regions):
    plan = json.loads((ROOT / 'data/selection.json').read_text())
    for clip in plan['clips']:
        source_words = sorted([w for name in clip['regions'] for w in regions[name]], key=lambda w: w['start'])
        local = []
        timeline = 0.0
        for start, end in clip['segments']:
            cut_words = []
            for w in source_words:
                # Retain full words; boundary review happens before scene export.
                if w['start'] < start < w['end'] or w['start'] < end < w['end']:
                    raise AssertionError(f"Word cut at {clip['id']}: {w}")
                if start <= w['start'] and w['end'] <= end:
                    item = copy.deepcopy(w)
                    item.update({'sourceStart': w['start'], 'sourceEnd': w['end'],
                        'start': round(timeline + w['start'] - start, 4),
                        'end': round(timeline + w['end'] - start, 4)})
                    cut_words.append(item)
            if cut_words:
                local.append({'start': cut_words[0]['start'], 'end': cut_words[-1]['end'],
                    'text': ''.join(w['word'] for w in cut_words), 'words': cut_words})
            timeline += end - start
        (ROOT / 'data' / (clip['id'] + '-reviewed-transcript.json')).write_text(
            json.dumps(local, ensure_ascii=False, indent=2))
        print(clip['id'], len([w for s in local for w in s['words']]), 'words', flush=True)


CACHED = ROOT / 'data/reviewed-source-words.json'
if CACHED.exists() and '--refresh-from-local-asr' not in sys.argv:
    write_transcripts(json.loads(CACHED.read_text())['regions'])
    raise SystemExit(0)


def words(path):
    return [dict(w) for s in json.loads(path.read_text())['segments'] for w in s['words']]

def token(text):
    return re.sub(r'[^а-яёa-z0-9]', '', text.lower())

def replace_phrase(items, before, after):
    sought = [token(t) for t in before.split()]
    for i in range(len(items) - len(sought) + 1):
        if [token(w['word']) for w in items[i:i + len(sought)]] != sought:
            continue
        old = items[i:i + len(sought)]
        replacements = after.split()
        if len(replacements) == len(old):
            for word, text in zip(old, replacements):
                word['word'] = ' ' + text
        else:
            start, end = old[0]['start'], old[-1]['end']
            weights = [max(1, len(token(t))) for t in replacements]
            total = sum(weights)
            cursor = start
            rewritten = []
            for text, weight in zip(replacements, weights):
                finish = cursor + (end - start) * weight / total
                rewritten.append({'word': ' ' + text, 'start': round(cursor, 4),
                    'end': round(finish, 4), 'probability': None})
                cursor = finish
            items[i:i + len(old)] = rewritten
        return True
    return False

regions = {p.stem: words(p) for p in (JOB / 'regions').glob('*.json')}
review = []
for region, rescue, start, end in [
    ('hunt', 'hunt-quiet', 341.6, 344.05),
    ('trap', 'trap-intro', 477, 506.85),
    ('battle', 'battle-quiet', 862.3, 867.8),
    ('interrogation', 'interrogation-repeat', 1063.8, 1068.8),
    ('battle', 'battle-ending', 901.05, 914),
]:
    rescue_words = [w for w in words(JOB / 'rescues' / (rescue + '.json'))
        if start <= (w['start'] + w['end']) / 2 < end]
    regions[region] = [w for w in regions[region]
        if not start <= (w['start'] + w['end']) / 2 < end] + rescue_words
    regions[region].sort(key=lambda w: (w['start'], w['end']))
    review.append({'region': region, 'rescue': rescue, 'sourceInterval': [start, end],
        'reason': 'Quiet speech recovered without voice activity filtering'})

# The independent reading locates the final question after the visual pause.
regions['warning'] = [w for w in regions['warning'] if w['end'] <= 1228.3] + [
    w for w in words(JOB / 'regions-small/warning.json') if w['start'] >= 1235]
# Tighten the initial word with the independent alignment of the same source.
regions['origin'][0]['start'] = 23.20

fixes = {
    'origin': [('переросла.', 'переросток.'), ('Пиздой нахуй.', 'Пиздуй нахуй.')],
    'good-rick': [('хороший, Рик.', 'хороший Рик.'), ('Нет, Рика хуже него.', 'Нет Рика хуже него.')],
    'hunt': [('Ча,', 'Ща,'), ('мысли мне не подводят.', 'мысли меня не подводят.'),
        ('Боже, это...', 'Боже, это'), ('трахающий дробовик', 'трахающей дробовик'),
        ('статических вероятностей.', 'статистических вероятностей.')],
    'trap': [('Тайен.', 'Дайен.')],
    'escape': [('Сабэфирный', 'Субэфирный'), ('в профессиональном, Морти.', 'профессионально, Морти.'),
        ('истерии,', 'истери,'), ('Напишем, требуем.', 'Два пишем, три в уме.'),
        ('стирающий человек', 'стирающая человека')],
    'battle': [('Слоу Мобиус?', 'Слоу-Мобиус?')],
}
for region, pairs in fixes.items():
    for before, after in pairs:
        changed = replace_phrase(regions[region], before, after)
        review.append({'region': region, 'before': before, 'after': after, 'applied': changed})

# The independent alignment resolves three words stretched across effects/pauses.
for name, start, end in [('revenge', 1139, 1160), ('trick', 1035, 1038)]:
    alternate = [w for w in words(JOB / 'regions-small' / (name + '.json'))
        if start <= w['start'] and w['end'] <= end]
    regions[name] = [w for w in regions[name]
        if not start <= (w['start'] + w['end']) / 2 < end] + alternate
    regions[name].sort(key=lambda w: (w['start'], w['end']))
    review.append({'region': name, 'sourceInterval': [start, end],
        'reason': 'Independent word alignment after an effects/visual pause'})
for word in regions['escape']:
    if token(word['word']) == 'ух' and 671 <= word['start'] <= 672:
        word['start'], word['end'] = 674.5, 674.8
regions['escape'].sort(key=lambda w: (w['start'], w['end']))

for name, items in regions.items():
    regions[name] = [w for w in items if w['start'] < w['end'] and
        len(w['word'].strip()) < 45 and not re.search(r'(.)\1{8}', w['word'], re.I)]
    for a, b in zip(regions[name], regions[name][1:]):
        a['end'] = min(a['end'], b['start'])
    regions[name] = [w for w in regions[name] if w['start'] < w['end']]

(ROOT / 'data/reviewed-source-words.json').write_text(json.dumps({
    'source': 'episode.mkv', 'timestampsRelativeToOriginalSource': True,
    'regions': regions, 'review': review}, ensure_ascii=False, indent=2))

write_transcripts(regions)
