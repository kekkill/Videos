import {AbsoluteFill,CanvasImage,Freeze,Sequence,staticFile,useCurrentFrame,useVideoConfig,interpolate} from 'remotion';
import {Video,Audio} from '@remotion/media';
import {blur} from '@remotion/effects/blur';
import clips from '../data/clips.json';
import banner from '../data/banner.json';
type Props={id:string};
const Picture=({id}:Props)=>{
 const c=clips.find(x=>x.id===id)!;const {fps}=useVideoConfig();let offset=0;
 return <AbsoluteFill style={{backgroundColor:'#101018'}}>
  <div style={{position:'absolute',left:0,top:0,width:1080,height:960,overflow:'hidden'}}>
   <Video src={staticFile(`media/${c.source}`)} muted premountFor={fps} objectFit="cover" effects={[blur({radius:35})]} style={{width:1080,height:960,opacity:.65}}/>
   <div style={{position:'absolute',left:180,top:0,width:720,height:960,overflow:'hidden'}}>
    <Video src={staticFile(`media/${c.source}`)} muted premountFor={fps} style={{position:'absolute',left:0,top:0,width:720,height:1280}}/>
   </div>
  </div>
  {c.games.map((s,index)=>{const from=offset;offset+=s.frames;const src=staticFile(`games/game-${String(s.game).padStart(2,'0')}.mp4`);return <Sequence key={index} name={`Шары ${index+1}, без звука`} from={from} durationInFrames={s.frames} premountFor={fps}>
   <div style={{position:'absolute',left:0,top:960,width:1080,height:960,overflow:'hidden',backgroundColor:'#101018'}}>
    <Video src={src} trimBefore={s.startFrame} muted premountFor={fps} objectFit="cover" effects={[blur({radius:44})]} style={{width:1080,height:960,opacity:.5}}/>
    <div style={{position:'absolute',left:50,top:10,width:900,height:900,overflow:'hidden'}}><Video src={src} trimBefore={s.startFrame} muted premountFor={fps} style={{position:'absolute',left:0,top:-350,width:900,height:1600}}/></div>
    <div style={{position:'absolute',left:56,top:12,width:192,height:84,overflow:'hidden'}}><Video src={src} trimBefore={s.startFrame} muted premountFor={fps} style={{position:'absolute',left:-228,top:-966,width:648,height:1152}}/></div>
   </div>
  </Sequence>})}
 </AbsoluteFill>;
};
const Ad=()=>{const frame=useCurrentFrame();const {fps}=useVideoConfig();return <CanvasImage premountFor={fps} name="Platina VPN — без синего фона, скорость 1,3×" src={staticFile(`banner-frames/frame-${String(Math.max(0,Math.min(banner.frames-1,frame))).padStart(3,'0')}.png`)} style={{position:'absolute',left:banner.position[0],top:banner.position[1],width:banner.width,height:banner.height}}/>};
const Resume=({id}:Props)=>{const c=clips.find(x=>x.id===id)!;const frame=useCurrentFrame();const {fps}=useVideoConfig();const duck=Math.pow(10,c.duckGainDb/20);const tail=c.bannerFrames-c.pauseFrames;
 return <><Sequence from={-c.insertFrame} durationInFrames={c.frames} premountFor={fps}><Picture id={id}/></Sequence><Audio src={staticFile(`media/${c.source}`)} trimBefore={c.insertFrame} premountFor={fps} volume={interpolate(frame,[0,tail,tail+c.duckRestoreSeconds*fps],[duck,duck,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}/></>;
};
export const AdClip=({id}:Props)=>{const c=clips.find(x=>x.id===id)!;const {fps}=useVideoConfig();return <AbsoluteFill>
 <Sequence name="Основной ролик и шары 50/50" durationInFrames={c.insertFrame} premountFor={fps}><Picture id={id}/><Audio src={staticFile(`media/${c.source}`)} premountFor={fps}/></Sequence>
 <Sequence name="Пауза на время рекламной речи" from={c.insertFrame} durationInFrames={c.pauseFrames} premountFor={fps}><Freeze frame={c.insertFrame}><Picture id={id}/></Freeze></Sequence>
 <Sequence name="Продолжение с тихим звуком до конца рекламы" from={c.insertFrame+c.pauseFrames} durationInFrames={c.frames-c.insertFrame} premountFor={fps}><Resume id={id}/></Sequence>
 <Sequence name="Баннер, ускорен 1,3×" from={c.insertFrame} durationInFrames={c.bannerFrames} premountFor={fps}><Ad/><Audio src={staticFile('banner-audio.flac')} premountFor={fps}/></Sequence>
 </AbsoluteFill>};
