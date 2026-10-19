import {AbsoluteFill, Sequence, staticFile, useVideoConfig} from 'remotion';
import {Video} from '@remotion/media';
import {blur} from '@remotion/effects/blur';

export const SourcePanel=({src}:{src:string})=>{
 const {fps}=useVideoConfig();
 return <div style={{position:'absolute',left:0,top:0,width:1080,height:960,overflow:'hidden',backgroundColor:'#111'}}>
  <Video name="Мягкие боковые поля" src={staticFile(src)} muted premountFor={fps} objectFit="cover" effects={[blur({radius:35})]}
   style={{position:'absolute',left:0,top:0,width:1080,height:960,opacity:.65}} />
  <div style={{position:'absolute',left:180,top:0,width:720,height:960,overflow:'hidden'}}>
   <Video name="Основной ролик с исходными субтитрами и звуком" src={staticFile(src)} volume={1} premountFor={fps} objectFit="fill"
    style={{position:'absolute',left:0,top:0,width:720,height:1280}} />
  </div>
 </div>;
};
export const GamePanel=({src,start,from,duration}:{src:string;start:number;from:number;duration:number})=>{
 const {fps}=useVideoConfig();
 return <Sequence name="Игра без звука" from={from*fps} durationInFrames={Math.round(duration*fps)} premountFor={fps}>
  <div style={{position:'absolute',left:0,top:960,width:1080,height:960,overflow:'hidden',backgroundColor:'#081018'}}>
   <Video name="Размытый фон игры" src={staticFile(src)} trimBefore={start*fps} muted premountFor={fps} objectFit="cover" effects={[blur({radius:44})]}
    style={{position:'absolute',left:0,top:0,width:1080,height:960,opacity:.5}} />
   <div style={{position:'absolute',left:50,top:10,width:900,height:900,overflow:'hidden'}}>
    <Video name="Поле игры без растягивания" src={staticFile(src)} trimBefore={start*fps} muted premountFor={fps} objectFit="fill"
     style={{position:'absolute',left:0,top:-350,width:900,height:1600}} />
   </div>
   <div style={{position:'absolute',left:56,top:12,width:192,height:84,overflow:'hidden'}}>
    <Video name="Счётчик" src={staticFile(src)} trimBefore={start*fps} muted premountFor={fps} objectFit="fill"
     style={{position:'absolute',left:-228,top:-966,width:648,height:1152}} />
   </div>
  </div>
 </Sequence>;
};
export const Canvas=({children}:{children:React.ReactNode})=><AbsoluteFill style={{backgroundColor:'#101018'}}>{children}</AbsoluteFill>;
