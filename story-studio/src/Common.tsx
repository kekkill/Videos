import type {Caption} from '@remotion/captions';
import {Video} from '@remotion/media';
import {blur} from '@remotion/effects/blur';
import {loadFont} from '@remotion/fonts';
import {staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

loadFont({family: 'Russo One', url: staticFile('fonts/RussoOne-Regular.ttf')});

export const ScenePicture = ({src}: {src: string}) => {
  const {fps} = useVideoConfig();
  return <>
    <Video name="Размытый задний план" src={src} volume={0} premountFor={fps}
      objectFit="cover" effects={[blur({radius: 36})]}
      style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 1920, opacity: .35}} />
    <div style={{position: 'absolute', left: 0, top: 580, width: 1080, height: 608, overflow: 'hidden'}}>
      <Video name="Сцена и оригинальный звук — отражение уже применено"
        src={src} volume={1} premountFor={fps} objectFit="fill"
        style={{position: 'absolute', left: -1080 * .025 / .95, top: -608 * .025 / .95,
          width: 1080 / .95, height: 608 / .95}} />
    </div>
  </>;
};

export const ClipHeader = ({title, series, part, parts}: {
  title: string; series?: string; part?: number; parts?: number;
}) => <div style={{position: 'absolute', left: 0, top: 0, width: 1080, height: 380,
  fontFamily: 'Russo One', textShadow: '0 3px 8px #000'}}>
  <div style={{position: 'absolute', left: 82, top: 0, width: 910, color: '#e6c777',
    fontSize: 26, letterSpacing: 2}}>РИК И МОРТИ • С4 / С1</div>
  <div data-clip-title style={{position: 'absolute', left: 80, top: 66, width: 920,
    color: '#fff5df', fontSize: 61, lineHeight: 1.14, whiteSpace: 'pre-line',
    textTransform: 'uppercase', WebkitTextStroke: '2px #141418', paintOrder: 'stroke fill'}}>{title}</div>
  {series && <div data-part-label style={{position: 'absolute', left: 82, top: 264,
    color: '#e6c777', fontSize: 30}}>{series.toUpperCase()} • {part}/{parts}</div>}
</div>;

export const DynamicCaptions = ({captions}: {captions: Caption[]}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const ms = frame / fps * 1000;
  const pages: Caption[][] = [];
  let current: Caption[] = [];
  for (const word of captions) {
    current.push(word);
    if (word.pageBreakAfter) {pages.push(current); current = [];}
  }
  if (current.length) pages.push(current);
  const page = pages.find((p, index) => ms >= p[0].startMs && ms <
    Math.min(p[p.length - 1].endMs + 180, pages[index + 1]?.[0].startMs ?? Infinity));
  if (!page) return null;
  const text = page.map(w => w.text).join('').trim();
  return <div data-caption-page style={{position: 'absolute', left: 90, top: 0,
    width: 820, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Russo One', fontSize: text.length > 19 ? 48 : 56,
    lineHeight: 1.15, letterSpacing: .3, textTransform: 'uppercase', whiteSpace: 'nowrap'}}>
    {page.map((word, i) => <span key={i}
      data-active-word={ms >= word.startMs && ms < word.endMs ? 'true' : 'false'}
      style={{color: ms >= word.startMs && ms < word.endMs ? '#e6c777' : '#fff5df',
        whiteSpace: 'pre', WebkitTextStroke: '3px #141418', paintOrder: 'stroke fill',
        textShadow: '0 4px 6px #000'}}>{i === 0 ? word.text.trimStart() : word.text}</span>)}
  </div>;
};
