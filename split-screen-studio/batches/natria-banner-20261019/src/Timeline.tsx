import {AbsoluteFill,CanvasImage,Freeze,Sequence,staticFile,useCurrentFrame,useVideoConfig,interpolate} from 'remotion';
import {Video,Audio} from '@remotion/media';
type Props={file:string;insertFrame:number;baseFrames:number};
const BannerFrames=()=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const index=Math.max(0,Math.min(215,Math.floor(frame/fps*30)));
 return <CanvasImage name="Оригинальный баннер с удалённым зелёным фоном" src={staticFile(`banner-frames/frame-${String(index).padStart(3,'0')}.png`)} premountFor={fps}
  style={{position:'absolute',left:68,top:760,width:944,height:400}}/>;
};
export const AdClip=({file,insertFrame,baseFrames}:Props)=>{
 const {fps}=useVideoConfig();const src=staticFile(`media/${file}`);const pause=5*fps;const tail=2.2*fps;const duck=Math.pow(10,-18/20);
 return <AbsoluteFill style={{backgroundColor:'#101018'}}>
  <Sequence name="До вставки" durationInFrames={insertFrame} premountFor={fps}>
   <Video src={src} volume={1} premountFor={fps} style={{width:1080,height:1920}} />
  </Sequence>
  <Sequence name="Стоп-кадр без основного звука" from={insertFrame} durationInFrames={pause} premountFor={fps}>
   <Freeze frame={insertFrame}><Video src={src} muted premountFor={fps} style={{width:1080,height:1920}} /></Freeze>
  </Sequence>
  <Sequence name="Продолжение с того же кадра" from={insertFrame+pause} durationInFrames={baseFrames-insertFrame} premountFor={fps}>
   <Video src={src} trimBefore={insertFrame} premountFor={fps}
    volume={frame=>interpolate(frame,[0,tail,tail+.12*fps],[duck,duck,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}
    style={{width:1080,height:1920}} />
  </Sequence>
  <Sequence name="NATRIA VPN — исходная анимация и звук" from={insertFrame} durationInFrames={7.2*fps} premountFor={fps}>
   <BannerFrames />
   <Audio src={staticFile('banner-audio.flac')} volume={1} premountFor={fps}/>
  </Sequence>
 </AbsoluteFill>;
};
