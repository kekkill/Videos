import {AbsoluteFill, Composition, Sequence, staticFile} from 'remotion';
import {Video} from '@remotion/media';
import {blur} from '@remotion/effects/blur';
import * as Layers from './Clips';
import clips from '../data/clips.json';

type Clip = (typeof clips)[number];
const HalfScreen = ({clip, index}: {clip: Clip; index: number}) => {
  const source=staticFile(`media/${clip.file}`);
  const key=String(index+1).padStart(2,'0');
  const Header=Layers[`Header${key}` as keyof typeof Layers] as () => React.JSX.Element;
  const Captions=Layers[`Captions${key}` as keyof typeof Layers] as () => React.JSX.Element;
  let offset=0;
  return <AbsoluteFill style={{backgroundColor:'#080910'}}>
    <div style={{position:'absolute',left:0,top:0,width:1080,height:960,overflow:'hidden'}}>
      <Video src={source} volume={0} objectFit="cover" effects={[blur({radius:36})]}
        style={{position:'absolute',width:1080,height:960,opacity:.28}} />
      <div style={{position:'absolute',left:60,top:300,width:960,height:540,overflow:'hidden'}}>
        <Video src={source} volume={1} objectFit="fill" style={{position:'absolute',left:-960*.025/.95,top:-540*.025/.95,width:960/.95,height:540/.95}} />
      </div>
      <div style={{position:'absolute',left:108,top:90,width:864,height:216,overflow:'hidden'}}>
        <div style={{transform:'scale(.8)',transformOrigin:'0 0',position:'absolute',top:-40}}><Header /></div>
      </div>
      <div style={{position:'absolute',left:54,top:800,transform:'scale(.9)',transformOrigin:'0 0'}}><Captions /></div>
    </div>
    {clip.gameplay.map((segment,n)=>{
      const from=offset; const count=Math.round(segment.duration*60);offset+=count;
      const game=staticFile(`games/game-${String(segment.game).padStart(2,'0')}.mp4`);
      return <Sequence key={n} from={from} durationInFrames={count}>
        <div style={{position:'absolute',left:0,top:960,width:1080,height:960,overflow:'hidden',backgroundColor:segment.game===3?'#081b14':segment.game>=5?'#01121e':'#120918'}}>
          <div style={{position:'absolute',left:50,top:10,width:900,height:900,overflow:'hidden'}}>
            <Video src={game} trimBefore={Math.round(segment.start*60)} muted objectFit="fill"
              style={{position:'absolute',left:0,top:-350,width:900,height:1600}} />
          </div>
          <div style={{position:'absolute',left:56,top:12,width:192,height:84,overflow:'hidden'}}>
            <Video src={game} trimBefore={Math.round(segment.start*60)} muted objectFit="fill"
              style={{position:'absolute',left:-228,top:-966,width:648,height:1152}} />
          </div>
        </div>
      </Sequence>;
    })}
  </AbsoluteFill>;
};
export const SplitRoot=()=> <>
  {clips.map((clip,index)=> <Composition key={clip.id} id={`Split-${String(index+1).padStart(2,'0')}`}
    component={HalfScreen} defaultProps={{clip,index}} width={1080} height={1920} fps={60} durationInFrames={Math.ceil(clip.frames/24*60)} />)}
  <Layers.StoryRoot />
</>;
