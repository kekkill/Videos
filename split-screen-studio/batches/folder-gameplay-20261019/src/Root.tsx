import {Composition} from 'remotion';
import {Canvas,GamePanel,SourcePanel} from './Layout';
const Clip01=()=> <Canvas>
<SourcePanel src="media/source-01.mp4" />
<GamePanel src="games/game-04.mp4" start={7.0} from={0.0} duration={26.0} />
<GamePanel src="games/game-02.mp4" start={24.0} from={26.0} duration={23.0} />
</Canvas>;
const Clip02=()=> <Canvas>
<SourcePanel src="media/source-02.mp4" />
<GamePanel src="games/game-01.mp4" start={12.0} from={0.0} duration={31.0} />
<GamePanel src="games/game-06.mp4" start={10.0} from={31.0} duration={21.533333333333335} />
</Canvas>;
const Clip03=()=> <Canvas>
<SourcePanel src="media/source-03.mp4" />
<GamePanel src="games/game-02.mp4" start={0.0} from={0.0} duration={27.0} />
<GamePanel src="games/game-04.mp4" start={29.0} from={27.0} duration={24.0} />
<GamePanel src="games/game-03.mp4" start={2.0} from={51.0} duration={6.7} />
</Canvas>;
const Clip04=()=> <Canvas>
<SourcePanel src="media/source-04.mp4" />
<GamePanel src="games/game-06.mp4" start={3.0} from={0.0} duration={28.0} />
<GamePanel src="games/game-01.mp4" start={34.0} from={28.0} duration={18.933333333333334} />
</Canvas>;
const Clip05=()=> <Canvas>
<SourcePanel src="media/source-05.mp4" />
<GamePanel src="games/game-05.mp4" start={1.0} from={0.0} duration={27.0} />
<GamePanel src="games/game-02.mp4" start={39.0} from={27.0} duration={11.5} />
</Canvas>;
const Clip06=()=> <Canvas>
<SourcePanel src="media/source-06.mp4" />
<GamePanel src="games/game-03.mp4" start={0.0} from={0.0} duration={14.0} />
<GamePanel src="games/game-05.mp4" start={4.0} from={14.0} duration={25.0} />
<GamePanel src="games/game-04.mp4" start={22.0} from={39.0} duration={17.933333333333334} />
</Canvas>;
export const Root=()=> <>
<Composition id="Folder-01" component={Clip01} width={1080} height={1920} fps={60} durationInFrames={2940} />
<Composition id="Folder-02" component={Clip02} width={1080} height={1920} fps={60} durationInFrames={3152} />
<Composition id="Folder-03" component={Clip03} width={1080} height={1920} fps={60} durationInFrames={3462} />
<Composition id="Folder-04" component={Clip04} width={1080} height={1920} fps={60} durationInFrames={2816} />
<Composition id="Folder-05" component={Clip05} width={1080} height={1920} fps={60} durationInFrames={2310} />
<Composition id="Folder-06" component={Clip06} width={1080} height={1920} fps={60} durationInFrames={3416} />
</>;
