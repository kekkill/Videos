import {Composition} from 'remotion';
import {ClipHeader, DynamicCaptions} from './Common';
import captions01 from '../data/01-rest-captions.json';
import captions02 from '../data/02-pushups-captions.json';
import captions03 from '../data/03-rope-captions.json';
import captions04 from '../data/04-volleyball-captions.json';
import captions05 from '../data/05-classmate-1-captions.json';
import captions06 from '../data/06-classmate-2-captions.json';
import captions07 from '../data/07-army-1-captions.json';
import captions08 from '../data/08-army-2-captions.json';
import captions09 from '../data/09-breath-captions.json';
import captions10 from '../data/10-after-thirty-captions.json';
export const Header01 = () => <ClipHeader title={"Можно я просто\nПОЛЕЖУ?"} />;
export const Captions01 = () => <DynamicCaptions captions={captions01} />;
export const Header02 = () => <ClipHeader title={"Два отжимания:\nШКОЛА vs АРМИЯ"} />;
export const Captions02 = () => <DynamicCaptions captions={captions02} />;
export const Header03 = () => <ClipHeader title={"Главный босс\nШКОЛЬНОЙ ФИЗРЫ"} />;
export const Captions03 = () => <DynamicCaptions captions={captions03} />;
export const Header04 = () => <ClipHeader title={"Когда тебя\nВЫБИРАЮТ ПОСЛЕДНИМ"} />;
export const Captions04 = () => <DynamicCaptions captions={captions04} />;
export const Header05 = () => <ClipHeader title={"Он играл\nБЕЗ ФУТБОЛКИ"} series={"Физра в лицее"} part={1} parts={2} />;
export const Captions05 = () => <DynamicCaptions captions={captions05} />;
export const Header06 = () => <ClipHeader title={"Девушки не знали,\nЧТО Я ВСЁ СЛЫШУ"} series={"Физра в лицее"} part={2} parts={2} />;
export const Captions06 = () => <DynamicCaptions captions={captions06} />;
export const Header07 = () => <ClipHeader title={"Не отжался?\nЗНАЧИТ ПОДТЯГИВАЙСЯ"} series={"Армейская физра"} part={1} parts={2} />;
export const Captions07 = () => <DynamicCaptions captions={captions07} />;
export const Header08 = () => <ClipHeader title={"Вся рота страдала\nИЗ-ЗА ОДНОГО"} series={"Армейская физра"} part={2} parts={2} />;
export const Captions08 = () => <DynamicCaptions captions={captions08} />;
export const Header09 = () => <ClipHeader title={"Силы есть.\nДЫХАЛКИ НЕТ"} />;
export const Captions09 = () => <DynamicCaptions captions={captions09} />;
export const Header10 = () => <ClipHeader title={"Тело после 30:\nГАРАНТИЯ ИСТЕКЛА"} />;
export const Captions10 = () => <DynamicCaptions captions={captions10} />;
export const StoryRoot = () => <>
<Composition id="Header-01" component={Header01} width={1080} height={380} fps={24} durationInFrames={700} />
<Composition id="Captions-01" component={Captions01} width={1080} height={200} fps={24} durationInFrames={700} />
<Composition id="Header-02" component={Header02} width={1080} height={380} fps={24} durationInFrames={246} />
<Composition id="Captions-02" component={Captions02} width={1080} height={200} fps={24} durationInFrames={246} />
<Composition id="Header-03" component={Header03} width={1080} height={380} fps={24} durationInFrames={854} />
<Composition id="Captions-03" component={Captions03} width={1080} height={200} fps={24} durationInFrames={854} />
<Composition id="Header-04" component={Header04} width={1080} height={380} fps={24} durationInFrames={824} />
<Composition id="Captions-04" component={Captions04} width={1080} height={200} fps={24} durationInFrames={824} />
<Composition id="Header-05" component={Header05} width={1080} height={380} fps={24} durationInFrames={672} />
<Composition id="Captions-05" component={Captions05} width={1080} height={200} fps={24} durationInFrames={672} />
<Composition id="Header-06" component={Header06} width={1080} height={380} fps={24} durationInFrames={1194} />
<Composition id="Captions-06" component={Captions06} width={1080} height={200} fps={24} durationInFrames={1194} />
<Composition id="Header-07" component={Header07} width={1080} height={380} fps={24} durationInFrames={512} />
<Composition id="Captions-07" component={Captions07} width={1080} height={200} fps={24} durationInFrames={512} />
<Composition id="Header-08" component={Header08} width={1080} height={380} fps={24} durationInFrames={1162} />
<Composition id="Captions-08" component={Captions08} width={1080} height={200} fps={24} durationInFrames={1162} />
<Composition id="Header-09" component={Header09} width={1080} height={380} fps={24} durationInFrames={932} />
<Composition id="Captions-09" component={Captions09} width={1080} height={200} fps={24} durationInFrames={932} />
<Composition id="Header-10" component={Header10} width={1080} height={380} fps={24} durationInFrames={553} />
<Composition id="Captions-10" component={Captions10} width={1080} height={200} fps={24} durationInFrames={553} />
</>;
