import {AbsoluteFill, Composition, Sequence, staticFile, useVideoConfig} from 'remotion';
import {ClipHeader, DynamicCaptions, ScenePicture} from './Common';
export const Header01 = () => <ClipHeader title={"Когда семья увидела\nтвой Instagram"} />;
export const Captions01 = () => <DynamicCaptions captions={
[
  {
    "text": " Морти",
    "startMs": 500,
    "endMs": 1220,
    "timestampMs": 860,
    "confidence": 0.907129
  },
  {
    "text": " снова",
    "startMs": 1220,
    "endMs": 1480,
    "timestampMs": 1350,
    "confidence": 0.979739
  },
  {
    "text": " залип",
    "startMs": 1480,
    "endMs": 1820,
    "timestampMs": 1650,
    "confidence": 0.991074
  },
  {
    "text": " в",
    "startMs": 1820,
    "endMs": 1960,
    "timestampMs": 1890,
    "confidence": 0.992188,
    "pageBreakAfter": true
  },
  {
    "text": " инстаграме",
    "startMs": 1960,
    "endMs": 2380,
    "timestampMs": 2170,
    "confidence": 0.941193
  },
  {
    "text": " Джессики.",
    "startMs": 2380,
    "endMs": 2880,
    "timestampMs": 2630,
    "confidence": 0.626999,
    "pageBreakAfter": true
  },
  {
    "text": " Отвали,",
    "startMs": 3060,
    "endMs": 3560,
    "timestampMs": 3310,
    "confidence": 0.97877
  },
  {
    "text": " коза!",
    "startMs": 3740,
    "endMs": 4120,
    "timestampMs": 3930,
    "confidence": 0.990466,
    "pageBreakAfter": true
  },
  {
    "text": " Морти,",
    "startMs": 4300,
    "endMs": 4700,
    "timestampMs": 4500,
    "confidence": 0.994246
  },
  {
    "text": " а",
    "startMs": 4760,
    "endMs": 4800,
    "timestampMs": 4780,
    "confidence": 0.905788
  },
  {
    "text": " чего",
    "startMs": 4800,
    "endMs": 4920,
    "timestampMs": 4860,
    "confidence": 0.946722
  },
  {
    "text": " ты",
    "startMs": 4920,
    "endMs": 5020,
    "timestampMs": 4970,
    "confidence": 0.999418,
    "pageBreakAfter": true
  },
  {
    "text": " стесняешься?",
    "startMs": 5020,
    "endMs": 5680,
    "timestampMs": 5350,
    "confidence": 0.998921,
    "pageBreakAfter": true
  },
  {
    "text": " Поделись",
    "startMs": 5700,
    "endMs": 6000,
    "timestampMs": 5850,
    "confidence": 0.992502
  },
  {
    "text": " с",
    "startMs": 6000,
    "endMs": 6120,
    "timestampMs": 6060,
    "confidence": 0.866785
  },
  {
    "text": " семьёй,",
    "startMs": 6120,
    "endMs": 6500,
    "timestampMs": 6310,
    "confidence": 0.921399
  },
  {
    "text": " это",
    "startMs": 6540,
    "endMs": 6660,
    "timestampMs": 6600,
    "confidence": 0.993555,
    "pageBreakAfter": true
  },
  {
    "text": " может",
    "startMs": 6660,
    "endMs": 6860,
    "timestampMs": 6760,
    "confidence": 0.990275
  },
  {
    "text": " быть",
    "startMs": 6860,
    "endMs": 6980,
    "timestampMs": 6920,
    "confidence": 0.999671
  },
  {
    "text": " полезно.",
    "startMs": 6980,
    "endMs": 7440,
    "timestampMs": 7210,
    "confidence": 0.991095,
    "pageBreakAfter": true
  },
  {
    "text": " Саммер",
    "startMs": 7560,
    "endMs": 7940,
    "timestampMs": 7750,
    "confidence": 0.890248
  },
  {
    "text": " не",
    "startMs": 7940,
    "endMs": 8060,
    "timestampMs": 8000,
    "confidence": 0.942611
  },
  {
    "text": " смущай",
    "startMs": 8060,
    "endMs": 8420,
    "timestampMs": 8240,
    "confidence": 0.983808
  },
  {
    "text": " своего",
    "startMs": 8420,
    "endMs": 8620,
    "timestampMs": 8520,
    "confidence": 0.999317,
    "pageBreakAfter": true
  },
  {
    "text": " брата.",
    "startMs": 8620,
    "endMs": 9040,
    "timestampMs": 8830,
    "confidence": 0.999856,
    "pageBreakAfter": true
  },
  {
    "text": " Морти",
    "startMs": 9120,
    "endMs": 9360,
    "timestampMs": 9240,
    "confidence": 0.998757
  },
  {
    "text": " завязывай",
    "startMs": 9360,
    "endMs": 9810,
    "timestampMs": 9585,
    "confidence": 0.892943
  },
  {
    "text": " с",
    "startMs": 9810,
    "endMs": 9860,
    "timestampMs": 9835,
    "confidence": 0.892943,
    "pageBreakAfter": true
  },
  {
    "text": " извращенским",
    "startMs": 9860,
    "endMs": 10440,
    "timestampMs": 10150,
    "confidence": 0.864579,
    "pageBreakAfter": true
  },
  {
    "text": " киберсталкингом.",
    "startMs": 10440,
    "endMs": 11300,
    "timestampMs": 10870,
    "confidence": 0.984722,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 11460,
    "endMs": 11780,
    "timestampMs": 11620,
    "confidence": 0.975601
  },
  {
    "text": " не",
    "startMs": 11780,
    "endMs": 11900,
    "timestampMs": 11840,
    "confidence": 0.999624
  },
  {
    "text": " извращенец!",
    "startMs": 11900,
    "endMs": 12760,
    "timestampMs": 12330,
    "confidence": 0.99842,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 12920,
    "endMs": 13280,
    "timestampMs": 13100,
    "confidence": 0.975973
  },
  {
    "text": " просто",
    "startMs": 13280,
    "endMs": 13720,
    "timestampMs": 13500,
    "confidence": 0.987421
  },
  {
    "text": " хотел",
    "startMs": 13720,
    "endMs": 14020,
    "timestampMs": 13870,
    "confidence": 0.653867
  },
  {
    "text": " узнать,",
    "startMs": 14020,
    "endMs": 14380,
    "timestampMs": 14200,
    "confidence": 0.829151,
    "pageBreakAfter": true
  },
  {
    "text": " откуда",
    "startMs": 14380,
    "endMs": 14700,
    "timestampMs": 14540,
    "confidence": 0.997443
  },
  {
    "text": " у",
    "startMs": 14700,
    "endMs": 14800,
    "timestampMs": 14750,
    "confidence": 0.999413
  },
  {
    "text": " неё",
    "startMs": 14800,
    "endMs": 14920,
    "timestampMs": 14860,
    "confidence": 0.987001
  },
  {
    "text": " эта",
    "startMs": 14920,
    "endMs": 15120,
    "timestampMs": 15020,
    "confidence": 0.986359,
    "pageBreakAfter": true
  },
  {
    "text": " подвеска.",
    "startMs": 15120,
    "endMs": 15720,
    "timestampMs": 15420,
    "confidence": 0.999563,
    "pageBreakAfter": true
  },
  {
    "text": " И",
    "startMs": 15860,
    "endMs": 16120,
    "timestampMs": 15990,
    "confidence": 0.999214
  },
  {
    "text": " теперь",
    "startMs": 16120,
    "endMs": 16340,
    "timestampMs": 16230,
    "confidence": 0.999895
  },
  {
    "text": " я",
    "startMs": 16340,
    "endMs": 16540,
    "timestampMs": 16440,
    "confidence": 0.999691
  },
  {
    "text": " знаю!",
    "startMs": 16540,
    "endMs": 16800,
    "timestampMs": 16670,
    "confidence": 0.999651,
    "pageBreakAfter": true
  }
]
} />;
export const Video01 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="01-family" durationInFrames={413} premountFor={fps}>
      <ScenePicture src={staticFile("media/01-family.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header01 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions01 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header02 = () => <ClipHeader title={"Он показывает,\nКАК ТЫ УМРЁШЬ"} />;
export const Captions02 = () => <DynamicCaptions captions={
[
  {
    "text": " Почему",
    "startMs": 0,
    "endMs": 420,
    "timestampMs": 210,
    "confidence": 0.708564
  },
  {
    "text": " их",
    "startMs": 420,
    "endMs": 600,
    "timestampMs": 510,
    "confidence": 0.996302
  },
  {
    "text": " называют",
    "startMs": 600,
    "endMs": 940,
    "timestampMs": 770,
    "confidence": 0.999136,
    "pageBreakAfter": true
  },
  {
    "text": " кристаллами",
    "startMs": 940,
    "endMs": 1480,
    "timestampMs": 1210,
    "confidence": 0.979464
  },
  {
    "text": " смерти?",
    "startMs": 1480,
    "endMs": 1860,
    "timestampMs": 1670,
    "confidence": 0.99705,
    "pageBreakAfter": true
  },
  {
    "text": " Они",
    "startMs": 1960,
    "endMs": 2320,
    "timestampMs": 2140,
    "confidence": 0.789005
  },
  {
    "text": " убивают?",
    "startMs": 2320,
    "endMs": 2820,
    "timestampMs": 2570,
    "confidence": 0.99914,
    "pageBreakAfter": true
  },
  {
    "text": " Нет,",
    "startMs": 3020,
    "endMs": 3300,
    "timestampMs": 3160,
    "confidence": 0.997566
  },
  {
    "text": " это",
    "startMs": 3400,
    "endMs": 3500,
    "timestampMs": 3450,
    "confidence": 0.999657
  },
  {
    "text": " делают",
    "startMs": 3500,
    "endMs": 3780,
    "timestampMs": 3640,
    "confidence": 0.999492
  },
  {
    "text": " пули,",
    "startMs": 3780,
    "endMs": 4120,
    "timestampMs": 3950,
    "confidence": 0.811203,
    "pageBreakAfter": true
  },
  {
    "text": " Морти.",
    "startMs": 4220,
    "endMs": 4380,
    "timestampMs": 4300,
    "confidence": 0.966009,
    "pageBreakAfter": true
  },
  {
    "text": " Кристаллы",
    "startMs": 4440,
    "endMs": 4840,
    "timestampMs": 4640,
    "confidence": 0.99606
  },
  {
    "text": " смерти",
    "startMs": 4840,
    "endMs": 5160,
    "timestampMs": 5000,
    "confidence": 0.99979,
    "pageBreakAfter": true
  },
  {
    "text": " показывают,",
    "startMs": 5160,
    "endMs": 5740,
    "timestampMs": 5450,
    "confidence": 0.999673
  },
  {
    "text": " как",
    "startMs": 5800,
    "endMs": 5900,
    "timestampMs": 5850,
    "confidence": 0.999851
  },
  {
    "text": " ты",
    "startMs": 5900,
    "endMs": 6020,
    "timestampMs": 5960,
    "confidence": 0.999793,
    "pageBreakAfter": true
  },
  {
    "text": " умрёшь.",
    "startMs": 6020,
    "endMs": 6420,
    "timestampMs": 6220,
    "confidence": 0.934616,
    "pageBreakAfter": true
  },
  {
    "text": " Господи",
    "startMs": 10420,
    "endMs": 11000,
    "timestampMs": 10710,
    "confidence": 0.995279
  },
  {
    "text": " боже!",
    "startMs": 11000,
    "endMs": 11300,
    "timestampMs": 11150,
    "confidence": 0.864431,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 11520,
    "endMs": 11880,
    "timestampMs": 11700,
    "confidence": 0.958514
  },
  {
    "text": " умру",
    "startMs": 11880,
    "endMs": 12200,
    "timestampMs": 12040,
    "confidence": 0.99878
  },
  {
    "text": " миллион",
    "startMs": 12200,
    "endMs": 12560,
    "timestampMs": 12380,
    "confidence": 0.992732
  },
  {
    "text": " раз?",
    "startMs": 12560,
    "endMs": 12780,
    "timestampMs": 12670,
    "confidence": 0.998888,
    "pageBreakAfter": true
  },
  {
    "text": " Твоё",
    "startMs": 12940,
    "endMs": 13240,
    "timestampMs": 13090,
    "confidence": 0.928884
  },
  {
    "text": " будущее",
    "startMs": 13240,
    "endMs": 13600,
    "timestampMs": 13420,
    "confidence": 0.999647
  },
  {
    "text": " вытекает",
    "startMs": 13600,
    "endMs": 14080,
    "timestampMs": 13840,
    "confidence": 0.99969
  },
  {
    "text": " из",
    "startMs": 14080,
    "endMs": 14180,
    "timestampMs": 14130,
    "confidence": 0.997933,
    "pageBreakAfter": true
  },
  {
    "text": " твоего",
    "startMs": 14180,
    "endMs": 14480,
    "timestampMs": 14330,
    "confidence": 0.998656
  },
  {
    "text": " настоящего,",
    "startMs": 14480,
    "endMs": 15660,
    "timestampMs": 15070,
    "confidence": 0.682216,
    "pageBreakAfter": true
  },
  {
    "text": " которое",
    "startMs": 15760,
    "endMs": 15980,
    "timestampMs": 15870,
    "confidence": 0.97598
  },
  {
    "text": " постоянно",
    "startMs": 15980,
    "endMs": 16380,
    "timestampMs": 16180,
    "confidence": 0.99981,
    "pageBreakAfter": true
  },
  {
    "text": " меняется,",
    "startMs": 16380,
    "endMs": 16860,
    "timestampMs": 16620,
    "confidence": 0.999829
  },
  {
    "text": " если",
    "startMs": 16920,
    "endMs": 17040,
    "timestampMs": 16980,
    "confidence": 0.999919
  },
  {
    "text": " живёшь",
    "startMs": 17040,
    "endMs": 17320,
    "timestampMs": 17180,
    "confidence": 0.990974,
    "pageBreakAfter": true
  },
  {
    "text": " правильно.",
    "startMs": 17320,
    "endMs": 17720,
    "timestampMs": 17520,
    "confidence": 0.999926,
    "pageBreakAfter": true
  },
  {
    "text": " Все,",
    "startMs": 17920,
    "endMs": 18080,
    "timestampMs": 18000,
    "confidence": 0.548783
  },
  {
    "text": " кто",
    "startMs": 18140,
    "endMs": 18220,
    "timestampMs": 18180,
    "confidence": 0.999861
  },
  {
    "text": " в",
    "startMs": 18220,
    "endMs": 18340,
    "timestampMs": 18280,
    "confidence": 0.999908
  },
  {
    "text": " курсе",
    "startMs": 18340,
    "endMs": 18560,
    "timestampMs": 18450,
    "confidence": 0.999873,
    "pageBreakAfter": true
  },
  {
    "text": " своей",
    "startMs": 18560,
    "endMs": 18800,
    "timestampMs": 18680,
    "confidence": 0.99855
  },
  {
    "text": " будущей",
    "startMs": 18800,
    "endMs": 19140,
    "timestampMs": 18970,
    "confidence": 0.999314
  },
  {
    "text": " смерти,",
    "startMs": 19140,
    "endMs": 19500,
    "timestampMs": 19320,
    "confidence": 0.999839,
    "pageBreakAfter": true
  },
  {
    "text": " либо",
    "startMs": 19500,
    "endMs": 19660,
    "timestampMs": 19580,
    "confidence": 0.996533
  },
  {
    "text": " сраные",
    "startMs": 19660,
    "endMs": 20080,
    "timestampMs": 19870,
    "confidence": 0.961744
  },
  {
    "text": " зануды,",
    "startMs": 20080,
    "endMs": 20440,
    "timestampMs": 20260,
    "confidence": 0.904576
  },
  {
    "text": " либо",
    "startMs": 20560,
    "endMs": 20640,
    "timestampMs": 20600,
    "confidence": 0.999666,
    "pageBreakAfter": true
  },
  {
    "text": " без",
    "startMs": 20640,
    "endMs": 20820,
    "timestampMs": 20730,
    "confidence": 0.997657
  },
  {
    "text": " пяти",
    "startMs": 20820,
    "endMs": 21020,
    "timestampMs": 20920,
    "confidence": 0.997372
  },
  {
    "text": " минут",
    "startMs": 21020,
    "endMs": 21240,
    "timestampMs": 21130,
    "confidence": 0.999835,
    "pageBreakAfter": true
  },
  {
    "text": " покойники.",
    "startMs": 21240,
    "endMs": 21900,
    "timestampMs": 21570,
    "confidence": 0.991744,
    "pageBreakAfter": true
  },
  {
    "text": " Нагнись.",
    "startMs": 21960,
    "endMs": 22380,
    "timestampMs": 22170,
    "confidence": 0.297392,
    "pageBreakAfter": true
  },
  {
    "text": " Это",
    "startMs": 22760,
    "endMs": 23060,
    "timestampMs": 22910,
    "confidence": 0.850721,
    "pageBreakAfter": true
  },
  {
    "text": " такие...",
    "startMs": 24560,
    "endMs": 25140,
    "timestampMs": 24850,
    "confidence": 0.682431,
    "pageBreakAfter": true
  },
  {
    "text": " Кристальные",
    "startMs": 25140,
    "endMs": 25720,
    "timestampMs": 25430,
    "confidence": 0.982271
  },
  {
    "text": " браконьеры.",
    "startMs": 25720,
    "endMs": 26300,
    "timestampMs": 26010,
    "confidence": 0.984426,
    "pageBreakAfter": true
  },
  {
    "text": " Низшая",
    "startMs": 26400,
    "endMs": 26800,
    "timestampMs": 26600,
    "confidence": 0.98806
  },
  {
    "text": " форма",
    "startMs": 26800,
    "endMs": 27200,
    "timestampMs": 27000,
    "confidence": 0.999857
  },
  {
    "text": " жизни",
    "startMs": 27200,
    "endMs": 27540,
    "timestampMs": 27370,
    "confidence": 0.998471
  },
  {
    "text": " из",
    "startMs": 27540,
    "endMs": 27760,
    "timestampMs": 27650,
    "confidence": 0.997065,
    "pageBreakAfter": true
  },
  {
    "text": " низших.",
    "startMs": 27760,
    "endMs": 28140,
    "timestampMs": 27950,
    "confidence": 0.994335,
    "pageBreakAfter": true
  },
  {
    "text": " Они",
    "startMs": 28260,
    "endMs": 28400,
    "timestampMs": 28330,
    "confidence": 0.998874
  },
  {
    "text": " думают,",
    "startMs": 28400,
    "endMs": 28720,
    "timestampMs": 28560,
    "confidence": 0.999652
  },
  {
    "text": " что",
    "startMs": 28720,
    "endMs": 28840,
    "timestampMs": 28780,
    "confidence": 0.999946
  },
  {
    "text": " вся",
    "startMs": 28840,
    "endMs": 29000,
    "timestampMs": 28920,
    "confidence": 0.999802,
    "pageBreakAfter": true
  },
  {
    "text": " галактика",
    "startMs": 29000,
    "endMs": 29500,
    "timestampMs": 29250,
    "confidence": 0.994582
  },
  {
    "text": " —",
    "startMs": 29500,
    "endMs": 29600,
    "timestampMs": 29550,
    "confidence": 0.603989
  },
  {
    "text": " их",
    "startMs": 29600,
    "endMs": 29720,
    "timestampMs": 29660,
    "confidence": 0.745543
  },
  {
    "text": " личная",
    "startMs": 29720,
    "endMs": 30040,
    "timestampMs": 29880,
    "confidence": 0.998598,
    "pageBreakAfter": true
  },
  {
    "text": " свинка-копилка.",
    "startMs": 30040,
    "endMs": 30840,
    "timestampMs": 30440,
    "confidence": 0.992312,
    "pageBreakAfter": true
  },
  {
    "text": " Погоди,",
    "startMs": 30840,
    "endMs": 31380,
    "timestampMs": 31110,
    "confidence": 0.76399
  },
  {
    "text": " кто",
    "startMs": 31500,
    "endMs": 31760,
    "timestampMs": 31630,
    "confidence": 0.982867
  },
  {
    "text": " тогда",
    "startMs": 31760,
    "endMs": 31960,
    "timestampMs": 31860,
    "confidence": 0.806861
  },
  {
    "text": " мы?",
    "startMs": 31960,
    "endMs": 32240,
    "timestampMs": 32100,
    "confidence": 0.990335,
    "pageBreakAfter": true
  },
  {
    "text": " Мы",
    "startMs": 32360,
    "endMs": 32640,
    "timestampMs": 32500,
    "confidence": 0.979134
  },
  {
    "text": " Рик",
    "startMs": 32640,
    "endMs": 32900,
    "timestampMs": 32770,
    "confidence": 0.876245
  },
  {
    "text": " и",
    "startMs": 32900,
    "endMs": 33000,
    "timestampMs": 32950,
    "confidence": 0.998916
  },
  {
    "text": " Морти.",
    "startMs": 33000,
    "endMs": 33360,
    "timestampMs": 33180,
    "confidence": 0.966307,
    "pageBreakAfter": true
  },
  {
    "text": " И",
    "startMs": 33580,
    "endMs": 33840,
    "timestampMs": 33710,
    "confidence": 0.990551
  },
  {
    "text": " сейчас",
    "startMs": 33840,
    "endMs": 34060,
    "timestampMs": 33950,
    "confidence": 0.998858
  },
  {
    "text": " ты",
    "startMs": 34060,
    "endMs": 34240,
    "timestampMs": 34150,
    "confidence": 0.996654
  },
  {
    "text": " увидишь",
    "startMs": 34240,
    "endMs": 34540,
    "timestampMs": 34390,
    "confidence": 0.998484,
    "pageBreakAfter": true
  },
  {
    "text": " единственную",
    "startMs": 34540,
    "endMs": 35160,
    "timestampMs": 34850,
    "confidence": 0.997148
  },
  {
    "text": " пользу",
    "startMs": 35160,
    "endMs": 35520,
    "timestampMs": 35340,
    "confidence": 0.998669
  },
  {
    "text": " от",
    "startMs": 35520,
    "endMs": 35600,
    "timestampMs": 35560,
    "confidence": 0.988342,
    "pageBreakAfter": true
  },
  {
    "text": " этих",
    "startMs": 35600,
    "endMs": 35740,
    "timestampMs": 35670,
    "confidence": 0.99875
  },
  {
    "text": " кристаллов.",
    "startMs": 35740,
    "endMs": 36340,
    "timestampMs": 36040,
    "confidence": 0.998397,
    "pageBreakAfter": true
  },
  {
    "text": " Они",
    "startMs": 36420,
    "endMs": 36560,
    "timestampMs": 36490,
    "confidence": 0.995559
  },
  {
    "text": " показывают,",
    "startMs": 36560,
    "endMs": 37100,
    "timestampMs": 36830,
    "confidence": 0.999468
  },
  {
    "text": " когда",
    "startMs": 37120,
    "endMs": 37300,
    "timestampMs": 37210,
    "confidence": 0.99846,
    "pageBreakAfter": true
  },
  {
    "text": " эти",
    "startMs": 37300,
    "endMs": 37520,
    "timestampMs": 37410,
    "confidence": 0.99745
  },
  {
    "text": " ребята",
    "startMs": 37520,
    "endMs": 37740,
    "timestampMs": 37630,
    "confidence": 0.997891,
    "pageBreakAfter": true
  },
  {
    "text": " перезаряжаются.",
    "startMs": 37740,
    "endMs": 38580,
    "timestampMs": 38160,
    "confidence": 0.998676,
    "pageBreakAfter": true
  }
]
} />;
export const Video02 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="02-crystal" durationInFrames={936} premountFor={fps}>
      <ScenePicture src={staticFile("media/02-crystal.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header02 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions02 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header03 = () => <ClipHeader title={"Пятёрка за ответ?\nНет, за УВЕРЕННОСТЬ"} />;
export const Captions03 = () => <DynamicCaptions captions={
[
  {
    "text": " Кто",
    "startMs": 910,
    "endMs": 1270,
    "timestampMs": 1090,
    "confidence": 0.849294
  },
  {
    "text": " желает",
    "startMs": 1270,
    "endMs": 1650,
    "timestampMs": 1460,
    "confidence": 0.987499
  },
  {
    "text": " выйти",
    "startMs": 1650,
    "endMs": 1950,
    "timestampMs": 1800,
    "confidence": 0.993309
  },
  {
    "text": " к",
    "startMs": 1950,
    "endMs": 2030,
    "timestampMs": 1990,
    "confidence": 0.992524,
    "pageBreakAfter": true
  },
  {
    "text": " доске",
    "startMs": 2030,
    "endMs": 2390,
    "timestampMs": 2210,
    "confidence": 0.998614
  },
  {
    "text": " и",
    "startMs": 2390,
    "endMs": 2570,
    "timestampMs": 2480,
    "confidence": 0.984186
  },
  {
    "text": " показать",
    "startMs": 2570,
    "endMs": 2990,
    "timestampMs": 2780,
    "confidence": 0.996911
  },
  {
    "text": " мне",
    "startMs": 2990,
    "endMs": 3130,
    "timestampMs": 3060,
    "confidence": 0.980351,
    "pageBreakAfter": true
  },
  {
    "text": " пару",
    "startMs": 3130,
    "endMs": 3470,
    "timestampMs": 3300,
    "confidence": 0.993325
  },
  {
    "text": " сраных",
    "startMs": 3470,
    "endMs": 4030,
    "timestampMs": 3750,
    "confidence": 0.981521
  },
  {
    "text": " простейших",
    "startMs": 4030,
    "endMs": 4710,
    "timestampMs": 4370,
    "confidence": 0.950723,
    "pageBreakAfter": true
  },
  {
    "text": " чисел?",
    "startMs": 4710,
    "endMs": 4970,
    "timestampMs": 4840,
    "confidence": 0.97656,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 5030,
    "endMs": 5070,
    "timestampMs": 5050,
    "confidence": 0.604135
  },
  {
    "text": " люблю",
    "startMs": 5070,
    "endMs": 5170,
    "timestampMs": 5120,
    "confidence": 0.907072
  },
  {
    "text": " Морти.",
    "startMs": 5170,
    "endMs": 6010,
    "timestampMs": 5590,
    "confidence": 0.799331,
    "pageBreakAfter": true
  },
  {
    "text": " Морти,",
    "startMs": 6950,
    "endMs": 7390,
    "timestampMs": 7170,
    "confidence": 0.98591
  },
  {
    "text": " давай.",
    "startMs": 7570,
    "endMs": 7950,
    "timestampMs": 7760,
    "confidence": 0.984177,
    "pageBreakAfter": true
  },
  {
    "text": " Это",
    "startMs": 8930,
    "endMs": 9370,
    "timestampMs": 9150,
    "confidence": 0.379902,
    "pageBreakAfter": true
  },
  {
    "text": " не",
    "startMs": 14680,
    "endMs": 14820,
    "timestampMs": 14750,
    "confidence": 0.999644
  },
  {
    "text": " целое",
    "startMs": 14820,
    "endMs": 15260,
    "timestampMs": 15040,
    "confidence": 0.990888
  },
  {
    "text": " число.",
    "startMs": 15260,
    "endMs": 15740,
    "timestampMs": 15500,
    "confidence": 0.997672,
    "pageBreakAfter": true
  },
  {
    "text": " Очевидно,",
    "startMs": 16220,
    "endMs": 16660,
    "timestampMs": 16440,
    "confidence": 0.998483
  },
  {
    "text": " это",
    "startMs": 16660,
    "endMs": 16880,
    "timestampMs": 16770,
    "confidence": 0.998071
  },
  {
    "text": " не",
    "startMs": 16880,
    "endMs": 17000,
    "timestampMs": 16940,
    "confidence": 0.740107
  },
  {
    "text": " важно.",
    "startMs": 17000,
    "endMs": 17300,
    "timestampMs": 17150,
    "confidence": 0.999763,
    "pageBreakAfter": true
  },
  {
    "text": " Блин,",
    "startMs": 17480,
    "endMs": 17700,
    "timestampMs": 17590,
    "confidence": 0.99397
  },
  {
    "text": " Морти,",
    "startMs": 17800,
    "endMs": 17980,
    "timestampMs": 17890,
    "confidence": 0.99774
  },
  {
    "text": " ты",
    "startMs": 18040,
    "endMs": 18120,
    "timestampMs": 18080,
    "confidence": 0.999702
  },
  {
    "text": " профан",
    "startMs": 18120,
    "endMs": 18460,
    "timestampMs": 18290,
    "confidence": 0.98354,
    "pageBreakAfter": true
  },
  {
    "text": " в",
    "startMs": 18460,
    "endMs": 18560,
    "timestampMs": 18510,
    "confidence": 0.998415
  },
  {
    "text": " математике,",
    "startMs": 18560,
    "endMs": 19020,
    "timestampMs": 18790,
    "confidence": 0.999648
  },
  {
    "text": " но",
    "startMs": 19080,
    "endMs": 19160,
    "timestampMs": 19120,
    "confidence": 0.999657
  },
  {
    "text": " я",
    "startMs": 19160,
    "endMs": 19260,
    "timestampMs": 19210,
    "confidence": 0.999618,
    "pageBreakAfter": true
  },
  {
    "text": " поставлю",
    "startMs": 19260,
    "endMs": 19580,
    "timestampMs": 19420,
    "confidence": 0.849965
  },
  {
    "text": " тебе",
    "startMs": 19580,
    "endMs": 19740,
    "timestampMs": 19660,
    "confidence": 0.849965
  },
  {
    "text": " пятерку",
    "startMs": 19740,
    "endMs": 20220,
    "timestampMs": 19980,
    "confidence": 0.774824
  },
  {
    "text": " с",
    "startMs": 20220,
    "endMs": 20340,
    "timestampMs": 20280,
    "confidence": 0.99981,
    "pageBreakAfter": true
  },
  {
    "text": " плюсом",
    "startMs": 20340,
    "endMs": 20640,
    "timestampMs": 20490,
    "confidence": 0.998982
  },
  {
    "text": " за",
    "startMs": 20640,
    "endMs": 20760,
    "timestampMs": 20700,
    "confidence": 0.999398
  },
  {
    "text": " уверенность.",
    "startMs": 20760,
    "endMs": 21200,
    "timestampMs": 20980,
    "confidence": 0.999892,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 21220,
    "endMs": 21340,
    "timestampMs": 21280,
    "confidence": 0.99874
  },
  {
    "text": " просто",
    "startMs": 21340,
    "endMs": 21580,
    "timestampMs": 21460,
    "confidence": 0.999542
  },
  {
    "text": " делаю",
    "startMs": 21580,
    "endMs": 21900,
    "timestampMs": 21740,
    "confidence": 0.999559
  },
  {
    "text": " то,",
    "startMs": 21900,
    "endMs": 22000,
    "timestampMs": 21950,
    "confidence": 0.999886,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 22080,
    "endMs": 22200,
    "timestampMs": 22140,
    "confidence": 0.99985
  },
  {
    "text": " должен.",
    "startMs": 22200,
    "endMs": 22440,
    "timestampMs": 22320,
    "confidence": 0.889714,
    "pageBreakAfter": true
  }
]
} />;
export const Video03 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="03-math" durationInFrames={539} premountFor={fps}>
      <ScenePicture src={staticFile("media/03-math.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header03 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions03 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header04 = () => <ClipHeader title={"Самый токсичный\nпрямой эфир"} />;
export const Captions04 = () => <DynamicCaptions captions={
[
  {
    "text": " Далее,",
    "startMs": 50,
    "endMs": 190,
    "timestampMs": 120,
    "confidence": 0.64774
  },
  {
    "text": " непобедимый",
    "startMs": 310,
    "endMs": 890,
    "timestampMs": 600,
    "confidence": 0.978129,
    "pageBreakAfter": true
  },
  {
    "text": " супер-мальчик",
    "startMs": 890,
    "endMs": 1570,
    "timestampMs": 1230,
    "confidence": 0.776138
  },
  {
    "text": " пробивает",
    "startMs": 1570,
    "endMs": 2070,
    "timestampMs": 1820,
    "confidence": 0.959671,
    "pageBreakAfter": true
  },
  {
    "text": " последнюю",
    "startMs": 2070,
    "endMs": 2830,
    "timestampMs": 2450,
    "confidence": 0.996705
  },
  {
    "text": " линию",
    "startMs": 2830,
    "endMs": 3070,
    "timestampMs": 2950,
    "confidence": 0.998408
  },
  {
    "text": " обороны",
    "startMs": 3070,
    "endMs": 3490,
    "timestampMs": 3280,
    "confidence": 0.998271,
    "pageBreakAfter": true
  },
  {
    "text": " нашей",
    "startMs": 3490,
    "endMs": 3730,
    "timestampMs": 3610,
    "confidence": 0.994159
  },
  {
    "text": " страны.",
    "startMs": 3730,
    "endMs": 4210,
    "timestampMs": 3970,
    "confidence": 0.998781,
    "pageBreakAfter": true
  },
  {
    "text": " Неужели",
    "startMs": 4270,
    "endMs": 4750,
    "timestampMs": 4510,
    "confidence": 0.995649
  },
  {
    "text": " мы",
    "startMs": 4750,
    "endMs": 4890,
    "timestampMs": 4820,
    "confidence": 0.997298
  },
  {
    "text": " все",
    "startMs": 4890,
    "endMs": 5050,
    "timestampMs": 4970,
    "confidence": 0.988618
  },
  {
    "text": " падём",
    "startMs": 5050,
    "endMs": 5350,
    "timestampMs": 5200,
    "confidence": 0.592221,
    "pageBreakAfter": true
  },
  {
    "text": " от",
    "startMs": 5350,
    "endMs": 5450,
    "timestampMs": 5400,
    "confidence": 0.993001
  },
  {
    "text": " его",
    "startMs": 5450,
    "endMs": 5610,
    "timestampMs": 5530,
    "confidence": 0.996357
  },
  {
    "text": " смертоносного",
    "startMs": 5610,
    "endMs": 6250,
    "timestampMs": 5930,
    "confidence": 0.995617,
    "pageBreakAfter": true
  },
  {
    "text": " касания?",
    "startMs": 6250,
    "endMs": 6750,
    "timestampMs": 6500,
    "confidence": 0.993504,
    "pageBreakAfter": true
  },
  {
    "text": " Но",
    "startMs": 6990,
    "endMs": 7170,
    "timestampMs": 7080,
    "confidence": 0.815145
  },
  {
    "text": " сперва",
    "startMs": 7170,
    "endMs": 7530,
    "timestampMs": 7350,
    "confidence": 0.990654
  },
  {
    "text": " приколы",
    "startMs": 7530,
    "endMs": 8030,
    "timestampMs": 7780,
    "confidence": 0.820234
  },
  {
    "text": " нашего",
    "startMs": 8030,
    "endMs": 8290,
    "timestampMs": 8160,
    "confidence": 0.99771,
    "pageBreakAfter": true
  },
  {
    "text": " городка.",
    "startMs": 8290,
    "endMs": 8710,
    "timestampMs": 8500,
    "confidence": 0.942664,
    "pageBreakAfter": true
  },
  {
    "text": " В",
    "startMs": 8810,
    "endMs": 8910,
    "timestampMs": 8860,
    "confidence": 0.959434
  },
  {
    "text": " смысле,",
    "startMs": 8910,
    "endMs": 9190,
    "timestampMs": 9050,
    "confidence": 0.999353
  },
  {
    "text": " но",
    "startMs": 9250,
    "endMs": 9330,
    "timestampMs": 9290,
    "confidence": 0.924219
  },
  {
    "text": " сперва?",
    "startMs": 9330,
    "endMs": 9790,
    "timestampMs": 9560,
    "confidence": 0.999565,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 9950,
    "endMs": 10210,
    "timestampMs": 10080,
    "confidence": 0.994026
  },
  {
    "text": " уже",
    "startMs": 10210,
    "endMs": 10350,
    "timestampMs": 10280,
    "confidence": 0.997036
  },
  {
    "text": " сказал,",
    "startMs": 10350,
    "endMs": 10690,
    "timestampMs": 10520,
    "confidence": 0.999146
  },
  {
    "text": " далее.",
    "startMs": 10890,
    "endMs": 11090,
    "timestampMs": 10990,
    "confidence": 0.29026,
    "pageBreakAfter": true
  },
  {
    "text": " Всегда",
    "startMs": 11370,
    "endMs": 11690,
    "timestampMs": 11530,
    "confidence": 0.997669
  },
  {
    "text": " ты",
    "startMs": 11690,
    "endMs": 11810,
    "timestampMs": 11750,
    "confidence": 0.968699
  },
  {
    "text": " так",
    "startMs": 11810,
    "endMs": 11950,
    "timestampMs": 11880,
    "confidence": 0.999923
  },
  {
    "text": " делаешь.",
    "startMs": 11950,
    "endMs": 12410,
    "timestampMs": 12180,
    "confidence": 0.980886,
    "pageBreakAfter": true
  },
  {
    "text": " Ни",
    "startMs": 12490,
    "endMs": 12670,
    "timestampMs": 12580,
    "confidence": 0.775565
  },
  {
    "text": " хрена",
    "startMs": 12670,
    "endMs": 12890,
    "timestampMs": 12780,
    "confidence": 0.988628
  },
  {
    "text": " я",
    "startMs": 12890,
    "endMs": 13010,
    "timestampMs": 12950,
    "confidence": 0.989066
  },
  {
    "text": " не",
    "startMs": 13010,
    "endMs": 13090,
    "timestampMs": 13050,
    "confidence": 0.998991,
    "pageBreakAfter": true
  },
  {
    "text": " делаю,",
    "startMs": 13090,
    "endMs": 13370,
    "timestampMs": 13230,
    "confidence": 0.997621
  },
  {
    "text": " не",
    "startMs": 13390,
    "endMs": 13490,
    "timestampMs": 13440,
    "confidence": 0.999499
  },
  {
    "text": " надо",
    "startMs": 13490,
    "endMs": 13630,
    "timestampMs": 13560,
    "confidence": 0.999852
  },
  {
    "text": " меня",
    "startMs": 13630,
    "endMs": 13750,
    "timestampMs": 13690,
    "confidence": 0.883891,
    "pageBreakAfter": true
  },
  {
    "text": " газлайтить.",
    "startMs": 13750,
    "endMs": 14370,
    "timestampMs": 14060,
    "confidence": 0.941283,
    "pageBreakAfter": true
  },
  {
    "text": " Газлайтинга",
    "startMs": 14550,
    "endMs": 15030,
    "timestampMs": 14790,
    "confidence": 0.994782
  },
  {
    "text": " не",
    "startMs": 15030,
    "endMs": 15170,
    "timestampMs": 15100,
    "confidence": 0.999518,
    "pageBreakAfter": true
  },
  {
    "text": " существует,",
    "startMs": 15170,
    "endMs": 15730,
    "timestampMs": 15450,
    "confidence": 0.999728
  },
  {
    "text": " его",
    "startMs": 15810,
    "endMs": 15950,
    "timestampMs": 15880,
    "confidence": 0.998585
  },
  {
    "text": " выдумали",
    "startMs": 15950,
    "endMs": 16270,
    "timestampMs": 16110,
    "confidence": 0.998779,
    "pageBreakAfter": true
  },
  {
    "text": " психи,",
    "startMs": 16270,
    "endMs": 16750,
    "timestampMs": 16510,
    "confidence": 0.996226
  },
  {
    "text": " ебутые",
    "startMs": 16810,
    "endMs": 17170,
    "timestampMs": 16990,
    "confidence": 0.543445
  },
  {
    "text": " вроде",
    "startMs": 17170,
    "endMs": 17390,
    "timestampMs": 17280,
    "confidence": 0.97294,
    "pageBreakAfter": true
  },
  {
    "text": " тебя.",
    "startMs": 17390,
    "endMs": 17630,
    "timestampMs": 17510,
    "confidence": 0.992932,
    "pageBreakAfter": true
  }
]
} />;
export const Video04 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="04-news" durationInFrames={461} premountFor={fps}>
      <ScenePicture src={staticFile("media/04-news.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header04 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions04 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header05 = () => <ClipHeader title={"Морти решил\nобмануть судьбу"} series={"Кристалл смерти"} part={1} parts={3} />;
export const Captions05 = () => <DynamicCaptions captions={
[
  {
    "text": " Ты",
    "startMs": 1460,
    "endMs": 1900,
    "timestampMs": 1680,
    "confidence": 0.927868
  },
  {
    "text": " пользуешься",
    "startMs": 1900,
    "endMs": 2640,
    "timestampMs": 2270,
    "confidence": 0.996493
  },
  {
    "text": " ими",
    "startMs": 2640,
    "endMs": 2780,
    "timestampMs": 2710,
    "confidence": 0.995429,
    "pageBreakAfter": true
  },
  {
    "text": " только",
    "startMs": 2780,
    "endMs": 2980,
    "timestampMs": 2880,
    "confidence": 0.954235
  },
  {
    "text": " чтобы",
    "startMs": 2980,
    "endMs": 3260,
    "timestampMs": 3120,
    "confidence": 0.826815
  },
  {
    "text": " побеждать?",
    "startMs": 3260,
    "endMs": 3860,
    "timestampMs": 3560,
    "confidence": 0.99513,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 3960,
    "endMs": 4100,
    "timestampMs": 4030,
    "confidence": 0.986384
  },
  {
    "text": " ими",
    "startMs": 4100,
    "endMs": 4240,
    "timestampMs": 4170,
    "confidence": 0.987387
  },
  {
    "text": " не",
    "startMs": 4240,
    "endMs": 4380,
    "timestampMs": 4310,
    "confidence": 0.99983
  },
  {
    "text": " пользуюсь.",
    "startMs": 4380,
    "endMs": 4900,
    "timestampMs": 4640,
    "confidence": 0.999577,
    "pageBreakAfter": true
  },
  {
    "text": " Люди,",
    "startMs": 5000,
    "endMs": 5240,
    "timestampMs": 5120,
    "confidence": 0.999368
  },
  {
    "text": " которые",
    "startMs": 5340,
    "endMs": 5520,
    "timestampMs": 5430,
    "confidence": 0.999587
  },
  {
    "text": " всю",
    "startMs": 5520,
    "endMs": 5720,
    "timestampMs": 5620,
    "confidence": 0.997876
  },
  {
    "text": " жизнь",
    "startMs": 5720,
    "endMs": 5920,
    "timestampMs": 5820,
    "confidence": 0.99963,
    "pageBreakAfter": true
  },
  {
    "text": " пытаются",
    "startMs": 5920,
    "endMs": 6300,
    "timestampMs": 6110,
    "confidence": 0.999791
  },
  {
    "text": " избежать",
    "startMs": 6300,
    "endMs": 6660,
    "timestampMs": 6480,
    "confidence": 0.999715,
    "pageBreakAfter": true
  },
  {
    "text": " смерти,",
    "startMs": 6660,
    "endMs": 7040,
    "timestampMs": 6850,
    "confidence": 0.99793
  },
  {
    "text": " уже",
    "startMs": 7040,
    "endMs": 7260,
    "timestampMs": 7150,
    "confidence": 0.997163
  },
  {
    "text": " мертвы.",
    "startMs": 7260,
    "endMs": 7700,
    "timestampMs": 7480,
    "confidence": 0.979763,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 7840,
    "endMs": 8000,
    "timestampMs": 7920,
    "confidence": 0.997371
  },
  {
    "text": " еще",
    "startMs": 8000,
    "endMs": 8160,
    "timestampMs": 8080,
    "confidence": 0.28151
  },
  {
    "text": " они",
    "startMs": 8160,
    "endMs": 8320,
    "timestampMs": 8240,
    "confidence": 0.999473
  },
  {
    "text": " богаты,",
    "startMs": 8320,
    "endMs": 8780,
    "timestampMs": 8550,
    "confidence": 0.856618,
    "pageBreakAfter": true
  },
  {
    "text": " и",
    "startMs": 8860,
    "endMs": 8920,
    "timestampMs": 8890,
    "confidence": 0.989963
  },
  {
    "text": " я",
    "startMs": 8920,
    "endMs": 9020,
    "timestampMs": 8970,
    "confidence": 0.999869
  },
  {
    "text": " люблю",
    "startMs": 9020,
    "endMs": 9240,
    "timestampMs": 9130,
    "confidence": 0.999435
  },
  {
    "text": " жить",
    "startMs": 9240,
    "endMs": 9429,
    "timestampMs": 9334,
    "confidence": 0.671082,
    "pageBreakAfter": true
  },
  {
    "text": " на",
    "startMs": 9429,
    "endMs": 9523,
    "timestampMs": 9476,
    "confidence": 0.671082
  },
  {
    "text": " их",
    "startMs": 9523,
    "endMs": 9617,
    "timestampMs": 9570,
    "confidence": 0.671082
  },
  {
    "text": " деньги.",
    "startMs": 9617,
    "endMs": 9900,
    "timestampMs": 9758,
    "confidence": 0.671082,
    "pageBreakAfter": true
  },
  {
    "text": " О,",
    "startMs": 10200,
    "endMs": 10460,
    "timestampMs": 10330,
    "confidence": 0.991225,
    "pageBreakAfter": true
  },
  {
    "text": " Господи!",
    "startMs": 10900,
    "endMs": 11180,
    "timestampMs": 11040,
    "confidence": 0.85491,
    "pageBreakAfter": true
  },
  {
    "text": " Джессика!",
    "startMs": 11840,
    "endMs": 12400,
    "timestampMs": 12120,
    "confidence": 0.997119,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 14000,
    "endMs": 14560,
    "timestampMs": 14280,
    "confidence": 0.959313
  },
  {
    "text": " люблю",
    "startMs": 14560,
    "endMs": 15080,
    "timestampMs": 14820,
    "confidence": 0.999208
  },
  {
    "text": " тебя.",
    "startMs": 15080,
    "endMs": 15700,
    "timestampMs": 15390,
    "confidence": 0.999877,
    "pageBreakAfter": true
  },
  {
    "text": " Морти.",
    "startMs": 17100,
    "endMs": 17660,
    "timestampMs": 17380,
    "confidence": 0.213028,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 19080,
    "endMs": 19640,
    "timestampMs": 19360,
    "confidence": 0.972035
  },
  {
    "text": " люблю",
    "startMs": 19640,
    "endMs": 20100,
    "timestampMs": 19870,
    "confidence": 0.999255
  },
  {
    "text": " тебя.",
    "startMs": 20100,
    "endMs": 20700,
    "timestampMs": 20400,
    "confidence": 0.999931,
    "pageBreakAfter": true
  },
  {
    "text": " Джессика!",
    "startMs": 20820,
    "endMs": 21380,
    "timestampMs": 21100,
    "confidence": 0.996142,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 21580,
    "endMs": 22140,
    "timestampMs": 21860,
    "confidence": 0.990325
  },
  {
    "text": " хочу",
    "startMs": 22140,
    "endMs": 22400,
    "timestampMs": 22270,
    "confidence": 0.999166
  },
  {
    "text": " умереть",
    "startMs": 22400,
    "endMs": 22720,
    "timestampMs": 22560,
    "confidence": 0.992378
  },
  {
    "text": " с",
    "startMs": 22720,
    "endMs": 22840,
    "timestampMs": 22780,
    "confidence": 0.889297,
    "pageBreakAfter": true
  },
  {
    "text": " Джессикой!",
    "startMs": 22840,
    "endMs": 23300,
    "timestampMs": 23070,
    "confidence": 0.999546,
    "pageBreakAfter": true
  },
  {
    "text": " Что",
    "startMs": 32030,
    "endMs": 32590,
    "timestampMs": 32310,
    "confidence": 0.996006
  },
  {
    "text": " ты",
    "startMs": 32590,
    "endMs": 32730,
    "timestampMs": 32660,
    "confidence": 0.999885
  },
  {
    "text": " делаешь?",
    "startMs": 32730,
    "endMs": 33170,
    "timestampMs": 32950,
    "confidence": 0.999715,
    "pageBreakAfter": true
  },
  {
    "text": " Можно",
    "startMs": 33690,
    "endMs": 34250,
    "timestampMs": 33970,
    "confidence": 0.610175
  },
  {
    "text": " я",
    "startMs": 34250,
    "endMs": 34430,
    "timestampMs": 34340,
    "confidence": 0.990452
  },
  {
    "text": " поведу?",
    "startMs": 34430,
    "endMs": 34910,
    "timestampMs": 34670,
    "confidence": 0.798035,
    "pageBreakAfter": true
  },
  {
    "text": " Зачем?",
    "startMs": 35030,
    "endMs": 35410,
    "timestampMs": 35220,
    "confidence": 0.998491,
    "pageBreakAfter": true
  },
  {
    "text": " Ну,",
    "startMs": 35730,
    "endMs": 36070,
    "timestampMs": 35900,
    "confidence": 0.944663,
    "pageBreakAfter": true
  },
  {
    "text": " ощущение",
    "startMs": 36370,
    "endMs": 36950,
    "timestampMs": 36660,
    "confidence": 0.969971
  },
  {
    "text": " свободной",
    "startMs": 36950,
    "endMs": 37510,
    "timestampMs": 37230,
    "confidence": 0.999762,
    "pageBreakAfter": true
  },
  {
    "text": " дороги.",
    "startMs": 37510,
    "endMs": 37990,
    "timestampMs": 37750,
    "confidence": 0.99989,
    "pageBreakAfter": true
  },
  {
    "text": " Ладно.",
    "startMs": 38330,
    "endMs": 38650,
    "timestampMs": 38490,
    "confidence": 0.990146,
    "pageBreakAfter": true
  },
  {
    "text": " Чей",
    "startMs": 39150,
    "endMs": 39470,
    "timestampMs": 39310,
    "confidence": 0.988945
  },
  {
    "text": " это",
    "startMs": 39470,
    "endMs": 39670,
    "timestampMs": 39570,
    "confidence": 0.997273
  },
  {
    "text": " внук?",
    "startMs": 39670,
    "endMs": 40050,
    "timestampMs": 39860,
    "confidence": 0.999058,
    "pageBreakAfter": true
  },
  {
    "text": " Мне",
    "startMs": 40130,
    "endMs": 40290,
    "timestampMs": 40210,
    "confidence": 0.997697
  },
  {
    "text": " нравится",
    "startMs": 40290,
    "endMs": 40690,
    "timestampMs": 40490,
    "confidence": 0.999195
  },
  {
    "text": " его",
    "startMs": 40690,
    "endMs": 40910,
    "timestampMs": 40800,
    "confidence": 0.998892
  },
  {
    "text": " стиль.",
    "startMs": 40910,
    "endMs": 41230,
    "timestampMs": 41070,
    "confidence": 0.99988,
    "pageBreakAfter": true
  },
  {
    "text": " Морти,",
    "startMs": 42770,
    "endMs": 43090,
    "timestampMs": 42930,
    "confidence": 0.966181
  },
  {
    "text": " ты",
    "startMs": 43130,
    "endMs": 43210,
    "timestampMs": 43170,
    "confidence": 0.999806
  },
  {
    "text": " в",
    "startMs": 43210,
    "endMs": 43310,
    "timestampMs": 43260,
    "confidence": 0.999531
  },
  {
    "text": " курсе,",
    "startMs": 43310,
    "endMs": 43530,
    "timestampMs": 43420,
    "confidence": 0.995466,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 43610,
    "endMs": 43690,
    "timestampMs": 43650,
    "confidence": 0.999926
  },
  {
    "text": " открытый",
    "startMs": 43690,
    "endMs": 44050,
    "timestampMs": 43870,
    "confidence": 0.988414
  },
  {
    "text": " космос",
    "startMs": 44050,
    "endMs": 44350,
    "timestampMs": 44200,
    "confidence": 0.987307,
    "pageBreakAfter": true
  },
  {
    "text": " наверху?",
    "startMs": 44350,
    "endMs": 44770,
    "timestampMs": 44560,
    "confidence": 0.993475,
    "pageBreakAfter": true
  },
  {
    "text": " Да,",
    "startMs": 44830,
    "endMs": 44990,
    "timestampMs": 44910,
    "confidence": 0.838237
  },
  {
    "text": " да,",
    "startMs": 45030,
    "endMs": 45130,
    "timestampMs": 45080,
    "confidence": 0.988639
  },
  {
    "text": " я",
    "startMs": 45210,
    "endMs": 45330,
    "timestampMs": 45270,
    "confidence": 0.99749
  },
  {
    "text": " просто...",
    "startMs": 45330,
    "endMs": 46130,
    "timestampMs": 45730,
    "confidence": 0.846797,
    "pageBreakAfter": true
  },
  {
    "text": " Следую",
    "startMs": 47450,
    "endMs": 47770,
    "timestampMs": 47610,
    "confidence": 0.713745
  },
  {
    "text": " инстинктам.",
    "startMs": 47770,
    "endMs": 48090,
    "timestampMs": 47930,
    "confidence": 0.880675,
    "pageBreakAfter": true
  },
  {
    "text": " Морти,",
    "startMs": 48370,
    "endMs": 48690,
    "timestampMs": 48530,
    "confidence": 0.729286
  },
  {
    "text": " полети",
    "startMs": 48710,
    "endMs": 49050,
    "timestampMs": 48880,
    "confidence": 0.972694
  },
  {
    "text": " наверх?",
    "startMs": 49050,
    "endMs": 49430,
    "timestampMs": 49240,
    "confidence": 0.999223,
    "pageBreakAfter": true
  },
  {
    "text": " Нет,",
    "startMs": 49550,
    "endMs": 49810,
    "timestampMs": 49680,
    "confidence": 0.990239
  },
  {
    "text": " из-за",
    "startMs": 49910,
    "endMs": 50088,
    "timestampMs": 49999,
    "confidence": 0.389419
  },
  {
    "text": " тебя",
    "startMs": 50088,
    "endMs": 50230,
    "timestampMs": 50159,
    "confidence": 0.389419,
    "pageBreakAfter": true
  },
  {
    "text": " неправильно",
    "startMs": 50230,
    "endMs": 50770,
    "timestampMs": 50500,
    "confidence": 0.983551
  },
  {
    "text": " умру.",
    "startMs": 50770,
    "endMs": 51070,
    "timestampMs": 50920,
    "confidence": 0.992268,
    "pageBreakAfter": true
  },
  {
    "text": " Минуточку,",
    "startMs": 51390,
    "endMs": 51710,
    "timestampMs": 51550,
    "confidence": 0.999197
  },
  {
    "text": " что?",
    "startMs": 51790,
    "endMs": 51930,
    "timestampMs": 51860,
    "confidence": 0.999797,
    "pageBreakAfter": true
  },
  {
    "text": " Морти,",
    "startMs": 52050,
    "endMs": 52330,
    "timestampMs": 52190,
    "confidence": 0.997943
  },
  {
    "text": " тебя",
    "startMs": 52430,
    "endMs": 52510,
    "timestampMs": 52470,
    "confidence": 0.791026
  },
  {
    "text": " что,",
    "startMs": 52510,
    "endMs": 52630,
    "timestampMs": 52570,
    "confidence": 0.9236,
    "pageBreakAfter": true
  },
  {
    "text": " кристалл",
    "startMs": 52690,
    "endMs": 53050,
    "timestampMs": 52870,
    "confidence": 0.960196
  },
  {
    "text": " смерти",
    "startMs": 53050,
    "endMs": 53350,
    "timestampMs": 53200,
    "confidence": 0.997682
  },
  {
    "text": " в",
    "startMs": 53350,
    "endMs": 53430,
    "timestampMs": 53390,
    "confidence": 0.999825,
    "pageBreakAfter": true
  },
  {
    "text": " кармане?",
    "startMs": 53430,
    "endMs": 53750,
    "timestampMs": 53590,
    "confidence": 0.999015,
    "pageBreakAfter": true
  },
  {
    "text": " Нет,",
    "startMs": 53890,
    "endMs": 54090,
    "timestampMs": 53990,
    "confidence": 0.997779
  },
  {
    "text": " возможно.",
    "startMs": 54250,
    "endMs": 54530,
    "timestampMs": 54390,
    "confidence": 0.99749,
    "pageBreakAfter": true
  },
  {
    "text": " Зачем",
    "startMs": 54740,
    "endMs": 54960,
    "timestampMs": 54850,
    "confidence": 0.997449
  },
  {
    "text": " ты",
    "startMs": 54960,
    "endMs": 55080,
    "timestampMs": 55020,
    "confidence": 0.999331
  },
  {
    "text": " спёр",
    "startMs": 55080,
    "endMs": 55300,
    "timestampMs": 55190,
    "confidence": 0.821874
  },
  {
    "text": " кристалл",
    "startMs": 55300,
    "endMs": 55680,
    "timestampMs": 55490,
    "confidence": 0.996408,
    "pageBreakAfter": true
  },
  {
    "text": " смерти?",
    "startMs": 55680,
    "endMs": 55820,
    "timestampMs": 55750,
    "confidence": 0.999815,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 55820,
    "endMs": 55940,
    "timestampMs": 55880,
    "confidence": 0.892744
  },
  {
    "text": " Хочешь",
    "startMs": 55960,
    "endMs": 56140,
    "timestampMs": 56050,
    "confidence": 0.530926
  },
  {
    "text": " умереть",
    "startMs": 56140,
    "endMs": 56440,
    "timestampMs": 56290,
    "confidence": 0.816773,
    "pageBreakAfter": true
  },
  {
    "text": " стариком?",
    "startMs": 56440,
    "endMs": 56860,
    "timestampMs": 56650,
    "confidence": 0.737592,
    "pageBreakAfter": true
  },
  {
    "text": " Тогда",
    "startMs": 57040,
    "endMs": 57220,
    "timestampMs": 57130,
    "confidence": 0.941684
  },
  {
    "text": " хватит",
    "startMs": 57220,
    "endMs": 57620,
    "timestampMs": 57420,
    "confidence": 0.957997
  },
  {
    "text": " рулить.",
    "startMs": 57620,
    "endMs": 58000,
    "timestampMs": 57810,
    "confidence": 0.90563,
    "pageBreakAfter": true
  },
  {
    "text": " Нет.",
    "startMs": 58040,
    "endMs": 58180,
    "timestampMs": 58110,
    "confidence": 0.772366,
    "pageBreakAfter": true
  },
  {
    "text": " Сукин",
    "startMs": 58180,
    "endMs": 58680,
    "timestampMs": 58430,
    "confidence": 0.3184
  },
  {
    "text": " ты,",
    "startMs": 58680,
    "endMs": 58780,
    "timestampMs": 58730,
    "confidence": 0.774135
  },
  {
    "text": " сын,",
    "startMs": 58900,
    "endMs": 59060,
    "timestampMs": 58980,
    "confidence": 0.528036
  },
  {
    "text": " дай",
    "startMs": 59080,
    "endMs": 59240,
    "timestampMs": 59160,
    "confidence": 0.496645,
    "pageBreakAfter": true
  },
  {
    "text": " сюда",
    "startMs": 59240,
    "endMs": 59360,
    "timestampMs": 59300,
    "confidence": 0.395279
  },
  {
    "text": " штурвал,",
    "startMs": 59360,
    "endMs": 59780,
    "timestampMs": 59570,
    "confidence": 0.5922
  },
  {
    "text": " Морти!",
    "startMs": 59840,
    "endMs": 60120,
    "timestampMs": 59980,
    "confidence": 0.364927,
    "pageBreakAfter": true
  },
  {
    "text": " Черт",
    "startMs": 60260,
    "endMs": 60440,
    "timestampMs": 60350,
    "confidence": 0.48159
  },
  {
    "text": " тебя!",
    "startMs": 60440,
    "endMs": 60880,
    "timestampMs": 60660,
    "confidence": 0.525842,
    "pageBreakAfter": true
  }
]
} />;
export const Video05 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="05-destiny-1" durationInFrames={1679} premountFor={fps}>
      <ScenePicture src={staticFile("media/05-destiny-1.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header05 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions05 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header06 = () => <ClipHeader title={"Одно решение —\nи ВСЁ ПОШЛО НЕ ТАК"} series={"Кристалл смерти"} part={2} parts={3} />;
export const Captions06 = () => <DynamicCaptions captions={
[
  {
    "text": " Чё,",
    "startMs": 0,
    "endMs": 220,
    "timestampMs": 110,
    "confidence": 0.544413
  },
  {
    "text": " крутой,",
    "startMs": 360,
    "endMs": 600,
    "timestampMs": 480,
    "confidence": 0.964884
  },
  {
    "text": " да?",
    "startMs": 760,
    "endMs": 800,
    "timestampMs": 780,
    "confidence": 0.999165,
    "pageBreakAfter": true
  },
  {
    "text": " Думаешь,",
    "startMs": 880,
    "endMs": 1180,
    "timestampMs": 1030,
    "confidence": 0.949087
  },
  {
    "text": " в",
    "startMs": 1260,
    "endMs": 1340,
    "timestampMs": 1300,
    "confidence": 0.999799
  },
  {
    "text": " этой",
    "startMs": 1340,
    "endMs": 1420,
    "timestampMs": 1380,
    "confidence": 0.999713
  },
  {
    "text": " школе",
    "startMs": 1420,
    "endMs": 1700,
    "timestampMs": 1560,
    "confidence": 0.997352,
    "pageBreakAfter": true
  },
  {
    "text": " главный?",
    "startMs": 1700,
    "endMs": 2120,
    "timestampMs": 1910,
    "confidence": 0.979849,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 2240,
    "endMs": 2680,
    "timestampMs": 2460,
    "confidence": 0.249683
  },
  {
    "text": " если",
    "startMs": 2680,
    "endMs": 3080,
    "timestampMs": 2880,
    "confidence": 0.999736
  },
  {
    "text": " я",
    "startMs": 3080,
    "endMs": 3180,
    "timestampMs": 3130,
    "confidence": 0.98968
  },
  {
    "text": " тебя",
    "startMs": 3180,
    "endMs": 3260,
    "timestampMs": 3220,
    "confidence": 0.999564,
    "pageBreakAfter": true
  },
  {
    "text": " убью,",
    "startMs": 3260,
    "endMs": 3620,
    "timestampMs": 3440,
    "confidence": 0.99979
  },
  {
    "text": " всё",
    "startMs": 3720,
    "endMs": 3900,
    "timestampMs": 3810,
    "confidence": 0.96753
  },
  {
    "text": " равно",
    "startMs": 3900,
    "endMs": 4060,
    "timestampMs": 3980,
    "confidence": 0.999715
  },
  {
    "text": " будешь",
    "startMs": 4060,
    "endMs": 4240,
    "timestampMs": 4150,
    "confidence": 0.998672,
    "pageBreakAfter": true
  },
  {
    "text": " выделываться?",
    "startMs": 4240,
    "endMs": 4900,
    "timestampMs": 4570,
    "confidence": 0.998406,
    "pageBreakAfter": true
  },
  {
    "text": " Только",
    "startMs": 5100,
    "endMs": 5460,
    "timestampMs": 5280,
    "confidence": 0.99852
  },
  {
    "text": " при",
    "startMs": 5460,
    "endMs": 5700,
    "timestampMs": 5580,
    "confidence": 0.999778
  },
  {
    "text": " том",
    "startMs": 5700,
    "endMs": 5760,
    "timestampMs": 5730,
    "confidence": 0.999022
  },
  {
    "text": " раскладе,",
    "startMs": 5760,
    "endMs": 6160,
    "timestampMs": 5960,
    "confidence": 0.997486,
    "pageBreakAfter": true
  },
  {
    "text": " если",
    "startMs": 6180,
    "endMs": 6360,
    "timestampMs": 6270,
    "confidence": 0.999195
  },
  {
    "text": " мультфильм",
    "startMs": 6360,
    "endMs": 6740,
    "timestampMs": 6550,
    "confidence": 0.604847
  },
  {
    "text": " «Тайна",
    "startMs": 6740,
    "endMs": 6980,
    "timestampMs": 6860,
    "confidence": 0.93472,
    "pageBreakAfter": true
  },
  {
    "text": " Ку-Ку»",
    "startMs": 6980,
    "endMs": 7360,
    "timestampMs": 7170,
    "confidence": 0.697259
  },
  {
    "text": " окажется",
    "startMs": 7360,
    "endMs": 7740,
    "timestampMs": 7550,
    "confidence": 0.999427
  },
  {
    "text": " правдой,",
    "startMs": 7740,
    "endMs": 8100,
    "timestampMs": 7920,
    "confidence": 0.993958,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 8200,
    "endMs": 8280,
    "timestampMs": 8240,
    "confidence": 0.992887
  },
  {
    "text": " вряд",
    "startMs": 8280,
    "endMs": 8740,
    "timestampMs": 8510,
    "confidence": 0.999543
  },
  {
    "text": " ли.",
    "startMs": 8740,
    "endMs": 8880,
    "timestampMs": 8810,
    "confidence": 0.999891,
    "pageBreakAfter": true
  },
  {
    "text": " Из",
    "startMs": 9020,
    "endMs": 9280,
    "timestampMs": 9150,
    "confidence": 0.869289
  },
  {
    "text": " надёжного",
    "startMs": 9280,
    "endMs": 9840,
    "timestampMs": 9560,
    "confidence": 0.997824
  },
  {
    "text": " источника",
    "startMs": 9840,
    "endMs": 10400,
    "timestampMs": 10120,
    "confidence": 0.999871
  },
  {
    "text": " я",
    "startMs": 10400,
    "endMs": 10580,
    "timestampMs": 10490,
    "confidence": 0.998289,
    "pageBreakAfter": true
  },
  {
    "text": " знаю,",
    "startMs": 10580,
    "endMs": 10880,
    "timestampMs": 10730,
    "confidence": 0.999782
  },
  {
    "text": " что",
    "startMs": 10920,
    "endMs": 11080,
    "timestampMs": 11000,
    "confidence": 0.999965
  },
  {
    "text": " ты",
    "startMs": 11080,
    "endMs": 11260,
    "timestampMs": 11170,
    "confidence": 0.999556
  },
  {
    "text": " не",
    "startMs": 11260,
    "endMs": 11420,
    "timestampMs": 11340,
    "confidence": 0.999838,
    "pageBreakAfter": true
  },
  {
    "text": " станешь",
    "startMs": 11420,
    "endMs": 11820,
    "timestampMs": 11620,
    "confidence": 0.999608
  },
  {
    "text": " убивать",
    "startMs": 11820,
    "endMs": 12200,
    "timestampMs": 12010,
    "confidence": 0.999555
  },
  {
    "text": " меня.",
    "startMs": 12200,
    "endMs": 12420,
    "timestampMs": 12310,
    "confidence": 0.999673,
    "pageBreakAfter": true
  },
  {
    "text": " Почему-почему",
    "startMs": 12600,
    "endMs": 13020,
    "timestampMs": 12810,
    "confidence": 0.998502
  },
  {
    "text": " просто",
    "startMs": 13020,
    "endMs": 13320,
    "timestampMs": 13170,
    "confidence": 0.994215
  },
  {
    "text": " не",
    "startMs": 13320,
    "endMs": 13500,
    "timestampMs": 13410,
    "confidence": 0.999704,
    "pageBreakAfter": true
  },
  {
    "text": " плыть",
    "startMs": 13500,
    "endMs": 13700,
    "timestampMs": 13600,
    "confidence": 0.998211
  },
  {
    "text": " по",
    "startMs": 13700,
    "endMs": 13840,
    "timestampMs": 13770,
    "confidence": 0.997976
  },
  {
    "text": " течению",
    "startMs": 13840,
    "endMs": 14300,
    "timestampMs": 14070,
    "confidence": 0.999727
  },
  {
    "text": " в",
    "startMs": 14300,
    "endMs": 14440,
    "timestampMs": 14370,
    "confidence": 0.954805,
    "pageBreakAfter": true
  },
  {
    "text": " гармонии",
    "startMs": 14440,
    "endMs": 14920,
    "timestampMs": 14680,
    "confidence": 0.999668
  },
  {
    "text": " с",
    "startMs": 14920,
    "endMs": 15080,
    "timestampMs": 15000,
    "confidence": 0.999107
  },
  {
    "text": " собой,",
    "startMs": 15080,
    "endMs": 15360,
    "timestampMs": 15220,
    "confidence": 0.999516
  },
  {
    "text": " как",
    "startMs": 15420,
    "endMs": 15580,
    "timestampMs": 15500,
    "confidence": 0.999448,
    "pageBreakAfter": true
  },
  {
    "text": " это",
    "startMs": 15580,
    "endMs": 15700,
    "timestampMs": 15640,
    "confidence": 0.998738
  },
  {
    "text": " делаю",
    "startMs": 15700,
    "endMs": 16040,
    "timestampMs": 15870,
    "confidence": 0.99953
  },
  {
    "text": " я,",
    "startMs": 16040,
    "endMs": 16320,
    "timestampMs": 16180,
    "confidence": 0.999931
  },
  {
    "text": " детка?",
    "startMs": 16520,
    "endMs": 16980,
    "timestampMs": 16750,
    "confidence": 0.99826,
    "pageBreakAfter": true
  },
  {
    "text": " Завтра",
    "startMs": 31570,
    "endMs": 32010,
    "timestampMs": 31790,
    "confidence": 0.998414
  },
  {
    "text": " ты",
    "startMs": 32010,
    "endMs": 32210,
    "timestampMs": 32110,
    "confidence": 0.99913
  },
  {
    "text": " сдохнешь,",
    "startMs": 32210,
    "endMs": 32930,
    "timestampMs": 32570,
    "confidence": 0.999362
  },
  {
    "text": " рот",
    "startMs": 33050,
    "endMs": 33430,
    "timestampMs": 33240,
    "confidence": 0.997972,
    "pageBreakAfter": true
  },
  {
    "text": " ставлю.",
    "startMs": 33430,
    "endMs": 33970,
    "timestampMs": 33700,
    "confidence": 0.997613,
    "pageBreakAfter": true
  },
  {
    "text": " Это,",
    "startMs": 34270,
    "endMs": 34710,
    "timestampMs": 34490,
    "confidence": 0.998371
  },
  {
    "text": " как",
    "startMs": 34790,
    "endMs": 34910,
    "timestampMs": 34850,
    "confidence": 0.999941
  },
  {
    "text": " говорят",
    "startMs": 34910,
    "endMs": 35190,
    "timestampMs": 35050,
    "confidence": 0.99995,
    "pageBreakAfter": true
  },
  {
    "text": " хулиганы,",
    "startMs": 35190,
    "endMs": 35750,
    "timestampMs": 35470,
    "confidence": 0.999573
  },
  {
    "text": " уже",
    "startMs": 35770,
    "endMs": 36070,
    "timestampMs": 35920,
    "confidence": 0.999855,
    "pageBreakAfter": true
  },
  {
    "text": " постфактум.",
    "startMs": 36070,
    "endMs": 37270,
    "timestampMs": 36670,
    "confidence": 0.94108,
    "pageBreakAfter": true
  },
  {
    "text": " За",
    "startMs": 38690,
    "endMs": 39130,
    "timestampMs": 38910,
    "confidence": 0.966286
  },
  {
    "text": " торговым",
    "startMs": 39130,
    "endMs": 39550,
    "timestampMs": 39340,
    "confidence": 0.998927
  },
  {
    "text": " центром",
    "startMs": 39550,
    "endMs": 39870,
    "timestampMs": 39710,
    "confidence": 0.998942,
    "pageBreakAfter": true
  },
  {
    "text": " творится",
    "startMs": 39870,
    "endMs": 40250,
    "timestampMs": 40060,
    "confidence": 0.99973
  },
  {
    "text": " что-то",
    "startMs": 40250,
    "endMs": 40490,
    "timestampMs": 40370,
    "confidence": 0.999879
  },
  {
    "text": " в",
    "startMs": 40490,
    "endMs": 40570,
    "timestampMs": 40530,
    "confidence": 0.9998
  },
  {
    "text": " духе",
    "startMs": 40570,
    "endMs": 40830,
    "timestampMs": 40700,
    "confidence": 0.998226,
    "pageBreakAfter": true
  },
  {
    "text": " Акиры,",
    "startMs": 40830,
    "endMs": 41130,
    "timestampMs": 40980,
    "confidence": 0.989603
  },
  {
    "text": " приём.",
    "startMs": 41210,
    "endMs": 41530,
    "timestampMs": 41370,
    "confidence": 0.996858,
    "pageBreakAfter": true
  },
  {
    "text": " Умереть",
    "startMs": 41530,
    "endMs": 43530,
    "timestampMs": 42530,
    "confidence": 0.717907
  },
  {
    "text": " с",
    "startMs": 43530,
    "endMs": 43670,
    "timestampMs": 43600,
    "confidence": 0.952861
  },
  {
    "text": " Джессикой!",
    "startMs": 43670,
    "endMs": 44330,
    "timestampMs": 44000,
    "confidence": 0.995258,
    "pageBreakAfter": true
  },
  {
    "text": " Эй!",
    "startMs": 45110,
    "endMs": 45770,
    "timestampMs": 45440,
    "confidence": 0.938766,
    "pageBreakAfter": true
  },
  {
    "text": " Какого",
    "startMs": 46690,
    "endMs": 47530,
    "timestampMs": 47110,
    "confidence": 0.996839
  },
  {
    "text": " черта?",
    "startMs": 47530,
    "endMs": 47930,
    "timestampMs": 47730,
    "confidence": 0.893098,
    "pageBreakAfter": true
  }
]
} />;
export const Video06 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="06-destiny-2" durationInFrames={1348} premountFor={fps}>
      <ScenePicture src={staticFile("media/06-destiny-2.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header06 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions06 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header07 = () => <ClipHeader title={"Вот что значило\n«Я ЛЮБЛЮ ТЕБЯ»"} series={"Кристалл смерти"} part={3} parts={3} />;
export const Captions07 = () => <DynamicCaptions captions={
[
  {
    "text": " Ваша",
    "startMs": 50,
    "endMs": 710,
    "timestampMs": 380,
    "confidence": 0.982
  },
  {
    "text": " честь,",
    "startMs": 710,
    "endMs": 990,
    "timestampMs": 850,
    "confidence": 0.999787
  },
  {
    "text": " мой",
    "startMs": 1110,
    "endMs": 1250,
    "timestampMs": 1180,
    "confidence": 0.999278
  },
  {
    "text": " клиент",
    "startMs": 1250,
    "endMs": 1610,
    "timestampMs": 1430,
    "confidence": 0.999626,
    "pageBreakAfter": true
  },
  {
    "text": " действовал",
    "startMs": 1610,
    "endMs": 2050,
    "timestampMs": 1830,
    "confidence": 0.999044
  },
  {
    "text": " в",
    "startMs": 2050,
    "endMs": 2190,
    "timestampMs": 2120,
    "confidence": 0.999661
  },
  {
    "text": " целях",
    "startMs": 2190,
    "endMs": 2410,
    "timestampMs": 2300,
    "confidence": 0.998365,
    "pageBreakAfter": true
  },
  {
    "text": " самозащиты.",
    "startMs": 2410,
    "endMs": 2970,
    "timestampMs": 2690,
    "confidence": 0.999053,
    "pageBreakAfter": true
  },
  {
    "text": " Он",
    "startMs": 3130,
    "endMs": 3570,
    "timestampMs": 3350,
    "confidence": 0.998877
  },
  {
    "text": " обратил",
    "startMs": 3570,
    "endMs": 3910,
    "timestampMs": 3740,
    "confidence": 0.998534
  },
  {
    "text": " 13",
    "startMs": 3910,
    "endMs": 4190,
    "timestampMs": 4050,
    "confidence": 0.72349
  },
  {
    "text": " человек",
    "startMs": 4190,
    "endMs": 4530,
    "timestampMs": 4360,
    "confidence": 0.99884,
    "pageBreakAfter": true
  },
  {
    "text": " в",
    "startMs": 4530,
    "endMs": 4770,
    "timestampMs": 4650,
    "confidence": 0.995082
  },
  {
    "text": " прах.",
    "startMs": 4770,
    "endMs": 5090,
    "timestampMs": 4930,
    "confidence": 0.995414,
    "pageBreakAfter": true
  },
  {
    "text": " Сядьте!",
    "startMs": 5210,
    "endMs": 5770,
    "timestampMs": 5490,
    "confidence": 0.99296,
    "pageBreakAfter": true
  },
  {
    "text": " Прежде",
    "startMs": 6250,
    "endMs": 6870,
    "timestampMs": 6560,
    "confidence": 0.996197
  },
  {
    "text": " чем",
    "startMs": 6870,
    "endMs": 7030,
    "timestampMs": 6950,
    "confidence": 0.983089
  },
  {
    "text": " я",
    "startMs": 7030,
    "endMs": 7170,
    "timestampMs": 7100,
    "confidence": 0.99876
  },
  {
    "text": " вынесу",
    "startMs": 7170,
    "endMs": 7430,
    "timestampMs": 7300,
    "confidence": 0.998454,
    "pageBreakAfter": true
  },
  {
    "text": " приговор,",
    "startMs": 7430,
    "endMs": 7830,
    "timestampMs": 7630,
    "confidence": 0.998419
  },
  {
    "text": " вы",
    "startMs": 8050,
    "endMs": 8130,
    "timestampMs": 8090,
    "confidence": 0.999056
  },
  {
    "text": " не",
    "startMs": 8130,
    "endMs": 8310,
    "timestampMs": 8220,
    "confidence": 0.999371
  },
  {
    "text": " хотите",
    "startMs": 8310,
    "endMs": 8650,
    "timestampMs": 8480,
    "confidence": 0.999861,
    "pageBreakAfter": true
  },
  {
    "text": " мне",
    "startMs": 8650,
    "endMs": 8890,
    "timestampMs": 8770,
    "confidence": 0.999506
  },
  {
    "text": " что-нибудь",
    "startMs": 8890,
    "endMs": 9270,
    "timestampMs": 9080,
    "confidence": 0.999764
  },
  {
    "text": " сказать?",
    "startMs": 9270,
    "endMs": 9790,
    "timestampMs": 9530,
    "confidence": 0.999855,
    "pageBreakAfter": true
  },
  {
    "text": " Я...",
    "startMs": 11030,
    "endMs": 11650,
    "timestampMs": 11340,
    "confidence": 0.876762,
    "pageBreakAfter": true
  },
  {
    "text": " Люди,",
    "startMs": 15440,
    "endMs": 16060,
    "timestampMs": 15750,
    "confidence": 0.995808,
    "pageBreakAfter": true
  },
  {
    "text": " вот",
    "startMs": 16380,
    "endMs": 16720,
    "timestampMs": 16550,
    "confidence": 0.999718
  },
  {
    "text": " что",
    "startMs": 16720,
    "endMs": 16840,
    "timestampMs": 16780,
    "confidence": 0.997904
  },
  {
    "text": " я",
    "startMs": 16840,
    "endMs": 16960,
    "timestampMs": 16900,
    "confidence": 0.99998
  },
  {
    "text": " скажу.",
    "startMs": 16960,
    "endMs": 17300,
    "timestampMs": 17130,
    "confidence": 0.99973,
    "pageBreakAfter": true
  },
  {
    "text": " Этот",
    "startMs": 17680,
    "endMs": 18040,
    "timestampMs": 17860,
    "confidence": 0.995941
  },
  {
    "text": " мальчик,",
    "startMs": 18040,
    "endMs": 18640,
    "timestampMs": 18340,
    "confidence": 0.999849
  },
  {
    "text": " я",
    "startMs": 18760,
    "endMs": 19040,
    "timestampMs": 18900,
    "confidence": 0.999753
  },
  {
    "text": " думала,",
    "startMs": 19040,
    "endMs": 19420,
    "timestampMs": 19230,
    "confidence": 0.999064,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 19480,
    "endMs": 19620,
    "timestampMs": 19550,
    "confidence": 0.999397
  },
  {
    "text": " знала",
    "startMs": 19620,
    "endMs": 20000,
    "timestampMs": 19810,
    "confidence": 0.986294
  },
  {
    "text": " всё",
    "startMs": 20000,
    "endMs": 20220,
    "timestampMs": 20110,
    "confidence": 0.616331
  },
  {
    "text": " обо",
    "startMs": 20220,
    "endMs": 20520,
    "timestampMs": 20370,
    "confidence": 0.997111,
    "pageBreakAfter": true
  },
  {
    "text": " всём,",
    "startMs": 20520,
    "endMs": 20780,
    "timestampMs": 20650,
    "confidence": 0.991584,
    "pageBreakAfter": true
  },
  {
    "text": " но",
    "startMs": 21120,
    "endMs": 21440,
    "timestampMs": 21280,
    "confidence": 0.999019
  },
  {
    "text": " что-то",
    "startMs": 21440,
    "endMs": 22080,
    "timestampMs": 21760,
    "confidence": 0.999443
  },
  {
    "text": " есть",
    "startMs": 22080,
    "endMs": 22460,
    "timestampMs": 22270,
    "confidence": 0.998924
  },
  {
    "text": " в",
    "startMs": 22460,
    "endMs": 22640,
    "timestampMs": 22550,
    "confidence": 0.997522,
    "pageBreakAfter": true
  },
  {
    "text": " этих",
    "startMs": 22640,
    "endMs": 22920,
    "timestampMs": 22780,
    "confidence": 0.998888
  },
  {
    "text": " звуках",
    "startMs": 22920,
    "endMs": 23440,
    "timestampMs": 23180,
    "confidence": 0.999444
  },
  {
    "text": " и",
    "startMs": 23440,
    "endMs": 23600,
    "timestampMs": 23520,
    "confidence": 0.998899
  },
  {
    "text": " частотах,",
    "startMs": 23600,
    "endMs": 24140,
    "timestampMs": 23870,
    "confidence": 0.998626,
    "pageBreakAfter": true
  },
  {
    "text": " которые",
    "startMs": 24140,
    "endMs": 24540,
    "timestampMs": 24340,
    "confidence": 0.999685
  },
  {
    "text": " он",
    "startMs": 24540,
    "endMs": 24840,
    "timestampMs": 24690,
    "confidence": 0.99975,
    "pageBreakAfter": true
  },
  {
    "text": " воспроизводит.",
    "startMs": 24840,
    "endMs": 25720,
    "timestampMs": 25280,
    "confidence": 0.998858,
    "pageBreakAfter": true
  },
  {
    "text": " Мне",
    "startMs": 25720,
    "endMs": 26200,
    "timestampMs": 25960,
    "confidence": 0.994647
  },
  {
    "text": " кажется,",
    "startMs": 26200,
    "endMs": 26700,
    "timestampMs": 26450,
    "confidence": 0.99999
  },
  {
    "text": " что",
    "startMs": 26880,
    "endMs": 27020,
    "timestampMs": 26950,
    "confidence": 0.999699
  },
  {
    "text": " мы",
    "startMs": 27020,
    "endMs": 27280,
    "timestampMs": 27150,
    "confidence": 0.99983,
    "pageBreakAfter": true
  },
  {
    "text": " готовы",
    "startMs": 27280,
    "endMs": 27660,
    "timestampMs": 27470,
    "confidence": 0.999928
  },
  {
    "text": " простить",
    "startMs": 27660,
    "endMs": 28200,
    "timestampMs": 27930,
    "confidence": 0.999871
  },
  {
    "text": " его",
    "startMs": 28200,
    "endMs": 28440,
    "timestampMs": 28320,
    "confidence": 0.996484
  },
  {
    "text": " и",
    "startMs": 28440,
    "endMs": 28680,
    "timestampMs": 28560,
    "confidence": 0.99253,
    "pageBreakAfter": true
  },
  {
    "text": " забыть",
    "startMs": 28680,
    "endMs": 29300,
    "timestampMs": 28990,
    "confidence": 0.999585
  },
  {
    "text": " обо",
    "startMs": 29300,
    "endMs": 29640,
    "timestampMs": 29470,
    "confidence": 0.997898
  },
  {
    "text": " всём",
    "startMs": 29640,
    "endMs": 29880,
    "timestampMs": 29760,
    "confidence": 0.844774
  },
  {
    "text": " этом.",
    "startMs": 29880,
    "endMs": 30060,
    "timestampMs": 29970,
    "confidence": 0.998156,
    "pageBreakAfter": true
  },
  {
    "text": " Он",
    "startMs": 30240,
    "endMs": 30420,
    "timestampMs": 30330,
    "confidence": 0.999597
  },
  {
    "text": " свободный",
    "startMs": 30420,
    "endMs": 31060,
    "timestampMs": 30740,
    "confidence": 0.999563
  },
  {
    "text": " молодой",
    "startMs": 31060,
    "endMs": 31500,
    "timestampMs": 31280,
    "confidence": 0.97016,
    "pageBreakAfter": true
  },
  {
    "text": " человек,",
    "startMs": 31500,
    "endMs": 31880,
    "timestampMs": 31690,
    "confidence": 0.999821
  },
  {
    "text": " и",
    "startMs": 31940,
    "endMs": 32140,
    "timestampMs": 32040,
    "confidence": 0.999934
  },
  {
    "text": " у",
    "startMs": 32140,
    "endMs": 32260,
    "timestampMs": 32200,
    "confidence": 0.999968
  },
  {
    "text": " него",
    "startMs": 32260,
    "endMs": 32380,
    "timestampMs": 32320,
    "confidence": 0.999957,
    "pageBreakAfter": true
  },
  {
    "text": " есть",
    "startMs": 32380,
    "endMs": 32600,
    "timestampMs": 32490,
    "confidence": 0.999954
  },
  {
    "text": " право",
    "startMs": 32600,
    "endMs": 33040,
    "timestampMs": 32820,
    "confidence": 0.999547
  },
  {
    "text": " начать",
    "startMs": 33040,
    "endMs": 33720,
    "timestampMs": 33380,
    "confidence": 0.999546
  },
  {
    "text": " всё",
    "startMs": 33720,
    "endMs": 33960,
    "timestampMs": 33840,
    "confidence": 0.999278,
    "pageBreakAfter": true
  },
  {
    "text": " сначала.",
    "startMs": 33960,
    "endMs": 34440,
    "timestampMs": 34200,
    "confidence": 0.981498,
    "pageBreakAfter": true
  },
  {
    "text": " Боже,",
    "startMs": 35120,
    "endMs": 35600,
    "timestampMs": 35360,
    "confidence": 0.999545
  },
  {
    "text": " завтра",
    "startMs": 35720,
    "endMs": 36000,
    "timestampMs": 35860,
    "confidence": 0.999699,
    "pageBreakAfter": true
  },
  {
    "text": " профориентация.",
    "startMs": 36000,
    "endMs": 36820,
    "timestampMs": 36410,
    "confidence": 0.995353,
    "pageBreakAfter": true
  },
  {
    "text": " Даже",
    "startMs": 36960,
    "endMs": 37120,
    "timestampMs": 37040,
    "confidence": 0.983931
  },
  {
    "text": " думать",
    "startMs": 37120,
    "endMs": 37420,
    "timestampMs": 37270,
    "confidence": 0.999417
  },
  {
    "text": " не",
    "startMs": 37420,
    "endMs": 37520,
    "timestampMs": 37470,
    "confidence": 0.999971
  },
  {
    "text": " хочу,",
    "startMs": 37520,
    "endMs": 37740,
    "timestampMs": 37630,
    "confidence": 0.999968,
    "pageBreakAfter": true
  },
  {
    "text": " чем",
    "startMs": 37860,
    "endMs": 37960,
    "timestampMs": 37910,
    "confidence": 0.99969
  },
  {
    "text": " буду",
    "startMs": 37960,
    "endMs": 38200,
    "timestampMs": 38080,
    "confidence": 0.998763
  },
  {
    "text": " заниматься",
    "startMs": 38200,
    "endMs": 38560,
    "timestampMs": 38380,
    "confidence": 0.999913,
    "pageBreakAfter": true
  },
  {
    "text": " после",
    "startMs": 38560,
    "endMs": 38820,
    "timestampMs": 38690,
    "confidence": 0.999535
  },
  {
    "text": " окончания",
    "startMs": 38820,
    "endMs": 39260,
    "timestampMs": 39040,
    "confidence": 0.999844
  },
  {
    "text": " школы.",
    "startMs": 39260,
    "endMs": 39700,
    "timestampMs": 39480,
    "confidence": 0.999958,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 39780,
    "endMs": 39960,
    "timestampMs": 39870,
    "confidence": 0.998019
  },
  {
    "text": " я",
    "startMs": 39960,
    "endMs": 40100,
    "timestampMs": 40030,
    "confidence": 0.999965
  },
  {
    "text": " точно",
    "startMs": 40100,
    "endMs": 40460,
    "timestampMs": 40280,
    "confidence": 0.999988
  },
  {
    "text": " знаю,",
    "startMs": 40460,
    "endMs": 40760,
    "timestampMs": 40610,
    "confidence": 0.999863,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 40820,
    "endMs": 40900,
    "timestampMs": 40860,
    "confidence": 0.999971
  },
  {
    "text": " буду",
    "startMs": 40900,
    "endMs": 41100,
    "timestampMs": 41000,
    "confidence": 0.999248
  },
  {
    "text": " делать.",
    "startMs": 41100,
    "endMs": 41400,
    "timestampMs": 41250,
    "confidence": 0.99997,
    "pageBreakAfter": true
  },
  {
    "text": " Хочу",
    "startMs": 41740,
    "endMs": 42020,
    "timestampMs": 41880,
    "confidence": 0.999091
  },
  {
    "text": " работать",
    "startMs": 42020,
    "endMs": 42240,
    "timestampMs": 42130,
    "confidence": 0.99973
  },
  {
    "text": " в",
    "startMs": 42240,
    "endMs": 42400,
    "timestampMs": 42320,
    "confidence": 0.999984
  },
  {
    "text": " больнице",
    "startMs": 42400,
    "endMs": 42800,
    "timestampMs": 42600,
    "confidence": 0.988496,
    "pageBreakAfter": true
  },
  {
    "text": " для",
    "startMs": 42800,
    "endMs": 42940,
    "timestampMs": 42870,
    "confidence": 0.999838
  },
  {
    "text": " безнадёжно",
    "startMs": 42940,
    "endMs": 43520,
    "timestampMs": 43230,
    "confidence": 0.990004
  },
  {
    "text": " больных.",
    "startMs": 43520,
    "endMs": 43920,
    "timestampMs": 43720,
    "confidence": 0.997224,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 44040,
    "endMs": 44360,
    "timestampMs": 44200,
    "confidence": 0.999799
  },
  {
    "text": " буду",
    "startMs": 44360,
    "endMs": 44540,
    "timestampMs": 44450,
    "confidence": 0.999893
  },
  {
    "text": " успокаивать",
    "startMs": 44540,
    "endMs": 45240,
    "timestampMs": 44890,
    "confidence": 0.999562,
    "pageBreakAfter": true
  },
  {
    "text": " умирающих,",
    "startMs": 45240,
    "endMs": 46000,
    "timestampMs": 45620,
    "confidence": 0.999547
  },
  {
    "text": " у",
    "startMs": 46060,
    "endMs": 46160,
    "timestampMs": 46110,
    "confidence": 0.999947
  },
  {
    "text": " которых",
    "startMs": 46160,
    "endMs": 46420,
    "timestampMs": 46290,
    "confidence": 0.999944,
    "pageBreakAfter": true
  },
  {
    "text": " больше",
    "startMs": 46420,
    "endMs": 46720,
    "timestampMs": 46570,
    "confidence": 0.999923
  },
  {
    "text": " никого",
    "startMs": 46720,
    "endMs": 47100,
    "timestampMs": 46910,
    "confidence": 0.999813
  },
  {
    "text": " не",
    "startMs": 47100,
    "endMs": 47280,
    "timestampMs": 47190,
    "confidence": 0.999907,
    "pageBreakAfter": true
  },
  {
    "text": " осталось",
    "startMs": 47280,
    "endMs": 47740,
    "timestampMs": 47510,
    "confidence": 0.999825
  },
  {
    "text": " в",
    "startMs": 47740,
    "endMs": 47900,
    "timestampMs": 47820,
    "confidence": 0.999961
  },
  {
    "text": " жизни.",
    "startMs": 47900,
    "endMs": 48260,
    "timestampMs": 48080,
    "confidence": 0.999934,
    "pageBreakAfter": true
  },
  {
    "text": " По-настоящему",
    "startMs": 48400,
    "endMs": 49440,
    "timestampMs": 48920,
    "confidence": 0.997591
  },
  {
    "text": " одиноких.",
    "startMs": 49440,
    "endMs": 50100,
    "timestampMs": 49770,
    "confidence": 0.998147,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 50260,
    "endMs": 50420,
    "timestampMs": 50340,
    "confidence": 0.999315
  },
  {
    "text": " буду",
    "startMs": 50420,
    "endMs": 50600,
    "timestampMs": 50510,
    "confidence": 0.999825
  },
  {
    "text": " смотреть",
    "startMs": 50600,
    "endMs": 51080,
    "timestampMs": 50840,
    "confidence": 0.995557
  },
  {
    "text": " на",
    "startMs": 51080,
    "endMs": 51240,
    "timestampMs": 51160,
    "confidence": 0.999937,
    "pageBreakAfter": true
  },
  {
    "text": " таблички",
    "startMs": 51240,
    "endMs": 51660,
    "timestampMs": 51450,
    "confidence": 0.99972
  },
  {
    "text": " с",
    "startMs": 51660,
    "endMs": 51840,
    "timestampMs": 51750,
    "confidence": 0.999952
  },
  {
    "text": " именами",
    "startMs": 51840,
    "endMs": 52300,
    "timestampMs": 52070,
    "confidence": 0.999903
  },
  {
    "text": " и",
    "startMs": 52300,
    "endMs": 52400,
    "timestampMs": 52350,
    "confidence": 0.999963,
    "pageBreakAfter": true
  },
  {
    "text": " говорить",
    "startMs": 52400,
    "endMs": 52800,
    "timestampMs": 52600,
    "confidence": 0.999879
  },
  {
    "text": " «Я",
    "startMs": 52800,
    "endMs": 53280,
    "timestampMs": 53040,
    "confidence": 0.846152
  },
  {
    "text": " люблю",
    "startMs": 53280,
    "endMs": 53640,
    "timestampMs": 53460,
    "confidence": 0.999852
  },
  {
    "text": " тебя»,",
    "startMs": 53640,
    "endMs": 54360,
    "timestampMs": 54000,
    "confidence": 0.943236,
    "pageBreakAfter": true
  },
  {
    "text": " добавляя",
    "startMs": 54360,
    "endMs": 55140,
    "timestampMs": 54750,
    "confidence": 0.999056
  },
  {
    "text": " имя.",
    "startMs": 55140,
    "endMs": 55500,
    "timestampMs": 55320,
    "confidence": 0.999379,
    "pageBreakAfter": true
  },
  {
    "text": " Снова",
    "startMs": 55720,
    "endMs": 56960,
    "timestampMs": 56340,
    "confidence": 0.896128
  },
  {
    "text": " и",
    "startMs": 56960,
    "endMs": 57380,
    "timestampMs": 57170,
    "confidence": 0.993126
  },
  {
    "text": " снова.",
    "startMs": 57380,
    "endMs": 57880,
    "timestampMs": 57630,
    "confidence": 0.997315,
    "pageBreakAfter": true
  },
  {
    "text": " Какого",
    "startMs": 58260,
    "endMs": 59220,
    "timestampMs": 58740,
    "confidence": 0.938801
  },
  {
    "text": " х***?",
    "startMs": 59220,
    "endMs": 59960,
    "timestampMs": 59590,
    "confidence": 0.712102,
    "pageBreakAfter": true
  }
]
} />;
export const Video07 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="07-destiny-3" durationInFrames={1452} premountFor={fps}>
      <ScenePicture src={staticFile("media/07-destiny-3.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header07 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions07 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header08 = () => <ClipHeader title={"Рик умер.\nА потом ПРОСНУЛСЯ"} series={"Перезапуск Рика"} part={1} parts={3} />;
export const Captions08 = () => <DynamicCaptions captions={
[
  {
    "text": " Перенаправление",
    "startMs": 2160,
    "endMs": 2720,
    "timestampMs": 2440,
    "confidence": 0.871984,
    "pageBreakAfter": true
  },
  {
    "text": " резервных",
    "startMs": 2720,
    "endMs": 3280,
    "timestampMs": 3000,
    "confidence": 0.988269
  },
  {
    "text": " данных.",
    "startMs": 3280,
    "endMs": 3920,
    "timestampMs": 3600,
    "confidence": 0.996396,
    "pageBreakAfter": true
  },
  {
    "text": " Операция",
    "startMs": 4180,
    "endMs": 4740,
    "timestampMs": 4460,
    "confidence": 0.994373
  },
  {
    "text": " Феникс",
    "startMs": 4740,
    "endMs": 5520,
    "timestampMs": 5130,
    "confidence": 0.929814,
    "pageBreakAfter": true
  },
  {
    "text": " запущена.",
    "startMs": 5520,
    "endMs": 6400,
    "timestampMs": 5960,
    "confidence": 0.836621,
    "pageBreakAfter": true
  },
  {
    "text": " Какого",
    "startMs": 8760,
    "endMs": 9320,
    "timestampMs": 9040,
    "confidence": 0.949512
  },
  {
    "text": " чёрта?",
    "startMs": 9320,
    "endMs": 9740,
    "timestampMs": 9530,
    "confidence": 0.934576,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 9820,
    "endMs": 10000,
    "timestampMs": 9910,
    "confidence": 0.99939
  },
  {
    "text": " же",
    "startMs": 10000,
    "endMs": 10140,
    "timestampMs": 10070,
    "confidence": 0.997819
  },
  {
    "text": " удалил",
    "startMs": 10140,
    "endMs": 10560,
    "timestampMs": 10350,
    "confidence": 0.9996
  },
  {
    "text": " этот",
    "startMs": 10560,
    "endMs": 10700,
    "timestampMs": 10630,
    "confidence": 0.927137,
    "pageBreakAfter": true
  },
  {
    "text": " протокол.",
    "startMs": 10700,
    "endMs": 11240,
    "timestampMs": 10970,
    "confidence": 0.999714,
    "pageBreakAfter": true
  },
  {
    "text": " Что",
    "startMs": 12460,
    "endMs": 13020,
    "timestampMs": 12740,
    "confidence": 0.997009
  },
  {
    "text": " ты",
    "startMs": 13020,
    "endMs": 13180,
    "timestampMs": 13100,
    "confidence": 0.999773
  },
  {
    "text": " делаешь",
    "startMs": 13180,
    "endMs": 13580,
    "timestampMs": 13380,
    "confidence": 0.999766
  },
  {
    "text": " с",
    "startMs": 13580,
    "endMs": 13720,
    "timestampMs": 13650,
    "confidence": 0.999326,
    "pageBreakAfter": true
  },
  {
    "text": " моим",
    "startMs": 13720,
    "endMs": 13900,
    "timestampMs": 13810,
    "confidence": 0.999671
  },
  {
    "text": " клоном?",
    "startMs": 13900,
    "endMs": 14340,
    "timestampMs": 14120,
    "confidence": 0.987682,
    "pageBreakAfter": true
  },
  {
    "text": " Не",
    "startMs": 14560,
    "endMs": 14760,
    "timestampMs": 14660,
    "confidence": 0.997543
  },
  {
    "text": " боись,",
    "startMs": 14760,
    "endMs": 15120,
    "timestampMs": 14940,
    "confidence": 0.983096
  },
  {
    "text": " я",
    "startMs": 15220,
    "endMs": 15320,
    "timestampMs": 15270,
    "confidence": 0.99783
  },
  {
    "text": " это",
    "startMs": 15320,
    "endMs": 15500,
    "timestampMs": 15410,
    "confidence": 0.96107,
    "pageBreakAfter": true
  },
  {
    "text": " ты.",
    "startMs": 15500,
    "endMs": 15720,
    "timestampMs": 15610,
    "confidence": 0.998761,
    "pageBreakAfter": true
  },
  {
    "text": " Пару",
    "startMs": 15840,
    "endMs": 16220,
    "timestampMs": 16030,
    "confidence": 0.996216
  },
  {
    "text": " сезонов",
    "startMs": 16220,
    "endMs": 16540,
    "timestampMs": 16380,
    "confidence": 0.995654
  },
  {
    "text": " назад",
    "startMs": 16540,
    "endMs": 16780,
    "timestampMs": 16660,
    "confidence": 0.999972
  },
  {
    "text": " я",
    "startMs": 16780,
    "endMs": 17000,
    "timestampMs": 16890,
    "confidence": 0.998827,
    "pageBreakAfter": true
  },
  {
    "text": " отключил",
    "startMs": 17000,
    "endMs": 17440,
    "timestampMs": 17220,
    "confidence": 0.915737
  },
  {
    "text": " свои",
    "startMs": 17440,
    "endMs": 17680,
    "timestampMs": 17560,
    "confidence": 0.991783
  },
  {
    "text": " капсулы",
    "startMs": 17680,
    "endMs": 18140,
    "timestampMs": 17910,
    "confidence": 0.998597
  },
  {
    "text": " с",
    "startMs": 18140,
    "endMs": 18220,
    "timestampMs": 18180,
    "confidence": 0.850222,
    "pageBreakAfter": true
  },
  {
    "text": " клонами,",
    "startMs": 18220,
    "endMs": 18600,
    "timestampMs": 18410,
    "confidence": 0.993226
  },
  {
    "text": " и,",
    "startMs": 18720,
    "endMs": 18780,
    "timestampMs": 18750,
    "confidence": 0.992982
  },
  {
    "text": " похоже,",
    "startMs": 18780,
    "endMs": 19220,
    "timestampMs": 19000,
    "confidence": 0.998496,
    "pageBreakAfter": true
  },
  {
    "text": " резервные",
    "startMs": 19320,
    "endMs": 19740,
    "timestampMs": 19530,
    "confidence": 0.999649
  },
  {
    "text": " данные",
    "startMs": 19740,
    "endMs": 20100,
    "timestampMs": 19920,
    "confidence": 0.999739,
    "pageBreakAfter": true
  },
  {
    "text": " перенаправились",
    "startMs": 20100,
    "endMs": 20720,
    "timestampMs": 20410,
    "confidence": 0.995622
  },
  {
    "text": " в",
    "startMs": 20720,
    "endMs": 20860,
    "timestampMs": 20790,
    "confidence": 0.999187
  },
  {
    "text": " твою",
    "startMs": 20860,
    "endMs": 21060,
    "timestampMs": 20960,
    "confidence": 0.985273,
    "pageBreakAfter": true
  },
  {
    "text": " вселенную.",
    "startMs": 21060,
    "endMs": 21540,
    "timestampMs": 21300,
    "confidence": 0.901579,
    "pageBreakAfter": true
  },
  {
    "text": " Извини,",
    "startMs": 21620,
    "endMs": 21900,
    "timestampMs": 21760,
    "confidence": 0.991923
  },
  {
    "text": " всё",
    "startMs": 22140,
    "endMs": 22300,
    "timestampMs": 22220,
    "confidence": 0.998789
  },
  {
    "text": " нормально.",
    "startMs": 22300,
    "endMs": 22680,
    "timestampMs": 22490,
    "confidence": 0.494766,
    "pageBreakAfter": true
  },
  {
    "text": " Буду",
    "startMs": 22800,
    "endMs": 23120,
    "timestampMs": 22960,
    "confidence": 0.99694
  },
  {
    "text": " рад",
    "startMs": 23120,
    "endMs": 23240,
    "timestampMs": 23180,
    "confidence": 0.999426
  },
  {
    "text": " помочь.",
    "startMs": 23240,
    "endMs": 23660,
    "timestampMs": 23450,
    "confidence": 0.998601,
    "pageBreakAfter": true
  },
  {
    "text": " Кстати,",
    "startMs": 23860,
    "endMs": 23980,
    "timestampMs": 23920,
    "confidence": 0.996039
  },
  {
    "text": " даже",
    "startMs": 24120,
    "endMs": 24320,
    "timestampMs": 24220,
    "confidence": 0.998858
  },
  {
    "text": " спрашивать",
    "startMs": 24320,
    "endMs": 24840,
    "timestampMs": 24580,
    "confidence": 0.999462,
    "pageBreakAfter": true
  },
  {
    "text": " неудобно,",
    "startMs": 24840,
    "endMs": 25320,
    "timestampMs": 25080,
    "confidence": 0.999457
  },
  {
    "text": " но...",
    "startMs": 25400,
    "endMs": 25800,
    "timestampMs": 25600,
    "confidence": 0.927944,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 25800,
    "endMs": 26500,
    "timestampMs": 26150,
    "confidence": 0.927562
  },
  {
    "text": " ведь",
    "startMs": 26500,
    "endMs": 26680,
    "timestampMs": 26590,
    "confidence": 0.998216
  },
  {
    "text": " поддерживаешь",
    "startMs": 26680,
    "endMs": 27460,
    "timestampMs": 27070,
    "confidence": 0.996607,
    "pageBreakAfter": true
  },
  {
    "text": " фашистскую",
    "startMs": 27460,
    "endMs": 28120,
    "timestampMs": 27790,
    "confidence": 0.999062
  },
  {
    "text": " антиутопию?",
    "startMs": 28120,
    "endMs": 28840,
    "timestampMs": 28480,
    "confidence": 0.998992,
    "pageBreakAfter": true
  },
  {
    "text": " Да,",
    "startMs": 33040,
    "endMs": 33560,
    "timestampMs": 33300,
    "confidence": 0.843854,
    "pageBreakAfter": true
  },
  {
    "text": " в",
    "startMs": 35610,
    "endMs": 35730,
    "timestampMs": 35670,
    "confidence": 0.971861
  },
  {
    "text": " твоём",
    "startMs": 35730,
    "endMs": 36050,
    "timestampMs": 35890,
    "confidence": 0.955117
  },
  {
    "text": " «да»",
    "startMs": 36050,
    "endMs": 36370,
    "timestampMs": 36210,
    "confidence": 0.803672
  },
  {
    "text": " какая-то",
    "startMs": 36370,
    "endMs": 36670,
    "timestampMs": 36520,
    "confidence": 0.986093,
    "pageBreakAfter": true
  },
  {
    "text": " либеральная",
    "startMs": 36670,
    "endMs": 37390,
    "timestampMs": 37030,
    "confidence": 0.998102
  },
  {
    "text": " буква",
    "startMs": 37390,
    "endMs": 37810,
    "timestampMs": 37600,
    "confidence": 0.99493
  },
  {
    "text": " «Д»",
    "startMs": 37810,
    "endMs": 38030,
    "timestampMs": 37920,
    "confidence": 0.933013,
    "pageBreakAfter": true
  },
  {
    "text": " получилась.",
    "startMs": 38030,
    "endMs": 38710,
    "timestampMs": 38370,
    "confidence": 0.993329,
    "pageBreakAfter": true
  },
  {
    "text": " Разве",
    "startMs": 39550,
    "endMs": 40070,
    "timestampMs": 39810,
    "confidence": 0.972003
  },
  {
    "text": " это",
    "startMs": 40070,
    "endMs": 40230,
    "timestampMs": 40150,
    "confidence": 0.999893
  },
  {
    "text": " не",
    "startMs": 40230,
    "endMs": 40330,
    "timestampMs": 40280,
    "confidence": 0.99757
  },
  {
    "text": " странно?",
    "startMs": 40330,
    "endMs": 40930,
    "timestampMs": 40630,
    "confidence": 0.999849,
    "pageBreakAfter": true
  },
  {
    "text": " Полагаю,",
    "startMs": 41050,
    "endMs": 41570,
    "timestampMs": 41310,
    "confidence": 0.99863
  },
  {
    "text": " подобная",
    "startMs": 41590,
    "endMs": 42250,
    "timestampMs": 41920,
    "confidence": 0.793908,
    "pageBreakAfter": true
  },
  {
    "text": " странность",
    "startMs": 42250,
    "endMs": 42770,
    "timestampMs": 42510,
    "confidence": 0.990082
  },
  {
    "text": " и",
    "startMs": 42770,
    "endMs": 42870,
    "timestampMs": 42820,
    "confidence": 0.981207
  },
  {
    "text": " делает",
    "startMs": 42870,
    "endMs": 43190,
    "timestampMs": 43030,
    "confidence": 0.998251
  },
  {
    "text": " Рик",
    "startMs": 43190,
    "endMs": 43490,
    "timestampMs": 43340,
    "confidence": 0.812782,
    "pageBreakAfter": true
  },
  {
    "text": " и",
    "startMs": 43490,
    "endMs": 43670,
    "timestampMs": 43580,
    "confidence": 0.796866
  },
  {
    "text": " Морти",
    "startMs": 43670,
    "endMs": 44110,
    "timestampMs": 43890,
    "confidence": 0.996755
  },
  {
    "text": " сильнее.",
    "startMs": 44110,
    "endMs": 44790,
    "timestampMs": 44450,
    "confidence": 0.992441,
    "pageBreakAfter": true
  },
  {
    "text": " Морти,",
    "startMs": 44950,
    "endMs": 45290,
    "timestampMs": 45120,
    "confidence": 0.998847
  },
  {
    "text": " я",
    "startMs": 45310,
    "endMs": 45390,
    "timestampMs": 45350,
    "confidence": 0.999864
  },
  {
    "text": " поймал",
    "startMs": 45390,
    "endMs": 45790,
    "timestampMs": 45590,
    "confidence": 0.998457
  },
  {
    "text": " этого",
    "startMs": 45790,
    "endMs": 45996,
    "timestampMs": 45893,
    "confidence": 0.099124,
    "pageBreakAfter": true
  },
  {
    "text": " социалиста",
    "startMs": 45996,
    "endMs": 46409,
    "timestampMs": 46202,
    "confidence": 0.099124
  },
  {
    "text": " в",
    "startMs": 46409,
    "endMs": 46450,
    "timestampMs": 46429,
    "confidence": 0.099124
  },
  {
    "text": " свой",
    "startMs": 46450,
    "endMs": 46630,
    "timestampMs": 46540,
    "confidence": 0.961299
  },
  {
    "text": " халат.",
    "startMs": 46630,
    "endMs": 46930,
    "timestampMs": 46780,
    "confidence": 0.998502,
    "pageBreakAfter": true
  },
  {
    "text": " Он",
    "startMs": 47010,
    "endMs": 47150,
    "timestampMs": 47080,
    "confidence": 0.998449
  },
  {
    "text": " хочет",
    "startMs": 47150,
    "endMs": 47750,
    "timestampMs": 47450,
    "confidence": 0.996138
  },
  {
    "text": " отдать",
    "startMs": 47750,
    "endMs": 48070,
    "timestampMs": 47910,
    "confidence": 0.999861
  },
  {
    "text": " нашей",
    "startMs": 48070,
    "endMs": 48330,
    "timestampMs": 48200,
    "confidence": 0.811629,
    "pageBreakAfter": true
  },
  {
    "text": " Мартини",
    "startMs": 48330,
    "endMs": 48710,
    "timestampMs": 48520,
    "confidence": 0.88001
  },
  {
    "text": " семье",
    "startMs": 48710,
    "endMs": 49010,
    "timestampMs": 48860,
    "confidence": 0.951737,
    "pageBreakAfter": true
  },
  {
    "text": " эмигрантов.",
    "startMs": 49010,
    "endMs": 49630,
    "timestampMs": 49320,
    "confidence": 0.925351,
    "pageBreakAfter": true
  },
  {
    "text": " Очевидно,",
    "startMs": 49830,
    "endMs": 50230,
    "timestampMs": 50030,
    "confidence": 0.999773
  },
  {
    "text": " что",
    "startMs": 50290,
    "endMs": 50370,
    "timestampMs": 50330,
    "confidence": 0.999957,
    "pageBreakAfter": true
  },
  {
    "text": " самозванцем",
    "startMs": 50370,
    "endMs": 50930,
    "timestampMs": 50650,
    "confidence": 0.907771
  },
  {
    "text": " может",
    "startMs": 50930,
    "endMs": 51150,
    "timestampMs": 51040,
    "confidence": 0.997232
  },
  {
    "text": " быть",
    "startMs": 51150,
    "endMs": 51250,
    "timestampMs": 51200,
    "confidence": 0.999308,
    "pageBreakAfter": true
  },
  {
    "text": " только",
    "startMs": 51250,
    "endMs": 51430,
    "timestampMs": 51340,
    "confidence": 0.999751
  },
  {
    "text": " голый",
    "startMs": 51430,
    "endMs": 51910,
    "timestampMs": 51670,
    "confidence": 0.996505
  },
  {
    "text": " и",
    "startMs": 51910,
    "endMs": 52010,
    "timestampMs": 51960,
    "confidence": 0.988704
  },
  {
    "text": " мокрый",
    "startMs": 52010,
    "endMs": 52350,
    "timestampMs": 52180,
    "confidence": 0.999231,
    "pageBreakAfter": true
  },
  {
    "text": " клон.",
    "startMs": 52350,
    "endMs": 52510,
    "timestampMs": 52430,
    "confidence": 0.970635,
    "pageBreakAfter": true
  },
  {
    "text": " Это",
    "startMs": 52510,
    "endMs": 52970,
    "timestampMs": 52740,
    "confidence": 0.995246
  },
  {
    "text": " очевидно,",
    "startMs": 52970,
    "endMs": 53610,
    "timestampMs": 53290,
    "confidence": 0.999878
  },
  {
    "text": " но",
    "startMs": 53670,
    "endMs": 54070,
    "timestampMs": 53870,
    "confidence": 0.999908
  },
  {
    "text": " не",
    "startMs": 54070,
    "endMs": 54290,
    "timestampMs": 54180,
    "confidence": 0.98259,
    "pageBreakAfter": true
  },
  {
    "text": " для",
    "startMs": 54290,
    "endMs": 54510,
    "timestampMs": 54400,
    "confidence": 0.999829
  },
  {
    "text": " полиции.",
    "startMs": 54510,
    "endMs": 55110,
    "timestampMs": 54810,
    "confidence": 0.99877,
    "pageBreakAfter": true
  },
  {
    "text": " Лады.",
    "startMs": 56490,
    "endMs": 57010,
    "timestampMs": 56750,
    "confidence": 0.98858,
    "pageBreakAfter": true
  },
  {
    "text": " Этот",
    "startMs": 57210,
    "endMs": 57450,
    "timestampMs": 57330,
    "confidence": 0.994629
  },
  {
    "text": " рик",
    "startMs": 57450,
    "endMs": 57670,
    "timestampMs": 57560,
    "confidence": 0.730195
  },
  {
    "text": " маловажен,",
    "startMs": 57670,
    "endMs": 58290,
    "timestampMs": 57980,
    "confidence": 0.966537
  },
  {
    "text": " он",
    "startMs": 58290,
    "endMs": 58430,
    "timestampMs": 58360,
    "confidence": 0.9935,
    "pageBreakAfter": true
  },
  {
    "text": " ударился",
    "startMs": 58430,
    "endMs": 58810,
    "timestampMs": 58620,
    "confidence": 0.993616
  },
  {
    "text": " в",
    "startMs": 58810,
    "endMs": 58930,
    "timestampMs": 58870,
    "confidence": 0.999947
  },
  {
    "text": " политику.",
    "startMs": 58930,
    "endMs": 59450,
    "timestampMs": 59190,
    "confidence": 0.999839,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 59530,
    "endMs": 59630,
    "timestampMs": 59580,
    "confidence": 0.997577
  },
  {
    "text": " я",
    "startMs": 59630,
    "endMs": 59730,
    "timestampMs": 59680,
    "confidence": 0.999926
  },
  {
    "text": " хочу",
    "startMs": 59730,
    "endMs": 59970,
    "timestampMs": 59850,
    "confidence": 0.999878
  },
  {
    "text": " весёлое",
    "startMs": 59970,
    "endMs": 60490,
    "timestampMs": 60230,
    "confidence": 0.96691,
    "pageBreakAfter": true
  },
  {
    "text": " классическое",
    "startMs": 60490,
    "endMs": 61150,
    "timestampMs": 60820,
    "confidence": 0.954399
  },
  {
    "text": " приключение",
    "startMs": 61150,
    "endMs": 61730,
    "timestampMs": 61440,
    "confidence": 0.999463,
    "pageBreakAfter": true
  },
  {
    "text": " Рик",
    "startMs": 61730,
    "endMs": 61950,
    "timestampMs": 61840,
    "confidence": 0.865132
  },
  {
    "text": " и",
    "startMs": 61950,
    "endMs": 62070,
    "timestampMs": 62010,
    "confidence": 0.990494
  },
  {
    "text": " Морти,",
    "startMs": 62070,
    "endMs": 62350,
    "timestampMs": 62210,
    "confidence": 0.996482
  },
  {
    "text": " как",
    "startMs": 62450,
    "endMs": 62570,
    "timestampMs": 62510,
    "confidence": 0.986683,
    "pageBreakAfter": true
  },
  {
    "text": " старые",
    "startMs": 62570,
    "endMs": 62850,
    "timestampMs": 62710,
    "confidence": 0.949194
  },
  {
    "text": " добрые.",
    "startMs": 62850,
    "endMs": 63210,
    "timestampMs": 63030,
    "confidence": 0.922387,
    "pageBreakAfter": true
  }
]
} />;
export const Video08 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="08-clones-1" durationInFrames={1522} premountFor={fps}>
      <ScenePicture src={staticFile("media/08-clones-1.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header08 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions08 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header09 = () => <ClipHeader title={"Он хотел просто\nвесёлое приключение"} series={"Перезапуск Рика"} part={2} parts={3} />;
export const Captions09 = () => <DynamicCaptions captions={
[
  {
    "text": " Ну,",
    "startMs": 3180,
    "endMs": 3700,
    "timestampMs": 3440,
    "confidence": 0.879991
  },
  {
    "text": " а",
    "startMs": 3860,
    "endMs": 3900,
    "timestampMs": 3880,
    "confidence": 0.340999
  },
  {
    "text": " что",
    "startMs": 3900,
    "endMs": 4280,
    "timestampMs": 4090,
    "confidence": 0.989359
  },
  {
    "text": " будем",
    "startMs": 4280,
    "endMs": 4540,
    "timestampMs": 4410,
    "confidence": 0.995576,
    "pageBreakAfter": true
  },
  {
    "text": " делать?",
    "startMs": 4540,
    "endMs": 4840,
    "timestampMs": 4690,
    "confidence": 0.999647,
    "pageBreakAfter": true
  },
  {
    "text": " Хватит",
    "startMs": 5080,
    "endMs": 5500,
    "timestampMs": 5290,
    "confidence": 0.998237
  },
  {
    "text": " задавать",
    "startMs": 5500,
    "endMs": 5780,
    "timestampMs": 5640,
    "confidence": 0.999683
  },
  {
    "text": " вопросы,",
    "startMs": 5780,
    "endMs": 6160,
    "timestampMs": 5970,
    "confidence": 0.998736,
    "pageBreakAfter": true
  },
  {
    "text": " хватит",
    "startMs": 6340,
    "endMs": 6600,
    "timestampMs": 6470,
    "confidence": 0.999774
  },
  {
    "text": " делать",
    "startMs": 6600,
    "endMs": 6860,
    "timestampMs": 6730,
    "confidence": 0.998756,
    "pageBreakAfter": true
  },
  {
    "text": " мета-отсылки,",
    "startMs": 6860,
    "endMs": 7660,
    "timestampMs": 7260,
    "confidence": 0.968761
  },
  {
    "text": " просто",
    "startMs": 7720,
    "endMs": 7940,
    "timestampMs": 7830,
    "confidence": 0.999791,
    "pageBreakAfter": true
  },
  {
    "text": " веселись.",
    "startMs": 7940,
    "endMs": 8360,
    "timestampMs": 8150,
    "confidence": 0.998829,
    "pageBreakAfter": true
  },
  {
    "text": " Впереди",
    "startMs": 8640,
    "endMs": 8960,
    "timestampMs": 8800,
    "confidence": 0.999689
  },
  {
    "text": " простенькое",
    "startMs": 8960,
    "endMs": 9520,
    "timestampMs": 9240,
    "confidence": 0.998218
  },
  {
    "text": " и",
    "startMs": 9520,
    "endMs": 9620,
    "timestampMs": 9570,
    "confidence": 0.988925,
    "pageBreakAfter": true
  },
  {
    "text": " весёлое",
    "startMs": 9620,
    "endMs": 10020,
    "timestampMs": 9820,
    "confidence": 0.921333
  },
  {
    "text": " классическое",
    "startMs": 10020,
    "endMs": 10520,
    "timestampMs": 10270,
    "confidence": 0.9986,
    "pageBreakAfter": true
  },
  {
    "text": " приключение.",
    "startMs": 10520,
    "endMs": 11080,
    "timestampMs": 10800,
    "confidence": 0.999773,
    "pageBreakAfter": true
  },
  {
    "text": " Ладно,",
    "startMs": 11220,
    "endMs": 11540,
    "timestampMs": 11380,
    "confidence": 0.9984
  },
  {
    "text": " знаешь",
    "startMs": 11660,
    "endMs": 11820,
    "timestampMs": 11740,
    "confidence": 0.998666
  },
  {
    "text": " что,",
    "startMs": 11820,
    "endMs": 12080,
    "timestampMs": 11950,
    "confidence": 0.988135
  },
  {
    "text": " мне",
    "startMs": 12260,
    "endMs": 12500,
    "timestampMs": 12380,
    "confidence": 0.99977,
    "pageBreakAfter": true
  },
  {
    "text": " бы",
    "startMs": 12500,
    "endMs": 12820,
    "timestampMs": 12660,
    "confidence": 0.994569
  },
  {
    "text": " не",
    "startMs": 12820,
    "endMs": 12900,
    "timestampMs": 12860,
    "confidence": 0.999817
  },
  {
    "text": " помешало",
    "startMs": 12900,
    "endMs": 13240,
    "timestampMs": 13070,
    "confidence": 0.996821
  },
  {
    "text": " узнать,",
    "startMs": 13240,
    "endMs": 13580,
    "timestampMs": 13410,
    "confidence": 0.999371,
    "pageBreakAfter": true
  },
  {
    "text": " чего",
    "startMs": 13620,
    "endMs": 13800,
    "timestampMs": 13710,
    "confidence": 0.995359
  },
  {
    "text": " конкретно",
    "startMs": 13800,
    "endMs": 14400,
    "timestampMs": 14100,
    "confidence": 0.9998
  },
  {
    "text": " ты",
    "startMs": 14400,
    "endMs": 14560,
    "timestampMs": 14480,
    "confidence": 0.999834,
    "pageBreakAfter": true
  },
  {
    "text": " хочешь.",
    "startMs": 14560,
    "endMs": 14900,
    "timestampMs": 14730,
    "confidence": 0.999447,
    "pageBreakAfter": true
  },
  {
    "text": " Мне",
    "startMs": 16040,
    "endMs": 16420,
    "timestampMs": 16230,
    "confidence": 0.998603
  },
  {
    "text": " нравятся",
    "startMs": 16420,
    "endMs": 16880,
    "timestampMs": 16650,
    "confidence": 0.907498
  },
  {
    "text": " мистер",
    "startMs": 16880,
    "endMs": 17160,
    "timestampMs": 17020,
    "confidence": 0.949204,
    "pageBreakAfter": true
  },
  {
    "text": " Мисиксы.",
    "startMs": 17160,
    "endMs": 17560,
    "timestampMs": 17360,
    "confidence": 0.750284,
    "pageBreakAfter": true
  },
  {
    "text": " Вот,",
    "startMs": 17580,
    "endMs": 17780,
    "timestampMs": 17680,
    "confidence": 0.901251
  },
  {
    "text": " разговор.",
    "startMs": 17980,
    "endMs": 18460,
    "timestampMs": 18220,
    "confidence": 0.999905,
    "pageBreakAfter": true
  },
  {
    "text": " Знаешь,",
    "startMs": 18580,
    "endMs": 18800,
    "timestampMs": 18690,
    "confidence": 0.998686
  },
  {
    "text": " обычно",
    "startMs": 18860,
    "endMs": 19180,
    "timestampMs": 19020,
    "confidence": 0.62197
  },
  {
    "text": " коробка",
    "startMs": 19180,
    "endMs": 19520,
    "timestampMs": 19350,
    "confidence": 0.998913
  },
  {
    "text": " с",
    "startMs": 19520,
    "endMs": 19620,
    "timestampMs": 19570,
    "confidence": 0.999943,
    "pageBreakAfter": true
  },
  {
    "text": " мисиксами",
    "startMs": 19620,
    "endMs": 20020,
    "timestampMs": 19820,
    "confidence": 0.815874
  },
  {
    "text": " лежит",
    "startMs": 20020,
    "endMs": 20300,
    "timestampMs": 20160,
    "confidence": 0.999698
  },
  {
    "text": " у",
    "startMs": 20300,
    "endMs": 20420,
    "timestampMs": 20360,
    "confidence": 0.978207
  },
  {
    "text": " меня",
    "startMs": 20420,
    "endMs": 20480,
    "timestampMs": 20450,
    "confidence": 0.983622,
    "pageBreakAfter": true
  },
  {
    "text": " в",
    "startMs": 20480,
    "endMs": 20600,
    "timestampMs": 20540,
    "confidence": 0.999838
  },
  {
    "text": " бардачке.",
    "startMs": 20600,
    "endMs": 21100,
    "timestampMs": 20850,
    "confidence": 0.997834,
    "pageBreakAfter": true
  },
  {
    "text": " Так",
    "startMs": 21640,
    "endMs": 21820,
    "timestampMs": 21730,
    "confidence": 0.999053
  },
  {
    "text": " может,",
    "startMs": 21820,
    "endMs": 22100,
    "timestampMs": 21960,
    "confidence": 0.721869
  },
  {
    "text": " и",
    "startMs": 22220,
    "endMs": 22300,
    "timestampMs": 22260,
    "confidence": 0.975834
  },
  {
    "text": " у",
    "startMs": 22300,
    "endMs": 22460,
    "timestampMs": 22380,
    "confidence": 0.994616,
    "pageBreakAfter": true
  },
  {
    "text": " фашиста",
    "startMs": 22460,
    "endMs": 22880,
    "timestampMs": 22670,
    "confidence": 0.992721
  },
  {
    "text": " Рика",
    "startMs": 22880,
    "endMs": 23000,
    "timestampMs": 22940,
    "confidence": 0.977824
  },
  {
    "text": " тоже?",
    "startMs": 23000,
    "endMs": 23320,
    "timestampMs": 23160,
    "confidence": 0.999659,
    "pageBreakAfter": true
  },
  {
    "text": " О,",
    "startMs": 24000,
    "endMs": 24560,
    "timestampMs": 24280,
    "confidence": 0.996074
  },
  {
    "text": " вы",
    "startMs": 24720,
    "endMs": 24920,
    "timestampMs": 24820,
    "confidence": 0.998725
  },
  {
    "text": " только",
    "startMs": 24920,
    "endMs": 25160,
    "timestampMs": 25040,
    "confidence": 0.999876
  },
  {
    "text": " гляньте.",
    "startMs": 25160,
    "endMs": 25580,
    "timestampMs": 25370,
    "confidence": 0.998425,
    "pageBreakAfter": true
  },
  {
    "text": " Теперь",
    "startMs": 25700,
    "endMs": 25960,
    "timestampMs": 25830,
    "confidence": 0.999259
  },
  {
    "text": " мы",
    "startMs": 25960,
    "endMs": 26140,
    "timestampMs": 26050,
    "confidence": 0.999858
  },
  {
    "text": " делаем",
    "startMs": 26140,
    "endMs": 26440,
    "timestampMs": 26290,
    "confidence": 0.998681
  },
  {
    "text": " то,",
    "startMs": 26440,
    "endMs": 26620,
    "timestampMs": 26530,
    "confidence": 0.999826,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 26760,
    "endMs": 26860,
    "timestampMs": 26810,
    "confidence": 0.999863
  },
  {
    "text": " уже",
    "startMs": 26860,
    "endMs": 27040,
    "timestampMs": 26950,
    "confidence": 0.996787
  },
  {
    "text": " делали",
    "startMs": 27040,
    "endMs": 27400,
    "timestampMs": 27220,
    "confidence": 0.999662
  },
  {
    "text": " раньше.",
    "startMs": 27400,
    "endMs": 27740,
    "timestampMs": 27570,
    "confidence": 0.999097,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 28260,
    "endMs": 28720,
    "timestampMs": 28490,
    "confidence": 0.985157
  },
  {
    "text": " мистер",
    "startMs": 28720,
    "endMs": 29080,
    "timestampMs": 28900,
    "confidence": 0.998901
  },
  {
    "text": " Мисикс!",
    "startMs": 29080,
    "endMs": 29660,
    "timestampMs": 29370,
    "confidence": 0.972131,
    "pageBreakAfter": true
  },
  {
    "text": " Убей",
    "startMs": 29720,
    "endMs": 30060,
    "timestampMs": 29890,
    "confidence": 0.952204
  },
  {
    "text": " нацистского",
    "startMs": 30060,
    "endMs": 30580,
    "timestampMs": 30320,
    "confidence": 0.882439,
    "pageBreakAfter": true
  },
  {
    "text": " подонка!",
    "startMs": 30580,
    "endMs": 31100,
    "timestampMs": 30840,
    "confidence": 0.977044,
    "pageBreakAfter": true
  },
  {
    "text": " Это",
    "startMs": 31340,
    "endMs": 31640,
    "timestampMs": 31490,
    "confidence": 0.878615
  },
  {
    "text": " я",
    "startMs": 31640,
    "endMs": 31860,
    "timestampMs": 31750,
    "confidence": 0.989199
  },
  {
    "text": " могу!",
    "startMs": 31860,
    "endMs": 32140,
    "timestampMs": 32000,
    "confidence": 0.920956,
    "pageBreakAfter": true
  },
  {
    "text": " Нет!",
    "startMs": 32140,
    "endMs": 32680,
    "timestampMs": 32410,
    "confidence": 0.655585,
    "pageBreakAfter": true
  },
  {
    "text": " Стой!",
    "startMs": 32860,
    "endMs": 33520,
    "timestampMs": 33190,
    "confidence": 0.994847,
    "pageBreakAfter": true
  },
  {
    "text": " Иди",
    "startMs": 33640,
    "endMs": 33800,
    "timestampMs": 33720,
    "confidence": 0.99734
  },
  {
    "text": " сюда,",
    "startMs": 33800,
    "endMs": 34040,
    "timestampMs": 33920,
    "confidence": 0.999924
  },
  {
    "text": " сукин",
    "startMs": 34200,
    "endMs": 34620,
    "timestampMs": 34410,
    "confidence": 0.750574
  },
  {
    "text": " ты",
    "startMs": 34620,
    "endMs": 34788,
    "timestampMs": 34704,
    "confidence": 0.750574,
    "pageBreakAfter": true
  },
  {
    "text": " сын!",
    "startMs": 34788,
    "endMs": 35040,
    "timestampMs": 34914,
    "confidence": 0.750574,
    "pageBreakAfter": true
  },
  {
    "text": " ...перенаправленных",
    "startMs": 43780,
    "endMs": 44580,
    "timestampMs": 44180,
    "confidence": 0.794508,
    "pageBreakAfter": true
  },
  {
    "text": " резервных",
    "startMs": 44580,
    "endMs": 45300,
    "timestampMs": 44940,
    "confidence": 0.996372
  },
  {
    "text": " данных.",
    "startMs": 45300,
    "endMs": 45920,
    "timestampMs": 45610,
    "confidence": 0.997446,
    "pageBreakAfter": true
  },
  {
    "text": " Операция",
    "startMs": 46080,
    "endMs": 46760,
    "timestampMs": 46420,
    "confidence": 0.997065
  },
  {
    "text": " Феникс",
    "startMs": 46760,
    "endMs": 47560,
    "timestampMs": 47160,
    "confidence": 0.912781,
    "pageBreakAfter": true
  },
  {
    "text": " запущена.",
    "startMs": 47560,
    "endMs": 48400,
    "timestampMs": 47980,
    "confidence": 0.99741,
    "pageBreakAfter": true
  },
  {
    "text": " Да",
    "startMs": 50900,
    "endMs": 51153,
    "timestampMs": 51026,
    "confidence": 0.39874
  },
  {
    "text": " ну",
    "startMs": 51153,
    "endMs": 51407,
    "timestampMs": 51280,
    "confidence": 0.39874
  },
  {
    "text": " нафиг.",
    "startMs": 51407,
    "endMs": 52040,
    "timestampMs": 51723,
    "confidence": 0.39874,
    "pageBreakAfter": true
  }
]
} />;
export const Video09 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="09-clones-2" durationInFrames={1283} premountFor={fps}>
      <ScenePicture src={staticFile("media/09-clones-2.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header09 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions09 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header10 = () => <ClipHeader title={"Даже Рик\nне ожидал ТАКОГО"} series={"Перезапуск Рика"} part={3} parts={3} />;
export const Captions10 = () => <DynamicCaptions captions={
[
  {
    "text": " Эй,",
    "startMs": 80,
    "endMs": 760,
    "timestampMs": 420,
    "confidence": 0.790479
  },
  {
    "text": " ты",
    "startMs": 800,
    "endMs": 900,
    "timestampMs": 850,
    "confidence": 0.981515
  },
  {
    "text": " в",
    "startMs": 900,
    "endMs": 1000,
    "timestampMs": 950,
    "confidence": 0.994731
  },
  {
    "text": " порядке?",
    "startMs": 1000,
    "endMs": 1360,
    "timestampMs": 1180,
    "confidence": 0.998114,
    "pageBreakAfter": true
  },
  {
    "text": " Ага,",
    "startMs": 1640,
    "endMs": 1960,
    "timestampMs": 1800,
    "confidence": 0.905616
  },
  {
    "text": " сорян.",
    "startMs": 2120,
    "endMs": 2400,
    "timestampMs": 2260,
    "confidence": 0.971737,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 2600,
    "endMs": 2960,
    "timestampMs": 2780,
    "confidence": 0.968293
  },
  {
    "text": " Рик",
    "startMs": 2960,
    "endMs": 3176,
    "timestampMs": 3068,
    "confidence": 0.788059
  },
  {
    "text": " из",
    "startMs": 3176,
    "endMs": 3320,
    "timestampMs": 3248,
    "confidence": 0.788059
  },
  {
    "text": " другой",
    "startMs": 3320,
    "endMs": 3480,
    "timestampMs": 3400,
    "confidence": 0.999004,
    "pageBreakAfter": true
  },
  {
    "text": " реальности,",
    "startMs": 3480,
    "endMs": 4040,
    "timestampMs": 3760,
    "confidence": 0.994765
  },
  {
    "text": " меня",
    "startMs": 4040,
    "endMs": 4260,
    "timestampMs": 4150,
    "confidence": 0.987977,
    "pageBreakAfter": true
  },
  {
    "text": " загрузила",
    "startMs": 4260,
    "endMs": 4720,
    "timestampMs": 4490,
    "confidence": 0.9282
  },
  {
    "text": " в",
    "startMs": 4720,
    "endMs": 4820,
    "timestampMs": 4770,
    "confidence": 0.997961
  },
  {
    "text": " твою",
    "startMs": 4820,
    "endMs": 5020,
    "timestampMs": 4920,
    "confidence": 0.996837
  },
  {
    "text": " капсулу",
    "startMs": 5020,
    "endMs": 5440,
    "timestampMs": 5230,
    "confidence": 0.996005,
    "pageBreakAfter": true
  },
  {
    "text": " клонов.",
    "startMs": 5440,
    "endMs": 5780,
    "timestampMs": 5610,
    "confidence": 0.994628,
    "pageBreakAfter": true
  },
  {
    "text": " Эй,",
    "startMs": 6220,
    "endMs": 6480,
    "timestampMs": 6350,
    "confidence": 0.997134
  },
  {
    "text": " да",
    "startMs": 6540,
    "endMs": 6628,
    "timestampMs": 6584,
    "confidence": 0.46223
  },
  {
    "text": " не",
    "startMs": 6628,
    "endMs": 6716,
    "timestampMs": 6672,
    "confidence": 0.46223
  },
  {
    "text": " парься,",
    "startMs": 6716,
    "endMs": 6980,
    "timestampMs": 6848,
    "confidence": 0.46223,
    "pageBreakAfter": true
  },
  {
    "text": " у",
    "startMs": 7000,
    "endMs": 7080,
    "timestampMs": 7040,
    "confidence": 0.999348
  },
  {
    "text": " меня",
    "startMs": 7080,
    "endMs": 7180,
    "timestampMs": 7130,
    "confidence": 0.999351
  },
  {
    "text": " их",
    "startMs": 7180,
    "endMs": 7280,
    "timestampMs": 7230,
    "confidence": 0.992993
  },
  {
    "text": " штук",
    "startMs": 7280,
    "endMs": 7460,
    "timestampMs": 7370,
    "confidence": 0.99866,
    "pageBreakAfter": true
  },
  {
    "text": " десять.",
    "startMs": 7460,
    "endMs": 7840,
    "timestampMs": 7650,
    "confidence": 0.865689,
    "pageBreakAfter": true
  },
  {
    "text": " Какого",
    "startMs": 8700,
    "endMs": 9140,
    "timestampMs": 8920,
    "confidence": 0.883787
  },
  {
    "text": " чёрта,",
    "startMs": 9140,
    "endMs": 9540,
    "timestampMs": 9340,
    "confidence": 0.930937
  },
  {
    "text": " Рик,",
    "startMs": 9600,
    "endMs": 9760,
    "timestampMs": 9680,
    "confidence": 0.966424
  },
  {
    "text": " ты",
    "startMs": 9820,
    "endMs": 9900,
    "timestampMs": 9860,
    "confidence": 0.998031,
    "pageBreakAfter": true
  },
  {
    "text": " что,",
    "startMs": 9900,
    "endMs": 10100,
    "timestampMs": 10000,
    "confidence": 0.979367
  },
  {
    "text": " клонов",
    "startMs": 10160,
    "endMs": 10460,
    "timestampMs": 10310,
    "confidence": 0.996035
  },
  {
    "text": " тут",
    "startMs": 10460,
    "endMs": 10640,
    "timestampMs": 10550,
    "confidence": 0.989887
  },
  {
    "text": " делаешь?",
    "startMs": 10640,
    "endMs": 11120,
    "timestampMs": 10880,
    "confidence": 0.997632,
    "pageBreakAfter": true
  },
  {
    "text": " Убирайся",
    "startMs": 11460,
    "endMs": 11840,
    "timestampMs": 11650,
    "confidence": 0.890869
  },
  {
    "text": " отсюда,",
    "startMs": 11840,
    "endMs": 12040,
    "timestampMs": 11940,
    "confidence": 0.887144
  },
  {
    "text": " Морти!",
    "startMs": 12160,
    "endMs": 12280,
    "timestampMs": 12220,
    "confidence": 0.11838,
    "pageBreakAfter": true
  },
  {
    "text": " Господи",
    "startMs": 12920,
    "endMs": 13640,
    "timestampMs": 13280,
    "confidence": 0.984155
  },
  {
    "text": " боже.",
    "startMs": 13640,
    "endMs": 13980,
    "timestampMs": 13810,
    "confidence": 0.966127,
    "pageBreakAfter": true
  },
  {
    "text": " Bist",
    "startMs": 18860,
    "endMs": 19136,
    "timestampMs": 18998,
    "confidence": 0.917381
  },
  {
    "text": " du",
    "startMs": 19136,
    "endMs": 19273,
    "timestampMs": 19204,
    "confidence": 0.917381
  },
  {
    "text": " faschistisch?",
    "startMs": 19273,
    "endMs": 20100,
    "timestampMs": 19686,
    "confidence": 0.917381,
    "pageBreakAfter": true
  },
  {
    "text": " Не-а.",
    "startMs": 21200,
    "endMs": 21840,
    "timestampMs": 21520,
    "confidence": 0.903682,
    "pageBreakAfter": true
  },
  {
    "text": " Ну",
    "startMs": 27720,
    "endMs": 28040,
    "timestampMs": 27880,
    "confidence": 0.941231
  },
  {
    "text": " наконец-то.",
    "startMs": 28040,
    "endMs": 28700,
    "timestampMs": 28370,
    "confidence": 0.481509,
    "pageBreakAfter": true
  },
  {
    "text": " Я-то",
    "startMs": 28860,
    "endMs": 29160,
    "timestampMs": 29010,
    "confidence": 0.993774
  },
  {
    "text": " уж",
    "startMs": 29160,
    "endMs": 29340,
    "timestampMs": 29250,
    "confidence": 0.938742
  },
  {
    "text": " думал,",
    "startMs": 29340,
    "endMs": 29560,
    "timestampMs": 29450,
    "confidence": 0.99813
  },
  {
    "text": " что",
    "startMs": 29600,
    "endMs": 29680,
    "timestampMs": 29640,
    "confidence": 0.998786,
    "pageBreakAfter": true
  },
  {
    "text": " ты",
    "startMs": 29680,
    "endMs": 29820,
    "timestampMs": 29750,
    "confidence": 0.999408
  },
  {
    "text": " зассал.",
    "startMs": 29820,
    "endMs": 30420,
    "timestampMs": 30120,
    "confidence": 0.532331,
    "pageBreakAfter": true
  },
  {
    "text": " Чё",
    "startMs": 31500,
    "endMs": 31940,
    "timestampMs": 31720,
    "confidence": 0.83423
  },
  {
    "text": " за",
    "startMs": 31940,
    "endMs": 32080,
    "timestampMs": 32010,
    "confidence": 0.998176
  },
  {
    "text": " х**ня?",
    "startMs": 32080,
    "endMs": 32500,
    "timestampMs": 32290,
    "confidence": 0.730966,
    "pageBreakAfter": true
  },
  {
    "text": " А,",
    "startMs": 32880,
    "endMs": 33100,
    "timestampMs": 32990,
    "confidence": 0.73038
  },
  {
    "text": " воздуха",
    "startMs": 33200,
    "endMs": 33600,
    "timestampMs": 33400,
    "confidence": 0.999483
  },
  {
    "text": " не",
    "startMs": 33600,
    "endMs": 33700,
    "timestampMs": 33650,
    "confidence": 0.999758
  },
  {
    "text": " хватает.",
    "startMs": 33700,
    "endMs": 34060,
    "timestampMs": 33880,
    "confidence": 0.99977,
    "pageBreakAfter": true
  },
  {
    "text": " Мы",
    "startMs": 34480,
    "endMs": 34920,
    "timestampMs": 34700,
    "confidence": 0.9857
  },
  {
    "text": " с",
    "startMs": 34920,
    "endMs": 35020,
    "timestampMs": 34970,
    "confidence": 0.999409
  },
  {
    "text": " друзьями",
    "startMs": 35020,
    "endMs": 35380,
    "timestampMs": 35200,
    "confidence": 0.999894
  },
  {
    "text": " хотели",
    "startMs": 35380,
    "endMs": 35700,
    "timestampMs": 35540,
    "confidence": 0.999808,
    "pageBreakAfter": true
  },
  {
    "text": " вечером",
    "startMs": 35700,
    "endMs": 36020,
    "timestampMs": 35860,
    "confidence": 0.991133
  },
  {
    "text": " полетать",
    "startMs": 36020,
    "endMs": 36380,
    "timestampMs": 36200,
    "confidence": 0.998744
  },
  {
    "text": " по",
    "startMs": 36380,
    "endMs": 36520,
    "timestampMs": 36450,
    "confidence": 0.999316,
    "pageBreakAfter": true
  },
  {
    "text": " округе,",
    "startMs": 36520,
    "endMs": 36920,
    "timestampMs": 36720,
    "confidence": 0.996228
  },
  {
    "text": " ужалить",
    "startMs": 36960,
    "endMs": 37260,
    "timestampMs": 37110,
    "confidence": 0.974418,
    "pageBreakAfter": true
  },
  {
    "text": " кого-нибудь.",
    "startMs": 37260,
    "endMs": 37720,
    "timestampMs": 37490,
    "confidence": 0.967941,
    "pageBreakAfter": true
  },
  {
    "text": " Осторожней,",
    "startMs": 37980,
    "endMs": 38420,
    "timestampMs": 38200,
    "confidence": 0.891088
  },
  {
    "text": " не",
    "startMs": 38500,
    "endMs": 38620,
    "timestampMs": 38560,
    "confidence": 0.999709
  },
  {
    "text": " потрать",
    "startMs": 38620,
    "endMs": 38940,
    "timestampMs": 38780,
    "confidence": 0.771217,
    "pageBreakAfter": true
  },
  {
    "text": " весь",
    "startMs": 38940,
    "endMs": 39160,
    "timestampMs": 39050,
    "confidence": 0.988502
  },
  {
    "text": " свой",
    "startMs": 39160,
    "endMs": 39440,
    "timestampMs": 39300,
    "confidence": 0.998128
  },
  {
    "text": " яд.",
    "startMs": 39440,
    "endMs": 39660,
    "timestampMs": 39550,
    "confidence": 0.975854,
    "pageBreakAfter": true
  },
  {
    "text": " Пап,",
    "startMs": 39680,
    "endMs": 39940,
    "timestampMs": 39810,
    "confidence": 0.99736
  },
  {
    "text": " я",
    "startMs": 40000,
    "endMs": 40140,
    "timestampMs": 40070,
    "confidence": 0.999819
  },
  {
    "text": " тебе",
    "startMs": 40140,
    "endMs": 40340,
    "timestampMs": 40240,
    "confidence": 0.999254
  },
  {
    "text": " не",
    "startMs": 40340,
    "endMs": 40480,
    "timestampMs": 40410,
    "confidence": 0.999566,
    "pageBreakAfter": true
  },
  {
    "text": " пчела.",
    "startMs": 40480,
    "endMs": 40820,
    "timestampMs": 40650,
    "confidence": 0.993665,
    "pageBreakAfter": true
  },
  {
    "text": " На",
    "startMs": 41260,
    "endMs": 41500,
    "timestampMs": 41380,
    "confidence": 0.994799
  },
  {
    "text": " помощь!",
    "startMs": 41500,
    "endMs": 42020,
    "timestampMs": 41760,
    "confidence": 0.999945,
    "pageBreakAfter": true
  },
  {
    "text": " Папа,",
    "startMs": 42160,
    "endMs": 42540,
    "timestampMs": 42350,
    "confidence": 0.605441
  },
  {
    "text": " убейте",
    "startMs": 42620,
    "endMs": 43140,
    "timestampMs": 42880,
    "confidence": 0.966378
  },
  {
    "text": " меня!",
    "startMs": 43140,
    "endMs": 43340,
    "timestampMs": 43240,
    "confidence": 0.999898,
    "pageBreakAfter": true
  },
  {
    "text": " Прошу,",
    "startMs": 43560,
    "endMs": 44000,
    "timestampMs": 43780,
    "confidence": 0.96138
  },
  {
    "text": " убейте!",
    "startMs": 44080,
    "endMs": 44700,
    "timestampMs": 44390,
    "confidence": 0.998978,
    "pageBreakAfter": true
  },
  {
    "text": " Бет,",
    "startMs": 45060,
    "endMs": 45500,
    "timestampMs": 45280,
    "confidence": 0.713384
  },
  {
    "text": " можно",
    "startMs": 45580,
    "endMs": 45780,
    "timestampMs": 45680,
    "confidence": 0.998314
  },
  {
    "text": " после",
    "startMs": 45780,
    "endMs": 46120,
    "timestampMs": 45950,
    "confidence": 0.997615
  },
  {
    "text": " ужина",
    "startMs": 46120,
    "endMs": 46420,
    "timestampMs": 46270,
    "confidence": 0.998866,
    "pageBreakAfter": true
  },
  {
    "text": " я",
    "startMs": 46420,
    "endMs": 46580,
    "timestampMs": 46500,
    "confidence": 0.99872
  },
  {
    "text": " возьму",
    "startMs": 46580,
    "endMs": 46940,
    "timestampMs": 46760,
    "confidence": 0.999335
  },
  {
    "text": " с",
    "startMs": 46940,
    "endMs": 47040,
    "timestampMs": 46990,
    "confidence": 0.999423
  },
  {
    "text": " собой",
    "startMs": 47040,
    "endMs": 47220,
    "timestampMs": 47130,
    "confidence": 0.999721,
    "pageBreakAfter": true
  },
  {
    "text": " Морти,",
    "startMs": 47220,
    "endMs": 47520,
    "timestampMs": 47370,
    "confidence": 0.992353
  },
  {
    "text": " чтобы",
    "startMs": 47600,
    "endMs": 47740,
    "timestampMs": 47670,
    "confidence": 0.99951
  },
  {
    "text": " помочь",
    "startMs": 47740,
    "endMs": 48160,
    "timestampMs": 47950,
    "confidence": 0.999745,
    "pageBreakAfter": true
  },
  {
    "text": " этому",
    "startMs": 48160,
    "endMs": 48360,
    "timestampMs": 48260,
    "confidence": 0.993174
  },
  {
    "text": " Рику",
    "startMs": 48360,
    "endMs": 48600,
    "timestampMs": 48480,
    "confidence": 0.970179
  },
  {
    "text": " найти",
    "startMs": 48600,
    "endMs": 48820,
    "timestampMs": 48710,
    "confidence": 0.999694
  },
  {
    "text": " свою",
    "startMs": 48820,
    "endMs": 49140,
    "timestampMs": 48980,
    "confidence": 0.999117,
    "pageBreakAfter": true
  },
  {
    "text": " приматную",
    "startMs": 49140,
    "endMs": 49680,
    "timestampMs": 49410,
    "confidence": 0.993678
  },
  {
    "text": " реальность?",
    "startMs": 49680,
    "endMs": 50200,
    "timestampMs": 49940,
    "confidence": 0.99968,
    "pageBreakAfter": true
  },
  {
    "text": " Морти,",
    "startMs": 50860,
    "endMs": 51300,
    "timestampMs": 51080,
    "confidence": 0.998762
  },
  {
    "text": " ты",
    "startMs": 51360,
    "endMs": 51480,
    "timestampMs": 51420,
    "confidence": 0.999577
  },
  {
    "text": " сделал",
    "startMs": 51480,
    "endMs": 51860,
    "timestampMs": 51670,
    "confidence": 0.755732,
    "pageBreakAfter": true
  },
  {
    "text": " домашнюю",
    "startMs": 51860,
    "endMs": 52400,
    "timestampMs": 52130,
    "confidence": 0.999264
  },
  {
    "text": " работу?",
    "startMs": 52400,
    "endMs": 52680,
    "timestampMs": 52540,
    "confidence": 0.99925,
    "pageBreakAfter": true
  },
  {
    "text": " Не",
    "startMs": 52920,
    "endMs": 53180,
    "timestampMs": 53050,
    "confidence": 0.989055
  },
  {
    "text": " до",
    "startMs": 53180,
    "endMs": 53300,
    "timestampMs": 53240,
    "confidence": 0.999723
  },
  {
    "text": " конца.",
    "startMs": 53300,
    "endMs": 53740,
    "timestampMs": 53520,
    "confidence": 0.999907,
    "pageBreakAfter": true
  },
  {
    "text": " Прости,",
    "startMs": 54240,
    "endMs": 54660,
    "timestampMs": 54450,
    "confidence": 0.997574
  },
  {
    "text": " пап.",
    "startMs": 54760,
    "endMs": 54860,
    "timestampMs": 54810,
    "confidence": 0.985608,
    "pageBreakAfter": true
  },
  {
    "text": " Да",
    "startMs": 55200,
    "endMs": 55400,
    "timestampMs": 55300,
    "confidence": 0.997246
  },
  {
    "text": " ничего,",
    "startMs": 55400,
    "endMs": 55620,
    "timestampMs": 55510,
    "confidence": 0.997651
  },
  {
    "text": " милая,",
    "startMs": 55800,
    "endMs": 56040,
    "timestampMs": 55920,
    "confidence": 0.888035,
    "pageBreakAfter": true
  },
  {
    "text": " главное,",
    "startMs": 56140,
    "endMs": 56440,
    "timestampMs": 56290,
    "confidence": 0.999236
  },
  {
    "text": " что",
    "startMs": 56560,
    "endMs": 56660,
    "timestampMs": 56610,
    "confidence": 0.999366
  },
  {
    "text": " мы",
    "startMs": 56660,
    "endMs": 56800,
    "timestampMs": 56730,
    "confidence": 0.999824
  },
  {
    "text": " вместе.",
    "startMs": 56800,
    "endMs": 57220,
    "timestampMs": 57010,
    "confidence": 0.999901,
    "pageBreakAfter": true
  },
  {
    "text": " Мы",
    "startMs": 57660,
    "endMs": 57880,
    "timestampMs": 57770,
    "confidence": 0.997034
  },
  {
    "text": " шершни,",
    "startMs": 57880,
    "endMs": 58440,
    "timestampMs": 58160,
    "confidence": 0.974593
  },
  {
    "text": " а",
    "startMs": 58520,
    "endMs": 58660,
    "timestampMs": 58590,
    "confidence": 0.994618
  },
  {
    "text": " не",
    "startMs": 58660,
    "endMs": 58720,
    "timestampMs": 58690,
    "confidence": 0.999633,
    "pageBreakAfter": true
  },
  {
    "text": " какие-то",
    "startMs": 58720,
    "endMs": 59080,
    "timestampMs": 58900,
    "confidence": 0.998467
  },
  {
    "text": " чудовища.",
    "startMs": 59080,
    "endMs": 59360,
    "timestampMs": 59220,
    "confidence": 0.999521,
    "pageBreakAfter": true
  },
  {
    "text": " Да,",
    "startMs": 60760,
    "endMs": 61060,
    "timestampMs": 60910,
    "confidence": 0.963663
  },
  {
    "text": " похоже,",
    "startMs": 61260,
    "endMs": 61620,
    "timestampMs": 61440,
    "confidence": 0.9989
  },
  {
    "text": " дела",
    "startMs": 61700,
    "endMs": 61840,
    "timestampMs": 61770,
    "confidence": 0.802576
  },
  {
    "text": " у",
    "startMs": 61840,
    "endMs": 62020,
    "timestampMs": 61930,
    "confidence": 0.998982,
    "pageBreakAfter": true
  },
  {
    "text": " меня",
    "startMs": 62020,
    "endMs": 62100,
    "timestampMs": 62060,
    "confidence": 0.987893
  },
  {
    "text": " не",
    "startMs": 62100,
    "endMs": 62220,
    "timestampMs": 62160,
    "confidence": 0.999589
  },
  {
    "text": " так",
    "startMs": 62220,
    "endMs": 62400,
    "timestampMs": 62310,
    "confidence": 0.999816
  },
  {
    "text": " плохи,",
    "startMs": 62400,
    "endMs": 62700,
    "timestampMs": 62550,
    "confidence": 0.728956,
    "pageBreakAfter": true
  },
  {
    "text": " как",
    "startMs": 62720,
    "endMs": 62860,
    "timestampMs": 62790,
    "confidence": 0.999929
  },
  {
    "text": " я",
    "startMs": 62860,
    "endMs": 63000,
    "timestampMs": 62930,
    "confidence": 0.99955
  },
  {
    "text": " думал.",
    "startMs": 63000,
    "endMs": 63280,
    "timestampMs": 63140,
    "confidence": 0.999453,
    "pageBreakAfter": true
  },
  {
    "text": " Подашь",
    "startMs": 63360,
    "endMs": 64040,
    "timestampMs": 63700,
    "confidence": 0.955995
  },
  {
    "text": " кислоту.",
    "startMs": 64040,
    "endMs": 64400,
    "timestampMs": 64220,
    "confidence": 0.996915,
    "pageBreakAfter": true
  }
]
} />;
export const Video10 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="10-clones-3" durationInFrames={1560} premountFor={fps}>
      <ScenePicture src={staticFile("media/10-clones-3.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header10 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions10 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const StoryRoot = () => <>
  <Composition id="Story-01" component={Video01} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={413} />
  <Composition id="Captions-01" component={Captions01} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={413} />
  <Composition id="Header-01" component={Header01} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={413} />
  <Composition id="Story-02" component={Video02} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={936} />
  <Composition id="Captions-02" component={Captions02} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={936} />
  <Composition id="Header-02" component={Header02} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={936} />
  <Composition id="Story-03" component={Video03} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={539} />
  <Composition id="Captions-03" component={Captions03} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={539} />
  <Composition id="Header-03" component={Header03} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={539} />
  <Composition id="Story-04" component={Video04} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={461} />
  <Composition id="Captions-04" component={Captions04} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={461} />
  <Composition id="Header-04" component={Header04} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={461} />
  <Composition id="Story-05" component={Video05} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={1679} />
  <Composition id="Captions-05" component={Captions05} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={1679} />
  <Composition id="Header-05" component={Header05} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={1679} />
  <Composition id="Story-06" component={Video06} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={1348} />
  <Composition id="Captions-06" component={Captions06} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={1348} />
  <Composition id="Header-06" component={Header06} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={1348} />
  <Composition id="Story-07" component={Video07} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={1452} />
  <Composition id="Captions-07" component={Captions07} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={1452} />
  <Composition id="Header-07" component={Header07} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={1452} />
  <Composition id="Story-08" component={Video08} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={1522} />
  <Composition id="Captions-08" component={Captions08} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={1522} />
  <Composition id="Header-08" component={Header08} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={1522} />
  <Composition id="Story-09" component={Video09} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={1283} />
  <Composition id="Captions-09" component={Captions09} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={1283} />
  <Composition id="Header-09" component={Header09} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={1283} />
  <Composition id="Story-10" component={Video10} width={1080} height={1920}
    fps={24000 / 1001} durationInFrames={1560} />
  <Composition id="Captions-10" component={Captions10} width={1080} height={200}
    fps={24000 / 1001} durationInFrames={1560} />
  <Composition id="Header-10" component={Header10} width={1080} height={380}
    fps={24000 / 1001} durationInFrames={1560} />
</>;
