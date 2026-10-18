import {AbsoluteFill, Composition, Sequence, staticFile, useVideoConfig} from 'remotion';
import {ClipHeader, DynamicCaptions, ScenePicture} from './Common';
export const Header01 = () => <ClipHeader title={"Можно я просто\nПОЛЕЖУ?"} />;
export const Captions01 = () => <DynamicCaptions captions={
[
  {
    "text": " Посмотрите",
    "startMs": 0,
    "endMs": 600,
    "timestampMs": 300,
    "confidence": 0.982786
  },
  {
    "text": " на",
    "startMs": 600,
    "endMs": 760,
    "timestampMs": 680,
    "confidence": 0.999798
  },
  {
    "text": " меня.",
    "startMs": 760,
    "endMs": 980,
    "timestampMs": 870,
    "confidence": 0.999935,
    "pageBreakAfter": true
  },
  {
    "text": " Посмотрите",
    "startMs": 1300,
    "endMs": 1820,
    "timestampMs": 1560,
    "confidence": 0.999225
  },
  {
    "text": " в",
    "startMs": 1820,
    "endMs": 2100,
    "timestampMs": 1960,
    "confidence": 0.998751
  },
  {
    "text": " эти",
    "startMs": 2100,
    "endMs": 2300,
    "timestampMs": 2200,
    "confidence": 0.997909,
    "pageBreakAfter": true
  },
  {
    "text": " глаза.",
    "startMs": 2300,
    "endMs": 2820,
    "timestampMs": 2560,
    "confidence": 0.99913,
    "pageBreakAfter": true
  },
  {
    "text": " Разве",
    "startMs": 3260,
    "endMs": 3780,
    "timestampMs": 3520,
    "confidence": 0.999427
  },
  {
    "text": " я",
    "startMs": 3780,
    "endMs": 3880,
    "timestampMs": 3830,
    "confidence": 0.999954
  },
  {
    "text": " похож",
    "startMs": 3880,
    "endMs": 4160,
    "timestampMs": 4020,
    "confidence": 0.999878
  },
  {
    "text": " на",
    "startMs": 4160,
    "endMs": 4340,
    "timestampMs": 4250,
    "confidence": 0.999958,
    "pageBreakAfter": true
  },
  {
    "text": " спортсмена?",
    "startMs": 4340,
    "endMs": 4900,
    "timestampMs": 4620,
    "confidence": 0.962226,
    "pageBreakAfter": true
  },
  {
    "text": " Или",
    "startMs": 5020,
    "endMs": 5220,
    "timestampMs": 5120,
    "confidence": 0.999866
  },
  {
    "text": " хотя",
    "startMs": 5220,
    "endMs": 5580,
    "timestampMs": 5400,
    "confidence": 0.999587
  },
  {
    "text": " бы",
    "startMs": 5580,
    "endMs": 5780,
    "timestampMs": 5680,
    "confidence": 0.99999
  },
  {
    "text": " не",
    "startMs": 5780,
    "endMs": 6040,
    "timestampMs": 5910,
    "confidence": 0.99988,
    "pageBreakAfter": true
  },
  {
    "text": " на",
    "startMs": 6040,
    "endMs": 6280,
    "timestampMs": 6160,
    "confidence": 0.999913
  },
  {
    "text": " скуфа?",
    "startMs": 6280,
    "endMs": 6780,
    "timestampMs": 6530,
    "confidence": 0.932919,
    "pageBreakAfter": true
  },
  {
    "text": " Да",
    "startMs": 6860,
    "endMs": 7020,
    "timestampMs": 6940,
    "confidence": 0.999479
  },
  {
    "text": " я",
    "startMs": 7020,
    "endMs": 7200,
    "timestampMs": 7110,
    "confidence": 0.987678
  },
  {
    "text": " даже",
    "startMs": 7200,
    "endMs": 7480,
    "timestampMs": 7340,
    "confidence": 0.999972
  },
  {
    "text": " не",
    "startMs": 7480,
    "endMs": 7620,
    "timestampMs": 7550,
    "confidence": 0.999961,
    "pageBreakAfter": true
  },
  {
    "text": " спортивный",
    "startMs": 7620,
    "endMs": 8220,
    "timestampMs": 7920,
    "confidence": 0.999712
  },
  {
    "text": " скуф.",
    "startMs": 8220,
    "endMs": 8640,
    "timestampMs": 8430,
    "confidence": 0.999102,
    "pageBreakAfter": true
  },
  {
    "text": " Тогда",
    "startMs": 8760,
    "endMs": 9000,
    "timestampMs": 8880,
    "confidence": 0.999769
  },
  {
    "text": " почему",
    "startMs": 9000,
    "endMs": 9380,
    "timestampMs": 9190,
    "confidence": 0.999854
  },
  {
    "text": " всю",
    "startMs": 9380,
    "endMs": 9660,
    "timestampMs": 9520,
    "confidence": 0.999029
  },
  {
    "text": " жизнь",
    "startMs": 9660,
    "endMs": 9920,
    "timestampMs": 9790,
    "confidence": 0.999936,
    "pageBreakAfter": true
  },
  {
    "text": " от",
    "startMs": 9920,
    "endMs": 10100,
    "timestampMs": 10010,
    "confidence": 0.999949
  },
  {
    "text": " меня",
    "startMs": 10100,
    "endMs": 10280,
    "timestampMs": 10190,
    "confidence": 0.999945
  },
  {
    "text": " требуют",
    "startMs": 10280,
    "endMs": 10700,
    "timestampMs": 10490,
    "confidence": 0.984932,
    "pageBreakAfter": true
  },
  {
    "text": " какие-то",
    "startMs": 10700,
    "endMs": 11060,
    "timestampMs": 10880,
    "confidence": 0.999597
  },
  {
    "text": " там,",
    "startMs": 11060,
    "endMs": 11300,
    "timestampMs": 11180,
    "confidence": 0.998478
  },
  {
    "text": " ну",
    "startMs": 11380,
    "endMs": 11720,
    "timestampMs": 11550,
    "confidence": 0.999413
  },
  {
    "text": " как",
    "startMs": 11720,
    "endMs": 11940,
    "timestampMs": 11830,
    "confidence": 0.995341,
    "pageBreakAfter": true
  },
  {
    "text": " эти,",
    "startMs": 11940,
    "endMs": 12200,
    "timestampMs": 12070,
    "confidence": 0.895858
  },
  {
    "text": " физические",
    "startMs": 12320,
    "endMs": 13080,
    "timestampMs": 12700,
    "confidence": 0.996665,
    "pageBreakAfter": true
  },
  {
    "text": " упражнения?",
    "startMs": 13080,
    "endMs": 13780,
    "timestampMs": 13430,
    "confidence": 0.99989,
    "pageBreakAfter": true
  },
  {
    "text": " Начиная",
    "startMs": 14080,
    "endMs": 14600,
    "timestampMs": 14340,
    "confidence": 0.997642
  },
  {
    "text": " с",
    "startMs": 14600,
    "endMs": 14720,
    "timestampMs": 14660,
    "confidence": 0.999965
  },
  {
    "text": " зарядки",
    "startMs": 14720,
    "endMs": 15160,
    "timestampMs": 14940,
    "confidence": 0.999894
  },
  {
    "text": " в",
    "startMs": 15160,
    "endMs": 15260,
    "timestampMs": 15210,
    "confidence": 0.999939,
    "pageBreakAfter": true
  },
  {
    "text": " детском",
    "startMs": 15260,
    "endMs": 15560,
    "timestampMs": 15410,
    "confidence": 0.999899
  },
  {
    "text": " садике,",
    "startMs": 15560,
    "endMs": 15940,
    "timestampMs": 15750,
    "confidence": 0.999737,
    "pageBreakAfter": true
  },
  {
    "text": " заканчивая",
    "startMs": 16060,
    "endMs": 16600,
    "timestampMs": 16330,
    "confidence": 0.994887,
    "pageBreakAfter": true
  },
  {
    "text": " марш-броском",
    "startMs": 16600,
    "endMs": 17400,
    "timestampMs": 17000,
    "confidence": 0.995788
  },
  {
    "text": " в",
    "startMs": 17400,
    "endMs": 17580,
    "timestampMs": 17490,
    "confidence": 0.999985
  },
  {
    "text": " армии",
    "startMs": 17580,
    "endMs": 17880,
    "timestampMs": 17730,
    "confidence": 0.995535
  },
  {
    "text": " и",
    "startMs": 17880,
    "endMs": 18080,
    "timestampMs": 17980,
    "confidence": 0.9929,
    "pageBreakAfter": true
  },
  {
    "text": " поднятием",
    "startMs": 18080,
    "endMs": 18760,
    "timestampMs": 18420,
    "confidence": 0.999247
  },
  {
    "text": " огромных",
    "startMs": 18760,
    "endMs": 19240,
    "timestampMs": 19000,
    "confidence": 0.999932,
    "pageBreakAfter": true
  },
  {
    "text": " пакетов",
    "startMs": 19240,
    "endMs": 19680,
    "timestampMs": 19460,
    "confidence": 0.999923
  },
  {
    "text": " из",
    "startMs": 19680,
    "endMs": 19840,
    "timestampMs": 19760,
    "confidence": 0.998613
  },
  {
    "text": " Шестёрочки",
    "startMs": 19840,
    "endMs": 20520,
    "timestampMs": 20180,
    "confidence": 0.973741,
    "pageBreakAfter": true
  },
  {
    "text": " во",
    "startMs": 20520,
    "endMs": 20660,
    "timestampMs": 20590,
    "confidence": 0.999776
  },
  {
    "text": " взрослой",
    "startMs": 20660,
    "endMs": 21060,
    "timestampMs": 20860,
    "confidence": 0.999868
  },
  {
    "text": " жизни.",
    "startMs": 21060,
    "endMs": 21280,
    "timestampMs": 21170,
    "confidence": 0.999886,
    "pageBreakAfter": true
  },
  {
    "text": " Можно",
    "startMs": 21480,
    "endMs": 21740,
    "timestampMs": 21610,
    "confidence": 0.998992
  },
  {
    "text": " я",
    "startMs": 21740,
    "endMs": 21980,
    "timestampMs": 21860,
    "confidence": 0.99894
  },
  {
    "text": " просто",
    "startMs": 21980,
    "endMs": 22400,
    "timestampMs": 22190,
    "confidence": 0.999792
  },
  {
    "text": " полежу",
    "startMs": 22400,
    "endMs": 22940,
    "timestampMs": 22670,
    "confidence": 0.997069,
    "pageBreakAfter": true
  },
  {
    "text": " здесь,",
    "startMs": 22940,
    "endMs": 23240,
    "timestampMs": 23090,
    "confidence": 0.999569
  },
  {
    "text": " пожалуйста?",
    "startMs": 23400,
    "endMs": 23780,
    "timestampMs": 23590,
    "confidence": 0.999876,
    "pageBreakAfter": true
  },
  {
    "text": " Конечно,",
    "startMs": 24380,
    "endMs": 24800,
    "timestampMs": 24590,
    "confidence": 0.999328,
    "pageBreakAfter": true
  },
  {
    "text": " отдыхай,",
    "startMs": 25260,
    "endMs": 25760,
    "timestampMs": 25510,
    "confidence": 0.999673
  },
  {
    "text": " дорогой,",
    "startMs": 25840,
    "endMs": 26220,
    "timestampMs": 26030,
    "confidence": 0.999922
  },
  {
    "text": " а",
    "startMs": 26300,
    "endMs": 26400,
    "timestampMs": 26350,
    "confidence": 0.999464,
    "pageBreakAfter": true
  },
  {
    "text": " вечером",
    "startMs": 26400,
    "endMs": 26840,
    "timestampMs": 26620,
    "confidence": 0.999811
  },
  {
    "text": " поедем",
    "startMs": 26840,
    "endMs": 27300,
    "timestampMs": 27070,
    "confidence": 0.999836
  },
  {
    "text": " за",
    "startMs": 27300,
    "endMs": 27460,
    "timestampMs": 27380,
    "confidence": 0.99964,
    "pageBreakAfter": true
  },
  {
    "text": " черноземом",
    "startMs": 27460,
    "endMs": 28120,
    "timestampMs": 27790,
    "confidence": 0.968628
  },
  {
    "text": " для",
    "startMs": 28120,
    "endMs": 28280,
    "timestampMs": 28200,
    "confidence": 0.999844
  },
  {
    "text": " грядок.",
    "startMs": 28280,
    "endMs": 28720,
    "timestampMs": 28500,
    "confidence": 0.999011,
    "pageBreakAfter": true
  }
]
} />;
export const Video01 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="01-rest" durationInFrames={700} premountFor={fps}>
      <ScenePicture src={staticFile("media/01-rest.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header01 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions01 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header02 = () => <ClipHeader title={"Два отжимания:\nШКОЛА vs АРМИЯ"} />;
export const Captions02 = () => <DynamicCaptions captions={
[
  {
    "text": " Но",
    "startMs": 107,
    "endMs": 637,
    "timestampMs": 372,
    "confidence": 0.853204
  },
  {
    "text": " по-настоящему",
    "startMs": 637,
    "endMs": 1497,
    "timestampMs": 1067,
    "confidence": 0.962768
  },
  {
    "text": " это",
    "startMs": 1497,
    "endMs": 1637,
    "timestampMs": 1567,
    "confidence": 0.952611,
    "pageBreakAfter": true
  },
  {
    "text": " стало",
    "startMs": 1637,
    "endMs": 1917,
    "timestampMs": 1777,
    "confidence": 0.99738
  },
  {
    "text": " проблемой",
    "startMs": 1917,
    "endMs": 2397,
    "timestampMs": 2157,
    "confidence": 0.999775
  },
  {
    "text": " в",
    "startMs": 2397,
    "endMs": 2597,
    "timestampMs": 2497,
    "confidence": 0.997207,
    "pageBreakAfter": true
  },
  {
    "text": " армии,",
    "startMs": 2597,
    "endMs": 2997,
    "timestampMs": 2797,
    "confidence": 0.996738
  },
  {
    "text": " так",
    "startMs": 3057,
    "endMs": 3177,
    "timestampMs": 3117,
    "confidence": 0.994458
  },
  {
    "text": " как",
    "startMs": 3177,
    "endMs": 3317,
    "timestampMs": 3247,
    "confidence": 0.999738
  },
  {
    "text": " в",
    "startMs": 3317,
    "endMs": 3437,
    "timestampMs": 3377,
    "confidence": 0.999709,
    "pageBreakAfter": true
  },
  {
    "text": " школе",
    "startMs": 3437,
    "endMs": 3777,
    "timestampMs": 3607,
    "confidence": 0.999538
  },
  {
    "text": " за",
    "startMs": 3777,
    "endMs": 3957,
    "timestampMs": 3867,
    "confidence": 0.994193
  },
  {
    "text": " два",
    "startMs": 3957,
    "endMs": 4097,
    "timestampMs": 4027,
    "confidence": 0.782296
  },
  {
    "text": " отжимания",
    "startMs": 4097,
    "endMs": 4537,
    "timestampMs": 4317,
    "confidence": 0.994154,
    "pageBreakAfter": true
  },
  {
    "text": " ты",
    "startMs": 4537,
    "endMs": 4717,
    "timestampMs": 4627,
    "confidence": 0.994722
  },
  {
    "text": " получишь",
    "startMs": 4717,
    "endMs": 5177,
    "timestampMs": 4947,
    "confidence": 0.998438
  },
  {
    "text": " тройку,",
    "startMs": 5177,
    "endMs": 5577,
    "timestampMs": 5377,
    "confidence": 0.995847
  },
  {
    "text": " а",
    "startMs": 5677,
    "endMs": 5757,
    "timestampMs": 5717,
    "confidence": 0.999178,
    "pageBreakAfter": true
  },
  {
    "text": " в",
    "startMs": 5757,
    "endMs": 5857,
    "timestampMs": 5807,
    "confidence": 0.999965
  },
  {
    "text": " армии",
    "startMs": 5857,
    "endMs": 6097,
    "timestampMs": 5977,
    "confidence": 0.999803
  },
  {
    "text": " за",
    "startMs": 6097,
    "endMs": 6257,
    "timestampMs": 6177,
    "confidence": 0.99896
  },
  {
    "text": " два",
    "startMs": 6257,
    "endMs": 6357,
    "timestampMs": 6307,
    "confidence": 0.997651,
    "pageBreakAfter": true
  },
  {
    "text": " отжимания",
    "startMs": 6357,
    "endMs": 6777,
    "timestampMs": 6567,
    "confidence": 0.999297
  },
  {
    "text": " ты",
    "startMs": 6777,
    "endMs": 6957,
    "timestampMs": 6867,
    "confidence": 0.998896
  },
  {
    "text": " получишь",
    "startMs": 6957,
    "endMs": 7357,
    "timestampMs": 7157,
    "confidence": 0.998992,
    "pageBreakAfter": true
  },
  {
    "text": " пизд...",
    "startMs": 7357,
    "endMs": 7657,
    "timestampMs": 7507,
    "confidence": 0.765242,
    "pageBreakAfter": true
  },
  {
    "text": " Дыню",
    "startMs": 7657,
    "endMs": 7897,
    "timestampMs": 7777,
    "confidence": 0.945545
  },
  {
    "text": " хочу.",
    "startMs": 7897,
    "endMs": 8217,
    "timestampMs": 8057,
    "confidence": 0.999517,
    "pageBreakAfter": true
  },
  {
    "text": " Пойду",
    "startMs": 8777,
    "endMs": 9257,
    "timestampMs": 9017,
    "confidence": 0.998901
  },
  {
    "text": " за",
    "startMs": 9257,
    "endMs": 9397,
    "timestampMs": 9327,
    "confidence": 0.998238
  },
  {
    "text": " дыней.",
    "startMs": 9397,
    "endMs": 9697,
    "timestampMs": 9547,
    "confidence": 0.990352,
    "pageBreakAfter": true
  }
]
} />;
export const Video02 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="02-pushups" durationInFrames={246} premountFor={fps}>
      <ScenePicture src={staticFile("media/02-pushups.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header02 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions02 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header03 = () => <ClipHeader title={"Главный босс\nШКОЛЬНОЙ ФИЗРЫ"} />;
export const Captions03 = () => <DynamicCaptions captions={
[
  {
    "text": " Босс",
    "startMs": 70,
    "endMs": 450,
    "timestampMs": 260,
    "confidence": 0.993804
  },
  {
    "text": " локации",
    "startMs": 450,
    "endMs": 1070,
    "timestampMs": 760,
    "confidence": 0.991033
  },
  {
    "text": " –",
    "startMs": 1070,
    "endMs": 1270,
    "timestampMs": 1170,
    "confidence": 0.545147
  },
  {
    "text": " канат.",
    "startMs": 1270,
    "endMs": 1670,
    "timestampMs": 1470,
    "confidence": 0.829651,
    "pageBreakAfter": true
  },
  {
    "text": " Если",
    "startMs": 1810,
    "endMs": 2110,
    "timestampMs": 1960,
    "confidence": 0.999855
  },
  {
    "text": " подтягивания",
    "startMs": 2110,
    "endMs": 2930,
    "timestampMs": 2520,
    "confidence": 0.999025
  },
  {
    "text": " и",
    "startMs": 2930,
    "endMs": 3170,
    "timestampMs": 3050,
    "confidence": 0.999899,
    "pageBreakAfter": true
  },
  {
    "text": " анджумания",
    "startMs": 3170,
    "endMs": 3830,
    "timestampMs": 3500,
    "confidence": 0.87296
  },
  {
    "text": " мне",
    "startMs": 3830,
    "endMs": 4050,
    "timestampMs": 3940,
    "confidence": 0.999914
  },
  {
    "text": " хоть",
    "startMs": 4050,
    "endMs": 4310,
    "timestampMs": 4180,
    "confidence": 0.999777,
    "pageBreakAfter": true
  },
  {
    "text": " как-то",
    "startMs": 4310,
    "endMs": 4670,
    "timestampMs": 4490,
    "confidence": 0.999949
  },
  {
    "text": " давались,",
    "startMs": 4670,
    "endMs": 5090,
    "timestampMs": 4880,
    "confidence": 0.999585
  },
  {
    "text": " то",
    "startMs": 5190,
    "endMs": 5290,
    "timestampMs": 5240,
    "confidence": 0.99973,
    "pageBreakAfter": true
  },
  {
    "text": " канат",
    "startMs": 5290,
    "endMs": 5630,
    "timestampMs": 5460,
    "confidence": 0.999387
  },
  {
    "text": " так",
    "startMs": 5630,
    "endMs": 5870,
    "timestampMs": 5750,
    "confidence": 0.999941
  },
  {
    "text": " и",
    "startMs": 5870,
    "endMs": 6090,
    "timestampMs": 5980,
    "confidence": 0.99996
  },
  {
    "text": " не",
    "startMs": 6090,
    "endMs": 6330,
    "timestampMs": 6210,
    "confidence": 0.999967,
    "pageBreakAfter": true
  },
  {
    "text": " был",
    "startMs": 6330,
    "endMs": 6530,
    "timestampMs": 6430,
    "confidence": 0.999843
  },
  {
    "text": " побежден.",
    "startMs": 6530,
    "endMs": 7170,
    "timestampMs": 6850,
    "confidence": 0.902893,
    "pageBreakAfter": true
  },
  {
    "text": " Каждый",
    "startMs": 7330,
    "endMs": 7750,
    "timestampMs": 7540,
    "confidence": 0.999599
  },
  {
    "text": " раз,",
    "startMs": 7750,
    "endMs": 7910,
    "timestampMs": 7830,
    "confidence": 0.999972
  },
  {
    "text": " подходя",
    "startMs": 8010,
    "endMs": 8330,
    "timestampMs": 8170,
    "confidence": 0.999833
  },
  {
    "text": " к",
    "startMs": 8330,
    "endMs": 8410,
    "timestampMs": 8370,
    "confidence": 0.999986,
    "pageBreakAfter": true
  },
  {
    "text": " снаряду,",
    "startMs": 8410,
    "endMs": 8790,
    "timestampMs": 8600,
    "confidence": 0.999639
  },
  {
    "text": " я",
    "startMs": 8870,
    "endMs": 8990,
    "timestampMs": 8930,
    "confidence": 0.99997,
    "pageBreakAfter": true
  },
  {
    "text": " представлял,",
    "startMs": 8990,
    "endMs": 9570,
    "timestampMs": 9280,
    "confidence": 0.999747
  },
  {
    "text": " что",
    "startMs": 9670,
    "endMs": 9810,
    "timestampMs": 9740,
    "confidence": 0.999938
  },
  {
    "text": " «Наше",
    "startMs": 9810,
    "endMs": 10430,
    "timestampMs": 10120,
    "confidence": 0.740359,
    "pageBreakAfter": true
  },
  {
    "text": " сражение",
    "startMs": 10430,
    "endMs": 11090,
    "timestampMs": 10760,
    "confidence": 0.99992
  },
  {
    "text": " станет",
    "startMs": 11090,
    "endMs": 11690,
    "timestampMs": 11390,
    "confidence": 0.999805,
    "pageBreakAfter": true
  },
  {
    "text": " легендарным",
    "startMs": 11690,
    "endMs": 12590,
    "timestampMs": 12140,
    "confidence": 0.999836
  },
  {
    "text": " !»",
    "startMs": 12590,
    "endMs": 12670,
    "timestampMs": 12630,
    "confidence": 0.673523
  },
  {
    "text": " Но",
    "startMs": 12670,
    "endMs": 12850,
    "timestampMs": 12760,
    "confidence": 0.923783,
    "pageBreakAfter": true
  },
  {
    "text": " сразить",
    "startMs": 12850,
    "endMs": 13390,
    "timestampMs": 13120,
    "confidence": 0.999689
  },
  {
    "text": " получалось",
    "startMs": 13390,
    "endMs": 13990,
    "timestampMs": 13690,
    "confidence": 0.998969,
    "pageBreakAfter": true
  },
  {
    "text": " только",
    "startMs": 13990,
    "endMs": 14270,
    "timestampMs": 14130,
    "confidence": 0.999357
  },
  {
    "text": " одноклассников,",
    "startMs": 14270,
    "endMs": 15070,
    "timestampMs": 14670,
    "confidence": 0.998741,
    "pageBreakAfter": true
  },
  {
    "text": " которые",
    "startMs": 15230,
    "endMs": 15530,
    "timestampMs": 15380,
    "confidence": 0.999483
  },
  {
    "text": " от",
    "startMs": 15530,
    "endMs": 15710,
    "timestampMs": 15620,
    "confidence": 0.999872
  },
  {
    "text": " смеха",
    "startMs": 15710,
    "endMs": 16090,
    "timestampMs": 15900,
    "confidence": 0.999852
  },
  {
    "text": " по",
    "startMs": 16090,
    "endMs": 16230,
    "timestampMs": 16160,
    "confidence": 0.998619,
    "pageBreakAfter": true
  },
  {
    "text": " полу",
    "startMs": 16230,
    "endMs": 16450,
    "timestampMs": 16340,
    "confidence": 0.999896
  },
  {
    "text": " катались,",
    "startMs": 16450,
    "endMs": 16830,
    "timestampMs": 16640,
    "confidence": 0.999952,
    "pageBreakAfter": true
  },
  {
    "text": " наблюдая",
    "startMs": 16990,
    "endMs": 17350,
    "timestampMs": 17170,
    "confidence": 0.999872
  },
  {
    "text": " за",
    "startMs": 17350,
    "endMs": 17490,
    "timestampMs": 17420,
    "confidence": 0.9999
  },
  {
    "text": " моим",
    "startMs": 17490,
    "endMs": 17710,
    "timestampMs": 17600,
    "confidence": 0.999491,
    "pageBreakAfter": true
  },
  {
    "text": " беспомощным",
    "startMs": 17710,
    "endMs": 18470,
    "timestampMs": 18090,
    "confidence": 0.99956,
    "pageBreakAfter": true
  },
  {
    "text": " трепыханием",
    "startMs": 18470,
    "endMs": 19190,
    "timestampMs": 18830,
    "confidence": 0.990711
  },
  {
    "text": " на",
    "startMs": 19190,
    "endMs": 19390,
    "timestampMs": 19290,
    "confidence": 0.999875
  },
  {
    "text": " толстой",
    "startMs": 19390,
    "endMs": 19790,
    "timestampMs": 19590,
    "confidence": 0.9996,
    "pageBreakAfter": true
  },
  {
    "text": " веревке.",
    "startMs": 19790,
    "endMs": 20270,
    "timestampMs": 20030,
    "confidence": 0.982621,
    "pageBreakAfter": true
  },
  {
    "text": " Да",
    "startMs": 20270,
    "endMs": 20630,
    "timestampMs": 20450,
    "confidence": 0.981962
  },
  {
    "text": " блин,",
    "startMs": 20630,
    "endMs": 20850,
    "timestampMs": 20740,
    "confidence": 0.980157
  },
  {
    "text": " у",
    "startMs": 20930,
    "endMs": 20970,
    "timestampMs": 20950,
    "confidence": 0.999925
  },
  {
    "text": " нас",
    "startMs": 20970,
    "endMs": 21070,
    "timestampMs": 21020,
    "confidence": 0.999976,
    "pageBreakAfter": true
  },
  {
    "text": " даже",
    "startMs": 21070,
    "endMs": 21310,
    "timestampMs": 21190,
    "confidence": 0.999886
  },
  {
    "text": " большинство",
    "startMs": 21310,
    "endMs": 21910,
    "timestampMs": 21610,
    "confidence": 0.998624,
    "pageBreakAfter": true
  },
  {
    "text": " девчонок",
    "startMs": 21910,
    "endMs": 22570,
    "timestampMs": 22240,
    "confidence": 0.998858
  },
  {
    "text": " лазило",
    "startMs": 22570,
    "endMs": 22950,
    "timestampMs": 22760,
    "confidence": 0.984233
  },
  {
    "text": " на",
    "startMs": 22950,
    "endMs": 23110,
    "timestampMs": 23030,
    "confidence": 0.999941
  },
  {
    "text": " нём",
    "startMs": 23110,
    "endMs": 23270,
    "timestampMs": 23190,
    "confidence": 0.823806,
    "pageBreakAfter": true
  },
  {
    "text": " лучше",
    "startMs": 23270,
    "endMs": 23650,
    "timestampMs": 23460,
    "confidence": 0.99978
  },
  {
    "text": " меня.",
    "startMs": 23650,
    "endMs": 23950,
    "timestampMs": 23800,
    "confidence": 0.999847,
    "pageBreakAfter": true
  },
  {
    "text": " Молодец,",
    "startMs": 24990,
    "endMs": 25590,
    "timestampMs": 25290,
    "confidence": 0.981157
  },
  {
    "text": " Дашенька.",
    "startMs": 25670,
    "endMs": 26130,
    "timestampMs": 25900,
    "confidence": 0.998971,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 26330,
    "endMs": 26710,
    "timestampMs": 26520,
    "confidence": 0.912754
  },
  {
    "text": " теперь",
    "startMs": 26710,
    "endMs": 27130,
    "timestampMs": 26920,
    "confidence": 0.997025
  },
  {
    "text": " давай,",
    "startMs": 27130,
    "endMs": 27610,
    "timestampMs": 27370,
    "confidence": 0.998204,
    "pageBreakAfter": true
  },
  {
    "text": " возвращайся",
    "startMs": 27630,
    "endMs": 28590,
    "timestampMs": 28110,
    "confidence": 0.999863
  },
  {
    "text": " к...",
    "startMs": 28590,
    "endMs": 29010,
    "timestampMs": 28800,
    "confidence": 0.820497,
    "pageBreakAfter": true
  }
]
} />;
export const Video03 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="03-rope" durationInFrames={854} premountFor={fps}>
      <ScenePicture src={staticFile("media/03-rope.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header03 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions03 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header04 = () => <ClipHeader title={"Когда тебя\nВЫБИРАЮТ ПОСЛЕДНИМ"} />;
export const Captions04 = () => <DynamicCaptions captions={
[
  {
    "text": " Но",
    "startMs": 113,
    "endMs": 593,
    "timestampMs": 353,
    "confidence": 0.998086
  },
  {
    "text": " с",
    "startMs": 593,
    "endMs": 753,
    "timestampMs": 673,
    "confidence": 0.999653
  },
  {
    "text": " трудом",
    "startMs": 753,
    "endMs": 1053,
    "timestampMs": 903,
    "confidence": 0.999472
  },
  {
    "text": " мне",
    "startMs": 1053,
    "endMs": 1213,
    "timestampMs": 1133,
    "confidence": 0.943399,
    "pageBreakAfter": true
  },
  {
    "text": " давались",
    "startMs": 1213,
    "endMs": 1553,
    "timestampMs": 1383,
    "confidence": 0.999686
  },
  {
    "text": " не",
    "startMs": 1553,
    "endMs": 1713,
    "timestampMs": 1633,
    "confidence": 0.999953
  },
  {
    "text": " только",
    "startMs": 1713,
    "endMs": 1993,
    "timestampMs": 1853,
    "confidence": 0.999974,
    "pageBreakAfter": true
  },
  {
    "text": " нормативы.",
    "startMs": 1993,
    "endMs": 2633,
    "timestampMs": 2313,
    "confidence": 0.99989,
    "pageBreakAfter": true
  },
  {
    "text": " Мы",
    "startMs": 2713,
    "endMs": 2893,
    "timestampMs": 2803,
    "confidence": 0.998881
  },
  {
    "text": " ведь",
    "startMs": 2893,
    "endMs": 3033,
    "timestampMs": 2963,
    "confidence": 0.999671
  },
  {
    "text": " там",
    "startMs": 3033,
    "endMs": 3233,
    "timestampMs": 3133,
    "confidence": 0.999925
  },
  {
    "text": " ещё",
    "startMs": 3233,
    "endMs": 3433,
    "timestampMs": 3333,
    "confidence": 0.859899,
    "pageBreakAfter": true
  },
  {
    "text": " и",
    "startMs": 3433,
    "endMs": 3633,
    "timestampMs": 3533,
    "confidence": 0.999985
  },
  {
    "text": " в",
    "startMs": 3633,
    "endMs": 3773,
    "timestampMs": 3703,
    "confidence": 0.999384
  },
  {
    "text": " игры",
    "startMs": 3773,
    "endMs": 3973,
    "timestampMs": 3873,
    "confidence": 0.999276
  },
  {
    "text": " играли.",
    "startMs": 3973,
    "endMs": 4373,
    "timestampMs": 4173,
    "confidence": 0.999906,
    "pageBreakAfter": true
  },
  {
    "text": " Например,",
    "startMs": 4493,
    "endMs": 4833,
    "timestampMs": 4663,
    "confidence": 0.999647
  },
  {
    "text": " в",
    "startMs": 5073,
    "endMs": 5213,
    "timestampMs": 5143,
    "confidence": 0.940964
  },
  {
    "text": " волейбол.",
    "startMs": 5213,
    "endMs": 5653,
    "timestampMs": 5433,
    "confidence": 0.838594,
    "pageBreakAfter": true
  },
  {
    "text": " Вот-вот-вот,",
    "startMs": 5793,
    "endMs": 6233,
    "timestampMs": 6013,
    "confidence": 0.106671
  },
  {
    "text": " блядь.",
    "startMs": 6493,
    "endMs": 6833,
    "timestampMs": 6663,
    "confidence": 0.85146,
    "pageBreakAfter": true
  },
  {
    "text": " Саму",
    "startMs": 6873,
    "endMs": 7193,
    "timestampMs": 7033,
    "confidence": 0.998749
  },
  {
    "text": " игру",
    "startMs": 7193,
    "endMs": 7393,
    "timestampMs": 7293,
    "confidence": 0.999662
  },
  {
    "text": " я",
    "startMs": 7393,
    "endMs": 7513,
    "timestampMs": 7453,
    "confidence": 0.999977
  },
  {
    "text": " любил,",
    "startMs": 7513,
    "endMs": 7893,
    "timestampMs": 7703,
    "confidence": 0.999705,
    "pageBreakAfter": true
  },
  {
    "text": " честно,",
    "startMs": 8013,
    "endMs": 8293,
    "timestampMs": 8153,
    "confidence": 0.99991
  },
  {
    "text": " но",
    "startMs": 8373,
    "endMs": 8533,
    "timestampMs": 8453,
    "confidence": 0.999929
  },
  {
    "text": " терпеть",
    "startMs": 8533,
    "endMs": 9173,
    "timestampMs": 8853,
    "confidence": 0.999863
  },
  {
    "text": " не",
    "startMs": 9173,
    "endMs": 9333,
    "timestampMs": 9253,
    "confidence": 0.999898,
    "pageBreakAfter": true
  },
  {
    "text": " мог",
    "startMs": 9333,
    "endMs": 9573,
    "timestampMs": 9453,
    "confidence": 0.999874
  },
  {
    "text": " подавать",
    "startMs": 9573,
    "endMs": 10013,
    "timestampMs": 9793,
    "confidence": 0.998672
  },
  {
    "text": " мяч.",
    "startMs": 10013,
    "endMs": 10413,
    "timestampMs": 10213,
    "confidence": 0.999644,
    "pageBreakAfter": true
  },
  {
    "text": " Не",
    "startMs": 10573,
    "endMs": 10913,
    "timestampMs": 10743,
    "confidence": 0.998774
  },
  {
    "text": " забывайте,",
    "startMs": 10913,
    "endMs": 11473,
    "timestampMs": 11193,
    "confidence": 0.999863
  },
  {
    "text": " я",
    "startMs": 11613,
    "endMs": 11693,
    "timestampMs": 11653,
    "confidence": 0.99995
  },
  {
    "text": " был",
    "startMs": 11693,
    "endMs": 11893,
    "timestampMs": 11793,
    "confidence": 0.999884,
    "pageBreakAfter": true
  },
  {
    "text": " подростком,",
    "startMs": 11893,
    "endMs": 12553,
    "timestampMs": 12223,
    "confidence": 0.99936
  },
  {
    "text": " И",
    "startMs": 12553,
    "endMs": 12773,
    "timestampMs": 12663,
    "confidence": 0.773831
  },
  {
    "text": " мощь",
    "startMs": 12773,
    "endMs": 13133,
    "timestampMs": 12953,
    "confidence": 0.999143,
    "pageBreakAfter": true
  },
  {
    "text": " моей",
    "startMs": 13133,
    "endMs": 13293,
    "timestampMs": 13213,
    "confidence": 0.998812
  },
  {
    "text": " правой",
    "startMs": 13293,
    "endMs": 13833,
    "timestampMs": 13563,
    "confidence": 0.999818
  },
  {
    "text": " руки",
    "startMs": 13833,
    "endMs": 14153,
    "timestampMs": 13993,
    "confidence": 0.995331,
    "pageBreakAfter": true
  },
  {
    "text": " превосходила",
    "startMs": 14153,
    "endMs": 15013,
    "timestampMs": 14583,
    "confidence": 0.997192
  },
  {
    "text": " все",
    "startMs": 15013,
    "endMs": 15333,
    "timestampMs": 15173,
    "confidence": 0.969557,
    "pageBreakAfter": true
  },
  {
    "text": " лимиты",
    "startMs": 15333,
    "endMs": 15813,
    "timestampMs": 15573,
    "confidence": 0.998989
  },
  {
    "text": " этой",
    "startMs": 15813,
    "endMs": 16093,
    "timestampMs": 15953,
    "confidence": 0.998625
  },
  {
    "text": " вселенной.",
    "startMs": 16093,
    "endMs": 16833,
    "timestampMs": 16463,
    "confidence": 0.978749,
    "pageBreakAfter": true
  },
  {
    "text": " Поэтому",
    "startMs": 17033,
    "endMs": 17473,
    "timestampMs": 17253,
    "confidence": 0.998946
  },
  {
    "text": " я",
    "startMs": 17473,
    "endMs": 17773,
    "timestampMs": 17623,
    "confidence": 0.999612
  },
  {
    "text": " никогда",
    "startMs": 17773,
    "endMs": 18173,
    "timestampMs": 17973,
    "confidence": 0.999945
  },
  {
    "text": " не",
    "startMs": 18173,
    "endMs": 18373,
    "timestampMs": 18273,
    "confidence": 0.99998,
    "pageBreakAfter": true
  },
  {
    "text": " мог",
    "startMs": 18373,
    "endMs": 18513,
    "timestampMs": 18443,
    "confidence": 0.999404
  },
  {
    "text": " правильно",
    "startMs": 18513,
    "endMs": 19013,
    "timestampMs": 18763,
    "confidence": 0.999755,
    "pageBreakAfter": true
  },
  {
    "text": " рассчитать",
    "startMs": 19013,
    "endMs": 19573,
    "timestampMs": 19293,
    "confidence": 0.99972
  },
  {
    "text": " силу",
    "startMs": 19573,
    "endMs": 19953,
    "timestampMs": 19763,
    "confidence": 0.987004
  },
  {
    "text": " удара.",
    "startMs": 19953,
    "endMs": 20293,
    "timestampMs": 20123,
    "confidence": 0.999824,
    "pageBreakAfter": true
  },
  {
    "text": " Мяч",
    "startMs": 20433,
    "endMs": 20793,
    "timestampMs": 20613,
    "confidence": 0.997339
  },
  {
    "text": " то",
    "startMs": 20793,
    "endMs": 21053,
    "timestampMs": 20923,
    "confidence": 0.995397
  },
  {
    "text": " не",
    "startMs": 21053,
    "endMs": 21213,
    "timestampMs": 21133,
    "confidence": 0.769696
  },
  {
    "text": " доброшу,",
    "startMs": 21213,
    "endMs": 21793,
    "timestampMs": 21503,
    "confidence": 0.889587,
    "pageBreakAfter": true
  },
  {
    "text": " то",
    "startMs": 22173,
    "endMs": 23333,
    "timestampMs": 22753,
    "confidence": 0.964433
  },
  {
    "text": " переброшу,",
    "startMs": 23333,
    "endMs": 24233,
    "timestampMs": 23783,
    "confidence": 0.998826
  },
  {
    "text": " то",
    "startMs": 24373,
    "endMs": 24593,
    "timestampMs": 24483,
    "confidence": 0.999261
  },
  {
    "text": " он",
    "startMs": 24593,
    "endMs": 24853,
    "timestampMs": 24723,
    "confidence": 0.99984,
    "pageBreakAfter": true
  },
  {
    "text": " вообще",
    "startMs": 24853,
    "endMs": 25333,
    "timestampMs": 25093,
    "confidence": 0.999907
  },
  {
    "text": " куда-то",
    "startMs": 25333,
    "endMs": 25733,
    "timestampMs": 25533,
    "confidence": 0.999907
  },
  {
    "text": " в",
    "startMs": 25733,
    "endMs": 25873,
    "timestampMs": 25803,
    "confidence": 0.999899,
    "pageBreakAfter": true
  },
  {
    "text": " сторону",
    "startMs": 25873,
    "endMs": 26253,
    "timestampMs": 26063,
    "confidence": 0.997533
  },
  {
    "text": " улетит.",
    "startMs": 26253,
    "endMs": 26753,
    "timestampMs": 26503,
    "confidence": 0.96057,
    "pageBreakAfter": true
  },
  {
    "text": " Нетрудно",
    "startMs": 26873,
    "endMs": 27353,
    "timestampMs": 27113,
    "confidence": 0.809972
  },
  {
    "text": " догадаться,",
    "startMs": 27353,
    "endMs": 27833,
    "timestampMs": 27593,
    "confidence": 0.999871,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 27913,
    "endMs": 28093,
    "timestampMs": 28003,
    "confidence": 0.999957
  },
  {
    "text": " я",
    "startMs": 28093,
    "endMs": 28393,
    "timestampMs": 28243,
    "confidence": 0.99994
  },
  {
    "text": " был",
    "startMs": 28393,
    "endMs": 28613,
    "timestampMs": 28503,
    "confidence": 0.999811
  },
  {
    "text": " одним",
    "startMs": 28613,
    "endMs": 28933,
    "timestampMs": 28773,
    "confidence": 0.999807,
    "pageBreakAfter": true
  },
  {
    "text": " из",
    "startMs": 28933,
    "endMs": 29133,
    "timestampMs": 29033,
    "confidence": 0.999963
  },
  {
    "text": " тех,",
    "startMs": 29133,
    "endMs": 29333,
    "timestampMs": 29233,
    "confidence": 0.999903
  },
  {
    "text": " кого",
    "startMs": 29413,
    "endMs": 29573,
    "timestampMs": 29493,
    "confidence": 0.99937
  },
  {
    "text": " выбирают",
    "startMs": 29573,
    "endMs": 30073,
    "timestampMs": 29823,
    "confidence": 0.999808,
    "pageBreakAfter": true
  },
  {
    "text": " в",
    "startMs": 30073,
    "endMs": 30173,
    "timestampMs": 30123,
    "confidence": 0.999661
  },
  {
    "text": " команду",
    "startMs": 30173,
    "endMs": 30533,
    "timestampMs": 30353,
    "confidence": 0.999897
  },
  {
    "text": " последним,",
    "startMs": 30533,
    "endMs": 31213,
    "timestampMs": 30873,
    "confidence": 0.99663,
    "pageBreakAfter": true
  },
  {
    "text": " добивая",
    "startMs": 31353,
    "endMs": 31853,
    "timestampMs": 31603,
    "confidence": 0.999115
  },
  {
    "text": " мою",
    "startMs": 31853,
    "endMs": 32213,
    "timestampMs": 32033,
    "confidence": 0.999838
  },
  {
    "text": " и",
    "startMs": 32213,
    "endMs": 32433,
    "timestampMs": 32323,
    "confidence": 0.997523
  },
  {
    "text": " так",
    "startMs": 32433,
    "endMs": 32593,
    "timestampMs": 32513,
    "confidence": 0.999181,
    "pageBreakAfter": true
  },
  {
    "text": " невысокую",
    "startMs": 32593,
    "endMs": 33293,
    "timestampMs": 32943,
    "confidence": 0.999168
  },
  {
    "text": " самооценку.",
    "startMs": 33293,
    "endMs": 34073,
    "timestampMs": 33683,
    "confidence": 0.999919,
    "pageBreakAfter": true
  }
]
} />;
export const Video04 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="04-volleyball" durationInFrames={824} premountFor={fps}>
      <ScenePicture src={staticFile("media/04-volleyball.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header04 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions04 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header05 = () => <ClipHeader title={"Он играл\nБЕЗ ФУТБОЛКИ"} series={"Физра в лицее"} part={1} parts={2} />;
export const Captions05 = () => <DynamicCaptions captions={
[
  {
    "text": " В",
    "startMs": 67,
    "endMs": 527,
    "timestampMs": 297,
    "confidence": 0.661209
  },
  {
    "text": " лицее",
    "startMs": 637,
    "endMs": 1037,
    "timestampMs": 837,
    "confidence": 0.835825
  },
  {
    "text": " с",
    "startMs": 1037,
    "endMs": 1157,
    "timestampMs": 1097,
    "confidence": 0.985943
  },
  {
    "text": " этим",
    "startMs": 1157,
    "endMs": 1317,
    "timestampMs": 1237,
    "confidence": 0.997475,
    "pageBreakAfter": true
  },
  {
    "text": " было",
    "startMs": 1317,
    "endMs": 1557,
    "timestampMs": 1437,
    "confidence": 0.991696
  },
  {
    "text": " немного",
    "startMs": 1557,
    "endMs": 1917,
    "timestampMs": 1737,
    "confidence": 0.982387
  },
  {
    "text": " получше,",
    "startMs": 1917,
    "endMs": 2517,
    "timestampMs": 2217,
    "confidence": 0.981638,
    "pageBreakAfter": true
  },
  {
    "text": " там",
    "startMs": 2637,
    "endMs": 2777,
    "timestampMs": 2707,
    "confidence": 0.990939
  },
  {
    "text": " я",
    "startMs": 2777,
    "endMs": 2917,
    "timestampMs": 2847,
    "confidence": 0.997099
  },
  {
    "text": " мог",
    "startMs": 2917,
    "endMs": 3137,
    "timestampMs": 3027,
    "confidence": 0.994022
  },
  {
    "text": " просто",
    "startMs": 3137,
    "endMs": 3497,
    "timestampMs": 3317,
    "confidence": 0.992155,
    "pageBreakAfter": true
  },
  {
    "text": " отказаться",
    "startMs": 3497,
    "endMs": 4037,
    "timestampMs": 3767,
    "confidence": 0.998627
  },
  {
    "text": " играть",
    "startMs": 4037,
    "endMs": 4397,
    "timestampMs": 4217,
    "confidence": 0.996303
  },
  {
    "text": " и",
    "startMs": 4397,
    "endMs": 4537,
    "timestampMs": 4467,
    "confidence": 0.987391,
    "pageBreakAfter": true
  },
  {
    "text": " просидеть",
    "startMs": 4537,
    "endMs": 5117,
    "timestampMs": 4827,
    "confidence": 0.998706
  },
  {
    "text": " весь",
    "startMs": 5117,
    "endMs": 5297,
    "timestampMs": 5207,
    "confidence": 0.997872
  },
  {
    "text": " урок",
    "startMs": 5297,
    "endMs": 5597,
    "timestampMs": 5447,
    "confidence": 0.998753
  },
  {
    "text": " на",
    "startMs": 5597,
    "endMs": 5717,
    "timestampMs": 5657,
    "confidence": 0.998511,
    "pageBreakAfter": true
  },
  {
    "text": " скамейке.",
    "startMs": 5717,
    "endMs": 6297,
    "timestampMs": 6007,
    "confidence": 0.997367,
    "pageBreakAfter": true
  },
  {
    "text": " Зато",
    "startMs": 6497,
    "endMs": 6797,
    "timestampMs": 6647,
    "confidence": 0.997692
  },
  {
    "text": " играть",
    "startMs": 6797,
    "endMs": 7257,
    "timestampMs": 7027,
    "confidence": 0.994418
  },
  {
    "text": " всегда",
    "startMs": 7257,
    "endMs": 7657,
    "timestampMs": 7457,
    "confidence": 0.999364,
    "pageBreakAfter": true
  },
  {
    "text": " соглашался",
    "startMs": 7657,
    "endMs": 8297,
    "timestampMs": 7977,
    "confidence": 0.998861
  },
  {
    "text": " мой",
    "startMs": 8297,
    "endMs": 8557,
    "timestampMs": 8427,
    "confidence": 0.998949,
    "pageBreakAfter": true
  },
  {
    "text": " одногруппник",
    "startMs": 8557,
    "endMs": 9197,
    "timestampMs": 8877,
    "confidence": 0.990985
  },
  {
    "text": " Женя,",
    "startMs": 9197,
    "endMs": 9717,
    "timestampMs": 9457,
    "confidence": 0.994168
  },
  {
    "text": " не",
    "startMs": 9857,
    "endMs": 10037,
    "timestampMs": 9947,
    "confidence": 0.96311,
    "pageBreakAfter": true
  },
  {
    "text": " по",
    "startMs": 10037,
    "endMs": 10197,
    "timestampMs": 10117,
    "confidence": 0.99926
  },
  {
    "text": " годам",
    "startMs": 10197,
    "endMs": 10497,
    "timestampMs": 10347,
    "confidence": 0.999627
  },
  {
    "text": " развитый",
    "startMs": 10497,
    "endMs": 11077,
    "timestampMs": 10787,
    "confidence": 0.950569,
    "pageBreakAfter": true
  },
  {
    "text": " молодой",
    "startMs": 11077,
    "endMs": 11577,
    "timestampMs": 11327,
    "confidence": 0.996093
  },
  {
    "text": " человек",
    "startMs": 11577,
    "endMs": 11937,
    "timestampMs": 11757,
    "confidence": 0.999031
  },
  {
    "text": " с",
    "startMs": 11937,
    "endMs": 12177,
    "timestampMs": 12057,
    "confidence": 0.993867,
    "pageBreakAfter": true
  },
  {
    "text": " немецкой",
    "startMs": 12177,
    "endMs": 12677,
    "timestampMs": 12427,
    "confidence": 0.999593
  },
  {
    "text": " фамилией,",
    "startMs": 12677,
    "endMs": 13157,
    "timestampMs": 12917,
    "confidence": 0.997649,
    "pageBreakAfter": true
  },
  {
    "text": " почему-то",
    "startMs": 13237,
    "endMs": 13677,
    "timestampMs": 13457,
    "confidence": 0.995396
  },
  {
    "text": " это",
    "startMs": 13677,
    "endMs": 14037,
    "timestampMs": 13857,
    "confidence": 0.998689,
    "pageBreakAfter": true
  },
  {
    "text": " запомнилось",
    "startMs": 14037,
    "endMs": 14577,
    "timestampMs": 14307,
    "confidence": 0.999321
  },
  {
    "text": " лучше",
    "startMs": 14577,
    "endMs": 14797,
    "timestampMs": 14687,
    "confidence": 0.999661,
    "pageBreakAfter": true
  },
  {
    "text": " всего.",
    "startMs": 14797,
    "endMs": 15157,
    "timestampMs": 14977,
    "confidence": 0.999942,
    "pageBreakAfter": true
  },
  {
    "text": " Играл",
    "startMs": 15377,
    "endMs": 15817,
    "timestampMs": 15597,
    "confidence": 0.999614
  },
  {
    "text": " он,",
    "startMs": 15817,
    "endMs": 15937,
    "timestampMs": 15877,
    "confidence": 0.999633
  },
  {
    "text": " разумеется,",
    "startMs": 15977,
    "endMs": 16937,
    "timestampMs": 16457,
    "confidence": 0.998757,
    "pageBreakAfter": true
  },
  {
    "text": " всегда",
    "startMs": 17057,
    "endMs": 17737,
    "timestampMs": 17397,
    "confidence": 0.987738
  },
  {
    "text": " без",
    "startMs": 17737,
    "endMs": 18317,
    "timestampMs": 18027,
    "confidence": 0.998874
  },
  {
    "text": " футболки,",
    "startMs": 18317,
    "endMs": 19037,
    "timestampMs": 18677,
    "confidence": 0.999762,
    "pageBreakAfter": true
  },
  {
    "text": " чтобы",
    "startMs": 19217,
    "endMs": 19417,
    "timestampMs": 19317,
    "confidence": 0.998607
  },
  {
    "text": " все",
    "startMs": 19417,
    "endMs": 19677,
    "timestampMs": 19547,
    "confidence": 0.999876
  },
  {
    "text": " могли",
    "startMs": 19677,
    "endMs": 19977,
    "timestampMs": 19827,
    "confidence": 0.999703
  },
  {
    "text": " по",
    "startMs": 19977,
    "endMs": 20137,
    "timestampMs": 20057,
    "confidence": 0.999097,
    "pageBreakAfter": true
  },
  {
    "text": " достоинству",
    "startMs": 20137,
    "endMs": 20877,
    "timestampMs": 20507,
    "confidence": 0.99977
  },
  {
    "text": " оценить",
    "startMs": 20877,
    "endMs": 21297,
    "timestampMs": 21087,
    "confidence": 0.999723,
    "pageBreakAfter": true
  },
  {
    "text": " его",
    "startMs": 21297,
    "endMs": 21517,
    "timestampMs": 21407,
    "confidence": 0.99988
  },
  {
    "text": " старания",
    "startMs": 21517,
    "endMs": 22057,
    "timestampMs": 21787,
    "confidence": 0.998103
  },
  {
    "text": " в",
    "startMs": 22057,
    "endMs": 22177,
    "timestampMs": 22117,
    "confidence": 0.999526,
    "pageBreakAfter": true
  },
  {
    "text": " тренажерном",
    "startMs": 22177,
    "endMs": 22817,
    "timestampMs": 22497,
    "confidence": 0.993582
  },
  {
    "text": " зале,",
    "startMs": 22817,
    "endMs": 23197,
    "timestampMs": 23007,
    "confidence": 0.999196
  },
  {
    "text": " либо",
    "startMs": 23337,
    "endMs": 23617,
    "timestampMs": 23477,
    "confidence": 0.999508,
    "pageBreakAfter": true
  },
  {
    "text": " выдающиеся",
    "startMs": 23617,
    "endMs": 24477,
    "timestampMs": 24047,
    "confidence": 0.997595
  },
  {
    "text": " успехи",
    "startMs": 24477,
    "endMs": 24937,
    "timestampMs": 24707,
    "confidence": 0.999858
  },
  {
    "text": " в",
    "startMs": 24937,
    "endMs": 25037,
    "timestampMs": 24987,
    "confidence": 0.999937,
    "pageBreakAfter": true
  },
  {
    "text": " химии,",
    "startMs": 25037,
    "endMs": 25497,
    "timestampMs": 25267,
    "confidence": 0.999144
  },
  {
    "text": " там",
    "startMs": 25537,
    "endMs": 25777,
    "timestampMs": 25657,
    "confidence": 0.997314
  },
  {
    "text": " непонятно",
    "startMs": 25777,
    "endMs": 26377,
    "timestampMs": 26077,
    "confidence": 0.986036,
    "pageBreakAfter": true
  },
  {
    "text": " было,",
    "startMs": 26377,
    "endMs": 26637,
    "timestampMs": 26507,
    "confidence": 0.999757
  },
  {
    "text": " все",
    "startMs": 26777,
    "endMs": 26977,
    "timestampMs": 26877,
    "confidence": 0.690465
  },
  {
    "text": " равно",
    "startMs": 26977,
    "endMs": 27197,
    "timestampMs": 27087,
    "confidence": 0.999962
  },
  {
    "text": " бесит.",
    "startMs": 27197,
    "endMs": 27577,
    "timestampMs": 27387,
    "confidence": 0.992417,
    "pageBreakAfter": true
  }
]
} />;
export const Video05 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="05-classmate-1" durationInFrames={672} premountFor={fps}>
      <ScenePicture src={staticFile("media/05-classmate-1.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header05 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions05 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header06 = () => <ClipHeader title={"Девушки не знали,\nЧТО Я ВСЁ СЛЫШУ"} series={"Физра в лицее"} part={2} parts={2} />;
export const Captions06 = () => <DynamicCaptions captions={
[
  {
    "text": " ой",
    "startMs": 250,
    "endMs": 1590,
    "timestampMs": 920,
    "confidence": 0.571486
  },
  {
    "text": " кажется",
    "startMs": 1590,
    "endMs": 2190,
    "timestampMs": 1890,
    "confidence": 0.961907
  },
  {
    "text": " упал",
    "startMs": 2190,
    "endMs": 2990,
    "timestampMs": 2590,
    "confidence": 0.813081
  },
  {
    "text": " какой",
    "startMs": 2990,
    "endMs": 3970,
    "timestampMs": 3480,
    "confidence": 0.699263,
    "pageBreakAfter": true
  },
  {
    "text": " же",
    "startMs": 3970,
    "endMs": 4230,
    "timestampMs": 4100,
    "confidence": 0.910942
  },
  {
    "text": " я",
    "startMs": 4230,
    "endMs": 4470,
    "timestampMs": 4350,
    "confidence": 0.640292
  },
  {
    "text": " неуклюжий",
    "startMs": 4470,
    "endMs": 5270,
    "timestampMs": 4870,
    "confidence": 0.895219
  },
  {
    "text": " так",
    "startMs": 5270,
    "endMs": 8770,
    "timestampMs": 7020,
    "confidence": 0.711533,
    "pageBreakAfter": true
  },
  {
    "text": " вот",
    "startMs": 8770,
    "endMs": 8990,
    "timestampMs": 8880,
    "confidence": 0.993797
  },
  {
    "text": " к",
    "startMs": 8990,
    "endMs": 9170,
    "timestampMs": 9080,
    "confidence": 0.994698
  },
  {
    "text": " нам",
    "startMs": 9170,
    "endMs": 9330,
    "timestampMs": 9250,
    "confidence": 0.997242
  },
  {
    "text": " на",
    "startMs": 9330,
    "endMs": 9450,
    "timestampMs": 9390,
    "confidence": 0.99341,
    "pageBreakAfter": true
  },
  {
    "text": " урок",
    "startMs": 9450,
    "endMs": 9750,
    "timestampMs": 9600,
    "confidence": 0.965624
  },
  {
    "text": " во",
    "startMs": 9750,
    "endMs": 9930,
    "timestampMs": 9840,
    "confidence": 0.584064
  },
  {
    "text": " время",
    "startMs": 9930,
    "endMs": 10150,
    "timestampMs": 10040,
    "confidence": 0.998428
  },
  {
    "text": " игры",
    "startMs": 10150,
    "endMs": 10430,
    "timestampMs": 10290,
    "confidence": 0.994812,
    "pageBreakAfter": true
  },
  {
    "text": " как-то",
    "startMs": 10430,
    "endMs": 10810,
    "timestampMs": 10620,
    "confidence": 0.970989
  },
  {
    "text": " зашла",
    "startMs": 10810,
    "endMs": 11150,
    "timestampMs": 10980,
    "confidence": 0.997292
  },
  {
    "text": " пара",
    "startMs": 11150,
    "endMs": 11530,
    "timestampMs": 11340,
    "confidence": 0.995369,
    "pageBreakAfter": true
  },
  {
    "text": " девчонок",
    "startMs": 11530,
    "endMs": 12090,
    "timestampMs": 11810,
    "confidence": 0.99827
  },
  {
    "text": " из",
    "startMs": 12090,
    "endMs": 12270,
    "timestampMs": 12180,
    "confidence": 0.980346,
    "pageBreakAfter": true
  },
  {
    "text": " параллельной",
    "startMs": 12270,
    "endMs": 12830,
    "timestampMs": 12550,
    "confidence": 0.994743
  },
  {
    "text": " группы",
    "startMs": 12830,
    "endMs": 13190,
    "timestampMs": 13010,
    "confidence": 0.993366
  },
  {
    "text": " и",
    "startMs": 13190,
    "endMs": 13370,
    "timestampMs": 13280,
    "confidence": 0.988261,
    "pageBreakAfter": true
  },
  {
    "text": " стали",
    "startMs": 13370,
    "endMs": 13710,
    "timestampMs": 13540,
    "confidence": 0.949581
  },
  {
    "text": " шептаться",
    "startMs": 13710,
    "endMs": 14330,
    "timestampMs": 14020,
    "confidence": 0.994676
  },
  {
    "text": " прям",
    "startMs": 14330,
    "endMs": 14590,
    "timestampMs": 14460,
    "confidence": 0.867283,
    "pageBreakAfter": true
  },
  {
    "text": " возле",
    "startMs": 14590,
    "endMs": 14970,
    "timestampMs": 14780,
    "confidence": 0.996303
  },
  {
    "text": " скамейки",
    "startMs": 14970,
    "endMs": 15590,
    "timestampMs": 15280,
    "confidence": 0.993116
  },
  {
    "text": " меня",
    "startMs": 15590,
    "endMs": 15950,
    "timestampMs": 15770,
    "confidence": 0.993215,
    "pageBreakAfter": true
  },
  {
    "text": " видимо",
    "startMs": 15950,
    "endMs": 16310,
    "timestampMs": 16130,
    "confidence": 0.99227
  },
  {
    "text": " просто",
    "startMs": 16310,
    "endMs": 16670,
    "timestampMs": 16490,
    "confidence": 0.991874
  },
  {
    "text": " не",
    "startMs": 16670,
    "endMs": 16970,
    "timestampMs": 16820,
    "confidence": 0.959872,
    "pageBreakAfter": true
  },
  {
    "text": " заметил",
    "startMs": 16970,
    "endMs": 17470,
    "timestampMs": 17220,
    "confidence": 0.703759
  },
  {
    "text": " Разговор",
    "startMs": 17470,
    "endMs": 18050,
    "timestampMs": 17760,
    "confidence": 0.961784
  },
  {
    "text": " шел",
    "startMs": 18050,
    "endMs": 18290,
    "timestampMs": 18170,
    "confidence": 0.902891
  },
  {
    "text": " о",
    "startMs": 18290,
    "endMs": 18530,
    "timestampMs": 18410,
    "confidence": 0.999562,
    "pageBreakAfter": true
  },
  {
    "text": " голом",
    "startMs": 18530,
    "endMs": 18890,
    "timestampMs": 18710,
    "confidence": 0.998906
  },
  {
    "text": " торсе",
    "startMs": 18890,
    "endMs": 19330,
    "timestampMs": 19110,
    "confidence": 0.995817
  },
  {
    "text": " Жени",
    "startMs": 19330,
    "endMs": 19850,
    "timestampMs": 19590,
    "confidence": 0.829534
  },
  {
    "text": " и",
    "startMs": 19850,
    "endMs": 20050,
    "timestampMs": 19950,
    "confidence": 0.873421,
    "pageBreakAfter": true
  },
  {
    "text": " о",
    "startMs": 20050,
    "endMs": 20250,
    "timestampMs": 20150,
    "confidence": 0.999947
  },
  {
    "text": " том,",
    "startMs": 20250,
    "endMs": 20450,
    "timestampMs": 20350,
    "confidence": 0.999961
  },
  {
    "text": " что",
    "startMs": 20630,
    "endMs": 20870,
    "timestampMs": 20750,
    "confidence": 0.987753
  },
  {
    "text": " бы",
    "startMs": 20870,
    "endMs": 20990,
    "timestampMs": 20930,
    "confidence": 0.99745,
    "pageBreakAfter": true
  },
  {
    "text": " они",
    "startMs": 20990,
    "endMs": 21230,
    "timestampMs": 21110,
    "confidence": 0.999914
  },
  {
    "text": " хотели",
    "startMs": 21230,
    "endMs": 21870,
    "timestampMs": 21550,
    "confidence": 0.999886
  },
  {
    "text": " с",
    "startMs": 21870,
    "endMs": 22050,
    "timestampMs": 21960,
    "confidence": 0.999687
  },
  {
    "text": " ним",
    "startMs": 22050,
    "endMs": 22230,
    "timestampMs": 22140,
    "confidence": 0.999923,
    "pageBreakAfter": true
  },
  {
    "text": " сделать.",
    "startMs": 22230,
    "endMs": 22830,
    "timestampMs": 22530,
    "confidence": 0.998933,
    "pageBreakAfter": true
  },
  {
    "text": " Мне",
    "startMs": 23430,
    "endMs": 23930,
    "timestampMs": 23680,
    "confidence": 0.99965
  },
  {
    "text": " вроде",
    "startMs": 23930,
    "endMs": 24250,
    "timestampMs": 24090,
    "confidence": 0.996879
  },
  {
    "text": " и",
    "startMs": 24250,
    "endMs": 24590,
    "timestampMs": 24420,
    "confidence": 0.999938
  },
  {
    "text": " завидно",
    "startMs": 24590,
    "endMs": 25090,
    "timestampMs": 24840,
    "confidence": 0.999154,
    "pageBreakAfter": true
  },
  {
    "text": " стало,",
    "startMs": 25090,
    "endMs": 25390,
    "timestampMs": 25240,
    "confidence": 0.995673
  },
  {
    "text": " но",
    "startMs": 25530,
    "endMs": 25630,
    "timestampMs": 25580,
    "confidence": 0.999757
  },
  {
    "text": " и",
    "startMs": 25630,
    "endMs": 25850,
    "timestampMs": 25740,
    "confidence": 0.999992
  },
  {
    "text": " мотивация",
    "startMs": 25850,
    "endMs": 26650,
    "timestampMs": 26250,
    "confidence": 0.999932,
    "pageBreakAfter": true
  },
  {
    "text": " поднялась.",
    "startMs": 26650,
    "endMs": 27390,
    "timestampMs": 27020,
    "confidence": 0.999903,
    "pageBreakAfter": true
  },
  {
    "text": " Так",
    "startMs": 27490,
    "endMs": 27650,
    "timestampMs": 27570,
    "confidence": 0.999085
  },
  {
    "text": " как",
    "startMs": 27650,
    "endMs": 27830,
    "timestampMs": 27740,
    "confidence": 0.999782
  },
  {
    "text": " именно",
    "startMs": 27830,
    "endMs": 28190,
    "timestampMs": 28010,
    "confidence": 0.999776
  },
  {
    "text": " в",
    "startMs": 28190,
    "endMs": 28390,
    "timestampMs": 28290,
    "confidence": 0.999972,
    "pageBreakAfter": true
  },
  {
    "text": " тот",
    "startMs": 28390,
    "endMs": 28570,
    "timestampMs": 28480,
    "confidence": 0.999943
  },
  {
    "text": " момент",
    "startMs": 28570,
    "endMs": 28970,
    "timestampMs": 28770,
    "confidence": 0.999979
  },
  {
    "text": " я",
    "startMs": 28970,
    "endMs": 29290,
    "timestampMs": 29130,
    "confidence": 0.999339
  },
  {
    "text": " понял,",
    "startMs": 29290,
    "endMs": 29670,
    "timestampMs": 29480,
    "confidence": 0.999894,
    "pageBreakAfter": true
  },
  {
    "text": " когда",
    "startMs": 29790,
    "endMs": 30050,
    "timestampMs": 29920,
    "confidence": 0.997999
  },
  {
    "text": " девушки",
    "startMs": 30050,
    "endMs": 30510,
    "timestampMs": 30280,
    "confidence": 0.998448
  },
  {
    "text": " говорят,",
    "startMs": 30510,
    "endMs": 30870,
    "timestampMs": 30690,
    "confidence": 0.999981,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 31010,
    "endMs": 31130,
    "timestampMs": 31070,
    "confidence": 0.999985
  },
  {
    "text": " для",
    "startMs": 31130,
    "endMs": 31390,
    "timestampMs": 31260,
    "confidence": 0.999972
  },
  {
    "text": " них",
    "startMs": 31390,
    "endMs": 31630,
    "timestampMs": 31510,
    "confidence": 0.999931
  },
  {
    "text": " внешность",
    "startMs": 31630,
    "endMs": 32210,
    "timestampMs": 31920,
    "confidence": 0.999906,
    "pageBreakAfter": true
  },
  {
    "text": " мужчине",
    "startMs": 32210,
    "endMs": 32670,
    "timestampMs": 32440,
    "confidence": 0.988699
  },
  {
    "text": " не",
    "startMs": 32670,
    "endMs": 32830,
    "timestampMs": 32750,
    "confidence": 0.906715
  },
  {
    "text": " важна.",
    "startMs": 32830,
    "endMs": 33190,
    "timestampMs": 33010,
    "confidence": 0.99933,
    "pageBreakAfter": true
  },
  {
    "text": " Они",
    "startMs": 33550,
    "endMs": 34030,
    "timestampMs": 33790,
    "confidence": 0.661355
  },
  {
    "text": " врут.",
    "startMs": 34030,
    "endMs": 34330,
    "timestampMs": 34180,
    "confidence": 0.982294,
    "pageBreakAfter": true
  },
  {
    "text": " Они",
    "startMs": 35730,
    "endMs": 36290,
    "timestampMs": 36010,
    "confidence": 0.999214
  },
  {
    "text": " все",
    "startMs": 36290,
    "endMs": 36530,
    "timestampMs": 36410,
    "confidence": 0.942805
  },
  {
    "text": " врут.",
    "startMs": 36530,
    "endMs": 36810,
    "timestampMs": 36670,
    "confidence": 0.999643,
    "pageBreakAfter": true
  },
  {
    "text": " И",
    "startMs": 37390,
    "endMs": 37890,
    "timestampMs": 37640,
    "confidence": 0.999385
  },
  {
    "text": " давайте",
    "startMs": 37890,
    "endMs": 38230,
    "timestampMs": 38060,
    "confidence": 0.999662
  },
  {
    "text": " честно,",
    "startMs": 38230,
    "endMs": 38630,
    "timestampMs": 38430,
    "confidence": 0.999831
  },
  {
    "text": " в",
    "startMs": 38690,
    "endMs": 38770,
    "timestampMs": 38730,
    "confidence": 0.999998,
    "pageBreakAfter": true
  },
  {
    "text": " юном",
    "startMs": 38770,
    "endMs": 39030,
    "timestampMs": 38900,
    "confidence": 0.999654
  },
  {
    "text": " возрасте",
    "startMs": 39030,
    "endMs": 39530,
    "timestampMs": 39280,
    "confidence": 0.999903
  },
  {
    "text": " все",
    "startMs": 39530,
    "endMs": 39790,
    "timestampMs": 39660,
    "confidence": 0.992813
  },
  {
    "text": " мы",
    "startMs": 39790,
    "endMs": 39950,
    "timestampMs": 39870,
    "confidence": 0.999734,
    "pageBreakAfter": true
  },
  {
    "text": " занимаемся",
    "startMs": 39950,
    "endMs": 40590,
    "timestampMs": 40270,
    "confidence": 0.996403
  },
  {
    "text": " для",
    "startMs": 40590,
    "endMs": 40850,
    "timestampMs": 40720,
    "confidence": 0.999952
  },
  {
    "text": " других.",
    "startMs": 40850,
    "endMs": 41210,
    "timestampMs": 41030,
    "confidence": 0.999956,
    "pageBreakAfter": true
  },
  {
    "text": " Никто",
    "startMs": 41450,
    "endMs": 41750,
    "timestampMs": 41600,
    "confidence": 0.999492
  },
  {
    "text": " бы",
    "startMs": 41750,
    "endMs": 41870,
    "timestampMs": 41810,
    "confidence": 0.999222
  },
  {
    "text": " не",
    "startMs": 41870,
    "endMs": 41990,
    "timestampMs": 41930,
    "confidence": 0.999863
  },
  {
    "text": " хотел",
    "startMs": 41990,
    "endMs": 42270,
    "timestampMs": 42130,
    "confidence": 0.999846,
    "pageBreakAfter": true
  },
  {
    "text": " упахиваться",
    "startMs": 42270,
    "endMs": 42990,
    "timestampMs": 42630,
    "confidence": 0.997053
  },
  {
    "text": " в",
    "startMs": 42990,
    "endMs": 43150,
    "timestampMs": 43070,
    "confidence": 0.999984
  },
  {
    "text": " зале,",
    "startMs": 43150,
    "endMs": 43370,
    "timestampMs": 43260,
    "confidence": 0.999184,
    "pageBreakAfter": true
  },
  {
    "text": " если",
    "startMs": 43570,
    "endMs": 43930,
    "timestampMs": 43750,
    "confidence": 0.999976
  },
  {
    "text": " это",
    "startMs": 43930,
    "endMs": 44150,
    "timestampMs": 44040,
    "confidence": 0.999806
  },
  {
    "text": " некому",
    "startMs": 44150,
    "endMs": 44550,
    "timestampMs": 44350,
    "confidence": 0.996457,
    "pageBreakAfter": true
  },
  {
    "text": " показать.",
    "startMs": 44550,
    "endMs": 45150,
    "timestampMs": 44850,
    "confidence": 0.999933,
    "pageBreakAfter": true
  },
  {
    "text": " Какой",
    "startMs": 45870,
    "endMs": 46430,
    "timestampMs": 46150,
    "confidence": 0.828989
  },
  {
    "text": " же",
    "startMs": 46430,
    "endMs": 46530,
    "timestampMs": 46480,
    "confidence": 0.997633
  },
  {
    "text": " ты",
    "startMs": 46530,
    "endMs": 46610,
    "timestampMs": 46570,
    "confidence": 0.982565
  },
  {
    "text": " красивый.",
    "startMs": 46610,
    "endMs": 47430,
    "timestampMs": 47020,
    "confidence": 0.999132,
    "pageBreakAfter": true
  },
  {
    "text": " Ага,",
    "startMs": 47470,
    "endMs": 48250,
    "timestampMs": 47860,
    "confidence": 0.967356
  },
  {
    "text": " не",
    "startMs": 48530,
    "endMs": 48670,
    "timestampMs": 48600,
    "confidence": 0.998615
  },
  {
    "text": " говори.",
    "startMs": 48670,
    "endMs": 49270,
    "timestampMs": 48970,
    "confidence": 0.95907,
    "pageBreakAfter": true
  }
]
} />;
export const Video06 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="06-classmate-2" durationInFrames={1194} premountFor={fps}>
      <ScenePicture src={staticFile("media/06-classmate-2.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header06 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions06 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header07 = () => <ClipHeader title={"Не отжался?\nЗНАЧИТ ПОДТЯГИВАЙСЯ"} series={"Армейская физра"} part={1} parts={2} />;
export const Captions07 = () => <DynamicCaptions captions={
[
  {
    "text": " Там",
    "startMs": 85,
    "endMs": 285,
    "timestampMs": 185,
    "confidence": 0.999678
  },
  {
    "text": " не",
    "startMs": 285,
    "endMs": 445,
    "timestampMs": 365,
    "confidence": 0.999715
  },
  {
    "text": " ставили",
    "startMs": 445,
    "endMs": 785,
    "timestampMs": 615,
    "confidence": 0.99993
  },
  {
    "text": " оценки,",
    "startMs": 785,
    "endMs": 1285,
    "timestampMs": 1035,
    "confidence": 0.999927,
    "pageBreakAfter": true
  },
  {
    "text": " там",
    "startMs": 1405,
    "endMs": 1565,
    "timestampMs": 1485,
    "confidence": 0.999824
  },
  {
    "text": " ставили",
    "startMs": 1565,
    "endMs": 2025,
    "timestampMs": 1795,
    "confidence": 0.999925,
    "pageBreakAfter": true
  },
  {
    "text": " ультиматум.",
    "startMs": 2025,
    "endMs": 2885,
    "timestampMs": 2455,
    "confidence": 0.999529,
    "pageBreakAfter": true
  },
  {
    "text": " Не",
    "startMs": 3045,
    "endMs": 3225,
    "timestampMs": 3135,
    "confidence": 0.999497
  },
  {
    "text": " отжался",
    "startMs": 3225,
    "endMs": 3645,
    "timestampMs": 3435,
    "confidence": 0.998438
  },
  {
    "text": " 10",
    "startMs": 3645,
    "endMs": 3905,
    "timestampMs": 3775,
    "confidence": 0.995681
  },
  {
    "text": " раз,",
    "startMs": 3905,
    "endMs": 4225,
    "timestampMs": 4065,
    "confidence": 0.999953,
    "pageBreakAfter": true
  },
  {
    "text": " значит",
    "startMs": 4385,
    "endMs": 4665,
    "timestampMs": 4525,
    "confidence": 0.999901
  },
  {
    "text": " подтягиваешься.",
    "startMs": 4665,
    "endMs": 4925,
    "timestampMs": 4795,
    "confidence": 0.996487,
    "pageBreakAfter": true
  },
  {
    "text": " Не",
    "startMs": 5525,
    "endMs": 5685,
    "timestampMs": 5605,
    "confidence": 0.998322
  },
  {
    "text": " подтянулся,",
    "startMs": 5685,
    "endMs": 6305,
    "timestampMs": 5995,
    "confidence": 0.999605
  },
  {
    "text": " значит",
    "startMs": 6385,
    "endMs": 6605,
    "timestampMs": 6495,
    "confidence": 0.999935,
    "pageBreakAfter": true
  },
  {
    "text": " стоишь",
    "startMs": 6605,
    "endMs": 6965,
    "timestampMs": 6785,
    "confidence": 0.999287
  },
  {
    "text": " в",
    "startMs": 6965,
    "endMs": 7085,
    "timestampMs": 7025,
    "confidence": 0.98709
  },
  {
    "text": " полтора",
    "startMs": 7085,
    "endMs": 7425,
    "timestampMs": 7255,
    "confidence": 0.998303
  },
  {
    "text": " с",
    "startMs": 7425,
    "endMs": 7585,
    "timestampMs": 7505,
    "confidence": 0.999583,
    "pageBreakAfter": true
  },
  {
    "text": " табуреткой.",
    "startMs": 7585,
    "endMs": 8125,
    "timestampMs": 7855,
    "confidence": 0.999771,
    "pageBreakAfter": true
  },
  {
    "text": " И",
    "startMs": 8265,
    "endMs": 8385,
    "timestampMs": 8325,
    "confidence": 0.999705
  },
  {
    "text": " так",
    "startMs": 8385,
    "endMs": 8645,
    "timestampMs": 8515,
    "confidence": 0.999794
  },
  {
    "text": " по",
    "startMs": 8645,
    "endMs": 8825,
    "timestampMs": 8735,
    "confidence": 0.999785
  },
  {
    "text": " кругу,",
    "startMs": 8825,
    "endMs": 9145,
    "timestampMs": 8985,
    "confidence": 0.999852,
    "pageBreakAfter": true
  },
  {
    "text": " пока",
    "startMs": 9225,
    "endMs": 9365,
    "timestampMs": 9295,
    "confidence": 0.99995
  },
  {
    "text": " в",
    "startMs": 9365,
    "endMs": 9485,
    "timestampMs": 9425,
    "confidence": 0.999946
  },
  {
    "text": " тебе",
    "startMs": 9485,
    "endMs": 9665,
    "timestampMs": 9575,
    "confidence": 0.999453
  },
  {
    "text": " еще",
    "startMs": 9665,
    "endMs": 9925,
    "timestampMs": 9795,
    "confidence": 0.999029,
    "pageBreakAfter": true
  },
  {
    "text": " теплится",
    "startMs": 9925,
    "endMs": 10505,
    "timestampMs": 10215,
    "confidence": 0.993384
  },
  {
    "text": " жизнь.",
    "startMs": 10505,
    "endMs": 10905,
    "timestampMs": 10705,
    "confidence": 0.999626,
    "pageBreakAfter": true
  },
  {
    "text": " Прошу,",
    "startMs": 10905,
    "endMs": 12165,
    "timestampMs": 11535,
    "confidence": 0.95937
  },
  {
    "text": " хватит,",
    "startMs": 12425,
    "endMs": 13245,
    "timestampMs": 12835,
    "confidence": 0.99987
  },
  {
    "text": " я",
    "startMs": 13385,
    "endMs": 13465,
    "timestampMs": 13425,
    "confidence": 0.999773,
    "pageBreakAfter": true
  },
  {
    "text": " больше",
    "startMs": 13465,
    "endMs": 14105,
    "timestampMs": 13785,
    "confidence": 0.999866
  },
  {
    "text": " не",
    "startMs": 14105,
    "endMs": 14405,
    "timestampMs": 14255,
    "confidence": 0.999876
  },
  {
    "text": " могу",
    "startMs": 14405,
    "endMs": 15005,
    "timestampMs": 14705,
    "confidence": 0.999819
  },
  {
    "text": " Ух",
    "startMs": 15005,
    "endMs": 16185,
    "timestampMs": 15595,
    "confidence": 0.55766,
    "pageBreakAfter": true
  },
  {
    "text": " ты,",
    "startMs": 16185,
    "endMs": 16385,
    "timestampMs": 16285,
    "confidence": 0.999202,
    "pageBreakAfter": true
  },
  {
    "text": " еще",
    "startMs": 16825,
    "endMs": 17085,
    "timestampMs": 16955,
    "confidence": 0.755465
  },
  {
    "text": " в",
    "startMs": 17085,
    "endMs": 17265,
    "timestampMs": 17175,
    "confidence": 0.999859
  },
  {
    "text": " силах",
    "startMs": 17265,
    "endMs": 17565,
    "timestampMs": 17415,
    "confidence": 0.999719,
    "pageBreakAfter": true
  },
  {
    "text": " разговаривать",
    "startMs": 17565,
    "endMs": 18325,
    "timestampMs": 17945,
    "confidence": 0.999804
  },
  {
    "text": " Тогда",
    "startMs": 18325,
    "endMs": 18785,
    "timestampMs": 18555,
    "confidence": 0.894296,
    "pageBreakAfter": true
  },
  {
    "text": " три",
    "startMs": 18785,
    "endMs": 19305,
    "timestampMs": 19045,
    "confidence": 0.980296
  },
  {
    "text": " наряда",
    "startMs": 19305,
    "endMs": 19845,
    "timestampMs": 19575,
    "confidence": 0.990541
  },
  {
    "text": " вне",
    "startMs": 19845,
    "endMs": 20185,
    "timestampMs": 20015,
    "confidence": 0.992465
  },
  {
    "text": " очереди",
    "startMs": 20185,
    "endMs": 20785,
    "timestampMs": 20485,
    "confidence": 0.99219,
    "pageBreakAfter": true
  }
]
} />;
export const Video07 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="07-army-1" durationInFrames={512} premountFor={fps}>
      <ScenePicture src={staticFile("media/07-army-1.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header07 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions07 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header08 = () => <ClipHeader title={"Вся рота страдала\nИЗ-ЗА ОДНОГО"} series={"Армейская физра"} part={2} parts={2} />;
export const Captions08 = () => <DynamicCaptions captions={
[
  {
    "text": " Особенно",
    "startMs": 122,
    "endMs": 802,
    "timestampMs": 462,
    "confidence": 0.994697
  },
  {
    "text": " меня",
    "startMs": 802,
    "endMs": 1002,
    "timestampMs": 902,
    "confidence": 0.999785
  },
  {
    "text": " пугала",
    "startMs": 1002,
    "endMs": 1442,
    "timestampMs": 1222,
    "confidence": 0.999617,
    "pageBreakAfter": true
  },
  {
    "text": " пробежка",
    "startMs": 1442,
    "endMs": 2162,
    "timestampMs": 1802,
    "confidence": 0.998235
  },
  {
    "text": " И",
    "startMs": 2162,
    "endMs": 2302,
    "timestampMs": 2232,
    "confidence": 0.459043
  },
  {
    "text": " особенно",
    "startMs": 2302,
    "endMs": 2822,
    "timestampMs": 2562,
    "confidence": 0.999424
  },
  {
    "text": " с",
    "startMs": 2822,
    "endMs": 3062,
    "timestampMs": 2942,
    "confidence": 0.999887,
    "pageBreakAfter": true
  },
  {
    "text": " нашим",
    "startMs": 3062,
    "endMs": 3482,
    "timestampMs": 3272,
    "confidence": 0.999118
  },
  {
    "text": " ротным",
    "startMs": 3482,
    "endMs": 3962,
    "timestampMs": 3722,
    "confidence": 0.902325
  },
  {
    "text": " Так",
    "startMs": 3962,
    "endMs": 4262,
    "timestampMs": 4112,
    "confidence": 0.996601
  },
  {
    "text": " как",
    "startMs": 4262,
    "endMs": 4442,
    "timestampMs": 4352,
    "confidence": 0.998344,
    "pageBreakAfter": true
  },
  {
    "text": " это",
    "startMs": 4442,
    "endMs": 4762,
    "timestampMs": 4602,
    "confidence": 0.999457
  },
  {
    "text": " был",
    "startMs": 4762,
    "endMs": 5102,
    "timestampMs": 4932,
    "confidence": 0.994865
  },
  {
    "text": " шпала",
    "startMs": 5102,
    "endMs": 5602,
    "timestampMs": 5352,
    "confidence": 0.888337
  },
  {
    "text": " больше",
    "startMs": 5602,
    "endMs": 5982,
    "timestampMs": 5792,
    "confidence": 0.912608,
    "pageBreakAfter": true
  },
  {
    "text": " двух",
    "startMs": 5982,
    "endMs": 6182,
    "timestampMs": 6082,
    "confidence": 0.942076
  },
  {
    "text": " метров",
    "startMs": 6182,
    "endMs": 6662,
    "timestampMs": 6422,
    "confidence": 0.999868
  },
  {
    "text": " ростом",
    "startMs": 6662,
    "endMs": 7122,
    "timestampMs": 6892,
    "confidence": 0.897444
  },
  {
    "text": " Его",
    "startMs": 7122,
    "endMs": 7422,
    "timestampMs": 7272,
    "confidence": 0.999255,
    "pageBreakAfter": true
  },
  {
    "text": " бег",
    "startMs": 7422,
    "endMs": 7742,
    "timestampMs": 7582,
    "confidence": 0.997411
  },
  {
    "text": " трусцой",
    "startMs": 7742,
    "endMs": 8382,
    "timestampMs": 8062,
    "confidence": 0.983713
  },
  {
    "text": " в",
    "startMs": 8382,
    "endMs": 8582,
    "timestampMs": 8482,
    "confidence": 0.979571
  },
  {
    "text": " легком",
    "startMs": 8582,
    "endMs": 8962,
    "timestampMs": 8772,
    "confidence": 0.998904,
    "pageBreakAfter": true
  },
  {
    "text": " темпе",
    "startMs": 8962,
    "endMs": 9322,
    "timestampMs": 9142,
    "confidence": 0.999526
  },
  {
    "text": " Превращался",
    "startMs": 9322,
    "endMs": 9922,
    "timestampMs": 9622,
    "confidence": 0.895138
  },
  {
    "text": " для",
    "startMs": 9922,
    "endMs": 10062,
    "timestampMs": 9992,
    "confidence": 0.999962,
    "pageBreakAfter": true
  },
  {
    "text": " нас",
    "startMs": 10062,
    "endMs": 10242,
    "timestampMs": 10152,
    "confidence": 0.999956
  },
  {
    "text": " в",
    "startMs": 10242,
    "endMs": 10422,
    "timestampMs": 10332,
    "confidence": 0.999978
  },
  {
    "text": " марафон",
    "startMs": 10422,
    "endMs": 10922,
    "timestampMs": 10672,
    "confidence": 0.999232
  },
  {
    "text": " на",
    "startMs": 10922,
    "endMs": 11062,
    "timestampMs": 10992,
    "confidence": 0.996945,
    "pageBreakAfter": true
  },
  {
    "text": " выживание",
    "startMs": 11062,
    "endMs": 11702,
    "timestampMs": 11382,
    "confidence": 0.999027
  },
  {
    "text": " А",
    "startMs": 11702,
    "endMs": 12002,
    "timestampMs": 11852,
    "confidence": 0.999728
  },
  {
    "text": " я",
    "startMs": 12002,
    "endMs": 12162,
    "timestampMs": 12082,
    "confidence": 0.999971
  },
  {
    "text": " со",
    "startMs": 12162,
    "endMs": 12322,
    "timestampMs": 12242,
    "confidence": 0.999388,
    "pageBreakAfter": true
  },
  {
    "text": " своей",
    "startMs": 12322,
    "endMs": 12602,
    "timestampMs": 12462,
    "confidence": 0.999475
  },
  {
    "text": " никудышной",
    "startMs": 12602,
    "endMs": 13202,
    "timestampMs": 12902,
    "confidence": 0.977107,
    "pageBreakAfter": true
  },
  {
    "text": " дыхалкой",
    "startMs": 13202,
    "endMs": 13662,
    "timestampMs": 13432,
    "confidence": 0.998588
  },
  {
    "text": " Всегда",
    "startMs": 13662,
    "endMs": 14002,
    "timestampMs": 13832,
    "confidence": 0.957492
  },
  {
    "text": " плелся",
    "startMs": 14002,
    "endMs": 14402,
    "timestampMs": 14202,
    "confidence": 0.977431,
    "pageBreakAfter": true
  },
  {
    "text": " где-то",
    "startMs": 14402,
    "endMs": 14742,
    "timestampMs": 14572,
    "confidence": 0.999869
  },
  {
    "text": " позади",
    "startMs": 14742,
    "endMs": 15142,
    "timestampMs": 14942,
    "confidence": 0.999521
  },
  {
    "text": " Все",
    "startMs": 15142,
    "endMs": 15542,
    "timestampMs": 15342,
    "confidence": 0.989642
  },
  {
    "text": " бы",
    "startMs": 15542,
    "endMs": 15682,
    "timestampMs": 15612,
    "confidence": 0.999476,
    "pageBreakAfter": true
  },
  {
    "text": " ничего,",
    "startMs": 15682,
    "endMs": 16002,
    "timestampMs": 15842,
    "confidence": 0.99611
  },
  {
    "text": " только",
    "startMs": 16162,
    "endMs": 16442,
    "timestampMs": 16302,
    "confidence": 0.962133
  },
  {
    "text": " вот",
    "startMs": 16442,
    "endMs": 16742,
    "timestampMs": 16592,
    "confidence": 0.933094,
    "pageBreakAfter": true
  },
  {
    "text": " роту",
    "startMs": 16742,
    "endMs": 17262,
    "timestampMs": 17002,
    "confidence": 0.995248
  },
  {
    "text": " Заставляли",
    "startMs": 17262,
    "endMs": 17922,
    "timestampMs": 17592,
    "confidence": 0.739419,
    "pageBreakAfter": true
  },
  {
    "text": " отжиматься",
    "startMs": 17922,
    "endMs": 18522,
    "timestampMs": 18222,
    "confidence": 0.999778
  },
  {
    "text": " на",
    "startMs": 18522,
    "endMs": 18722,
    "timestampMs": 18622,
    "confidence": 0.999942
  },
  {
    "text": " финише",
    "startMs": 18722,
    "endMs": 19122,
    "timestampMs": 18922,
    "confidence": 0.995733,
    "pageBreakAfter": true
  },
  {
    "text": " до",
    "startMs": 19122,
    "endMs": 19342,
    "timestampMs": 19232,
    "confidence": 0.688474
  },
  {
    "text": " тех",
    "startMs": 19342,
    "endMs": 19542,
    "timestampMs": 19442,
    "confidence": 0.999855
  },
  {
    "text": " пор,",
    "startMs": 19542,
    "endMs": 19842,
    "timestampMs": 19692,
    "confidence": 0.999802
  },
  {
    "text": " пока",
    "startMs": 20122,
    "endMs": 20142,
    "timestampMs": 20132,
    "confidence": 0.99986,
    "pageBreakAfter": true
  },
  {
    "text": " не",
    "startMs": 20142,
    "endMs": 20342,
    "timestampMs": 20242,
    "confidence": 0.999635
  },
  {
    "text": " добежит",
    "startMs": 20342,
    "endMs": 20782,
    "timestampMs": 20562,
    "confidence": 0.999415
  },
  {
    "text": " последний.",
    "startMs": 20782,
    "endMs": 21442,
    "timestampMs": 21112,
    "confidence": 0.992293,
    "pageBreakAfter": true
  },
  {
    "text": " То",
    "startMs": 21582,
    "endMs": 21742,
    "timestampMs": 21662,
    "confidence": 0.990899
  },
  {
    "text": " есть",
    "startMs": 21742,
    "endMs": 21982,
    "timestampMs": 21862,
    "confidence": 0.999551
  },
  {
    "text": " я.",
    "startMs": 21982,
    "endMs": 22442,
    "timestampMs": 22212,
    "confidence": 0.905707,
    "pageBreakAfter": true
  },
  {
    "text": " Здорово,",
    "startMs": 24602,
    "endMs": 25202,
    "timestampMs": 24902,
    "confidence": 0.785497
  },
  {
    "text": " пацаны.",
    "startMs": 25302,
    "endMs": 25742,
    "timestampMs": 25522,
    "confidence": 0.999865,
    "pageBreakAfter": true
  },
  {
    "text": " Нет,",
    "startMs": 26402,
    "endMs": 26682,
    "timestampMs": 26542,
    "confidence": 0.952424
  },
  {
    "text": " пошел",
    "startMs": 26842,
    "endMs": 27062,
    "timestampMs": 26952,
    "confidence": 0.830578
  },
  {
    "text": " в",
    "startMs": 27062,
    "endMs": 27162,
    "timestampMs": 27112,
    "confidence": 0.997675
  },
  {
    "text": " жопу.",
    "startMs": 27162,
    "endMs": 27382,
    "timestampMs": 27272,
    "confidence": 0.998114,
    "pageBreakAfter": true
  },
  {
    "text": " Отжиматься",
    "startMs": 27822,
    "endMs": 28422,
    "timestampMs": 28122,
    "confidence": 0.998808
  },
  {
    "text": " им",
    "startMs": 28422,
    "endMs": 28562,
    "timestampMs": 28492,
    "confidence": 0.999853,
    "pageBreakAfter": true
  },
  {
    "text": " приходилось",
    "startMs": 28562,
    "endMs": 29122,
    "timestampMs": 28842,
    "confidence": 0.999851
  },
  {
    "text": " порой",
    "startMs": 29122,
    "endMs": 29582,
    "timestampMs": 29352,
    "confidence": 0.997325,
    "pageBreakAfter": true
  },
  {
    "text": " очень",
    "startMs": 29582,
    "endMs": 30182,
    "timestampMs": 29882,
    "confidence": 0.99952
  },
  {
    "text": " долго,",
    "startMs": 30182,
    "endMs": 30602,
    "timestampMs": 30392,
    "confidence": 0.999527
  },
  {
    "text": " а",
    "startMs": 30842,
    "endMs": 31002,
    "timestampMs": 30922,
    "confidence": 0.999845
  },
  {
    "text": " потом",
    "startMs": 31002,
    "endMs": 31282,
    "timestampMs": 31142,
    "confidence": 0.999952,
    "pageBreakAfter": true
  },
  {
    "text": " еще",
    "startMs": 31282,
    "endMs": 31542,
    "timestampMs": 31412,
    "confidence": 0.973049
  },
  {
    "text": " в",
    "startMs": 31542,
    "endMs": 31742,
    "timestampMs": 31642,
    "confidence": 0.999632
  },
  {
    "text": " роту",
    "startMs": 31742,
    "endMs": 31982,
    "timestampMs": 31862,
    "confidence": 0.998849
  },
  {
    "text": " на",
    "startMs": 31982,
    "endMs": 32162,
    "timestampMs": 32072,
    "confidence": 0.971298,
    "pageBreakAfter": true
  },
  {
    "text": " третий",
    "startMs": 32162,
    "endMs": 32482,
    "timestampMs": 32322,
    "confidence": 0.997021
  },
  {
    "text": " этаж",
    "startMs": 32482,
    "endMs": 32762,
    "timestampMs": 32622,
    "confidence": 0.999917,
    "pageBreakAfter": true
  },
  {
    "text": " возвращались",
    "startMs": 32762,
    "endMs": 33422,
    "timestampMs": 33092,
    "confidence": 0.999091
  },
  {
    "text": " мы",
    "startMs": 33422,
    "endMs": 33582,
    "timestampMs": 33502,
    "confidence": 0.99968,
    "pageBreakAfter": true
  },
  {
    "text": " гусиным",
    "startMs": 33582,
    "endMs": 34142,
    "timestampMs": 33862,
    "confidence": 0.999176
  },
  {
    "text": " шагом.",
    "startMs": 34142,
    "endMs": 34582,
    "timestampMs": 34362,
    "confidence": 0.999744,
    "pageBreakAfter": true
  },
  {
    "text": " Честно",
    "startMs": 34722,
    "endMs": 35022,
    "timestampMs": 34872,
    "confidence": 0.999612
  },
  {
    "text": " говоря,",
    "startMs": 35022,
    "endMs": 35262,
    "timestampMs": 35142,
    "confidence": 0.999988
  },
  {
    "text": " больше",
    "startMs": 35302,
    "endMs": 35662,
    "timestampMs": 35482,
    "confidence": 0.998274,
    "pageBreakAfter": true
  },
  {
    "text": " походило",
    "startMs": 35662,
    "endMs": 36222,
    "timestampMs": 35942,
    "confidence": 0.983901
  },
  {
    "text": " на",
    "startMs": 36222,
    "endMs": 36422,
    "timestampMs": 36322,
    "confidence": 0.99987
  },
  {
    "text": " разрядку,",
    "startMs": 36422,
    "endMs": 37242,
    "timestampMs": 36832,
    "confidence": 0.999228,
    "pageBreakAfter": true
  },
  {
    "text": " чем",
    "startMs": 37362,
    "endMs": 37502,
    "timestampMs": 37432,
    "confidence": 0.999961
  },
  {
    "text": " зарядку.",
    "startMs": 37502,
    "endMs": 38202,
    "timestampMs": 37852,
    "confidence": 0.987605,
    "pageBreakAfter": true
  },
  {
    "text": " Замечательное",
    "startMs": 40062,
    "endMs": 40662,
    "timestampMs": 40362,
    "confidence": 0.998312
  },
  {
    "text": " утро",
    "startMs": 40662,
    "endMs": 41122,
    "timestampMs": 40892,
    "confidence": 0.9991
  },
  {
    "text": " в",
    "startMs": 41122,
    "endMs": 41322,
    "timestampMs": 41222,
    "confidence": 0.506184,
    "pageBreakAfter": true
  },
  {
    "text": " новый",
    "startMs": 41322,
    "endMs": 41622,
    "timestampMs": 41472,
    "confidence": 0.962733
  },
  {
    "text": " день",
    "startMs": 41622,
    "endMs": 41882,
    "timestampMs": 41752,
    "confidence": 0.999955
  },
  {
    "text": " с",
    "startMs": 41882,
    "endMs": 42162,
    "timestampMs": 42022,
    "confidence": 0.996587
  },
  {
    "text": " новыми",
    "startMs": 42162,
    "endMs": 42642,
    "timestampMs": 42402,
    "confidence": 0.999725,
    "pageBreakAfter": true
  },
  {
    "text": " силами.",
    "startMs": 42642,
    "endMs": 43222,
    "timestampMs": 42932,
    "confidence": 0.999954,
    "pageBreakAfter": true
  },
  {
    "text": " По-моему,",
    "startMs": 45582,
    "endMs": 46542,
    "timestampMs": 46062,
    "confidence": 0.998576
  },
  {
    "text": " у",
    "startMs": 46542,
    "endMs": 46922,
    "timestampMs": 46732,
    "confidence": 0.997607
  },
  {
    "text": " меня",
    "startMs": 46922,
    "endMs": 47062,
    "timestampMs": 46992,
    "confidence": 0.999955,
    "pageBreakAfter": true
  },
  {
    "text": " инсульт.",
    "startMs": 47062,
    "endMs": 47782,
    "timestampMs": 47422,
    "confidence": 0.999557,
    "pageBreakAfter": true
  }
]
} />;
export const Video08 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="08-army-2" durationInFrames={1162} premountFor={fps}>
      <ScenePicture src={staticFile("media/08-army-2.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header08 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions08 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header09 = () => <ClipHeader title={"Силы есть.\nДЫХАЛКИ НЕТ"} />;
export const Captions09 = () => <DynamicCaptions captions={
[
  {
    "text": " дыхалка",
    "startMs": 123,
    "endMs": 843,
    "timestampMs": 483,
    "confidence": 0.759955
  },
  {
    "text": " всегда",
    "startMs": 843,
    "endMs": 1223,
    "timestampMs": 1033,
    "confidence": 0.995915
  },
  {
    "text": " была",
    "startMs": 1223,
    "endMs": 1523,
    "timestampMs": 1373,
    "confidence": 0.786853,
    "pageBreakAfter": true
  },
  {
    "text": " моим",
    "startMs": 1523,
    "endMs": 1783,
    "timestampMs": 1653,
    "confidence": 0.997758
  },
  {
    "text": " самым",
    "startMs": 1783,
    "endMs": 2163,
    "timestampMs": 1973,
    "confidence": 0.998215
  },
  {
    "text": " слабым",
    "startMs": 2163,
    "endMs": 2523,
    "timestampMs": 2343,
    "confidence": 0.998758,
    "pageBreakAfter": true
  },
  {
    "text": " местом",
    "startMs": 2523,
    "endMs": 2923,
    "timestampMs": 2723,
    "confidence": 0.985039
  },
  {
    "text": " даже",
    "startMs": 2923,
    "endMs": 3223,
    "timestampMs": 3073,
    "confidence": 0.985504
  },
  {
    "text": " сейчас",
    "startMs": 3223,
    "endMs": 3663,
    "timestampMs": 3443,
    "confidence": 0.89763,
    "pageBreakAfter": true
  },
  {
    "text": " вроде",
    "startMs": 3663,
    "endMs": 4123,
    "timestampMs": 3893,
    "confidence": 0.979291
  },
  {
    "text": " бы",
    "startMs": 4123,
    "endMs": 4303,
    "timestampMs": 4213,
    "confidence": 0.978851
  },
  {
    "text": " парень",
    "startMs": 4303,
    "endMs": 4843,
    "timestampMs": 4573,
    "confidence": 0.922981,
    "pageBreakAfter": true
  },
  {
    "text": " крепкий",
    "startMs": 4843,
    "endMs": 5363,
    "timestampMs": 5103,
    "confidence": 0.763786
  },
  {
    "text": " и",
    "startMs": 5363,
    "endMs": 5523,
    "timestampMs": 5443,
    "confidence": 0.400808
  },
  {
    "text": " спина",
    "startMs": 5523,
    "endMs": 5783,
    "timestampMs": 5653,
    "confidence": 0.940537,
    "pageBreakAfter": true
  },
  {
    "text": " широкая",
    "startMs": 5783,
    "endMs": 6443,
    "timestampMs": 6113,
    "confidence": 0.969501
  },
  {
    "text": " в",
    "startMs": 6443,
    "endMs": 6663,
    "timestampMs": 6553,
    "confidence": 0.647944
  },
  {
    "text": " спортзале",
    "startMs": 6663,
    "endMs": 7243,
    "timestampMs": 6953,
    "confidence": 0.99527,
    "pageBreakAfter": true
  },
  {
    "text": " тяжести",
    "startMs": 7243,
    "endMs": 7743,
    "timestampMs": 7493,
    "confidence": 0.997889
  },
  {
    "text": " таскают",
    "startMs": 7743,
    "endMs": 8323,
    "timestampMs": 8033,
    "confidence": 0.90557
  },
  {
    "text": " но",
    "startMs": 8323,
    "endMs": 8583,
    "timestampMs": 8453,
    "confidence": 0.985049,
    "pageBreakAfter": true
  },
  {
    "text": " если",
    "startMs": 8583,
    "endMs": 8943,
    "timestampMs": 8763,
    "confidence": 0.999376
  },
  {
    "text": " у",
    "startMs": 8943,
    "endMs": 9103,
    "timestampMs": 9023,
    "confidence": 0.998733
  },
  {
    "text": " меня",
    "startMs": 9103,
    "endMs": 9203,
    "timestampMs": 9153,
    "confidence": 0.999803
  },
  {
    "text": " выхватят",
    "startMs": 9203,
    "endMs": 9663,
    "timestampMs": 9433,
    "confidence": 0.971166,
    "pageBreakAfter": true
  },
  {
    "text": " сумку",
    "startMs": 9663,
    "endMs": 9983,
    "timestampMs": 9823,
    "confidence": 0.996785
  },
  {
    "text": " из",
    "startMs": 9983,
    "endMs": 10183,
    "timestampMs": 10083,
    "confidence": 0.98846
  },
  {
    "text": " рук",
    "startMs": 10183,
    "endMs": 10343,
    "timestampMs": 10263,
    "confidence": 0.913643
  },
  {
    "text": " и",
    "startMs": 10343,
    "endMs": 10523,
    "timestampMs": 10433,
    "confidence": 0.986967,
    "pageBreakAfter": true
  },
  {
    "text": " побегут",
    "startMs": 10523,
    "endMs": 11063,
    "timestampMs": 10793,
    "confidence": 0.940976
  },
  {
    "text": " я",
    "startMs": 11063,
    "endMs": 11443,
    "timestampMs": 11253,
    "confidence": 0.520636
  },
  {
    "text": " даже",
    "startMs": 11443,
    "endMs": 11783,
    "timestampMs": 11613,
    "confidence": 0.99863,
    "pageBreakAfter": true
  },
  {
    "text": " пытаться",
    "startMs": 11783,
    "endMs": 12443,
    "timestampMs": 12113,
    "confidence": 0.994741
  },
  {
    "text": " догонять",
    "startMs": 12443,
    "endMs": 12923,
    "timestampMs": 12683,
    "confidence": 0.995348
  },
  {
    "text": " не",
    "startMs": 12923,
    "endMs": 13083,
    "timestampMs": 13003,
    "confidence": 0.993169,
    "pageBreakAfter": true
  },
  {
    "text": " буду",
    "startMs": 13083,
    "endMs": 13363,
    "timestampMs": 13223,
    "confidence": 0.993006
  },
  {
    "text": " просто",
    "startMs": 13363,
    "endMs": 13823,
    "timestampMs": 13593,
    "confidence": 0.991842
  },
  {
    "text": " сяду",
    "startMs": 13823,
    "endMs": 14203,
    "timestampMs": 14013,
    "confidence": 0.995062
  },
  {
    "text": " на",
    "startMs": 14203,
    "endMs": 14343,
    "timestampMs": 14273,
    "confidence": 0.99861,
    "pageBreakAfter": true
  },
  {
    "text": " пол",
    "startMs": 14343,
    "endMs": 14563,
    "timestampMs": 14453,
    "confidence": 0.990993
  },
  {
    "text": " и",
    "startMs": 14563,
    "endMs": 14723,
    "timestampMs": 14643,
    "confidence": 0.563826
  },
  {
    "text": " заплачу",
    "startMs": 14723,
    "endMs": 15383,
    "timestampMs": 15053,
    "confidence": 0.755146
  },
  {
    "text": " но",
    "startMs": 15383,
    "endMs": 15723,
    "timestampMs": 15553,
    "confidence": 0.988004,
    "pageBreakAfter": true
  },
  {
    "text": " если",
    "startMs": 15723,
    "endMs": 16143,
    "timestampMs": 15933,
    "confidence": 0.998725
  },
  {
    "text": " я",
    "startMs": 16143,
    "endMs": 16403,
    "timestampMs": 16273,
    "confidence": 0.999388
  },
  {
    "text": " успею",
    "startMs": 16403,
    "endMs": 16943,
    "timestampMs": 16673,
    "confidence": 0.992807
  },
  {
    "text": " поймать",
    "startMs": 16943,
    "endMs": 17403,
    "timestampMs": 17173,
    "confidence": 0.99886,
    "pageBreakAfter": true
  },
  {
    "text": " воришку",
    "startMs": 17403,
    "endMs": 17943,
    "timestampMs": 17673,
    "confidence": 0.986245
  },
  {
    "text": " до",
    "startMs": 17943,
    "endMs": 18183,
    "timestampMs": 18063,
    "confidence": 0.945731
  },
  {
    "text": " побега",
    "startMs": 18183,
    "endMs": 18863,
    "timestampMs": 18523,
    "confidence": 0.993606
  },
  {
    "text": " тут",
    "startMs": 18863,
    "endMs": 19283,
    "timestampMs": 19073,
    "confidence": 0.885424,
    "pageBreakAfter": true
  },
  {
    "text": " уже",
    "startMs": 19283,
    "endMs": 19523,
    "timestampMs": 19403,
    "confidence": 0.991136
  },
  {
    "text": " пусть",
    "startMs": 19523,
    "endMs": 19863,
    "timestampMs": 19693,
    "confidence": 0.991468
  },
  {
    "text": " не",
    "startMs": 19863,
    "endMs": 20023,
    "timestampMs": 19943,
    "confidence": 0.982625
  },
  {
    "text": " обижается",
    "startMs": 20023,
    "endMs": 20823,
    "timestampMs": 20423,
    "confidence": 0.893397,
    "pageBreakAfter": true
  },
  {
    "text": " и",
    "startMs": 20823,
    "endMs": 21623,
    "timestampMs": 21223,
    "confidence": 0.67989
  },
  {
    "text": " ведь",
    "startMs": 21623,
    "endMs": 21763,
    "timestampMs": 21693,
    "confidence": 0.991453
  },
  {
    "text": " обидно",
    "startMs": 21763,
    "endMs": 22183,
    "timestampMs": 21973,
    "confidence": 0.995587
  },
  {
    "text": " в",
    "startMs": 22183,
    "endMs": 22323,
    "timestampMs": 22253,
    "confidence": 0.967415,
    "pageBreakAfter": true
  },
  {
    "text": " силовых",
    "startMs": 22323,
    "endMs": 22643,
    "timestampMs": 22483,
    "confidence": 0.998785
  },
  {
    "text": " я",
    "startMs": 22643,
    "endMs": 22823,
    "timestampMs": 22733,
    "confidence": 0.98962
  },
  {
    "text": " неплохо",
    "startMs": 22823,
    "endMs": 23283,
    "timestampMs": 23053,
    "confidence": 0.985337,
    "pageBreakAfter": true
  },
  {
    "text": " прогрессирую",
    "startMs": 23283,
    "endMs": 24063,
    "timestampMs": 23673,
    "confidence": 0.975847
  },
  {
    "text": " но",
    "startMs": 24063,
    "endMs": 24263,
    "timestampMs": 24163,
    "confidence": 0.93612
  },
  {
    "text": " когда",
    "startMs": 24263,
    "endMs": 24663,
    "timestampMs": 24463,
    "confidence": 0.936026,
    "pageBreakAfter": true
  },
  {
    "text": " речь",
    "startMs": 24663,
    "endMs": 24943,
    "timestampMs": 24803,
    "confidence": 0.999091
  },
  {
    "text": " заходит",
    "startMs": 24943,
    "endMs": 25363,
    "timestampMs": 25153,
    "confidence": 0.93229
  },
  {
    "text": " про",
    "startMs": 25363,
    "endMs": 25563,
    "timestampMs": 25463,
    "confidence": 0.984659,
    "pageBreakAfter": true
  },
  {
    "text": " выносливость.",
    "startMs": 25563,
    "endMs": 26243,
    "timestampMs": 25903,
    "confidence": 0.999167,
    "pageBreakAfter": true
  },
  {
    "text": " Сердце",
    "startMs": 28963,
    "endMs": 29523,
    "timestampMs": 29243,
    "confidence": 0.887889
  },
  {
    "text": " проверял,",
    "startMs": 29523,
    "endMs": 30023,
    "timestampMs": 29773,
    "confidence": 0.999572,
    "pageBreakAfter": true
  },
  {
    "text": " лёгкие",
    "startMs": 30163,
    "endMs": 30583,
    "timestampMs": 30373,
    "confidence": 0.795363
  },
  {
    "text": " тоже,",
    "startMs": 30583,
    "endMs": 30883,
    "timestampMs": 30733,
    "confidence": 0.998955,
    "pageBreakAfter": true
  },
  {
    "text": " всё",
    "startMs": 31203,
    "endMs": 31283,
    "timestampMs": 31243,
    "confidence": 0.990985
  },
  {
    "text": " в",
    "startMs": 31283,
    "endMs": 31443,
    "timestampMs": 31363,
    "confidence": 0.999888
  },
  {
    "text": " норме,",
    "startMs": 31443,
    "endMs": 31803,
    "timestampMs": 31623,
    "confidence": 0.999819
  },
  {
    "text": " может",
    "startMs": 31943,
    "endMs": 32083,
    "timestampMs": 32013,
    "confidence": 0.999492,
    "pageBreakAfter": true
  },
  {
    "text": " быть",
    "startMs": 32083,
    "endMs": 32283,
    "timestampMs": 32183,
    "confidence": 0.999893
  },
  {
    "text": " дело",
    "startMs": 32283,
    "endMs": 32503,
    "timestampMs": 32393,
    "confidence": 0.744698
  },
  {
    "text": " в",
    "startMs": 32503,
    "endMs": 32643,
    "timestampMs": 32573,
    "confidence": 0.999331
  },
  {
    "text": " ожирении.",
    "startMs": 32643,
    "endMs": 33203,
    "timestampMs": 32923,
    "confidence": 0.999203,
    "pageBreakAfter": true
  },
  {
    "text": " Хотя",
    "startMs": 33483,
    "endMs": 33703,
    "timestampMs": 33593,
    "confidence": 0.999418
  },
  {
    "text": " раньше",
    "startMs": 33703,
    "endMs": 34083,
    "timestampMs": 33893,
    "confidence": 0.977449
  },
  {
    "text": " я",
    "startMs": 34083,
    "endMs": 34243,
    "timestampMs": 34163,
    "confidence": 0.99967
  },
  {
    "text": " был",
    "startMs": 34243,
    "endMs": 34403,
    "timestampMs": 34323,
    "confidence": 0.999193,
    "pageBreakAfter": true
  },
  {
    "text": " дрищом",
    "startMs": 34403,
    "endMs": 34903,
    "timestampMs": 34653,
    "confidence": 0.825772
  },
  {
    "text": " и",
    "startMs": 34903,
    "endMs": 35023,
    "timestampMs": 34963,
    "confidence": 0.981904
  },
  {
    "text": " всё",
    "startMs": 35023,
    "endMs": 35203,
    "timestampMs": 35113,
    "confidence": 0.996287
  },
  {
    "text": " равно",
    "startMs": 35203,
    "endMs": 35443,
    "timestampMs": 35323,
    "confidence": 0.999955,
    "pageBreakAfter": true
  },
  {
    "text": " задыхался,",
    "startMs": 35443,
    "endMs": 36043,
    "timestampMs": 35743,
    "confidence": 0.999609
  },
  {
    "text": " видимо,",
    "startMs": 36203,
    "endMs": 36523,
    "timestampMs": 36363,
    "confidence": 0.99661,
    "pageBreakAfter": true
  },
  {
    "text": " дышать",
    "startMs": 36683,
    "endMs": 37163,
    "timestampMs": 36923,
    "confidence": 0.999777
  },
  {
    "text": " это",
    "startMs": 37163,
    "endMs": 37323,
    "timestampMs": 37243,
    "confidence": 0.996792
  },
  {
    "text": " просто",
    "startMs": 37323,
    "endMs": 37823,
    "timestampMs": 37573,
    "confidence": 0.999219
  },
  {
    "text": " не",
    "startMs": 37823,
    "endMs": 38183,
    "timestampMs": 38003,
    "confidence": 0.998669,
    "pageBreakAfter": true
  },
  {
    "text": " моё.",
    "startMs": 38183,
    "endMs": 38583,
    "timestampMs": 38383,
    "confidence": 0.982337,
    "pageBreakAfter": true
  }
]
} />;
export const Video09 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="09-breath" durationInFrames={932} premountFor={fps}>
      <ScenePicture src={staticFile("media/09-breath.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header09 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions09 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header10 = () => <ClipHeader title={"Тело после 30:\nГАРАНТИЯ ИСТЕКЛА"} />;
export const Captions10 = () => <DynamicCaptions captions={
[
  {
    "text": " Да,",
    "startMs": 0,
    "endMs": 560,
    "timestampMs": 280,
    "confidence": 0.491298
  },
  {
    "text": " пока",
    "startMs": 660,
    "endMs": 880,
    "timestampMs": 770,
    "confidence": 0.999752
  },
  {
    "text": " ты",
    "startMs": 880,
    "endMs": 1040,
    "timestampMs": 960,
    "confidence": 0.999928
  },
  {
    "text": " молод,",
    "startMs": 1040,
    "endMs": 1340,
    "timestampMs": 1190,
    "confidence": 0.949626,
    "pageBreakAfter": true
  },
  {
    "text": " у",
    "startMs": 1360,
    "endMs": 1500,
    "timestampMs": 1430,
    "confidence": 0.989539
  },
  {
    "text": " тебя",
    "startMs": 1500,
    "endMs": 1700,
    "timestampMs": 1600,
    "confidence": 0.999964
  },
  {
    "text": " ничего",
    "startMs": 1700,
    "endMs": 2060,
    "timestampMs": 1880,
    "confidence": 0.993029
  },
  {
    "text": " не",
    "startMs": 2060,
    "endMs": 2220,
    "timestampMs": 2140,
    "confidence": 0.99715,
    "pageBreakAfter": true
  },
  {
    "text": " болит",
    "startMs": 2220,
    "endMs": 2520,
    "timestampMs": 2370,
    "confidence": 0.999689
  },
  {
    "text": " Ты",
    "startMs": 2520,
    "endMs": 2740,
    "timestampMs": 2630,
    "confidence": 0.986697
  },
  {
    "text": " можешь",
    "startMs": 2740,
    "endMs": 3020,
    "timestampMs": 2880,
    "confidence": 0.999893
  },
  {
    "text": " на",
    "startMs": 3020,
    "endMs": 3280,
    "timestampMs": 3150,
    "confidence": 0.999981,
    "pageBreakAfter": true
  },
  {
    "text": " третий",
    "startMs": 3280,
    "endMs": 3560,
    "timestampMs": 3420,
    "confidence": 0.993247
  },
  {
    "text": " этаж",
    "startMs": 3560,
    "endMs": 3900,
    "timestampMs": 3730,
    "confidence": 0.999913
  },
  {
    "text": " забежать",
    "startMs": 3900,
    "endMs": 4340,
    "timestampMs": 4120,
    "confidence": 0.96936,
    "pageBreakAfter": true
  },
  {
    "text": " без",
    "startMs": 4340,
    "endMs": 4560,
    "timestampMs": 4450,
    "confidence": 0.913686
  },
  {
    "text": " одышки",
    "startMs": 4560,
    "endMs": 5100,
    "timestampMs": 4830,
    "confidence": 0.95027
  },
  {
    "text": " Жир",
    "startMs": 5100,
    "endMs": 5420,
    "timestampMs": 5260,
    "confidence": 0.99082
  },
  {
    "text": " на",
    "startMs": 5420,
    "endMs": 5520,
    "timestampMs": 5470,
    "confidence": 0.999958,
    "pageBreakAfter": true
  },
  {
    "text": " боках",
    "startMs": 5520,
    "endMs": 5880,
    "timestampMs": 5700,
    "confidence": 0.999863
  },
  {
    "text": " откладывается",
    "startMs": 5880,
    "endMs": 6540,
    "timestampMs": 6210,
    "confidence": 0.999832
  },
  {
    "text": " не",
    "startMs": 6540,
    "endMs": 6780,
    "timestampMs": 6660,
    "confidence": 0.94069,
    "pageBreakAfter": true
  },
  {
    "text": " так",
    "startMs": 6780,
    "endMs": 6980,
    "timestampMs": 6880,
    "confidence": 0.999986
  },
  {
    "text": " охотно",
    "startMs": 6980,
    "endMs": 7580,
    "timestampMs": 7280,
    "confidence": 0.999058
  },
  {
    "text": " Но",
    "startMs": 7580,
    "endMs": 7880,
    "timestampMs": 7730,
    "confidence": 0.998884
  },
  {
    "text": " чем",
    "startMs": 7880,
    "endMs": 8180,
    "timestampMs": 8030,
    "confidence": 0.988189,
    "pageBreakAfter": true
  },
  {
    "text": " старше",
    "startMs": 8180,
    "endMs": 8540,
    "timestampMs": 8360,
    "confidence": 0.997061
  },
  {
    "text": " становишься,",
    "startMs": 8540,
    "endMs": 9100,
    "timestampMs": 8820,
    "confidence": 0.99846,
    "pageBreakAfter": true
  },
  {
    "text": " тем",
    "startMs": 9200,
    "endMs": 9300,
    "timestampMs": 9250,
    "confidence": 0.999934
  },
  {
    "text": " больше",
    "startMs": 9300,
    "endMs": 9660,
    "timestampMs": 9480,
    "confidence": 0.998976
  },
  {
    "text": " нужно",
    "startMs": 9660,
    "endMs": 9920,
    "timestampMs": 9790,
    "confidence": 0.77129
  },
  {
    "text": " сил",
    "startMs": 9920,
    "endMs": 10260,
    "timestampMs": 10090,
    "confidence": 0.999149,
    "pageBreakAfter": true
  },
  {
    "text": " Чтобы",
    "startMs": 10260,
    "endMs": 10560,
    "timestampMs": 10410,
    "confidence": 0.690455
  },
  {
    "text": " поддерживать",
    "startMs": 10560,
    "endMs": 11320,
    "timestampMs": 10940,
    "confidence": 0.999535,
    "pageBreakAfter": true
  },
  {
    "text": " тело",
    "startMs": 11320,
    "endMs": 11680,
    "timestampMs": 11500,
    "confidence": 0.999484
  },
  {
    "text": " в",
    "startMs": 11680,
    "endMs": 11800,
    "timestampMs": 11740,
    "confidence": 0.990475
  },
  {
    "text": " рабочем",
    "startMs": 11800,
    "endMs": 12280,
    "timestampMs": 12040,
    "confidence": 0.999797,
    "pageBreakAfter": true
  },
  {
    "text": " состоянии",
    "startMs": 12280,
    "endMs": 13140,
    "timestampMs": 12710,
    "confidence": 0.999622,
    "pageBreakAfter": true
  },
  {
    "text": " Ну,",
    "startMs": 13720,
    "endMs": 14020,
    "timestampMs": 13870,
    "confidence": 0.94832
  },
  {
    "text": " что",
    "startMs": 14240,
    "endMs": 14340,
    "timestampMs": 14290,
    "confidence": 0.999148
  },
  {
    "text": " там,",
    "startMs": 14340,
    "endMs": 14560,
    "timestampMs": 14450,
    "confidence": 0.999962
  },
  {
    "text": " доктор?",
    "startMs": 14660,
    "endMs": 14980,
    "timestampMs": 14820,
    "confidence": 0.999558,
    "pageBreakAfter": true
  },
  {
    "text": " Ну,",
    "startMs": 15180,
    "endMs": 15520,
    "timestampMs": 15350,
    "confidence": 0.998746
  },
  {
    "text": " как",
    "startMs": 15800,
    "endMs": 16080,
    "timestampMs": 15940,
    "confidence": 0.998964
  },
  {
    "text": " вам",
    "startMs": 16080,
    "endMs": 16300,
    "timestampMs": 16190,
    "confidence": 0.998518
  },
  {
    "text": " сказать?",
    "startMs": 16300,
    "endMs": 16740,
    "timestampMs": 16520,
    "confidence": 0.999888,
    "pageBreakAfter": true
  },
  {
    "text": " В",
    "startMs": 16920,
    "endMs": 17100,
    "timestampMs": 17010,
    "confidence": 0.994332
  },
  {
    "text": " этой",
    "startMs": 17100,
    "endMs": 17260,
    "timestampMs": 17180,
    "confidence": 0.999112
  },
  {
    "text": " ситуации",
    "startMs": 17260,
    "endMs": 17780,
    "timestampMs": 17520,
    "confidence": 0.999904
  },
  {
    "text": " мы",
    "startMs": 17780,
    "endMs": 17940,
    "timestampMs": 17860,
    "confidence": 0.885696,
    "pageBreakAfter": true
  },
  {
    "text": " просто",
    "startMs": 17940,
    "endMs": 18260,
    "timestampMs": 18100,
    "confidence": 0.923556
  },
  {
    "text": " наши,",
    "startMs": 18260,
    "endMs": 18560,
    "timestampMs": 18410,
    "confidence": 0.490616,
    "pageBreakAfter": true
  },
  {
    "text": " это",
    "startMs": 18860,
    "endMs": 19280,
    "timestampMs": 19070,
    "confidence": 0.955095
  },
  {
    "text": " самое,",
    "startMs": 19280,
    "endMs": 19580,
    "timestampMs": 19430,
    "confidence": 0.996135
  },
  {
    "text": " мы",
    "startMs": 19760,
    "endMs": 19820,
    "timestampMs": 19790,
    "confidence": 0.98965
  },
  {
    "text": " уже,",
    "startMs": 19820,
    "endMs": 20060,
    "timestampMs": 19940,
    "confidence": 0.999653,
    "pageBreakAfter": true
  },
  {
    "text": " здесь",
    "startMs": 20240,
    "endMs": 20460,
    "timestampMs": 20350,
    "confidence": 0.999541
  },
  {
    "text": " наши",
    "startMs": 20460,
    "endMs": 20680,
    "timestampMs": 20570,
    "confidence": 0.704016
  },
  {
    "text": " полномочия",
    "startMs": 20680,
    "endMs": 21300,
    "timestampMs": 20990,
    "confidence": 0.999203,
    "pageBreakAfter": true
  },
  {
    "text": " всё,",
    "startMs": 21300,
    "endMs": 21540,
    "timestampMs": 21420,
    "confidence": 0.526563
  },
  {
    "text": " окончены.",
    "startMs": 21540,
    "endMs": 22480,
    "timestampMs": 22010,
    "confidence": 0.951468,
    "pageBreakAfter": true
  }
]
} />;
export const Video10 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="10-after-thirty" durationInFrames={553} premountFor={fps}>
      <ScenePicture src={staticFile("media/10-after-thirty.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header10 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions10 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const StoryRoot = () => <>
  <Composition id="Story-01" component={Video01} width={1080} height={1920}
    fps={24} durationInFrames={700} />
  <Composition id="Captions-01" component={Captions01} width={1080} height={200}
    fps={24} durationInFrames={700} />
  <Composition id="Header-01" component={Header01} width={1080} height={380}
    fps={24} durationInFrames={700} />
  <Composition id="Story-02" component={Video02} width={1080} height={1920}
    fps={24} durationInFrames={246} />
  <Composition id="Captions-02" component={Captions02} width={1080} height={200}
    fps={24} durationInFrames={246} />
  <Composition id="Header-02" component={Header02} width={1080} height={380}
    fps={24} durationInFrames={246} />
  <Composition id="Story-03" component={Video03} width={1080} height={1920}
    fps={24} durationInFrames={854} />
  <Composition id="Captions-03" component={Captions03} width={1080} height={200}
    fps={24} durationInFrames={854} />
  <Composition id="Header-03" component={Header03} width={1080} height={380}
    fps={24} durationInFrames={854} />
  <Composition id="Story-04" component={Video04} width={1080} height={1920}
    fps={24} durationInFrames={824} />
  <Composition id="Captions-04" component={Captions04} width={1080} height={200}
    fps={24} durationInFrames={824} />
  <Composition id="Header-04" component={Header04} width={1080} height={380}
    fps={24} durationInFrames={824} />
  <Composition id="Story-05" component={Video05} width={1080} height={1920}
    fps={24} durationInFrames={672} />
  <Composition id="Captions-05" component={Captions05} width={1080} height={200}
    fps={24} durationInFrames={672} />
  <Composition id="Header-05" component={Header05} width={1080} height={380}
    fps={24} durationInFrames={672} />
  <Composition id="Story-06" component={Video06} width={1080} height={1920}
    fps={24} durationInFrames={1194} />
  <Composition id="Captions-06" component={Captions06} width={1080} height={200}
    fps={24} durationInFrames={1194} />
  <Composition id="Header-06" component={Header06} width={1080} height={380}
    fps={24} durationInFrames={1194} />
  <Composition id="Story-07" component={Video07} width={1080} height={1920}
    fps={24} durationInFrames={512} />
  <Composition id="Captions-07" component={Captions07} width={1080} height={200}
    fps={24} durationInFrames={512} />
  <Composition id="Header-07" component={Header07} width={1080} height={380}
    fps={24} durationInFrames={512} />
  <Composition id="Story-08" component={Video08} width={1080} height={1920}
    fps={24} durationInFrames={1162} />
  <Composition id="Captions-08" component={Captions08} width={1080} height={200}
    fps={24} durationInFrames={1162} />
  <Composition id="Header-08" component={Header08} width={1080} height={380}
    fps={24} durationInFrames={1162} />
  <Composition id="Story-09" component={Video09} width={1080} height={1920}
    fps={24} durationInFrames={932} />
  <Composition id="Captions-09" component={Captions09} width={1080} height={200}
    fps={24} durationInFrames={932} />
  <Composition id="Header-09" component={Header09} width={1080} height={380}
    fps={24} durationInFrames={932} />
  <Composition id="Story-10" component={Video10} width={1080} height={1920}
    fps={24} durationInFrames={553} />
  <Composition id="Captions-10" component={Captions10} width={1080} height={200}
    fps={24} durationInFrames={553} />
  <Composition id="Header-10" component={Header10} width={1080} height={380}
    fps={24} durationInFrames={553} />
</>;
