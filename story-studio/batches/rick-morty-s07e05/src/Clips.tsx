import {AbsoluteFill, Composition, Sequence, staticFile, useVideoConfig} from 'remotion';
import {ClipHeader, DynamicCaptions, ScenePicture} from './Common';
export const Header01 = () => <ClipHeader title={"Вот почему Морти\nстал ЗЛЫМ"} />;
export const Captions01 = () => <DynamicCaptions captions={
[
  {
    "text": " Классное",
    "startMs": 700,
    "endMs": 1120,
    "timestampMs": 910,
    "confidence": 0.94969
  },
  {
    "text": " приключение.",
    "startMs": 1120,
    "endMs": 1780,
    "timestampMs": 1450,
    "confidence": 0.998482,
    "pageBreakAfter": true
  },
  {
    "text": " Мне",
    "startMs": 1880,
    "endMs": 1980,
    "timestampMs": 1930,
    "confidence": 0.993448
  },
  {
    "text": " снова",
    "startMs": 1980,
    "endMs": 2240,
    "timestampMs": 2110,
    "confidence": 0.994701
  },
  {
    "text": " пришлось",
    "startMs": 2240,
    "endMs": 2580,
    "timestampMs": 2410,
    "confidence": 0.998027,
    "pageBreakAfter": true
  },
  {
    "text": " залезть",
    "startMs": 2580,
    "endMs": 2920,
    "timestampMs": 2750,
    "confidence": 0.998197
  },
  {
    "text": " в",
    "startMs": 2920,
    "endMs": 3060,
    "timestampMs": 2990,
    "confidence": 0.99857
  },
  {
    "text": " анал.",
    "startMs": 3060,
    "endMs": 3360,
    "timestampMs": 3210,
    "confidence": 0.971252,
    "pageBreakAfter": true
  },
  {
    "text": " Отлично.",
    "startMs": 3460,
    "endMs": 3940,
    "timestampMs": 3700,
    "confidence": 0.991304,
    "pageBreakAfter": true
  },
  {
    "text": " Снова",
    "startMs": 4040,
    "endMs": 4220,
    "timestampMs": 4130,
    "confidence": 0.998668
  },
  {
    "text": " этот",
    "startMs": 4220,
    "endMs": 4380,
    "timestampMs": 4300,
    "confidence": 0.990323
  },
  {
    "text": " спор?",
    "startMs": 4380,
    "endMs": 4700,
    "timestampMs": 4540,
    "confidence": 0.998793,
    "pageBreakAfter": true
  },
  {
    "text": " Дай",
    "startMs": 4920,
    "endMs": 5260,
    "timestampMs": 5090,
    "confidence": 0.99497
  },
  {
    "text": " угадаю,",
    "startMs": 5260,
    "endMs": 5580,
    "timestampMs": 5420,
    "confidence": 0.992119
  },
  {
    "text": " ты",
    "startMs": 5660,
    "endMs": 5760,
    "timestampMs": 5710,
    "confidence": 0.998283
  },
  {
    "text": " просто",
    "startMs": 5760,
    "endMs": 6060,
    "timestampMs": 5910,
    "confidence": 0.997631,
    "pageBreakAfter": true
  },
  {
    "text": " уйдёшь",
    "startMs": 6060,
    "endMs": 6440,
    "timestampMs": 6250,
    "confidence": 0.996008
  },
  {
    "text": " или",
    "startMs": 6440,
    "endMs": 6580,
    "timestampMs": 6510,
    "confidence": 0.992949
  },
  {
    "text": " надуешь",
    "startMs": 6580,
    "endMs": 7020,
    "timestampMs": 6800,
    "confidence": 0.998027,
    "pageBreakAfter": true
  },
  {
    "text": " губки?",
    "startMs": 7020,
    "endMs": 7500,
    "timestampMs": 7260,
    "confidence": 0.999451,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 7620,
    "endMs": 8000,
    "timestampMs": 7810,
    "confidence": 0.997009
  },
  {
    "text": " возомнил",
    "startMs": 8000,
    "endMs": 8360,
    "timestampMs": 8180,
    "confidence": 0.990875
  },
  {
    "text": " себя",
    "startMs": 8360,
    "endMs": 8520,
    "timestampMs": 8440,
    "confidence": 0.995542,
    "pageBreakAfter": true
  },
  {
    "text": " всезнайкой,",
    "startMs": 8520,
    "endMs": 9080,
    "timestampMs": 8800,
    "confidence": 0.983315
  },
  {
    "text": " Рик,",
    "startMs": 9200,
    "endMs": 9260,
    "timestampMs": 9230,
    "confidence": 0.877819
  },
  {
    "text": " а",
    "startMs": 9260,
    "endMs": 9340,
    "timestampMs": 9300,
    "confidence": 0.939838
  },
  {
    "text": " по",
    "startMs": 9340,
    "endMs": 9480,
    "timestampMs": 9410,
    "confidence": 0.980302,
    "pageBreakAfter": true
  },
  {
    "text": " сути",
    "startMs": 9480,
    "endMs": 9640,
    "timestampMs": 9560,
    "confidence": 0.998926
  },
  {
    "text": " ты",
    "startMs": 9640,
    "endMs": 9760,
    "timestampMs": 9700,
    "confidence": 0.845496
  },
  {
    "text": " восьмилетка",
    "startMs": 9760,
    "endMs": 10280,
    "timestampMs": 10020,
    "confidence": 0.984306,
    "pageBreakAfter": true
  },
  {
    "text": " переросток.",
    "startMs": 10280,
    "endMs": 10800,
    "timestampMs": 10540,
    "confidence": 0.65729,
    "pageBreakAfter": true
  },
  {
    "text": " Мне",
    "startMs": 10820,
    "endMs": 10940,
    "timestampMs": 10880,
    "confidence": 0.992517
  },
  {
    "text": " это",
    "startMs": 10940,
    "endMs": 11020,
    "timestampMs": 10980,
    "confidence": 0.573231
  },
  {
    "text": " надоело.",
    "startMs": 11020,
    "endMs": 11500,
    "timestampMs": 11260,
    "confidence": 0.999607,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 11660,
    "endMs": 11740,
    "timestampMs": 11700,
    "confidence": 0.998112
  },
  {
    "text": " либо",
    "startMs": 11740,
    "endMs": 11980,
    "timestampMs": 11860,
    "confidence": 0.997588
  },
  {
    "text": " в",
    "startMs": 11980,
    "endMs": 12080,
    "timestampMs": 12030,
    "confidence": 0.999951
  },
  {
    "text": " деле,",
    "startMs": 12080,
    "endMs": 12280,
    "timestampMs": 12180,
    "confidence": 0.999037,
    "pageBreakAfter": true
  },
  {
    "text": " либо",
    "startMs": 12420,
    "endMs": 12560,
    "timestampMs": 12490,
    "confidence": 0.999817
  },
  {
    "text": " нет,",
    "startMs": 12560,
    "endMs": 12780,
    "timestampMs": 12670,
    "confidence": 0.999416
  },
  {
    "text": " Морти.",
    "startMs": 12860,
    "endMs": 13140,
    "timestampMs": 13000,
    "confidence": 0.994027,
    "pageBreakAfter": true
  },
  {
    "text": " Меня",
    "startMs": 13420,
    "endMs": 13700,
    "timestampMs": 13560,
    "confidence": 0.994817
  },
  {
    "text": " бесит",
    "startMs": 13700,
    "endMs": 14280,
    "timestampMs": 13990,
    "confidence": 0.785719
  },
  {
    "text": " твоя",
    "startMs": 14280,
    "endMs": 14460,
    "timestampMs": 14370,
    "confidence": 0.866427,
    "pageBreakAfter": true
  },
  {
    "text": " бестолковая",
    "startMs": 14460,
    "endMs": 15000,
    "timestampMs": 14730,
    "confidence": 0.996202
  },
  {
    "text": " угроза.",
    "startMs": 15000,
    "endMs": 15480,
    "timestampMs": 15240,
    "confidence": 0.996704,
    "pageBreakAfter": true
  },
  {
    "text": " Не",
    "startMs": 15800,
    "endMs": 15980,
    "timestampMs": 15890,
    "confidence": 0.99559
  },
  {
    "text": " нравится?",
    "startMs": 15980,
    "endMs": 16340,
    "timestampMs": 16160,
    "confidence": 0.986721,
    "pageBreakAfter": true
  },
  {
    "text": " Пиздуй",
    "startMs": 16540,
    "endMs": 16980,
    "timestampMs": 16760,
    "confidence": 0.980133
  },
  {
    "text": " нахуй.",
    "startMs": 16980,
    "endMs": 17480,
    "timestampMs": 17230,
    "confidence": 0.970695,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 18700,
    "endMs": 18920,
    "timestampMs": 18810,
    "confidence": 0.84059
  },
  {
    "text": " знаешь,",
    "startMs": 18920,
    "endMs": 19220,
    "timestampMs": 19070,
    "confidence": 0.994549,
    "pageBreakAfter": true
  },
  {
    "text": " ты",
    "startMs": 19520,
    "endMs": 19800,
    "timestampMs": 19660,
    "confidence": 0.9998
  },
  {
    "text": " прав.",
    "startMs": 19800,
    "endMs": 20100,
    "timestampMs": 19950,
    "confidence": 0.999708,
    "pageBreakAfter": true
  },
  {
    "text": " Прости,",
    "startMs": 20500,
    "endMs": 20900,
    "timestampMs": 20700,
    "confidence": 0.995379
  },
  {
    "text": " что",
    "startMs": 21020,
    "endMs": 21140,
    "timestampMs": 21080,
    "confidence": 0.999794
  },
  {
    "text": " требую",
    "startMs": 21140,
    "endMs": 21460,
    "timestampMs": 21300,
    "confidence": 0.995411,
    "pageBreakAfter": true
  },
  {
    "text": " слишком",
    "startMs": 21460,
    "endMs": 21740,
    "timestampMs": 21600,
    "confidence": 0.999165
  },
  {
    "text": " многого.",
    "startMs": 21740,
    "endMs": 22240,
    "timestampMs": 21990,
    "confidence": 0.991077,
    "pageBreakAfter": true
  },
  {
    "text": " Как",
    "startMs": 22780,
    "endMs": 23260,
    "timestampMs": 23020,
    "confidence": 0.995452
  },
  {
    "text": " насчёт",
    "startMs": 23260,
    "endMs": 23680,
    "timestampMs": 23470,
    "confidence": 0.995551
  },
  {
    "text": " выпить?",
    "startMs": 23680,
    "endMs": 24020,
    "timestampMs": 23850,
    "confidence": 0.998591,
    "pageBreakAfter": true
  },
  {
    "text": " О,",
    "startMs": 24470,
    "endMs": 24770,
    "timestampMs": 24620,
    "confidence": 0.910392,
    "pageBreakAfter": true
  },
  {
    "text": " здоров,",
    "startMs": 25090,
    "endMs": 25470,
    "timestampMs": 25280,
    "confidence": 0.825501,
    "pageBreakAfter": true
  },
  {
    "text": " Морти.",
    "startMs": 25790,
    "endMs": 26190,
    "timestampMs": 25990,
    "confidence": 0.99861,
    "pageBreakAfter": true
  },
  {
    "text": " Привет,",
    "startMs": 26410,
    "endMs": 26670,
    "timestampMs": 26540,
    "confidence": 0.998448
  },
  {
    "text": " Рик.",
    "startMs": 26790,
    "endMs": 26970,
    "timestampMs": 26880,
    "confidence": 0.999503,
    "pageBreakAfter": true
  },
  {
    "text": " Уже",
    "startMs": 27230,
    "endMs": 27590,
    "timestampMs": 27410,
    "confidence": 0.998937
  },
  {
    "text": " нажрался?",
    "startMs": 27590,
    "endMs": 28110,
    "timestampMs": 27850,
    "confidence": 0.998394,
    "pageBreakAfter": true
  },
  {
    "text": " Это",
    "startMs": 28110,
    "endMs": 28370,
    "timestampMs": 28240,
    "confidence": 0.48945
  },
  {
    "text": " же",
    "startMs": 28370,
    "endMs": 28450,
    "timestampMs": 28410,
    "confidence": 0.583532
  },
  {
    "text": " мой",
    "startMs": 28450,
    "endMs": 28570,
    "timestampMs": 28510,
    "confidence": 0.941234
  },
  {
    "text": " дружбан.",
    "startMs": 28570,
    "endMs": 28990,
    "timestampMs": 28780,
    "confidence": 0.831938,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 29150,
    "endMs": 29450,
    "timestampMs": 29300,
    "confidence": 0.972296
  },
  {
    "text": " в",
    "startMs": 29450,
    "endMs": 29550,
    "timestampMs": 29500,
    "confidence": 0.991473
  },
  {
    "text": " курсе?",
    "startMs": 29550,
    "endMs": 29870,
    "timestampMs": 29710,
    "confidence": 0.99738,
    "pageBreakAfter": true
  },
  {
    "text": " Только",
    "startMs": 30430,
    "endMs": 30870,
    "timestampMs": 30650,
    "confidence": 0.74066
  },
  {
    "text": " ты",
    "startMs": 30870,
    "endMs": 31210,
    "timestampMs": 31040,
    "confidence": 0.980567
  },
  {
    "text": " и",
    "startMs": 31210,
    "endMs": 31370,
    "timestampMs": 31290,
    "confidence": 0.95869
  },
  {
    "text": " я,",
    "startMs": 31370,
    "endMs": 31510,
    "timestampMs": 31440,
    "confidence": 0.997081,
    "pageBreakAfter": true
  },
  {
    "text": " Морти.",
    "startMs": 31610,
    "endMs": 31890,
    "timestampMs": 31750,
    "confidence": 0.989061,
    "pageBreakAfter": true
  },
  {
    "text": " Рик",
    "startMs": 32070,
    "endMs": 32490,
    "timestampMs": 32280,
    "confidence": 0.967734
  },
  {
    "text": " и",
    "startMs": 32490,
    "endMs": 32590,
    "timestampMs": 32540,
    "confidence": 0.993121
  },
  {
    "text": " Морти",
    "startMs": 32590,
    "endMs": 32850,
    "timestampMs": 32720,
    "confidence": 0.995876
  },
  {
    "text": " на",
    "startMs": 32850,
    "endMs": 33250,
    "timestampMs": 33050,
    "confidence": 0.858308,
    "pageBreakAfter": true
  },
  {
    "text": " сотни",
    "startMs": 33250,
    "endMs": 33730,
    "timestampMs": 33490,
    "confidence": 0.998854
  },
  {
    "text": " лет.",
    "startMs": 33730,
    "endMs": 34070,
    "timestampMs": 33900,
    "confidence": 0.999627,
    "pageBreakAfter": true
  },
  {
    "text": " Навеки.",
    "startMs": 34610,
    "endMs": 35050,
    "timestampMs": 34830,
    "confidence": 0.922318,
    "pageBreakAfter": true
  },
  {
    "text": " Да,",
    "startMs": 35130,
    "endMs": 35290,
    "timestampMs": 35210,
    "confidence": 0.99079
  },
  {
    "text": " дружище.",
    "startMs": 35430,
    "endMs": 35890,
    "timestampMs": 35660,
    "confidence": 0.998768,
    "pageBreakAfter": true
  },
  {
    "text": " Рик",
    "startMs": 36010,
    "endMs": 36410,
    "timestampMs": 36210,
    "confidence": 0.999039
  },
  {
    "text": " и",
    "startMs": 36410,
    "endMs": 36490,
    "timestampMs": 36450,
    "confidence": 0.999795
  },
  {
    "text": " Морти.",
    "startMs": 36490,
    "endMs": 36850,
    "timestampMs": 36670,
    "confidence": 0.999368,
    "pageBreakAfter": true
  },
  {
    "text": " На",
    "startMs": 37150,
    "endMs": 37590,
    "timestampMs": 37370,
    "confidence": 0.997841
  },
  {
    "text": " сотни",
    "startMs": 37590,
    "endMs": 38030,
    "timestampMs": 37810,
    "confidence": 0.999849
  },
  {
    "text": " лет.",
    "startMs": 38030,
    "endMs": 38270,
    "timestampMs": 38150,
    "confidence": 0.999957,
    "pageBreakAfter": true
  },
  {
    "text": " Навеки.",
    "startMs": 39070,
    "endMs": 39510,
    "timestampMs": 39290,
    "confidence": 0.995587,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 41090,
    "endMs": 41430,
    "timestampMs": 41260,
    "confidence": 0.873936
  },
  {
    "text": " ну,",
    "startMs": 41430,
    "endMs": 41530,
    "timestampMs": 41480,
    "confidence": 0.903567
  },
  {
    "text": " уйди",
    "startMs": 41610,
    "endMs": 41930,
    "timestampMs": 41770,
    "confidence": 0.99664
  },
  {
    "text": " от",
    "startMs": 41930,
    "endMs": 42030,
    "timestampMs": 41980,
    "confidence": 0.999863,
    "pageBreakAfter": true
  },
  {
    "text": " меня.",
    "startMs": 42030,
    "endMs": 42250,
    "timestampMs": 42140,
    "confidence": 0.999879,
    "pageBreakAfter": true
  },
  {
    "text": " Что",
    "startMs": 42450,
    "endMs": 42850,
    "timestampMs": 42650,
    "confidence": 0.996577
  },
  {
    "text": " ты",
    "startMs": 42850,
    "endMs": 42950,
    "timestampMs": 42900,
    "confidence": 0.999482
  },
  {
    "text": " делаешь?",
    "startMs": 42950,
    "endMs": 43510,
    "timestampMs": 43230,
    "confidence": 0.9994,
    "pageBreakAfter": true
  },
  {
    "text": " Повязка",
    "startMs": 51710,
    "endMs": 52150,
    "timestampMs": 51930,
    "confidence": 0.955994
  },
  {
    "text": " на",
    "startMs": 52150,
    "endMs": 52250,
    "timestampMs": 52200,
    "confidence": 0.999526
  },
  {
    "text": " глаз?",
    "startMs": 52250,
    "endMs": 52490,
    "timestampMs": 52370,
    "confidence": 0.999742,
    "pageBreakAfter": true
  },
  {
    "text": " Вы",
    "startMs": 52670,
    "endMs": 52810,
    "timestampMs": 52740,
    "confidence": 0.994175
  },
  {
    "text": " же",
    "startMs": 52810,
    "endMs": 52890,
    "timestampMs": 52850,
    "confidence": 0.997244
  },
  {
    "text": " в",
    "startMs": 52890,
    "endMs": 52970,
    "timestampMs": 52930,
    "confidence": 0.999525
  },
  {
    "text": " курсе,",
    "startMs": 52970,
    "endMs": 53230,
    "timestampMs": 53100,
    "confidence": 0.999658,
    "pageBreakAfter": true
  },
  {
    "text": " как",
    "startMs": 53270,
    "endMs": 53370,
    "timestampMs": 53320,
    "confidence": 0.99977
  },
  {
    "text": " мы",
    "startMs": 53370,
    "endMs": 53470,
    "timestampMs": 53420,
    "confidence": 0.998894
  },
  {
    "text": " относимся",
    "startMs": 53470,
    "endMs": 53810,
    "timestampMs": 53640,
    "confidence": 0.997916
  },
  {
    "text": " к",
    "startMs": 53810,
    "endMs": 53930,
    "timestampMs": 53870,
    "confidence": 0.999935,
    "pageBreakAfter": true
  },
  {
    "text": " пиратам.",
    "startMs": 53930,
    "endMs": 54290,
    "timestampMs": 54110,
    "confidence": 0.999338,
    "pageBreakAfter": true
  }
]
} />;
export const Video01 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="01-evil-origin" durationInFrames={1637} premountFor={fps}>
      <ScenePicture src={staticFile("media/01-evil-origin.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header01 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions01 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header02 = () => <ClipHeader title={"Открыли портал.\nПожалели ВСЕ"} />;
export const Captions02 = () => <DynamicCaptions captions={
[
  {
    "text": " Получилось!",
    "startMs": 170,
    "endMs": 1350,
    "timestampMs": 760,
    "confidence": 0.775818,
    "pageBreakAfter": true
  },
  {
    "text": " Теперь",
    "startMs": 1510,
    "endMs": 1770,
    "timestampMs": 1640,
    "confidence": 0.986362
  },
  {
    "text": " нам",
    "startMs": 1770,
    "endMs": 1950,
    "timestampMs": 1860,
    "confidence": 0.969194
  },
  {
    "text": " открыты",
    "startMs": 1950,
    "endMs": 2330,
    "timestampMs": 2140,
    "confidence": 0.996478,
    "pageBreakAfter": true
  },
  {
    "text": " бесконечные",
    "startMs": 2330,
    "endMs": 2950,
    "timestampMs": 2640,
    "confidence": 0.98563
  },
  {
    "text": " вселенные!",
    "startMs": 2950,
    "endMs": 3650,
    "timestampMs": 3300,
    "confidence": 0.990894,
    "pageBreakAfter": true
  },
  {
    "text": " Ура!",
    "startMs": 3790,
    "endMs": 4170,
    "timestampMs": 3980,
    "confidence": 0.891502,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 4570,
    "endMs": 4690,
    "timestampMs": 4630,
    "confidence": 0.982049
  },
  {
    "text": " бесконечное",
    "startMs": 4690,
    "endMs": 5290,
    "timestampMs": 4990,
    "confidence": 0.995885
  },
  {
    "text": " количество",
    "startMs": 5290,
    "endMs": 5550,
    "timestampMs": 5420,
    "confidence": 0.99744,
    "pageBreakAfter": true
  },
  {
    "text": " наших",
    "startMs": 5550,
    "endMs": 5870,
    "timestampMs": 5710,
    "confidence": 0.981982
  },
  {
    "text": " семей",
    "startMs": 5870,
    "endMs": 6190,
    "timestampMs": 6030,
    "confidence": 0.999421
  },
  {
    "text": " тоже",
    "startMs": 6190,
    "endMs": 6390,
    "timestampMs": 6290,
    "confidence": 0.996559
  },
  {
    "text": " так",
    "startMs": 6390,
    "endMs": 6590,
    "timestampMs": 6490,
    "confidence": 0.998756,
    "pageBreakAfter": true
  },
  {
    "text": " может?",
    "startMs": 6590,
    "endMs": 6870,
    "timestampMs": 6730,
    "confidence": 0.999733,
    "pageBreakAfter": true
  },
  {
    "text": " Бесконечное",
    "startMs": 7070,
    "endMs": 7710,
    "timestampMs": 7390,
    "confidence": 0.997561
  },
  {
    "text": " количество",
    "startMs": 7710,
    "endMs": 8030,
    "timestampMs": 7870,
    "confidence": 0.999537,
    "pageBreakAfter": true
  },
  {
    "text": " семей",
    "startMs": 8030,
    "endMs": 8390,
    "timestampMs": 8210,
    "confidence": 0.998512
  },
  {
    "text": " не",
    "startMs": 8390,
    "endMs": 8510,
    "timestampMs": 8450,
    "confidence": 0.996766
  },
  {
    "text": " может",
    "startMs": 8510,
    "endMs": 8770,
    "timestampMs": 8640,
    "confidence": 0.999695
  },
  {
    "text": " изобрести",
    "startMs": 8770,
    "endMs": 9150,
    "timestampMs": 8960,
    "confidence": 0.996297,
    "pageBreakAfter": true
  },
  {
    "text": " первый",
    "startMs": 9150,
    "endMs": 9490,
    "timestampMs": 9320,
    "confidence": 0.78296
  },
  {
    "text": " в",
    "startMs": 9490,
    "endMs": 9630,
    "timestampMs": 9560,
    "confidence": 0.996452
  },
  {
    "text": " мире.",
    "startMs": 9630,
    "endMs": 9790,
    "timestampMs": 9710,
    "confidence": 0.998168,
    "pageBreakAfter": true
  },
  {
    "text": " Да,",
    "startMs": 10550,
    "endMs": 11190,
    "timestampMs": 10870,
    "confidence": 0.978535
  },
  {
    "text": " получилось!",
    "startMs": 11310,
    "endMs": 11550,
    "timestampMs": 11430,
    "confidence": 0.999046,
    "pageBreakAfter": true
  },
  {
    "text": " Вы",
    "startMs": 11970,
    "endMs": 12090,
    "timestampMs": 12030,
    "confidence": 0.991861
  },
  {
    "text": " представляете,",
    "startMs": 12090,
    "endMs": 12570,
    "timestampMs": 12330,
    "confidence": 0.999408
  },
  {
    "text": " какие",
    "startMs": 12650,
    "endMs": 12770,
    "timestampMs": 12710,
    "confidence": 0.999127,
    "pageBreakAfter": true
  },
  {
    "text": " возможности",
    "startMs": 12770,
    "endMs": 13510,
    "timestampMs": 13140,
    "confidence": 0.995743
  },
  {
    "text": " нам",
    "startMs": 13510,
    "endMs": 13630,
    "timestampMs": 13570,
    "confidence": 0.995492
  },
  {
    "text": " теперь",
    "startMs": 13630,
    "endMs": 13830,
    "timestampMs": 13730,
    "confidence": 0.994446,
    "pageBreakAfter": true
  },
  {
    "text": " открыты?",
    "startMs": 13830,
    "endMs": 14470,
    "timestampMs": 14150,
    "confidence": 0.983077,
    "pageBreakAfter": true
  },
  {
    "text": " Сработало?",
    "startMs": 15430,
    "endMs": 16070,
    "timestampMs": 15750,
    "confidence": 0.996729,
    "pageBreakAfter": true
  },
  {
    "text": " Лучший",
    "startMs": 16190,
    "endMs": 16570,
    "timestampMs": 16380,
    "confidence": 0.922498
  },
  {
    "text": " отец",
    "startMs": 16570,
    "endMs": 16770,
    "timestampMs": 16670,
    "confidence": 0.991434
  },
  {
    "text": " на",
    "startMs": 16770,
    "endMs": 16870,
    "timestampMs": 16820,
    "confidence": 0.999408
  },
  {
    "text": " свете!",
    "startMs": 16870,
    "endMs": 17190,
    "timestampMs": 17030,
    "confidence": 0.999726,
    "pageBreakAfter": true
  }
]
} />;
export const Video02 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="02-infinity" durationInFrames={564} premountFor={fps}>
      <ScenePicture src={staticFile("media/02-infinity.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header02 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions02 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header03 = () => <ClipHeader title={"«Я ХОРОШИЙ РИК»\nПродержался недолго"} />;
export const Captions03 = () => <DynamicCaptions captions={
[
  {
    "text": " Погодите,",
    "startMs": 280,
    "endMs": 1060,
    "timestampMs": 670,
    "confidence": 0.917604
  },
  {
    "text": " погодите,",
    "startMs": 1120,
    "endMs": 1420,
    "timestampMs": 1270,
    "confidence": 0.96335
  },
  {
    "text": " я",
    "startMs": 1460,
    "endMs": 1560,
    "timestampMs": 1510,
    "confidence": 0.997481,
    "pageBreakAfter": true
  },
  {
    "text": " хороший",
    "startMs": 1560,
    "endMs": 1960,
    "timestampMs": 1760,
    "confidence": 0.995315
  },
  {
    "text": " Рик.",
    "startMs": 1980,
    "endMs": 2200,
    "timestampMs": 2090,
    "confidence": 0.994552,
    "pageBreakAfter": true
  },
  {
    "text": " А,",
    "startMs": 4430,
    "endMs": 4690,
    "timestampMs": 4560,
    "confidence": 0.463524
  },
  {
    "text": " я",
    "startMs": 4810,
    "endMs": 5010,
    "timestampMs": 4910,
    "confidence": 0.981312
  },
  {
    "text": " пас.",
    "startMs": 5010,
    "endMs": 5330,
    "timestampMs": 5170,
    "confidence": 0.928806,
    "pageBreakAfter": true
  },
  {
    "text": " Какой",
    "startMs": 5430,
    "endMs": 5710,
    "timestampMs": 5570,
    "confidence": 0.998858
  },
  {
    "text": " же",
    "startMs": 5710,
    "endMs": 5790,
    "timestampMs": 5750,
    "confidence": 0.995192
  },
  {
    "text": " ты",
    "startMs": 5790,
    "endMs": 5890,
    "timestampMs": 5840,
    "confidence": 0.999909
  },
  {
    "text": " мудак?",
    "startMs": 5890,
    "endMs": 6270,
    "timestampMs": 6080,
    "confidence": 0.995666,
    "pageBreakAfter": true
  },
  {
    "text": " Мы",
    "startMs": 6390,
    "endMs": 6570,
    "timestampMs": 6480,
    "confidence": 0.998519
  },
  {
    "text": " могли",
    "startMs": 6570,
    "endMs": 6810,
    "timestampMs": 6690,
    "confidence": 0.999696
  },
  {
    "text": " бы",
    "startMs": 6810,
    "endMs": 6910,
    "timestampMs": 6860,
    "confidence": 0.999824
  },
  {
    "text": " объединить",
    "startMs": 6910,
    "endMs": 7310,
    "timestampMs": 7110,
    "confidence": 0.999176,
    "pageBreakAfter": true
  },
  {
    "text": " усилия.",
    "startMs": 7310,
    "endMs": 7790,
    "timestampMs": 7550,
    "confidence": 0.991984,
    "pageBreakAfter": true
  },
  {
    "text": " Вообще-то,",
    "startMs": 8010,
    "endMs": 8590,
    "timestampMs": 8300,
    "confidence": 0.998469
  },
  {
    "text": " я",
    "startMs": 8730,
    "endMs": 9070,
    "timestampMs": 8900,
    "confidence": 0.999812
  },
  {
    "text": " настолько",
    "startMs": 9070,
    "endMs": 9390,
    "timestampMs": 9230,
    "confidence": 0.999524,
    "pageBreakAfter": true
  },
  {
    "text": " хороший,",
    "startMs": 9390,
    "endMs": 9790,
    "timestampMs": 9590,
    "confidence": 0.979222
  },
  {
    "text": " что",
    "startMs": 9970,
    "endMs": 10090,
    "timestampMs": 10030,
    "confidence": 0.999743
  },
  {
    "text": " врать",
    "startMs": 10090,
    "endMs": 10370,
    "timestampMs": 10230,
    "confidence": 0.994098
  },
  {
    "text": " не",
    "startMs": 10370,
    "endMs": 10510,
    "timestampMs": 10440,
    "confidence": 0.999918,
    "pageBreakAfter": true
  },
  {
    "text": " стану.",
    "startMs": 10510,
    "endMs": 10870,
    "timestampMs": 10690,
    "confidence": 0.999888,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 11050,
    "endMs": 11270,
    "timestampMs": 11160,
    "confidence": 0.999224
  },
  {
    "text": " собирался",
    "startMs": 11270,
    "endMs": 11730,
    "timestampMs": 11500,
    "confidence": 0.998296
  },
  {
    "text": " убить",
    "startMs": 11730,
    "endMs": 12010,
    "timestampMs": 11870,
    "confidence": 0.999489
  },
  {
    "text": " вас,",
    "startMs": 12010,
    "endMs": 12190,
    "timestampMs": 12100,
    "confidence": 0.999874,
    "pageBreakAfter": true
  },
  {
    "text": " ребята.",
    "startMs": 12270,
    "endMs": 12450,
    "timestampMs": 12360,
    "confidence": 0.999568,
    "pageBreakAfter": true
  },
  {
    "text": " О,",
    "startMs": 19110,
    "endMs": 19510,
    "timestampMs": 19310,
    "confidence": 0.986329
  },
  {
    "text": " здорово.",
    "startMs": 19710,
    "endMs": 20090,
    "timestampMs": 19900,
    "confidence": 0.965032,
    "pageBreakAfter": true
  },
  {
    "text": " Давай,",
    "startMs": 20130,
    "endMs": 20350,
    "timestampMs": 20240,
    "confidence": 0.998077
  },
  {
    "text": " Рик,",
    "startMs": 20450,
    "endMs": 20590,
    "timestampMs": 20520,
    "confidence": 0.999374
  },
  {
    "text": " стреляй!",
    "startMs": 20690,
    "endMs": 21110,
    "timestampMs": 20900,
    "confidence": 0.999507,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 21210,
    "endMs": 21390,
    "timestampMs": 21300,
    "confidence": 0.99908
  },
  {
    "text": " же",
    "startMs": 21390,
    "endMs": 21490,
    "timestampMs": 21440,
    "confidence": 0.99961
  },
  {
    "text": " хотел",
    "startMs": 21490,
    "endMs": 21730,
    "timestampMs": 21610,
    "confidence": 0.995955
  },
  {
    "text": " объединить",
    "startMs": 21730,
    "endMs": 22290,
    "timestampMs": 22010,
    "confidence": 0.999618,
    "pageBreakAfter": true
  },
  {
    "text": " усилия.",
    "startMs": 22290,
    "endMs": 22770,
    "timestampMs": 22530,
    "confidence": 0.996544,
    "pageBreakAfter": true
  },
  {
    "text": " Чтобы",
    "startMs": 22870,
    "endMs": 23050,
    "timestampMs": 22960,
    "confidence": 0.992959
  },
  {
    "text": " ты",
    "startMs": 23050,
    "endMs": 23230,
    "timestampMs": 23140,
    "confidence": 0.999892
  },
  {
    "text": " смог",
    "startMs": 23230,
    "endMs": 23490,
    "timestampMs": 23360,
    "confidence": 0.996787
  },
  {
    "text": " убить",
    "startMs": 23490,
    "endMs": 23850,
    "timestampMs": 23670,
    "confidence": 0.999317,
    "pageBreakAfter": true
  },
  {
    "text": " его.",
    "startMs": 23850,
    "endMs": 24070,
    "timestampMs": 23960,
    "confidence": 0.999847,
    "pageBreakAfter": true
  },
  {
    "text": " И",
    "startMs": 24230,
    "endMs": 24310,
    "timestampMs": 24270,
    "confidence": 0.98962
  },
  {
    "text": " меня",
    "startMs": 24310,
    "endMs": 24490,
    "timestampMs": 24400,
    "confidence": 0.999792
  },
  {
    "text": " ещё",
    "startMs": 24490,
    "endMs": 24690,
    "timestampMs": 24590,
    "confidence": 0.825247
  },
  {
    "text": " называют",
    "startMs": 24690,
    "endMs": 25030,
    "timestampMs": 24860,
    "confidence": 0.999418,
    "pageBreakAfter": true
  },
  {
    "text": " Злой",
    "startMs": 25030,
    "endMs": 25270,
    "timestampMs": 25150,
    "confidence": 0.668729
  },
  {
    "text": " Морти.",
    "startMs": 25270,
    "endMs": 25590,
    "timestampMs": 25430,
    "confidence": 0.993796,
    "pageBreakAfter": true
  },
  {
    "text": " Выбраться",
    "startMs": 25690,
    "endMs": 26090,
    "timestampMs": 25890,
    "confidence": 0.998718
  },
  {
    "text": " из",
    "startMs": 26090,
    "endMs": 26210,
    "timestampMs": 26150,
    "confidence": 0.999956
  },
  {
    "text": " коробки",
    "startMs": 26210,
    "endMs": 26550,
    "timestampMs": 26380,
    "confidence": 0.999724,
    "pageBreakAfter": true
  },
  {
    "text": " проще",
    "startMs": 26550,
    "endMs": 26830,
    "timestampMs": 26690,
    "confidence": 0.999696
  },
  {
    "text": " всего,",
    "startMs": 26830,
    "endMs": 27050,
    "timestampMs": 26940,
    "confidence": 0.99949
  },
  {
    "text": " когда",
    "startMs": 27130,
    "endMs": 27290,
    "timestampMs": 27210,
    "confidence": 0.999618,
    "pageBreakAfter": true
  },
  {
    "text": " мыслишь",
    "startMs": 27290,
    "endMs": 27690,
    "timestampMs": 27490,
    "confidence": 0.998902
  },
  {
    "text": " за",
    "startMs": 27690,
    "endMs": 27830,
    "timestampMs": 27760,
    "confidence": 0.99984
  },
  {
    "text": " её",
    "startMs": 27830,
    "endMs": 27970,
    "timestampMs": 27900,
    "confidence": 0.998239
  },
  {
    "text": " рамками.",
    "startMs": 27970,
    "endMs": 28390,
    "timestampMs": 28180,
    "confidence": 0.999657,
    "pageBreakAfter": true
  },
  {
    "text": " Мы",
    "startMs": 28550,
    "endMs": 28750,
    "timestampMs": 28650,
    "confidence": 0.998994
  },
  {
    "text": " оба",
    "startMs": 28750,
    "endMs": 29030,
    "timestampMs": 28890,
    "confidence": 0.999419
  },
  {
    "text": " ненавидим",
    "startMs": 29030,
    "endMs": 29350,
    "timestampMs": 29190,
    "confidence": 0.999371
  },
  {
    "text": " Рика",
    "startMs": 29350,
    "endMs": 29550,
    "timestampMs": 29450,
    "confidence": 0.990329,
    "pageBreakAfter": true
  },
  {
    "text": " Прайма",
    "startMs": 29550,
    "endMs": 29890,
    "timestampMs": 29720,
    "confidence": 0.988588
  },
  {
    "text": " сильнее,",
    "startMs": 29890,
    "endMs": 30290,
    "timestampMs": 30090,
    "confidence": 0.999173
  },
  {
    "text": " чем",
    "startMs": 30370,
    "endMs": 30510,
    "timestampMs": 30440,
    "confidence": 0.999919
  },
  {
    "text": " друг",
    "startMs": 30510,
    "endMs": 30670,
    "timestampMs": 30590,
    "confidence": 0.999689,
    "pageBreakAfter": true
  },
  {
    "text": " друга.",
    "startMs": 30670,
    "endMs": 30950,
    "timestampMs": 30810,
    "confidence": 0.999913,
    "pageBreakAfter": true
  },
  {
    "text": " С",
    "startMs": 31030,
    "endMs": 31130,
    "timestampMs": 31080,
    "confidence": 0.999171
  },
  {
    "text": " чего",
    "startMs": 31130,
    "endMs": 31270,
    "timestampMs": 31200,
    "confidence": 0.999453
  },
  {
    "text": " ты",
    "startMs": 31270,
    "endMs": 31410,
    "timestampMs": 31340,
    "confidence": 0.999947
  },
  {
    "text": " взял?",
    "startMs": 31410,
    "endMs": 31750,
    "timestampMs": 31580,
    "confidence": 0.999537,
    "pageBreakAfter": true
  },
  {
    "text": " Нет",
    "startMs": 31830,
    "endMs": 32070,
    "timestampMs": 31950,
    "confidence": 0.998493
  },
  {
    "text": " Рика",
    "startMs": 32170,
    "endMs": 32290,
    "timestampMs": 32230,
    "confidence": 0.987919
  },
  {
    "text": " хуже",
    "startMs": 32290,
    "endMs": 32530,
    "timestampMs": 32410,
    "confidence": 0.805189
  },
  {
    "text": " него.",
    "startMs": 32530,
    "endMs": 32750,
    "timestampMs": 32640,
    "confidence": 0.99467,
    "pageBreakAfter": true
  },
  {
    "text": " Тоже",
    "startMs": 32890,
    "endMs": 33190,
    "timestampMs": 33040,
    "confidence": 0.997209
  },
  {
    "text": " мне.",
    "startMs": 33190,
    "endMs": 33410,
    "timestampMs": 33300,
    "confidence": 0.999659,
    "pageBreakAfter": true
  },
  {
    "text": " Нет",
    "startMs": 33550,
    "endMs": 33750,
    "timestampMs": 33650,
    "confidence": 0.999372
  },
  {
    "text": " говна",
    "startMs": 33750,
    "endMs": 34090,
    "timestampMs": 33920,
    "confidence": 0.996001
  },
  {
    "text": " хуже",
    "startMs": 34090,
    "endMs": 34370,
    "timestampMs": 34230,
    "confidence": 0.99378
  },
  {
    "text": " пиццы.",
    "startMs": 34370,
    "endMs": 34810,
    "timestampMs": 34590,
    "confidence": 0.982232,
    "pageBreakAfter": true
  },
  {
    "text": " Ого,",
    "startMs": 37430,
    "endMs": 37990,
    "timestampMs": 37710,
    "confidence": 0.954461
  },
  {
    "text": " полегче,",
    "startMs": 38250,
    "endMs": 38810,
    "timestampMs": 38530,
    "confidence": 0.993686
  },
  {
    "text": " ковбой.",
    "startMs": 38850,
    "endMs": 39190,
    "timestampMs": 39020,
    "confidence": 0.93891,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 39390,
    "endMs": 39610,
    "timestampMs": 39500,
    "confidence": 0.963609
  },
  {
    "text": " что",
    "startMs": 39610,
    "endMs": 39930,
    "timestampMs": 39770,
    "confidence": 0.98433
  },
  {
    "text": " значит",
    "startMs": 39930,
    "endMs": 40250,
    "timestampMs": 40090,
    "confidence": 0.979794
  },
  {
    "text": " нет",
    "startMs": 40250,
    "endMs": 40530,
    "timestampMs": 40390,
    "confidence": 0.418876,
    "pageBreakAfter": true
  },
  {
    "text": " говна",
    "startMs": 40530,
    "endMs": 40890,
    "timestampMs": 40710,
    "confidence": 0.995882
  },
  {
    "text": " хуже",
    "startMs": 40890,
    "endMs": 41250,
    "timestampMs": 41070,
    "confidence": 0.980591
  },
  {
    "text": " пиццы?",
    "startMs": 41250,
    "endMs": 41710,
    "timestampMs": 41480,
    "confidence": 0.997577,
    "pageBreakAfter": true
  },
  {
    "text": " Ебать!",
    "startMs": 44590,
    "endMs": 45150,
    "timestampMs": 44870,
    "confidence": 0.93492,
    "pageBreakAfter": true
  },
  {
    "text": " Похоже,",
    "startMs": 45330,
    "endMs": 45850,
    "timestampMs": 45590,
    "confidence": 0.995414
  },
  {
    "text": " он",
    "startMs": 45990,
    "endMs": 46010,
    "timestampMs": 46000,
    "confidence": 0.995557
  },
  {
    "text": " не",
    "startMs": 46010,
    "endMs": 46170,
    "timestampMs": 46090,
    "confidence": 0.997319
  },
  {
    "text": " ладит",
    "startMs": 46170,
    "endMs": 46430,
    "timestampMs": 46300,
    "confidence": 0.988217,
    "pageBreakAfter": true
  },
  {
    "text": " с",
    "startMs": 46430,
    "endMs": 46490,
    "timestampMs": 46460,
    "confidence": 0.991666
  },
  {
    "text": " другими",
    "startMs": 46490,
    "endMs": 46770,
    "timestampMs": 46630,
    "confidence": 0.999141
  },
  {
    "text": " людьми.",
    "startMs": 46770,
    "endMs": 47110,
    "timestampMs": 46940,
    "confidence": 0.999579,
    "pageBreakAfter": true
  },
  {
    "text": " Давайте",
    "startMs": 47370,
    "endMs": 47830,
    "timestampMs": 47600,
    "confidence": 0.892126
  },
  {
    "text": " просто",
    "startMs": 47830,
    "endMs": 48170,
    "timestampMs": 48000,
    "confidence": 0.989995
  },
  {
    "text": " грохнем",
    "startMs": 48170,
    "endMs": 48610,
    "timestampMs": 48390,
    "confidence": 0.993936,
    "pageBreakAfter": true
  },
  {
    "text": " его.",
    "startMs": 48610,
    "endMs": 48830,
    "timestampMs": 48720,
    "confidence": 0.998273,
    "pageBreakAfter": true
  },
  {
    "text": " Да,",
    "startMs": 48930,
    "endMs": 49090,
    "timestampMs": 49010,
    "confidence": 0.937032
  },
  {
    "text": " ага.",
    "startMs": 49230,
    "endMs": 49470,
    "timestampMs": 49350,
    "confidence": 0.997589,
    "pageBreakAfter": true
  }
]
} />;
export const Video03 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="03-good-rick" durationInFrames={1496} premountFor={fps}>
      <ScenePicture src={staticFile("media/03-good-rick.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header03 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions03 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header04 = () => <ClipHeader title={"Самый героический\nшаг Морти"} />;
export const Captions04 = () => <DynamicCaptions captions={
[
  {
    "text": " Какой",
    "startMs": 200,
    "endMs": 900,
    "timestampMs": 550,
    "confidence": 0.908454
  },
  {
    "text": " же",
    "startMs": 900,
    "endMs": 1020,
    "timestampMs": 960,
    "confidence": 0.984213
  },
  {
    "text": " он",
    "startMs": 1020,
    "endMs": 1120,
    "timestampMs": 1070,
    "confidence": 0.997168
  },
  {
    "text": " чудак?",
    "startMs": 1120,
    "endMs": 1520,
    "timestampMs": 1320,
    "confidence": 0.985405,
    "pageBreakAfter": true
  },
  {
    "text": " Значит,",
    "startMs": 1700,
    "endMs": 2040,
    "timestampMs": 1870,
    "confidence": 0.983181
  },
  {
    "text": " Рик",
    "startMs": 2220,
    "endMs": 2300,
    "timestampMs": 2260,
    "confidence": 0.962567
  },
  {
    "text": " прав?",
    "startMs": 2300,
    "endMs": 2580,
    "timestampMs": 2440,
    "confidence": 0.997184,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 2760,
    "endMs": 2900,
    "timestampMs": 2830,
    "confidence": 0.989471
  },
  {
    "text": " боишься",
    "startMs": 2900,
    "endMs": 3340,
    "timestampMs": 3120,
    "confidence": 0.999411
  },
  {
    "text": " этого",
    "startMs": 3340,
    "endMs": 3520,
    "timestampMs": 3430,
    "confidence": 0.998447
  },
  {
    "text": " оружия?",
    "startMs": 3520,
    "endMs": 3900,
    "timestampMs": 3710,
    "confidence": 0.9998,
    "pageBreakAfter": true
  },
  {
    "text": " Что",
    "startMs": 4020,
    "endMs": 4300,
    "timestampMs": 4160,
    "confidence": 0.99477
  },
  {
    "text": " будет,",
    "startMs": 4300,
    "endMs": 4620,
    "timestampMs": 4460,
    "confidence": 0.995394
  },
  {
    "text": " когда",
    "startMs": 4740,
    "endMs": 4860,
    "timestampMs": 4800,
    "confidence": 0.999729
  },
  {
    "text": " Рик",
    "startMs": 4860,
    "endMs": 5100,
    "timestampMs": 4980,
    "confidence": 0.999502,
    "pageBreakAfter": true
  },
  {
    "text": " реально",
    "startMs": 5100,
    "endMs": 5400,
    "timestampMs": 5250,
    "confidence": 0.999503
  },
  {
    "text": " убьёт",
    "startMs": 5400,
    "endMs": 5760,
    "timestampMs": 5580,
    "confidence": 0.948522
  },
  {
    "text": " его?",
    "startMs": 5760,
    "endMs": 5980,
    "timestampMs": 5870,
    "confidence": 0.996844,
    "pageBreakAfter": true
  },
  {
    "text": " Об",
    "startMs": 6240,
    "endMs": 6480,
    "timestampMs": 6360,
    "confidence": 0.985581
  },
  {
    "text": " этом",
    "startMs": 6480,
    "endMs": 6680,
    "timestampMs": 6580,
    "confidence": 0.999155
  },
  {
    "text": " не",
    "startMs": 6680,
    "endMs": 6820,
    "timestampMs": 6750,
    "confidence": 0.994542
  },
  {
    "text": " думал?",
    "startMs": 6820,
    "endMs": 7140,
    "timestampMs": 6980,
    "confidence": 0.999692,
    "pageBreakAfter": true
  },
  {
    "text": " Может,",
    "startMs": 7600,
    "endMs": 8040,
    "timestampMs": 7820,
    "confidence": 0.992952
  },
  {
    "text": " потом",
    "startMs": 8200,
    "endMs": 8320,
    "timestampMs": 8260,
    "confidence": 0.999145
  },
  {
    "text": " убьёт",
    "startMs": 8320,
    "endMs": 8640,
    "timestampMs": 8480,
    "confidence": 0.996065
  },
  {
    "text": " себя?",
    "startMs": 8640,
    "endMs": 8880,
    "timestampMs": 8760,
    "confidence": 0.99771,
    "pageBreakAfter": true
  },
  {
    "text": " Ну",
    "startMs": 9100,
    "endMs": 9260,
    "timestampMs": 9180,
    "confidence": 0.971539
  },
  {
    "text": " ты",
    "startMs": 9260,
    "endMs": 9440,
    "timestampMs": 9350,
    "confidence": 0.816778
  },
  {
    "text": " козёл.",
    "startMs": 9440,
    "endMs": 10020,
    "timestampMs": 9730,
    "confidence": 0.936933,
    "pageBreakAfter": true
  },
  {
    "text": " Ну",
    "startMs": 10160,
    "endMs": 10380,
    "timestampMs": 10270,
    "confidence": 0.986788
  },
  {
    "text": " да,",
    "startMs": 10380,
    "endMs": 10580,
    "timestampMs": 10480,
    "confidence": 0.99841
  },
  {
    "text": " я",
    "startMs": 10820,
    "endMs": 11020,
    "timestampMs": 10920,
    "confidence": 0.99892
  },
  {
    "text": " же",
    "startMs": 11020,
    "endMs": 11180,
    "timestampMs": 11100,
    "confidence": 0.99441,
    "pageBreakAfter": true
  },
  {
    "text": " не",
    "startMs": 11180,
    "endMs": 11380,
    "timestampMs": 11280,
    "confidence": 0.998812
  },
  {
    "text": " хороший",
    "startMs": 11380,
    "endMs": 11980,
    "timestampMs": 11680,
    "confidence": 0.518335
  },
  {
    "text": " Морти.",
    "startMs": 11980,
    "endMs": 12480,
    "timestampMs": 12230,
    "confidence": 0.887499,
    "pageBreakAfter": true
  },
  {
    "text": " Идёшь",
    "startMs": 13260,
    "endMs": 13700,
    "timestampMs": 13480,
    "confidence": 0.996177
  },
  {
    "text": " или",
    "startMs": 13700,
    "endMs": 13840,
    "timestampMs": 13770,
    "confidence": 0.999157
  },
  {
    "text": " нет?",
    "startMs": 13840,
    "endMs": 14060,
    "timestampMs": 13950,
    "confidence": 0.999804,
    "pageBreakAfter": true
  },
  {
    "text": " Мне",
    "startMs": 14200,
    "endMs": 14400,
    "timestampMs": 14300,
    "confidence": 0.993141
  },
  {
    "text": " всё",
    "startMs": 14400,
    "endMs": 14560,
    "timestampMs": 14480,
    "confidence": 0.998623
  },
  {
    "text": " равно.",
    "startMs": 14560,
    "endMs": 14800,
    "timestampMs": 14680,
    "confidence": 0.999937,
    "pageBreakAfter": true
  },
  {
    "text": " Ой.",
    "startMs": 19980,
    "endMs": 20420,
    "timestampMs": 20200,
    "confidence": 0.968561,
    "pageBreakAfter": true
  },
  {
    "text": " Бля.",
    "startMs": 21240,
    "endMs": 21680,
    "timestampMs": 21460,
    "confidence": 0.981806,
    "pageBreakAfter": true
  },
  {
    "text": " Если",
    "startMs": 22400,
    "endMs": 22840,
    "timestampMs": 22620,
    "confidence": 0.9971
  },
  {
    "text": " честно,",
    "startMs": 22840,
    "endMs": 23180,
    "timestampMs": 23010,
    "confidence": 0.999877
  },
  {
    "text": " я",
    "startMs": 23220,
    "endMs": 23360,
    "timestampMs": 23290,
    "confidence": 0.999912
  },
  {
    "text": " был",
    "startMs": 23360,
    "endMs": 23520,
    "timestampMs": 23440,
    "confidence": 0.998062,
    "pageBreakAfter": true
  },
  {
    "text": " уверен,",
    "startMs": 23520,
    "endMs": 23820,
    "timestampMs": 23670,
    "confidence": 0.9996
  },
  {
    "text": " что",
    "startMs": 23860,
    "endMs": 23940,
    "timestampMs": 23900,
    "confidence": 0.999938
  },
  {
    "text": " ты",
    "startMs": 23940,
    "endMs": 24040,
    "timestampMs": 23990,
    "confidence": 0.999833
  },
  {
    "text": " пойдёшь.",
    "startMs": 24040,
    "endMs": 24460,
    "timestampMs": 24250,
    "confidence": 0.998172,
    "pageBreakAfter": true
  },
  {
    "text": " Не-не,",
    "startMs": 24560,
    "endMs": 24780,
    "timestampMs": 24670,
    "confidence": 0.978825
  },
  {
    "text": " я",
    "startMs": 24880,
    "endMs": 24960,
    "timestampMs": 24920,
    "confidence": 0.999578
  },
  {
    "text": " собирался.",
    "startMs": 24960,
    "endMs": 25560,
    "timestampMs": 25260,
    "confidence": 0.999342,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 25740,
    "endMs": 25920,
    "timestampMs": 25830,
    "confidence": 0.999015
  },
  {
    "text": " героически",
    "startMs": 25920,
    "endMs": 26640,
    "timestampMs": 26280,
    "confidence": 0.998507
  },
  {
    "text": " шагнул",
    "startMs": 26640,
    "endMs": 27020,
    "timestampMs": 26830,
    "confidence": 0.99768
  },
  {
    "text": " к",
    "startMs": 27020,
    "endMs": 27140,
    "timestampMs": 27080,
    "confidence": 0.999343,
    "pageBreakAfter": true
  },
  {
    "text": " порталу,",
    "startMs": 27140,
    "endMs": 27660,
    "timestampMs": 27400,
    "confidence": 0.991059
  },
  {
    "text": " но",
    "startMs": 27720,
    "endMs": 27880,
    "timestampMs": 27800,
    "confidence": 0.999787
  },
  {
    "text": " он",
    "startMs": 27880,
    "endMs": 28180,
    "timestampMs": 28030,
    "confidence": 0.999443,
    "pageBreakAfter": true
  },
  {
    "text": " закрылся.-да,",
    "startMs": 28180,
    "endMs": 29060,
    "timestampMs": 28620,
    "confidence": 0.999364
  },
  {
    "text": " идём",
    "startMs": 29200,
    "endMs": 29420,
    "timestampMs": 29310,
    "confidence": 0.998157
  },
  {
    "text": " уже.",
    "startMs": 29420,
    "endMs": 29640,
    "timestampMs": 29530,
    "confidence": 0.999697,
    "pageBreakAfter": true
  }
]
} />;
export const Video04 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="04-hero-step" durationInFrames={897} premountFor={fps}>
      <ScenePicture src={staticFile("media/04-hero-step.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header04 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions04 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header05 = () => <ClipHeader title={"Даже Злой Морти\nрешил вмешаться"} series={"Охота на Прайма"} part={1} parts={3} />;
export const Captions05 = () => <DynamicCaptions captions={
[
  {
    "text": " Какого",
    "startMs": 200,
    "endMs": 560,
    "timestampMs": 380,
    "confidence": 0.993448
  },
  {
    "text": " хера",
    "startMs": 560,
    "endMs": 800,
    "timestampMs": 680,
    "confidence": 0.997149
  },
  {
    "text": " ты",
    "startMs": 800,
    "endMs": 920,
    "timestampMs": 860,
    "confidence": 0.999557
  },
  {
    "text": " творишь?",
    "startMs": 920,
    "endMs": 1380,
    "timestampMs": 1150,
    "confidence": 0.999685,
    "pageBreakAfter": true
  },
  {
    "text": " Ебать,",
    "startMs": 1480,
    "endMs": 1840,
    "timestampMs": 1660,
    "confidence": 0.983825
  },
  {
    "text": " Злой",
    "startMs": 1920,
    "endMs": 2100,
    "timestampMs": 2010,
    "confidence": 0.665048
  },
  {
    "text": " Морти!",
    "startMs": 2100,
    "endMs": 2480,
    "timestampMs": 2290,
    "confidence": 0.995066,
    "pageBreakAfter": true
  },
  {
    "text": " Мне",
    "startMs": 2660,
    "endMs": 3020,
    "timestampMs": 2840,
    "confidence": 0.98613
  },
  {
    "text": " сбегать",
    "startMs": 3020,
    "endMs": 3420,
    "timestampMs": 3220,
    "confidence": 0.996738
  },
  {
    "text": " за",
    "startMs": 3420,
    "endMs": 3520,
    "timestampMs": 3470,
    "confidence": 0.999698
  },
  {
    "text": " сетью!",
    "startMs": 3520,
    "endMs": 3900,
    "timestampMs": 3710,
    "confidence": 0.989716,
    "pageBreakAfter": true
  },
  {
    "text": " Да!",
    "startMs": 4080,
    "endMs": 4300,
    "timestampMs": 4190,
    "confidence": 0.988138,
    "pageBreakAfter": true
  },
  {
    "text": " Ща,",
    "startMs": 5220,
    "endMs": 5580,
    "timestampMs": 5400,
    "confidence": 0.546348
  },
  {
    "text": " Морти",
    "startMs": 5700,
    "endMs": 5900,
    "timestampMs": 5800,
    "confidence": 0.996674
  },
  {
    "text": " сбегает",
    "startMs": 5900,
    "endMs": 6220,
    "timestampMs": 6060,
    "confidence": 0.952757
  },
  {
    "text": " за",
    "startMs": 6220,
    "endMs": 6340,
    "timestampMs": 6280,
    "confidence": 0.999902,
    "pageBreakAfter": true
  },
  {
    "text": " сетью.",
    "startMs": 6340,
    "endMs": 6680,
    "timestampMs": 6510,
    "confidence": 0.999635,
    "pageBreakAfter": true
  },
  {
    "text": " Погоди,",
    "startMs": 6860,
    "endMs": 7220,
    "timestampMs": 7040,
    "confidence": 0.996597
  },
  {
    "text": " это",
    "startMs": 7300,
    "endMs": 7380,
    "timestampMs": 7340,
    "confidence": 0.998777
  },
  {
    "text": " то,",
    "startMs": 7380,
    "endMs": 7520,
    "timestampMs": 7450,
    "confidence": 0.999364
  },
  {
    "text": " о",
    "startMs": 7520,
    "endMs": 7680,
    "timestampMs": 7600,
    "confidence": 0.997328,
    "pageBreakAfter": true
  },
  {
    "text": " чём",
    "startMs": 7680,
    "endMs": 7720,
    "timestampMs": 7700,
    "confidence": 0.960392
  },
  {
    "text": " я",
    "startMs": 7720,
    "endMs": 7840,
    "timestampMs": 7780,
    "confidence": 0.999853
  },
  {
    "text": " подумал?",
    "startMs": 7840,
    "endMs": 8300,
    "timestampMs": 8070,
    "confidence": 0.999205,
    "pageBreakAfter": true
  },
  {
    "text": " Само",
    "startMs": 8760,
    "endMs": 9120,
    "timestampMs": 8940,
    "confidence": 0.994742
  },
  {
    "text": " собой,",
    "startMs": 9120,
    "endMs": 9400,
    "timestampMs": 9260,
    "confidence": 0.999505
  },
  {
    "text": " мысли",
    "startMs": 9500,
    "endMs": 9860,
    "timestampMs": 9680,
    "confidence": 0.998416
  },
  {
    "text": " меня",
    "startMs": 9860,
    "endMs": 9980,
    "timestampMs": 9920,
    "confidence": 0.491459,
    "pageBreakAfter": true
  },
  {
    "text": " не",
    "startMs": 9980,
    "endMs": 10100,
    "timestampMs": 10040,
    "confidence": 0.999569
  },
  {
    "text": " подводят.",
    "startMs": 10100,
    "endMs": 10520,
    "timestampMs": 10310,
    "confidence": 0.99949,
    "pageBreakAfter": true
  },
  {
    "text": " По",
    "startMs": 10680,
    "endMs": 10960,
    "timestampMs": 10820,
    "confidence": 0.998842
  },
  {
    "text": " сути,",
    "startMs": 10960,
    "endMs": 11180,
    "timestampMs": 11070,
    "confidence": 0.999677
  },
  {
    "text": " ты",
    "startMs": 11260,
    "endMs": 11320,
    "timestampMs": 11290,
    "confidence": 0.999816
  },
  {
    "text": " делаешь",
    "startMs": 11320,
    "endMs": 11640,
    "timestampMs": 11480,
    "confidence": 0.999686,
    "pageBreakAfter": true
  },
  {
    "text": " гидроразрыв",
    "startMs": 11640,
    "endMs": 12300,
    "timestampMs": 11970,
    "confidence": 0.979875
  },
  {
    "text": " центральной",
    "startMs": 12300,
    "endMs": 12740,
    "timestampMs": 12520,
    "confidence": 0.958451,
    "pageBreakAfter": true
  },
  {
    "text": " конечной",
    "startMs": 12740,
    "endMs": 13120,
    "timestampMs": 12930,
    "confidence": 0.993614
  },
  {
    "text": " кривой,",
    "startMs": 13120,
    "endMs": 13400,
    "timestampMs": 13260,
    "confidence": 0.995691
  },
  {
    "text": " чтобы",
    "startMs": 13460,
    "endMs": 13580,
    "timestampMs": 13520,
    "confidence": 0.761614,
    "pageBreakAfter": true
  },
  {
    "text": " выловить",
    "startMs": 13580,
    "endMs": 13940,
    "timestampMs": 13760,
    "confidence": 0.999057
  },
  {
    "text": " версию",
    "startMs": 13940,
    "endMs": 14280,
    "timestampMs": 14110,
    "confidence": 0.998856
  },
  {
    "text": " себя.",
    "startMs": 14280,
    "endMs": 14540,
    "timestampMs": 14410,
    "confidence": 0.993918,
    "pageBreakAfter": true
  },
  {
    "text": " Лучше",
    "startMs": 14780,
    "endMs": 15120,
    "timestampMs": 14950,
    "confidence": 0.99889
  },
  {
    "text": " б",
    "startMs": 15120,
    "endMs": 15200,
    "timestampMs": 15160,
    "confidence": 0.91156
  },
  {
    "text": " ты",
    "startMs": 15200,
    "endMs": 15320,
    "timestampMs": 15260,
    "confidence": 0.999055
  },
  {
    "text": " и",
    "startMs": 15320,
    "endMs": 15460,
    "timestampMs": 15390,
    "confidence": 0.533498,
    "pageBreakAfter": true
  },
  {
    "text": " дальше",
    "startMs": 15460,
    "endMs": 15680,
    "timestampMs": 15570,
    "confidence": 0.999603
  },
  {
    "text": " в",
    "startMs": 15680,
    "endMs": 15840,
    "timestampMs": 15760,
    "confidence": 0.999519
  },
  {
    "text": " огурчик",
    "startMs": 15840,
    "endMs": 16180,
    "timestampMs": 16010,
    "confidence": 0.994984,
    "pageBreakAfter": true
  },
  {
    "text": " превращался.",
    "startMs": 16180,
    "endMs": 16800,
    "timestampMs": 16490,
    "confidence": 0.999745,
    "pageBreakAfter": true
  },
  {
    "text": " Тебе-то",
    "startMs": 17080,
    "endMs": 17460,
    "timestampMs": 17270,
    "confidence": 0.987875
  },
  {
    "text": " какая",
    "startMs": 17460,
    "endMs": 17620,
    "timestampMs": 17540,
    "confidence": 0.985831
  },
  {
    "text": " разница,",
    "startMs": 17620,
    "endMs": 17960,
    "timestampMs": 17790,
    "confidence": 0.999612,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 18020,
    "endMs": 18120,
    "timestampMs": 18070,
    "confidence": 0.999814
  },
  {
    "text": " я",
    "startMs": 18120,
    "endMs": 18220,
    "timestampMs": 18170,
    "confidence": 0.999863
  },
  {
    "text": " делаю",
    "startMs": 18220,
    "endMs": 18440,
    "timestampMs": 18330,
    "confidence": 0.999718
  },
  {
    "text": " с",
    "startMs": 18440,
    "endMs": 18540,
    "timestampMs": 18490,
    "confidence": 0.999165,
    "pageBreakAfter": true
  },
  {
    "text": " кривой?",
    "startMs": 18540,
    "endMs": 18820,
    "timestampMs": 18680,
    "confidence": 0.999214,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 18880,
    "endMs": 18960,
    "timestampMs": 18920,
    "confidence": 0.998761
  },
  {
    "text": " думал,",
    "startMs": 18960,
    "endMs": 19180,
    "timestampMs": 19070,
    "confidence": 0.999272
  },
  {
    "text": " твоя",
    "startMs": 19240,
    "endMs": 19380,
    "timestampMs": 19310,
    "confidence": 0.991231
  },
  {
    "text": " главная",
    "startMs": 19380,
    "endMs": 19660,
    "timestampMs": 19520,
    "confidence": 0.999762,
    "pageBreakAfter": true
  },
  {
    "text": " цель",
    "startMs": 19660,
    "endMs": 19840,
    "timestampMs": 19750,
    "confidence": 0.999129
  },
  {
    "text": " —",
    "startMs": 19840,
    "endMs": 19900,
    "timestampMs": 19870,
    "confidence": 0.563226
  },
  {
    "text": " это",
    "startMs": 19900,
    "endMs": 19940,
    "timestampMs": 19920,
    "confidence": 0.999145
  },
  {
    "text": " съебаться.",
    "startMs": 19940,
    "endMs": 20400,
    "timestampMs": 20170,
    "confidence": 0.989838,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 20520,
    "endMs": 20600,
    "timestampMs": 20560,
    "confidence": 0.998012
  },
  {
    "text": " прям",
    "startMs": 20600,
    "endMs": 20760,
    "timestampMs": 20680,
    "confidence": 0.983548
  },
  {
    "text": " даже",
    "startMs": 20760,
    "endMs": 21000,
    "timestampMs": 20880,
    "confidence": 0.999431
  },
  {
    "text": " зафанател.",
    "startMs": 21000,
    "endMs": 21680,
    "timestampMs": 21340,
    "confidence": 0.994828,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 21840,
    "endMs": 22020,
    "timestampMs": 21930,
    "confidence": 0.998788
  },
  {
    "text": " прав,",
    "startMs": 22020,
    "endMs": 22240,
    "timestampMs": 22130,
    "confidence": 0.999653
  },
  {
    "text": " я",
    "startMs": 22360,
    "endMs": 22480,
    "timestampMs": 22420,
    "confidence": 0.999864
  },
  {
    "text": " здесь",
    "startMs": 22480,
    "endMs": 22640,
    "timestampMs": 22560,
    "confidence": 0.999762,
    "pageBreakAfter": true
  },
  {
    "text": " не",
    "startMs": 22640,
    "endMs": 22820,
    "timestampMs": 22730,
    "confidence": 0.999941
  },
  {
    "text": " живу.",
    "startMs": 22820,
    "endMs": 23120,
    "timestampMs": 22970,
    "confidence": 0.999767,
    "pageBreakAfter": true
  },
  {
    "text": " Тем",
    "startMs": 23260,
    "endMs": 23380,
    "timestampMs": 23320,
    "confidence": 0.988539
  },
  {
    "text": " безумнее",
    "startMs": 23380,
    "endMs": 23800,
    "timestampMs": 23590,
    "confidence": 0.994293
  },
  {
    "text": " тот",
    "startMs": 23800,
    "endMs": 23940,
    "timestampMs": 23870,
    "confidence": 0.997776
  },
  {
    "text": " факт,",
    "startMs": 23940,
    "endMs": 24180,
    "timestampMs": 24060,
    "confidence": 0.999598,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 24200,
    "endMs": 24280,
    "timestampMs": 24240,
    "confidence": 0.998775
  },
  {
    "text": " ты",
    "startMs": 24280,
    "endMs": 24380,
    "timestampMs": 24330,
    "confidence": 0.99976
  },
  {
    "text": " умудряешься",
    "startMs": 24380,
    "endMs": 24840,
    "timestampMs": 24610,
    "confidence": 0.999341
  },
  {
    "text": " меня",
    "startMs": 24840,
    "endMs": 24940,
    "timestampMs": 24890,
    "confidence": 0.999107,
    "pageBreakAfter": true
  },
  {
    "text": " беспокоить.",
    "startMs": 24940,
    "endMs": 25500,
    "timestampMs": 25220,
    "confidence": 0.999269,
    "pageBreakAfter": true
  },
  {
    "text": " Неужели",
    "startMs": 25500,
    "endMs": 26140,
    "timestampMs": 25820,
    "confidence": 0.942308
  },
  {
    "text": " у",
    "startMs": 26140,
    "endMs": 26260,
    "timestampMs": 26200,
    "confidence": 0.962148
  },
  {
    "text": " ударных",
    "startMs": 26260,
    "endMs": 26580,
    "timestampMs": 26420,
    "confidence": 0.988865
  },
  {
    "text": " волн",
    "startMs": 26580,
    "endMs": 26800,
    "timestampMs": 26690,
    "confidence": 0.998485,
    "pageBreakAfter": true
  },
  {
    "text": " такая",
    "startMs": 26800,
    "endMs": 27020,
    "timestampMs": 26910,
    "confidence": 0.969571
  },
  {
    "text": " дальность?",
    "startMs": 27020,
    "endMs": 27540,
    "timestampMs": 27280,
    "confidence": 0.993963,
    "pageBreakAfter": true
  },
  {
    "text": " Боже,",
    "startMs": 27680,
    "endMs": 27860,
    "timestampMs": 27770,
    "confidence": 0.942316
  },
  {
    "text": " это",
    "startMs": 27900,
    "endMs": 28000,
    "timestampMs": 27950,
    "confidence": 0.858603
  },
  {
    "text": " был",
    "startMs": 28000,
    "endMs": 28160,
    "timestampMs": 28080,
    "confidence": 0.967794
  },
  {
    "text": " не",
    "startMs": 28160,
    "endMs": 28260,
    "timestampMs": 28210,
    "confidence": 0.99304,
    "pageBreakAfter": true
  },
  {
    "text": " комплимент.",
    "startMs": 28260,
    "endMs": 28780,
    "timestampMs": 28520,
    "confidence": 0.998793,
    "pageBreakAfter": true
  },
  {
    "text": " У",
    "startMs": 28960,
    "endMs": 29120,
    "timestampMs": 29040,
    "confidence": 0.996795
  },
  {
    "text": " мартышки",
    "startMs": 29120,
    "endMs": 29500,
    "timestampMs": 29310,
    "confidence": 0.955606
  },
  {
    "text": " трахающей",
    "startMs": 29500,
    "endMs": 29920,
    "timestampMs": 29710,
    "confidence": 0.91027,
    "pageBreakAfter": true
  },
  {
    "text": " дробовик",
    "startMs": 29920,
    "endMs": 30260,
    "timestampMs": 30090,
    "confidence": 0.998949
  },
  {
    "text": " тоже",
    "startMs": 30260,
    "endMs": 30460,
    "timestampMs": 30360,
    "confidence": 0.92779
  },
  {
    "text": " большая",
    "startMs": 30460,
    "endMs": 30840,
    "timestampMs": 30650,
    "confidence": 0.998684,
    "pageBreakAfter": true
  },
  {
    "text": " дальность.",
    "startMs": 30840,
    "endMs": 31240,
    "timestampMs": 31040,
    "confidence": 0.990482,
    "pageBreakAfter": true
  },
  {
    "text": " И",
    "startMs": 31360,
    "endMs": 31500,
    "timestampMs": 31430,
    "confidence": 0.98791
  },
  {
    "text": " что",
    "startMs": 31500,
    "endMs": 31660,
    "timestampMs": 31580,
    "confidence": 0.999767
  },
  {
    "text": " это",
    "startMs": 31660,
    "endMs": 31780,
    "timestampMs": 31720,
    "confidence": 0.999445
  },
  {
    "text": " за",
    "startMs": 31780,
    "endMs": 31920,
    "timestampMs": 31850,
    "confidence": 0.999904,
    "pageBreakAfter": true
  },
  {
    "text": " матрица",
    "startMs": 31920,
    "endMs": 32240,
    "timestampMs": 32080,
    "confidence": 0.997337
  },
  {
    "text": " сканирования?",
    "startMs": 32240,
    "endMs": 32820,
    "timestampMs": 32530,
    "confidence": 0.997267,
    "pageBreakAfter": true
  },
  {
    "text": " Не",
    "startMs": 32880,
    "endMs": 32980,
    "timestampMs": 32930,
    "confidence": 0.947336
  },
  {
    "text": " трожь!",
    "startMs": 32980,
    "endMs": 33200,
    "timestampMs": 33090,
    "confidence": 0.896176,
    "pageBreakAfter": true
  },
  {
    "text": " Зачем",
    "startMs": 33220,
    "endMs": 33500,
    "timestampMs": 33360,
    "confidence": 0.997407
  },
  {
    "text": " её",
    "startMs": 33500,
    "endMs": 33620,
    "timestampMs": 33560,
    "confidence": 0.962341
  },
  {
    "text": " трогать,",
    "startMs": 33620,
    "endMs": 33960,
    "timestampMs": 33790,
    "confidence": 0.999874
  },
  {
    "text": " если",
    "startMs": 34020,
    "endMs": 34100,
    "timestampMs": 34060,
    "confidence": 0.999928,
    "pageBreakAfter": true
  },
  {
    "text": " я",
    "startMs": 34100,
    "endMs": 34200,
    "timestampMs": 34150,
    "confidence": 0.999483
  },
  {
    "text": " не",
    "startMs": 34200,
    "endMs": 34280,
    "timestampMs": 34240,
    "confidence": 0.999873
  },
  {
    "text": " хочу",
    "startMs": 34280,
    "endMs": 34480,
    "timestampMs": 34380,
    "confidence": 0.999914
  },
  {
    "text": " делать",
    "startMs": 34480,
    "endMs": 34660,
    "timestampMs": 34570,
    "confidence": 0.999207,
    "pageBreakAfter": true
  },
  {
    "text": " её",
    "startMs": 34660,
    "endMs": 34860,
    "timestampMs": 34760,
    "confidence": 0.999334
  },
  {
    "text": " лучше?",
    "startMs": 34860,
    "endMs": 35140,
    "timestampMs": 35000,
    "confidence": 0.999888,
    "pageBreakAfter": true
  },
  {
    "text": " Лучше?",
    "startMs": 35520,
    "endMs": 35920,
    "timestampMs": 35720,
    "confidence": 0.994893,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 36020,
    "endMs": 36180,
    "timestampMs": 36100,
    "confidence": 0.995892
  },
  {
    "text": " бьёшь",
    "startMs": 36180,
    "endMs": 36460,
    "timestampMs": 36320,
    "confidence": 0.995386
  },
  {
    "text": " по",
    "startMs": 36460,
    "endMs": 36580,
    "timestampMs": 36520,
    "confidence": 0.999588
  },
  {
    "text": " бесконечным",
    "startMs": 36580,
    "endMs": 37060,
    "timestampMs": 36820,
    "confidence": 0.99967,
    "pageBreakAfter": true
  },
  {
    "text": " мишеням.",
    "startMs": 37060,
    "endMs": 37460,
    "timestampMs": 37260,
    "confidence": 0.997019,
    "pageBreakAfter": true
  },
  {
    "text": " Хотя",
    "startMs": 37540,
    "endMs": 37660,
    "timestampMs": 37600,
    "confidence": 0.994494
  },
  {
    "text": " бы",
    "startMs": 37660,
    "endMs": 37780,
    "timestampMs": 37720,
    "confidence": 0.999928
  },
  {
    "text": " сделай",
    "startMs": 37780,
    "endMs": 38060,
    "timestampMs": 37920,
    "confidence": 0.999648
  },
  {
    "text": " фильтр",
    "startMs": 38060,
    "endMs": 38380,
    "timestampMs": 38220,
    "confidence": 0.991872,
    "pageBreakAfter": true
  },
  {
    "text": " для",
    "startMs": 38380,
    "endMs": 38500,
    "timestampMs": 38440,
    "confidence": 0.999543
  },
  {
    "text": " статистических",
    "startMs": 38500,
    "endMs": 38960,
    "timestampMs": 38730,
    "confidence": 0.999588,
    "pageBreakAfter": true
  },
  {
    "text": " вероятностей.",
    "startMs": 38960,
    "endMs": 39660,
    "timestampMs": 39310,
    "confidence": 0.994193,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 39940,
    "endMs": 40160,
    "timestampMs": 40050,
    "confidence": 0.999608
  },
  {
    "text": " и",
    "startMs": 40160,
    "endMs": 40280,
    "timestampMs": 40220,
    "confidence": 0.998632
  },
  {
    "text": " собирался,",
    "startMs": 40280,
    "endMs": 40780,
    "timestampMs": 40530,
    "confidence": 0.999746,
    "pageBreakAfter": true
  },
  {
    "text": " вообще-то.",
    "startMs": 40820,
    "endMs": 41340,
    "timestampMs": 41080,
    "confidence": 0.999261,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 42240,
    "endMs": 42640,
    "timestampMs": 42440,
    "confidence": 0.810063
  },
  {
    "text": " не",
    "startMs": 42640,
    "endMs": 42760,
    "timestampMs": 42700,
    "confidence": 0.999465
  },
  {
    "text": " нашёл",
    "startMs": 42760,
    "endMs": 43040,
    "timestampMs": 42900,
    "confidence": 0.997585
  },
  {
    "text": " сеть!",
    "startMs": 43040,
    "endMs": 43280,
    "timestampMs": 43160,
    "confidence": 0.973633,
    "pageBreakAfter": true
  },
  {
    "text": " Может,",
    "startMs": 43440,
    "endMs": 43780,
    "timestampMs": 43610,
    "confidence": 0.998014
  },
  {
    "text": " пристрелим",
    "startMs": 43880,
    "endMs": 44320,
    "timestampMs": 44100,
    "confidence": 0.999128
  },
  {
    "text": " его?",
    "startMs": 44320,
    "endMs": 44500,
    "timestampMs": 44410,
    "confidence": 0.999704,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 44640,
    "endMs": 44840,
    "timestampMs": 44740,
    "confidence": 0.998714
  },
  {
    "text": " правда",
    "startMs": 44840,
    "endMs": 45060,
    "timestampMs": 44950,
    "confidence": 0.99649
  },
  {
    "text": " думаешь,",
    "startMs": 45060,
    "endMs": 45380,
    "timestampMs": 45220,
    "confidence": 0.999098
  },
  {
    "text": " что",
    "startMs": 45420,
    "endMs": 45480,
    "timestampMs": 45450,
    "confidence": 0.999826,
    "pageBreakAfter": true
  },
  {
    "text": " этот",
    "startMs": 45480,
    "endMs": 45600,
    "timestampMs": 45540,
    "confidence": 0.99311
  },
  {
    "text": " ехидный",
    "startMs": 45600,
    "endMs": 46000,
    "timestampMs": 45800,
    "confidence": 0.994774
  },
  {
    "text": " говнюк",
    "startMs": 46000,
    "endMs": 46340,
    "timestampMs": 46170,
    "confidence": 0.996105,
    "pageBreakAfter": true
  },
  {
    "text": " пришёл",
    "startMs": 46340,
    "endMs": 46600,
    "timestampMs": 46470,
    "confidence": 0.997706
  },
  {
    "text": " без",
    "startMs": 46600,
    "endMs": 46740,
    "timestampMs": 46670,
    "confidence": 0.995801
  },
  {
    "text": " защитного",
    "startMs": 46740,
    "endMs": 47180,
    "timestampMs": 46960,
    "confidence": 0.994365,
    "pageBreakAfter": true
  },
  {
    "text": " поля?",
    "startMs": 47180,
    "endMs": 47480,
    "timestampMs": 47330,
    "confidence": 0.999538,
    "pageBreakAfter": true
  },
  {
    "text": " Да,",
    "startMs": 47580,
    "endMs": 47760,
    "timestampMs": 47670,
    "confidence": 0.999456
  },
  {
    "text": " послушай",
    "startMs": 47860,
    "endMs": 48240,
    "timestampMs": 48050,
    "confidence": 0.993375
  },
  {
    "text": " дедулю,",
    "startMs": 48240,
    "endMs": 48620,
    "timestampMs": 48430,
    "confidence": 0.967919,
    "pageBreakAfter": true
  },
  {
    "text": " Морти.",
    "startMs": 48740,
    "endMs": 48980,
    "timestampMs": 48860,
    "confidence": 0.890556,
    "pageBreakAfter": true
  },
  {
    "text": " Ах,",
    "startMs": 50020,
    "endMs": 50420,
    "timestampMs": 50220,
    "confidence": 0.805349
  },
  {
    "text": " было",
    "startMs": 50480,
    "endMs": 50700,
    "timestampMs": 50590,
    "confidence": 0.9994
  },
  {
    "text": " бы",
    "startMs": 50700,
    "endMs": 50800,
    "timestampMs": 50750,
    "confidence": 0.999966
  },
  {
    "text": " глупо",
    "startMs": 50800,
    "endMs": 51140,
    "timestampMs": 50970,
    "confidence": 0.999646,
    "pageBreakAfter": true
  },
  {
    "text": " не",
    "startMs": 51140,
    "endMs": 51220,
    "timestampMs": 51180,
    "confidence": 0.997919
  },
  {
    "text": " проверить.",
    "startMs": 51220,
    "endMs": 51700,
    "timestampMs": 51460,
    "confidence": 0.99978,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 53820,
    "endMs": 54220,
    "timestampMs": 54020,
    "confidence": 0.984408
  },
  {
    "text": " не",
    "startMs": 54220,
    "endMs": 54340,
    "timestampMs": 54280,
    "confidence": 0.999976
  },
  {
    "text": " пойду,",
    "startMs": 54340,
    "endMs": 54600,
    "timestampMs": 54470,
    "confidence": 0.999726
  },
  {
    "text": " просто",
    "startMs": 54680,
    "endMs": 54900,
    "timestampMs": 54790,
    "confidence": 0.999451,
    "pageBreakAfter": true
  },
  {
    "text": " так",
    "startMs": 54900,
    "endMs": 55120,
    "timestampMs": 55010,
    "confidence": 0.998209
  },
  {
    "text": " на",
    "startMs": 55120,
    "endMs": 55240,
    "timestampMs": 55180,
    "confidence": 0.700288
  },
  {
    "text": " попятную.",
    "startMs": 55240,
    "endMs": 55700,
    "timestampMs": 55470,
    "confidence": 0.992909,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 56600,
    "endMs": 57200,
    "timestampMs": 56900,
    "confidence": 0.954112
  },
  {
    "text": " что-то",
    "startMs": 57200,
    "endMs": 57700,
    "timestampMs": 57450,
    "confidence": 0.665378
  },
  {
    "text": " поменял?",
    "startMs": 57700,
    "endMs": 58100,
    "timestampMs": 57900,
    "confidence": 0.999379,
    "pageBreakAfter": true
  },
  {
    "text": " Он",
    "startMs": 58360,
    "endMs": 58580,
    "timestampMs": 58470,
    "confidence": 0.924728
  },
  {
    "text": " ставит",
    "startMs": 58580,
    "endMs": 58880,
    "timestampMs": 58730,
    "confidence": 0.98761
  },
  {
    "text": " фильтр",
    "startMs": 58880,
    "endMs": 59180,
    "timestampMs": 59030,
    "confidence": 0.999419
  },
  {
    "text": " для",
    "startMs": 59180,
    "endMs": 59360,
    "timestampMs": 59270,
    "confidence": 0.994475,
    "pageBreakAfter": true
  },
  {
    "text": " статистических",
    "startMs": 59360,
    "endMs": 60040,
    "timestampMs": 59700,
    "confidence": 0.999254,
    "pageBreakAfter": true
  },
  {
    "text": " вероятностей",
    "startMs": 60040,
    "endMs": 60760,
    "timestampMs": 60400,
    "confidence": 0.972338
  },
  {
    "text": " Ты",
    "startMs": 60760,
    "endMs": 61420,
    "timestampMs": 61090,
    "confidence": 0.054471
  },
  {
    "text": " всё",
    "startMs": 61420,
    "endMs": 61620,
    "timestampMs": 61520,
    "confidence": 0.920317
  },
  {
    "text": " ещё",
    "startMs": 61620,
    "endMs": 61840,
    "timestampMs": 61730,
    "confidence": 0.997617,
    "pageBreakAfter": true
  },
  {
    "text": " здесь?",
    "startMs": 61840,
    "endMs": 62120,
    "timestampMs": 61980,
    "confidence": 0.999668,
    "pageBreakAfter": true
  }
]
} />;
export const Video05 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="05-hunt-1" durationInFrames={1872} premountFor={fps}>
      <ScenePicture src={staticFile("media/05-hunt-1.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header05 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions05 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header06 = () => <ClipHeader title={"Он стёр её\nиз ВСЕХ вселенных"} series={"Охота на Прайма"} part={2} parts={3} />;
export const Captions06 = () => <DynamicCaptions captions={
[
  {
    "text": " Похоже,",
    "startMs": 540,
    "endMs": 980,
    "timestampMs": 760,
    "confidence": 0.863994
  },
  {
    "text": " вас",
    "startMs": 1040,
    "endMs": 1180,
    "timestampMs": 1110,
    "confidence": 0.866117
  },
  {
    "text": " набралось",
    "startMs": 1180,
    "endMs": 1680,
    "timestampMs": 1430,
    "confidence": 0.998375,
    "pageBreakAfter": true
  },
  {
    "text": " для",
    "startMs": 1680,
    "endMs": 1840,
    "timestampMs": 1760,
    "confidence": 0.996753
  },
  {
    "text": " нового",
    "startMs": 1840,
    "endMs": 2280,
    "timestampMs": 2060,
    "confidence": 0.999458,
    "pageBreakAfter": true
  },
  {
    "text": " представления.",
    "startMs": 2280,
    "endMs": 3020,
    "timestampMs": 2650,
    "confidence": 0.998136,
    "pageBreakAfter": true
  },
  {
    "text": " Ну",
    "startMs": 3240,
    "endMs": 3440,
    "timestampMs": 3340,
    "confidence": 0.996683
  },
  {
    "text": " или",
    "startMs": 3440,
    "endMs": 3560,
    "timestampMs": 3500,
    "confidence": 0.643842
  },
  {
    "text": " здесь",
    "startMs": 3560,
    "endMs": 3700,
    "timestampMs": 3630,
    "confidence": 0.997443
  },
  {
    "text": " оказался",
    "startMs": 3700,
    "endMs": 4120,
    "timestampMs": 3910,
    "confidence": 0.999425,
    "pageBreakAfter": true
  },
  {
    "text": " один",
    "startMs": 4120,
    "endMs": 4340,
    "timestampMs": 4230,
    "confidence": 0.99878
  },
  {
    "text": " тяжелый",
    "startMs": 4340,
    "endMs": 4800,
    "timestampMs": 4570,
    "confidence": 0.849052
  },
  {
    "text": " Рик.",
    "startMs": 4800,
    "endMs": 4960,
    "timestampMs": 4880,
    "confidence": 0.702238,
    "pageBreakAfter": true
  },
  {
    "text": " Тут",
    "startMs": 5220,
    "endMs": 5420,
    "timestampMs": 5320,
    "confidence": 0.995918
  },
  {
    "text": " все",
    "startMs": 5420,
    "endMs": 5620,
    "timestampMs": 5520,
    "confidence": 0.871947
  },
  {
    "text": " автоматическое,",
    "startMs": 5620,
    "endMs": 6340,
    "timestampMs": 5980,
    "confidence": 0.995063,
    "pageBreakAfter": true
  },
  {
    "text": " и",
    "startMs": 6440,
    "endMs": 6520,
    "timestampMs": 6480,
    "confidence": 0.988772
  },
  {
    "text": " я",
    "startMs": 6520,
    "endMs": 6620,
    "timestampMs": 6570,
    "confidence": 0.999817
  },
  {
    "text": " упомянул",
    "startMs": 6620,
    "endMs": 6980,
    "timestampMs": 6800,
    "confidence": 0.995999
  },
  {
    "text": " это",
    "startMs": 6980,
    "endMs": 7100,
    "timestampMs": 7040,
    "confidence": 0.998486,
    "pageBreakAfter": true
  },
  {
    "text": " специально,",
    "startMs": 7100,
    "endMs": 7580,
    "timestampMs": 7340,
    "confidence": 0.999862
  },
  {
    "text": " чтобы",
    "startMs": 7640,
    "endMs": 7800,
    "timestampMs": 7720,
    "confidence": 0.998862
  },
  {
    "text": " стало",
    "startMs": 7800,
    "endMs": 8020,
    "timestampMs": 7910,
    "confidence": 0.999253,
    "pageBreakAfter": true
  },
  {
    "text": " еще",
    "startMs": 8020,
    "endMs": 8320,
    "timestampMs": 8170,
    "confidence": 0.985578
  },
  {
    "text": " унизительнее.",
    "startMs": 8320,
    "endMs": 9200,
    "timestampMs": 8760,
    "confidence": 0.998398,
    "pageBreakAfter": true
  },
  {
    "text": " Полный",
    "startMs": 9480,
    "endMs": 9860,
    "timestampMs": 9670,
    "confidence": 0.992886
  },
  {
    "text": " вперед!",
    "startMs": 9860,
    "endMs": 10420,
    "timestampMs": 10140,
    "confidence": 0.992574,
    "pageBreakAfter": true
  },
  {
    "text": " Если",
    "startMs": 10820,
    "endMs": 11260,
    "timestampMs": 11040,
    "confidence": 0.997999
  },
  {
    "text": " вы",
    "startMs": 11260,
    "endMs": 11420,
    "timestampMs": 11340,
    "confidence": 0.999434
  },
  {
    "text": " это",
    "startMs": 11420,
    "endMs": 11540,
    "timestampMs": 11480,
    "confidence": 0.999257
  },
  {
    "text": " видите,",
    "startMs": 11540,
    "endMs": 11780,
    "timestampMs": 11660,
    "confidence": 0.999744,
    "pageBreakAfter": true
  },
  {
    "text": " то",
    "startMs": 11940,
    "endMs": 12020,
    "timestampMs": 11980,
    "confidence": 0.999945
  },
  {
    "text": " вы",
    "startMs": 12020,
    "endMs": 12320,
    "timestampMs": 12170,
    "confidence": 0.999043
  },
  {
    "text": " —",
    "startMs": 12320,
    "endMs": 12540,
    "timestampMs": 12430,
    "confidence": 0.628798
  },
  {
    "text": " это",
    "startMs": 12540,
    "endMs": 12620,
    "timestampMs": 12580,
    "confidence": 0.999868,
    "pageBreakAfter": true
  },
  {
    "text": " я.",
    "startMs": 12620,
    "endMs": 12820,
    "timestampMs": 12720,
    "confidence": 0.99978,
    "pageBreakAfter": true
  },
  {
    "text": " Только,",
    "startMs": 12980,
    "endMs": 13220,
    "timestampMs": 13100,
    "confidence": 0.997116
  },
  {
    "text": " ну,",
    "startMs": 13460,
    "endMs": 13580,
    "timestampMs": 13520,
    "confidence": 0.999943
  },
  {
    "text": " хуже.",
    "startMs": 13820,
    "endMs": 14140,
    "timestampMs": 13980,
    "confidence": 0.998967,
    "pageBreakAfter": true
  },
  {
    "text": " Но",
    "startMs": 14340,
    "endMs": 14560,
    "timestampMs": 14450,
    "confidence": 0.998522
  },
  {
    "text": " вы",
    "startMs": 14560,
    "endMs": 14800,
    "timestampMs": 14680,
    "confidence": 0.99901
  },
  {
    "text": " возомнили",
    "startMs": 14800,
    "endMs": 15220,
    "timestampMs": 15010,
    "confidence": 0.989966
  },
  {
    "text": " себя",
    "startMs": 15220,
    "endMs": 15420,
    "timestampMs": 15320,
    "confidence": 0.997686,
    "pageBreakAfter": true
  },
  {
    "text": " лучшей",
    "startMs": 15420,
    "endMs": 15820,
    "timestampMs": 15620,
    "confidence": 0.99771
  },
  {
    "text": " версией,",
    "startMs": 15820,
    "endMs": 16160,
    "timestampMs": 15990,
    "confidence": 0.998899
  },
  {
    "text": " поэтому",
    "startMs": 16220,
    "endMs": 16460,
    "timestampMs": 16340,
    "confidence": 0.978223,
    "pageBreakAfter": true
  },
  {
    "text": " я",
    "startMs": 16460,
    "endMs": 16660,
    "timestampMs": 16560,
    "confidence": 0.999874
  },
  {
    "text": " убил",
    "startMs": 16660,
    "endMs": 16980,
    "timestampMs": 16820,
    "confidence": 0.999209
  },
  {
    "text": " вашу",
    "startMs": 16980,
    "endMs": 17260,
    "timestampMs": 17120,
    "confidence": 0.996615
  },
  {
    "text": " любимую",
    "startMs": 17260,
    "endMs": 17620,
    "timestampMs": 17440,
    "confidence": 0.999736,
    "pageBreakAfter": true
  },
  {
    "text": " Дайен.",
    "startMs": 17620,
    "endMs": 18080,
    "timestampMs": 17850,
    "confidence": 0.632673,
    "pageBreakAfter": true
  },
  {
    "text": " Отчасти,",
    "startMs": 18180,
    "endMs": 18600,
    "timestampMs": 18390,
    "confidence": 0.998817
  },
  {
    "text": " чтобы",
    "startMs": 18600,
    "endMs": 18780,
    "timestampMs": 18690,
    "confidence": 0.999696
  },
  {
    "text": " потравить",
    "startMs": 18780,
    "endMs": 19200,
    "timestampMs": 18990,
    "confidence": 0.958984,
    "pageBreakAfter": true
  },
  {
    "text": " вам",
    "startMs": 19200,
    "endMs": 19320,
    "timestampMs": 19260,
    "confidence": 0.99944
  },
  {
    "text": " душу,",
    "startMs": 19320,
    "endMs": 19680,
    "timestampMs": 19500,
    "confidence": 0.992334
  },
  {
    "text": " но",
    "startMs": 19700,
    "endMs": 19760,
    "timestampMs": 19730,
    "confidence": 0.993408
  },
  {
    "text": " в",
    "startMs": 19760,
    "endMs": 19840,
    "timestampMs": 19800,
    "confidence": 0.970641,
    "pageBreakAfter": true
  },
  {
    "text": " основном...",
    "startMs": 19840,
    "endMs": 19980,
    "timestampMs": 19910,
    "confidence": 0.949308,
    "pageBreakAfter": true
  },
  {
    "text": " чтобы",
    "startMs": 20000,
    "endMs": 20200,
    "timestampMs": 20100,
    "confidence": 0.382517
  },
  {
    "text": " записать",
    "startMs": 20200,
    "endMs": 20540,
    "timestampMs": 20370,
    "confidence": 0.947454
  },
  {
    "text": " всего",
    "startMs": 20540,
    "endMs": 20740,
    "timestampMs": 20640,
    "confidence": 0.941208,
    "pageBreakAfter": true
  },
  {
    "text": " одно",
    "startMs": 20740,
    "endMs": 20900,
    "timestampMs": 20820,
    "confidence": 0.988067
  },
  {
    "text": " сообщение.",
    "startMs": 20900,
    "endMs": 21580,
    "timestampMs": 21240,
    "confidence": 0.995267,
    "pageBreakAfter": true
  },
  {
    "text": " Вы",
    "startMs": 21760,
    "endMs": 22040,
    "timestampMs": 21900,
    "confidence": 0.977098
  },
  {
    "text": " могли",
    "startMs": 22040,
    "endMs": 22300,
    "timestampMs": 22170,
    "confidence": 0.98923
  },
  {
    "text": " заметить,",
    "startMs": 22300,
    "endMs": 22700,
    "timestampMs": 22500,
    "confidence": 0.992194
  },
  {
    "text": " что",
    "startMs": 22760,
    "endMs": 22840,
    "timestampMs": 22800,
    "confidence": 0.995315,
    "pageBreakAfter": true
  },
  {
    "text": " исчезла",
    "startMs": 22840,
    "endMs": 23260,
    "timestampMs": 23050,
    "confidence": 0.997561
  },
  {
    "text": " не",
    "startMs": 23260,
    "endMs": 23360,
    "timestampMs": 23310,
    "confidence": 0.982472
  },
  {
    "text": " только",
    "startMs": 23360,
    "endMs": 23540,
    "timestampMs": 23450,
    "confidence": 0.994117
  },
  {
    "text": " лично",
    "startMs": 23540,
    "endMs": 23980,
    "timestampMs": 23760,
    "confidence": 0.937394,
    "pageBreakAfter": true
  },
  {
    "text": " ваша",
    "startMs": 23980,
    "endMs": 24280,
    "timestampMs": 24130,
    "confidence": 0.981288
  },
  {
    "text": " Дайен.",
    "startMs": 24280,
    "endMs": 24540,
    "timestampMs": 24410,
    "confidence": 0.753016,
    "pageBreakAfter": true
  },
  {
    "text": " Она",
    "startMs": 24780,
    "endMs": 25120,
    "timestampMs": 24950,
    "confidence": 0.989516
  },
  {
    "text": " была",
    "startMs": 25120,
    "endMs": 25380,
    "timestampMs": 25250,
    "confidence": 0.995842
  },
  {
    "text": " стёрта",
    "startMs": 25380,
    "endMs": 25780,
    "timestampMs": 25580,
    "confidence": 0.906969
  },
  {
    "text": " из",
    "startMs": 25780,
    "endMs": 25880,
    "timestampMs": 25830,
    "confidence": 0.991693,
    "pageBreakAfter": true
  },
  {
    "text": " каждой",
    "startMs": 25880,
    "endMs": 26240,
    "timestampMs": 26060,
    "confidence": 0.996383
  },
  {
    "text": " вселенной",
    "startMs": 26240,
    "endMs": 26680,
    "timestampMs": 26460,
    "confidence": 0.975167
  },
  {
    "text": " по",
    "startMs": 26680,
    "endMs": 26860,
    "timestampMs": 26770,
    "confidence": 0.784105
  },
  {
    "text": " всей",
    "startMs": 26860,
    "endMs": 27040,
    "timestampMs": 26950,
    "confidence": 0.99706,
    "pageBreakAfter": true
  },
  {
    "text": " бесконечности.",
    "startMs": 27040,
    "endMs": 27800,
    "timestampMs": 27420,
    "confidence": 0.997899,
    "pageBreakAfter": true
  },
  {
    "text": " И,",
    "startMs": 27960,
    "endMs": 28320,
    "timestampMs": 28140,
    "confidence": 0.978575
  },
  {
    "text": " наверное,",
    "startMs": 28380,
    "endMs": 28600,
    "timestampMs": 28490,
    "confidence": 0.965821
  },
  {
    "text": " вы",
    "startMs": 28780,
    "endMs": 28820,
    "timestampMs": 28800,
    "confidence": 0.996653
  },
  {
    "text": " думаете,",
    "startMs": 28820,
    "endMs": 29220,
    "timestampMs": 29020,
    "confidence": 0.997036,
    "pageBreakAfter": true
  },
  {
    "text": " для",
    "startMs": 29260,
    "endMs": 29440,
    "timestampMs": 29350,
    "confidence": 0.9466
  },
  {
    "text": " чего?",
    "startMs": 29440,
    "endMs": 29660,
    "timestampMs": 29550,
    "confidence": 0.999664,
    "pageBreakAfter": true
  },
  {
    "text": " Лучше",
    "startMs": 29980,
    "endMs": 30360,
    "timestampMs": 30170,
    "confidence": 0.99027
  },
  {
    "text": " узнать",
    "startMs": 30360,
    "endMs": 30680,
    "timestampMs": 30520,
    "confidence": 0.999803
  },
  {
    "text": " как.",
    "startMs": 30680,
    "endMs": 30920,
    "timestampMs": 30800,
    "confidence": 0.598,
    "pageBreakAfter": true
  },
  {
    "text": " Дайен",
    "startMs": 31100,
    "endMs": 31420,
    "timestampMs": 31260,
    "confidence": 0.747511
  },
  {
    "text": " была",
    "startMs": 31420,
    "endMs": 31580,
    "timestampMs": 31500,
    "confidence": 0.915218
  },
  {
    "text": " стёрта",
    "startMs": 31580,
    "endMs": 31920,
    "timestampMs": 31750,
    "confidence": 0.939254,
    "pageBreakAfter": true
  },
  {
    "text": " настолько",
    "startMs": 31920,
    "endMs": 32240,
    "timestampMs": 32080,
    "confidence": 0.999156
  },
  {
    "text": " крутым",
    "startMs": 32240,
    "endMs": 32640,
    "timestampMs": 32440,
    "confidence": 0.998966,
    "pageBreakAfter": true
  },
  {
    "text": " оружием,",
    "startMs": 32640,
    "endMs": 32980,
    "timestampMs": 32810,
    "confidence": 0.999924
  },
  {
    "text": " что",
    "startMs": 33040,
    "endMs": 33120,
    "timestampMs": 33080,
    "confidence": 0.999188
  },
  {
    "text": " ему",
    "startMs": 33120,
    "endMs": 33280,
    "timestampMs": 33200,
    "confidence": 0.999659
  },
  {
    "text": " даже",
    "startMs": 33280,
    "endMs": 33460,
    "timestampMs": 33370,
    "confidence": 0.99942,
    "pageBreakAfter": true
  },
  {
    "text": " не",
    "startMs": 33460,
    "endMs": 33600,
    "timestampMs": 33530,
    "confidence": 0.999938
  },
  {
    "text": " нужно",
    "startMs": 33600,
    "endMs": 33800,
    "timestampMs": 33700,
    "confidence": 0.9973
  },
  {
    "text": " название.",
    "startMs": 33800,
    "endMs": 34380,
    "timestampMs": 34090,
    "confidence": 0.988737,
    "pageBreakAfter": true
  },
  {
    "text": " Устройство",
    "startMs": 34740,
    "endMs": 35180,
    "timestampMs": 34960,
    "confidence": 0.997587
  },
  {
    "text": " Омега.",
    "startMs": 35180,
    "endMs": 35740,
    "timestampMs": 35460,
    "confidence": 0.982236,
    "pageBreakAfter": true
  },
  {
    "text": " Ну,",
    "startMs": 35880,
    "endMs": 36000,
    "timestampMs": 35940,
    "confidence": 0.791374
  },
  {
    "text": " лошары",
    "startMs": 36080,
    "endMs": 36440,
    "timestampMs": 36260,
    "confidence": 0.993434
  },
  {
    "text": " называют",
    "startMs": 36440,
    "endMs": 36820,
    "timestampMs": 36630,
    "confidence": 0.999661
  },
  {
    "text": " его",
    "startMs": 36820,
    "endMs": 36960,
    "timestampMs": 36890,
    "confidence": 0.999554,
    "pageBreakAfter": true
  },
  {
    "text": " устройством",
    "startMs": 36960,
    "endMs": 37420,
    "timestampMs": 37190,
    "confidence": 0.998239
  },
  {
    "text": " Омега.",
    "startMs": 37420,
    "endMs": 37840,
    "timestampMs": 37630,
    "confidence": 0.999632,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 38000,
    "endMs": 38360,
    "timestampMs": 38180,
    "confidence": 0.999588
  },
  {
    "text": " от",
    "startMs": 38360,
    "endMs": 38500,
    "timestampMs": 38430,
    "confidence": 0.999854
  },
  {
    "text": " одного",
    "startMs": 38500,
    "endMs": 38700,
    "timestampMs": 38600,
    "confidence": 0.999593
  },
  {
    "text": " лошара",
    "startMs": 38700,
    "endMs": 39060,
    "timestampMs": 38880,
    "confidence": 0.872091,
    "pageBreakAfter": true
  },
  {
    "text": " услышал",
    "startMs": 39060,
    "endMs": 39400,
    "timestampMs": 39230,
    "confidence": 0.998443
  },
  {
    "text": " название.",
    "startMs": 39400,
    "endMs": 39760,
    "timestampMs": 39580,
    "confidence": 0.999576,
    "pageBreakAfter": true
  },
  {
    "text": " Это",
    "startMs": 39860,
    "endMs": 40120,
    "timestampMs": 39990,
    "confidence": 0.999505
  },
  {
    "text": " моё",
    "startMs": 40120,
    "endMs": 40420,
    "timestampMs": 40270,
    "confidence": 0.992503
  },
  {
    "text": " оружие,",
    "startMs": 40420,
    "endMs": 40800,
    "timestampMs": 40610,
    "confidence": 0.99993
  },
  {
    "text": " но",
    "startMs": 40880,
    "endMs": 40960,
    "timestampMs": 40920,
    "confidence": 0.999953,
    "pageBreakAfter": true
  },
  {
    "text": " вы",
    "startMs": 40960,
    "endMs": 41100,
    "timestampMs": 41030,
    "confidence": 0.999546
  },
  {
    "text": " сами",
    "startMs": 41100,
    "endMs": 41360,
    "timestampMs": 41230,
    "confidence": 0.999613
  },
  {
    "text": " виноваты",
    "startMs": 41360,
    "endMs": 41760,
    "timestampMs": 41560,
    "confidence": 0.99987
  },
  {
    "text": " в",
    "startMs": 41760,
    "endMs": 41880,
    "timestampMs": 41820,
    "confidence": 0.999954,
    "pageBreakAfter": true
  },
  {
    "text": " том,",
    "startMs": 41880,
    "endMs": 41960,
    "timestampMs": 41920,
    "confidence": 0.999847
  },
  {
    "text": " что",
    "startMs": 42060,
    "endMs": 42160,
    "timestampMs": 42110,
    "confidence": 0.999939
  },
  {
    "text": " я",
    "startMs": 42160,
    "endMs": 42300,
    "timestampMs": 42230,
    "confidence": 0.999911
  },
  {
    "text": " применил",
    "startMs": 42300,
    "endMs": 42720,
    "timestampMs": 42510,
    "confidence": 0.998971,
    "pageBreakAfter": true
  },
  {
    "text": " его",
    "startMs": 42720,
    "endMs": 42900,
    "timestampMs": 42810,
    "confidence": 0.999791
  },
  {
    "text": " на",
    "startMs": 42900,
    "endMs": 43060,
    "timestampMs": 42980,
    "confidence": 0.999928
  },
  {
    "text": " ней.",
    "startMs": 43060,
    "endMs": 43240,
    "timestampMs": 43150,
    "confidence": 0.998956,
    "pageBreakAfter": true
  },
  {
    "text": " Если",
    "startMs": 43460,
    "endMs": 43740,
    "timestampMs": 43600,
    "confidence": 0.999793
  },
  {
    "text": " хотите",
    "startMs": 43740,
    "endMs": 44060,
    "timestampMs": 43900,
    "confidence": 0.999476
  },
  {
    "text": " увидеть",
    "startMs": 44060,
    "endMs": 44360,
    "timestampMs": 44210,
    "confidence": 0.999713,
    "pageBreakAfter": true
  },
  {
    "text": " Рика,",
    "startMs": 44360,
    "endMs": 44560,
    "timestampMs": 44460,
    "confidence": 0.967035
  },
  {
    "text": " который",
    "startMs": 44660,
    "endMs": 44840,
    "timestampMs": 44750,
    "confidence": 0.95564
  },
  {
    "text": " испоганил",
    "startMs": 44840,
    "endMs": 45300,
    "timestampMs": 45070,
    "confidence": 0.983173,
    "pageBreakAfter": true
  },
  {
    "text": " вам",
    "startMs": 45300,
    "endMs": 45420,
    "timestampMs": 45360,
    "confidence": 0.99981
  },
  {
    "text": " жизнь,",
    "startMs": 45420,
    "endMs": 45600,
    "timestampMs": 45510,
    "confidence": 0.999189
  },
  {
    "text": " то",
    "startMs": 45720,
    "endMs": 45780,
    "timestampMs": 45750,
    "confidence": 0.999492
  },
  {
    "text": " оглянитесь",
    "startMs": 45780,
    "endMs": 46160,
    "timestampMs": 45970,
    "confidence": 0.991037,
    "pageBreakAfter": true
  },
  {
    "text": " вокруг,",
    "startMs": 46160,
    "endMs": 46460,
    "timestampMs": 46310,
    "confidence": 0.999945
  },
  {
    "text": " вас",
    "startMs": 46620,
    "endMs": 46760,
    "timestampMs": 46690,
    "confidence": 0.997864
  },
  {
    "text": " тут",
    "startMs": 46760,
    "endMs": 46900,
    "timestampMs": 46830,
    "confidence": 0.999562
  },
  {
    "text": " много.",
    "startMs": 46900,
    "endMs": 47220,
    "timestampMs": 47060,
    "confidence": 0.99992,
    "pageBreakAfter": true
  },
  {
    "text": " Так",
    "startMs": 47480,
    "endMs": 47700,
    "timestampMs": 47590,
    "confidence": 0.999196
  },
  {
    "text": " что",
    "startMs": 47700,
    "endMs": 47840,
    "timestampMs": 47770,
    "confidence": 0.999945
  },
  {
    "text": " давайте",
    "startMs": 47840,
    "endMs": 48180,
    "timestampMs": 48010,
    "confidence": 0.986669
  },
  {
    "text": " заключим",
    "startMs": 48180,
    "endMs": 48660,
    "timestampMs": 48420,
    "confidence": 0.999595,
    "pageBreakAfter": true
  },
  {
    "text": " сделку.",
    "startMs": 48660,
    "endMs": 49100,
    "timestampMs": 48880,
    "confidence": 0.999741,
    "pageBreakAfter": true
  },
  {
    "text": " Один",
    "startMs": 49300,
    "endMs": 49640,
    "timestampMs": 49470,
    "confidence": 0.99974
  },
  {
    "text": " из",
    "startMs": 49640,
    "endMs": 49760,
    "timestampMs": 49700,
    "confidence": 0.999979
  },
  {
    "text": " вас",
    "startMs": 49760,
    "endMs": 49920,
    "timestampMs": 49840,
    "confidence": 0.9999
  },
  {
    "text": " получит",
    "startMs": 49920,
    "endMs": 50360,
    "timestampMs": 50140,
    "confidence": 0.998738,
    "pageBreakAfter": true
  },
  {
    "text": " свою",
    "startMs": 50360,
    "endMs": 50540,
    "timestampMs": 50450,
    "confidence": 0.999425
  },
  {
    "text": " Дайен.",
    "startMs": 50540,
    "endMs": 50880,
    "timestampMs": 50710,
    "confidence": 0.903938,
    "pageBreakAfter": true
  },
  {
    "text": " Да",
    "startMs": 50920,
    "endMs": 51060,
    "timestampMs": 50990,
    "confidence": 0.994216
  },
  {
    "text": " врёт",
    "startMs": 51060,
    "endMs": 51300,
    "timestampMs": 51180,
    "confidence": 0.727706
  },
  {
    "text": " он",
    "startMs": 51300,
    "endMs": 51420,
    "timestampMs": 51360,
    "confidence": 0.999865
  },
  {
    "text": " всё.",
    "startMs": 51420,
    "endMs": 51620,
    "timestampMs": 51520,
    "confidence": 0.998545,
    "pageBreakAfter": true
  },
  {
    "text": " Врёт!",
    "startMs": 51820,
    "endMs": 52260,
    "timestampMs": 52040,
    "confidence": 0.991405,
    "pageBreakAfter": true
  },
  {
    "text": " Вам",
    "startMs": 52480,
    "endMs": 52840,
    "timestampMs": 52660,
    "confidence": 0.99609
  },
  {
    "text": " всего",
    "startMs": 52840,
    "endMs": 53120,
    "timestampMs": 52980,
    "confidence": 0.99986
  },
  {
    "text": " лишь",
    "startMs": 53120,
    "endMs": 53300,
    "timestampMs": 53210,
    "confidence": 0.99946
  },
  {
    "text": " то",
    "startMs": 53300,
    "endMs": 53380,
    "timestampMs": 53340,
    "confidence": 0.339179,
    "pageBreakAfter": true
  },
  {
    "text": " нужно",
    "startMs": 53380,
    "endMs": 53600,
    "timestampMs": 53490,
    "confidence": 0.998304
  },
  {
    "text": " остаться",
    "startMs": 53600,
    "endMs": 54280,
    "timestampMs": 53940,
    "confidence": 0.998336
  },
  {
    "text": " последним",
    "startMs": 54280,
    "endMs": 55320,
    "timestampMs": 54800,
    "confidence": 0.989094,
    "pageBreakAfter": true
  },
  {
    "text": " Риком.",
    "startMs": 55320,
    "endMs": 55980,
    "timestampMs": 55650,
    "confidence": 0.997903,
    "pageBreakAfter": true
  },
  {
    "text": " Что,",
    "startMs": 63420,
    "endMs": 63860,
    "timestampMs": 63640,
    "confidence": 0.997517
  },
  {
    "text": " стало",
    "startMs": 63980,
    "endMs": 64180,
    "timestampMs": 64080,
    "confidence": 0.999745
  },
  {
    "text": " легче?",
    "startMs": 64180,
    "endMs": 64580,
    "timestampMs": 64380,
    "confidence": 0.9999,
    "pageBreakAfter": true
  },
  {
    "text": " Он",
    "startMs": 64920,
    "endMs": 65280,
    "timestampMs": 65100,
    "confidence": 0.693598
  },
  {
    "text": " не",
    "startMs": 65280,
    "endMs": 65400,
    "timestampMs": 65340,
    "confidence": 0.986309
  },
  {
    "text": " может",
    "startMs": 65400,
    "endMs": 65620,
    "timestampMs": 65510,
    "confidence": 0.991885
  },
  {
    "text": " её",
    "startMs": 65620,
    "endMs": 65780,
    "timestampMs": 65700,
    "confidence": 0.778712,
    "pageBreakAfter": true
  },
  {
    "text": " вернуть!",
    "startMs": 65780,
    "endMs": 66160,
    "timestampMs": 65970,
    "confidence": 0.996503,
    "pageBreakAfter": true
  }
]
} />;
export const Video06 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="06-hunt-2" durationInFrames={1995} premountFor={fps}>
      <ScenePicture src={staticFile("media/06-hunt-2.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header06 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions06 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header07 = () => <ClipHeader title={"Из этой ловушки\nещё НИКТО не сбегал"} series={"Охота на Прайма"} part={3} parts={3} />;
export const Captions07 = () => <DynamicCaptions captions={
[
  {
    "text": " Ух",
    "startMs": 3300,
    "endMs": 3600,
    "timestampMs": 3450,
    "confidence": 0.997961
  },
  {
    "text": " ты!",
    "startMs": 3600,
    "endMs": 3740,
    "timestampMs": 3670,
    "confidence": 0.998691,
    "pageBreakAfter": true
  },
  {
    "text": " Кажется,",
    "startMs": 4160,
    "endMs": 4640,
    "timestampMs": 4400,
    "confidence": 0.999321
  },
  {
    "text": " мы",
    "startMs": 4640,
    "endMs": 4900,
    "timestampMs": 4770,
    "confidence": 0.99989
  },
  {
    "text": " прошли",
    "startMs": 4900,
    "endMs": 5400,
    "timestampMs": 5150,
    "confidence": 0.99622,
    "pageBreakAfter": true
  },
  {
    "text": " испытание",
    "startMs": 5400,
    "endMs": 5960,
    "timestampMs": 5680,
    "confidence": 0.971858
  },
  {
    "text": " коробкой.",
    "startMs": 5960,
    "endMs": 6540,
    "timestampMs": 6250,
    "confidence": 0.999487,
    "pageBreakAfter": true
  },
  {
    "text": " Тебе",
    "startMs": 7240,
    "endMs": 7720,
    "timestampMs": 7480,
    "confidence": 0.995318
  },
  {
    "text": " пора",
    "startMs": 7720,
    "endMs": 7920,
    "timestampMs": 7820,
    "confidence": 0.999005
  },
  {
    "text": " начинать",
    "startMs": 7920,
    "endMs": 8240,
    "timestampMs": 8080,
    "confidence": 0.99853,
    "pageBreakAfter": true
  },
  {
    "text": " каркать",
    "startMs": 8240,
    "endMs": 8580,
    "timestampMs": 8410,
    "confidence": 0.998282
  },
  {
    "text": " профессионально,",
    "startMs": 8580,
    "endMs": 9390,
    "timestampMs": 8985,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Морти.",
    "startMs": 9390,
    "endMs": 9660,
    "timestampMs": 9525,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 9800,
    "endMs": 9980,
    "timestampMs": 9890,
    "confidence": 0.999046
  },
  {
    "text": " тут",
    "startMs": 9980,
    "endMs": 10120,
    "timestampMs": 10050,
    "confidence": 0.999869
  },
  {
    "text": " ни",
    "startMs": 10120,
    "endMs": 10240,
    "timestampMs": 10180,
    "confidence": 0.995309
  },
  {
    "text": " при",
    "startMs": 10240,
    "endMs": 10440,
    "timestampMs": 10340,
    "confidence": 0.998519,
    "pageBreakAfter": true
  },
  {
    "text": " чём.",
    "startMs": 10440,
    "endMs": 10740,
    "timestampMs": 10590,
    "confidence": 0.949433,
    "pageBreakAfter": true
  },
  {
    "text": " Ладно,",
    "startMs": 10980,
    "endMs": 11420,
    "timestampMs": 11200,
    "confidence": 0.999647
  },
  {
    "text": " валим,",
    "startMs": 11500,
    "endMs": 11800,
    "timestampMs": 11650,
    "confidence": 0.999165
  },
  {
    "text": " пока",
    "startMs": 11860,
    "endMs": 11980,
    "timestampMs": 11920,
    "confidence": 0.999979
  },
  {
    "text": " не",
    "startMs": 11980,
    "endMs": 12120,
    "timestampMs": 12050,
    "confidence": 0.999983,
    "pageBreakAfter": true
  },
  {
    "text": " завершилась",
    "startMs": 12120,
    "endMs": 12540,
    "timestampMs": 12330,
    "confidence": 0.999577
  },
  {
    "text": " зачистка.",
    "startMs": 12540,
    "endMs": 13020,
    "timestampMs": 12780,
    "confidence": 0.999477,
    "pageBreakAfter": true
  },
  {
    "text": " Что",
    "startMs": 15360,
    "endMs": 15800,
    "timestampMs": 15580,
    "confidence": 0.998823
  },
  {
    "text": " скажешь?",
    "startMs": 15800,
    "endMs": 16200,
    "timestampMs": 16000,
    "confidence": 0.999065,
    "pageBreakAfter": true
  },
  {
    "text": " Субэфирный",
    "startMs": 16380,
    "endMs": 16860,
    "timestampMs": 16620,
    "confidence": 0.91372
  },
  {
    "text": " барьер,",
    "startMs": 16860,
    "endMs": 17160,
    "timestampMs": 17010,
    "confidence": 0.99965,
    "pageBreakAfter": true
  },
  {
    "text": " блокирующий",
    "startMs": 17220,
    "endMs": 17660,
    "timestampMs": 17440,
    "confidence": 0.999675
  },
  {
    "text": " портальную",
    "startMs": 17660,
    "endMs": 18040,
    "timestampMs": 17850,
    "confidence": 0.999825,
    "pageBreakAfter": true
  },
  {
    "text": " жидкость?",
    "startMs": 18040,
    "endMs": 18380,
    "timestampMs": 18210,
    "confidence": 0.99975,
    "pageBreakAfter": true
  },
  {
    "text": " Не,",
    "startMs": 18460,
    "endMs": 18620,
    "timestampMs": 18540,
    "confidence": 0.935573
  },
  {
    "text": " моя",
    "startMs": 18760,
    "endMs": 18920,
    "timestampMs": 18840,
    "confidence": 0.997886
  },
  {
    "text": " бы",
    "startMs": 18920,
    "endMs": 19060,
    "timestampMs": 18990,
    "confidence": 0.997888
  },
  {
    "text": " сработала.",
    "startMs": 19060,
    "endMs": 19560,
    "timestampMs": 19310,
    "confidence": 0.999636,
    "pageBreakAfter": true
  },
  {
    "text": " Дай-ка",
    "startMs": 19680,
    "endMs": 19960,
    "timestampMs": 19820,
    "confidence": 0.997948
  },
  {
    "text": " сюда.",
    "startMs": 19960,
    "endMs": 20160,
    "timestampMs": 20060,
    "confidence": 0.999748,
    "pageBreakAfter": true
  },
  {
    "text": " Только",
    "startMs": 25520,
    "endMs": 25800,
    "timestampMs": 25660,
    "confidence": 0.925501
  },
  {
    "text": " не",
    "startMs": 25800,
    "endMs": 26000,
    "timestampMs": 25900,
    "confidence": 0.999527
  },
  {
    "text": " истери,",
    "startMs": 26000,
    "endMs": 26320,
    "timestampMs": 26160,
    "confidence": 0.779302
  },
  {
    "text": " я",
    "startMs": 26400,
    "endMs": 26480,
    "timestampMs": 26440,
    "confidence": 0.999744,
    "pageBreakAfter": true
  },
  {
    "text": " кое-что",
    "startMs": 26480,
    "endMs": 26700,
    "timestampMs": 26590,
    "confidence": 0.999678
  },
  {
    "text": " поправлю.",
    "startMs": 26700,
    "endMs": 27240,
    "timestampMs": 26970,
    "confidence": 0.99978,
    "pageBreakAfter": true
  },
  {
    "text": " Два",
    "startMs": 28020,
    "endMs": 28204,
    "timestampMs": 28112,
    "confidence": null
  },
  {
    "text": " пишем,",
    "startMs": 28204,
    "endMs": 28511,
    "timestampMs": 28357,
    "confidence": null
  },
  {
    "text": " три",
    "startMs": 28511,
    "endMs": 28695,
    "timestampMs": 28603,
    "confidence": null
  },
  {
    "text": " в",
    "startMs": 28695,
    "endMs": 28756,
    "timestampMs": 28725,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " уме.",
    "startMs": 28756,
    "endMs": 28940,
    "timestampMs": 28848,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Нужен",
    "startMs": 29260,
    "endMs": 29740,
    "timestampMs": 29500,
    "confidence": 0.998277
  },
  {
    "text": " какой-нибудь",
    "startMs": 29740,
    "endMs": 30200,
    "timestampMs": 29970,
    "confidence": 0.999856,
    "pageBreakAfter": true
  },
  {
    "text": " вектор.",
    "startMs": 30200,
    "endMs": 30540,
    "timestampMs": 30370,
    "confidence": 0.997909,
    "pageBreakAfter": true
  },
  {
    "text": " Да",
    "startMs": 30680,
    "endMs": 30800,
    "timestampMs": 30740,
    "confidence": 0.994947
  },
  {
    "text": " я",
    "startMs": 30800,
    "endMs": 30900,
    "timestampMs": 30850,
    "confidence": 0.998025
  },
  {
    "text": " в",
    "startMs": 30900,
    "endMs": 31020,
    "timestampMs": 30960,
    "confidence": 0.999979
  },
  {
    "text": " курсе.",
    "startMs": 31020,
    "endMs": 31320,
    "timestampMs": 31170,
    "confidence": 0.999774,
    "pageBreakAfter": true
  },
  {
    "text": " Жижа!",
    "startMs": 32280,
    "endMs": 32760,
    "timestampMs": 32520,
    "confidence": 0.991618,
    "pageBreakAfter": true
  },
  {
    "text": " Жижа",
    "startMs": 32880,
    "endMs": 33320,
    "timestampMs": 33100,
    "confidence": 0.995652
  },
  {
    "text": " из",
    "startMs": 33320,
    "endMs": 33420,
    "timestampMs": 33370,
    "confidence": 0.997231
  },
  {
    "text": " ловушки!",
    "startMs": 33420,
    "endMs": 33880,
    "timestampMs": 33650,
    "confidence": 0.999918,
    "pageBreakAfter": true
  },
  {
    "text": " Давайте,",
    "startMs": 39900,
    "endMs": 40380,
    "timestampMs": 40140,
    "confidence": 0.995489
  },
  {
    "text": " валим,",
    "startMs": 40580,
    "endMs": 40800,
    "timestampMs": 40690,
    "confidence": 0.998842
  },
  {
    "text": " валим!",
    "startMs": 40880,
    "endMs": 41240,
    "timestampMs": 41060,
    "confidence": 0.999922,
    "pageBreakAfter": true
  },
  {
    "text": " О,",
    "startMs": 41240,
    "endMs": 41880,
    "timestampMs": 41560,
    "confidence": 0.727488,
    "pageBreakAfter": true
  },
  {
    "text": " господи,",
    "startMs": 46570,
    "endMs": 47030,
    "timestampMs": 46800,
    "confidence": 0.859331
  },
  {
    "text": " какая",
    "startMs": 47130,
    "endMs": 47270,
    "timestampMs": 47200,
    "confidence": 0.987695
  },
  {
    "text": " жесть!",
    "startMs": 47270,
    "endMs": 47850,
    "timestampMs": 47560,
    "confidence": 0.998149,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 47970,
    "endMs": 48330,
    "timestampMs": 48150,
    "confidence": 0.977243
  },
  {
    "text": " в",
    "startMs": 48330,
    "endMs": 48450,
    "timestampMs": 48390,
    "confidence": 0.996867
  },
  {
    "text": " шоке,",
    "startMs": 48450,
    "endMs": 48710,
    "timestampMs": 48580,
    "confidence": 0.999586
  },
  {
    "text": " что",
    "startMs": 48770,
    "endMs": 48850,
    "timestampMs": 48810,
    "confidence": 0.998879,
    "pageBreakAfter": true
  },
  {
    "text": " ты",
    "startMs": 48850,
    "endMs": 48970,
    "timestampMs": 48910,
    "confidence": 0.996978
  },
  {
    "text": " чему-то",
    "startMs": 48970,
    "endMs": 49230,
    "timestampMs": 49100,
    "confidence": 0.992311
  },
  {
    "text": " там",
    "startMs": 49230,
    "endMs": 49370,
    "timestampMs": 49300,
    "confidence": 0.994395,
    "pageBreakAfter": true
  },
  {
    "text": " радовался!",
    "startMs": 49370,
    "endMs": 49970,
    "timestampMs": 49670,
    "confidence": 0.997161,
    "pageBreakAfter": true
  },
  {
    "text": " Вот",
    "startMs": 50230,
    "endMs": 50530,
    "timestampMs": 50380,
    "confidence": 0.984839
  },
  {
    "text": " чему",
    "startMs": 50530,
    "endMs": 50770,
    "timestampMs": 50650,
    "confidence": 0.973273
  },
  {
    "text": " я",
    "startMs": 50770,
    "endMs": 50930,
    "timestampMs": 50850,
    "confidence": 0.999248
  },
  {
    "text": " рад.",
    "startMs": 50930,
    "endMs": 51110,
    "timestampMs": 51020,
    "confidence": 0.999507,
    "pageBreakAfter": true
  },
  {
    "text": " Очевидно,",
    "startMs": 51650,
    "endMs": 52170,
    "timestampMs": 51910,
    "confidence": 0.999029
  },
  {
    "text": " что",
    "startMs": 52250,
    "endMs": 52310,
    "timestampMs": 52280,
    "confidence": 0.999741
  },
  {
    "text": " оттуда",
    "startMs": 52310,
    "endMs": 52610,
    "timestampMs": 52460,
    "confidence": 0.997549
  },
  {
    "text": " ещё",
    "startMs": 52610,
    "endMs": 52770,
    "timestampMs": 52690,
    "confidence": 0.958992,
    "pageBreakAfter": true
  },
  {
    "text": " никто",
    "startMs": 52770,
    "endMs": 53050,
    "timestampMs": 52910,
    "confidence": 0.997735
  },
  {
    "text": " не",
    "startMs": 53050,
    "endMs": 53190,
    "timestampMs": 53120,
    "confidence": 0.999317
  },
  {
    "text": " сбегал.",
    "startMs": 53190,
    "endMs": 53630,
    "timestampMs": 53410,
    "confidence": 0.999369,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 54230,
    "endMs": 54450,
    "timestampMs": 54340,
    "confidence": 0.998171
  },
  {
    "text": " смотрю,",
    "startMs": 54450,
    "endMs": 54770,
    "timestampMs": 54610,
    "confidence": 0.999449
  },
  {
    "text": " ты",
    "startMs": 54830,
    "endMs": 54890,
    "timestampMs": 54860,
    "confidence": 0.99871
  },
  {
    "text": " извлёк",
    "startMs": 54890,
    "endMs": 55270,
    "timestampMs": 55080,
    "confidence": 0.995601,
    "pageBreakAfter": true
  },
  {
    "text": " урок",
    "startMs": 55270,
    "endMs": 55490,
    "timestampMs": 55380,
    "confidence": 0.954972
  },
  {
    "text": " из",
    "startMs": 55490,
    "endMs": 55630,
    "timestampMs": 55560,
    "confidence": 0.999122
  },
  {
    "text": " погони",
    "startMs": 55630,
    "endMs": 55930,
    "timestampMs": 55780,
    "confidence": 0.763479
  },
  {
    "text": " за",
    "startMs": 55930,
    "endMs": 56050,
    "timestampMs": 55990,
    "confidence": 0.996992,
    "pageBreakAfter": true
  },
  {
    "text": " этим",
    "startMs": 56050,
    "endMs": 56190,
    "timestampMs": 56120,
    "confidence": 0.999208
  },
  {
    "text": " челом.",
    "startMs": 56190,
    "endMs": 56550,
    "timestampMs": 56370,
    "confidence": 0.96042,
    "pageBreakAfter": true
  },
  {
    "text": " Чувак,",
    "startMs": 56690,
    "endMs": 56990,
    "timestampMs": 56840,
    "confidence": 0.99926
  },
  {
    "text": " ты",
    "startMs": 57090,
    "endMs": 57190,
    "timestampMs": 57140,
    "confidence": 0.999838
  },
  {
    "text": " можешь",
    "startMs": 57190,
    "endMs": 57490,
    "timestampMs": 57340,
    "confidence": 0.999308,
    "pageBreakAfter": true
  },
  {
    "text": " уходить.",
    "startMs": 57490,
    "endMs": 58030,
    "timestampMs": 57760,
    "confidence": 0.999585,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 58410,
    "endMs": 58690,
    "timestampMs": 58550,
    "confidence": 0.99808
  },
  {
    "text": " прав,",
    "startMs": 58690,
    "endMs": 58990,
    "timestampMs": 58840,
    "confidence": 0.99977
  },
  {
    "text": " могу.",
    "startMs": 59130,
    "endMs": 59510,
    "timestampMs": 59320,
    "confidence": 0.999439,
    "pageBreakAfter": true
  },
  {
    "text": " Оружие,",
    "startMs": 60070,
    "endMs": 60590,
    "timestampMs": 60330,
    "confidence": 0.99051
  },
  {
    "text": " Морти.",
    "startMs": 60750,
    "endMs": 61050,
    "timestampMs": 60900,
    "confidence": 0.996305,
    "pageBreakAfter": true
  },
  {
    "text": " Он",
    "startMs": 61810,
    "endMs": 62330,
    "timestampMs": 62070,
    "confidence": 0.993875
  },
  {
    "text": " знает,",
    "startMs": 62330,
    "endMs": 62650,
    "timestampMs": 62490,
    "confidence": 0.999546
  },
  {
    "text": " что",
    "startMs": 62730,
    "endMs": 62830,
    "timestampMs": 62780,
    "confidence": 0.999967
  },
  {
    "text": " стирающая",
    "startMs": 62830,
    "endMs": 63290,
    "timestampMs": 63060,
    "confidence": 0.964392,
    "pageBreakAfter": true
  },
  {
    "text": " человека",
    "startMs": 63290,
    "endMs": 63570,
    "timestampMs": 63430,
    "confidence": 0.865942
  },
  {
    "text": " из",
    "startMs": 63570,
    "endMs": 63790,
    "timestampMs": 63680,
    "confidence": 0.998534
  },
  {
    "text": " всех",
    "startMs": 63790,
    "endMs": 63970,
    "timestampMs": 63880,
    "confidence": 0.999083,
    "pageBreakAfter": true
  },
  {
    "text": " измерений",
    "startMs": 63970,
    "endMs": 64390,
    "timestampMs": 64180,
    "confidence": 0.999407
  },
  {
    "text": " штука",
    "startMs": 64390,
    "endMs": 64770,
    "timestampMs": 64580,
    "confidence": 0.98671
  },
  {
    "text": " может",
    "startMs": 64770,
    "endMs": 65030,
    "timestampMs": 64900,
    "confidence": 0.993365,
    "pageBreakAfter": true
  },
  {
    "text": " стереть",
    "startMs": 65030,
    "endMs": 65470,
    "timestampMs": 65250,
    "confidence": 0.998964
  },
  {
    "text": " и",
    "startMs": 65470,
    "endMs": 65670,
    "timestampMs": 65570,
    "confidence": 0.98817
  },
  {
    "text": " его.",
    "startMs": 65670,
    "endMs": 65910,
    "timestampMs": 65790,
    "confidence": 0.999644,
    "pageBreakAfter": true
  },
  {
    "text": " Охренеть!",
    "startMs": 71340,
    "endMs": 71860,
    "timestampMs": 71600,
    "confidence": 0.991945,
    "pageBreakAfter": true
  },
  {
    "text": " Так",
    "startMs": 72220,
    "endMs": 72480,
    "timestampMs": 72350,
    "confidence": 0.997117
  },
  {
    "text": " это",
    "startMs": 72480,
    "endMs": 72760,
    "timestampMs": 72620,
    "confidence": 0.999446
  },
  {
    "text": " он?",
    "startMs": 72760,
    "endMs": 73040,
    "timestampMs": 72900,
    "confidence": 0.999782,
    "pageBreakAfter": true
  }
]
} />;
export const Video07 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="07-hunt-3" durationInFrames={2202} premountFor={fps}>
      <ScenePicture src={staticFile("media/07-hunt-3.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header07 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions07 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header08 = () => <ClipHeader title={"Рик нашёл того,\nкто УБИЛ его жену"} series={"Финал охоты"} part={1} parts={3} />;
export const Captions08 = () => <DynamicCaptions captions={
[
  {
    "text": " А",
    "startMs": 60,
    "endMs": 180,
    "timestampMs": 120,
    "confidence": 0.742097
  },
  {
    "text": " вот",
    "startMs": 180,
    "endMs": 360,
    "timestampMs": 270,
    "confidence": 0.973386
  },
  {
    "text": " и",
    "startMs": 360,
    "endMs": 520,
    "timestampMs": 440,
    "confidence": 0.992325
  },
  {
    "text": " он.",
    "startMs": 520,
    "endMs": 660,
    "timestampMs": 590,
    "confidence": 0.97144,
    "pageBreakAfter": true
  },
  {
    "text": " Ух",
    "startMs": 860,
    "endMs": 1060,
    "timestampMs": 960,
    "confidence": 0.98742
  },
  {
    "text": " ты,",
    "startMs": 1060,
    "endMs": 1180,
    "timestampMs": 1120,
    "confidence": 0.998347
  },
  {
    "text": " женатик.",
    "startMs": 1320,
    "endMs": 1820,
    "timestampMs": 1570,
    "confidence": 0.821044,
    "pageBreakAfter": true
  },
  {
    "text": " Рик",
    "startMs": 1940,
    "endMs": 2200,
    "timestampMs": 2070,
    "confidence": 0.992441
  },
  {
    "text": " с",
    "startMs": 2200,
    "endMs": 2340,
    "timestampMs": 2270,
    "confidence": 0.997856
  },
  {
    "text": " мёртвой",
    "startMs": 2340,
    "endMs": 2600,
    "timestampMs": 2470,
    "confidence": 0.995067
  },
  {
    "text": " жёнушкой.",
    "startMs": 2600,
    "endMs": 3120,
    "timestampMs": 2860,
    "confidence": 0.97923,
    "pageBreakAfter": true
  },
  {
    "text": " Этот",
    "startMs": 3260,
    "endMs": 3560,
    "timestampMs": 3410,
    "confidence": 0.99683
  },
  {
    "text": " парень",
    "startMs": 3560,
    "endMs": 3900,
    "timestampMs": 3730,
    "confidence": 0.999692
  },
  {
    "text": " не",
    "startMs": 3900,
    "endMs": 4040,
    "timestampMs": 3970,
    "confidence": 0.999908
  },
  {
    "text": " умеет",
    "startMs": 4040,
    "endMs": 4400,
    "timestampMs": 4220,
    "confidence": 0.999532,
    "pageBreakAfter": true
  },
  {
    "text": " вовремя",
    "startMs": 4400,
    "endMs": 4780,
    "timestampMs": 4590,
    "confidence": 0.993776
  },
  {
    "text": " остановиться.",
    "startMs": 4780,
    "endMs": 5220,
    "timestampMs": 5000,
    "confidence": 0.98773,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 5400,
    "endMs": 5560,
    "timestampMs": 5480,
    "confidence": 0.998729
  },
  {
    "text": " тебя",
    "startMs": 5560,
    "endMs": 5820,
    "timestampMs": 5690,
    "confidence": 0.999425
  },
  {
    "text": " захуярю.",
    "startMs": 5820,
    "endMs": 6620,
    "timestampMs": 6220,
    "confidence": 0.976011,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 6760,
    "endMs": 6960,
    "timestampMs": 6860,
    "confidence": 0.998525
  },
  {
    "text": " притащил",
    "startMs": 6960,
    "endMs": 7360,
    "timestampMs": 7160,
    "confidence": 0.998936
  },
  {
    "text": " с",
    "startMs": 7360,
    "endMs": 7460,
    "timestampMs": 7410,
    "confidence": 0.983249
  },
  {
    "text": " собой",
    "startMs": 7460,
    "endMs": 7580,
    "timestampMs": 7520,
    "confidence": 0.999399,
    "pageBreakAfter": true
  },
  {
    "text": " двух",
    "startMs": 7580,
    "endMs": 7780,
    "timestampMs": 7680,
    "confidence": 0.988815
  },
  {
    "text": " Морти,",
    "startMs": 7780,
    "endMs": 8140,
    "timestampMs": 7960,
    "confidence": 0.718513
  },
  {
    "text": " это",
    "startMs": 8180,
    "endMs": 8300,
    "timestampMs": 8240,
    "confidence": 0.992836
  },
  {
    "text": " что,",
    "startMs": 8300,
    "endMs": 8460,
    "timestampMs": 8380,
    "confidence": 0.998052,
    "pageBreakAfter": true
  },
  {
    "text": " твоя",
    "startMs": 8540,
    "endMs": 8720,
    "timestampMs": 8630,
    "confidence": 0.998848
  },
  {
    "text": " группа",
    "startMs": 8720,
    "endMs": 9060,
    "timestampMs": 8890,
    "confidence": 0.999853
  },
  {
    "text": " поддержки?",
    "startMs": 9060,
    "endMs": 9680,
    "timestampMs": 9370,
    "confidence": 0.976697,
    "pageBreakAfter": true
  },
  {
    "text": " Мы",
    "startMs": 9760,
    "endMs": 9940,
    "timestampMs": 9850,
    "confidence": 0.99848
  },
  {
    "text": " сами",
    "startMs": 9940,
    "endMs": 10220,
    "timestampMs": 10080,
    "confidence": 0.999723
  },
  {
    "text": " себя",
    "startMs": 10220,
    "endMs": 10400,
    "timestampMs": 10310,
    "confidence": 0.997389
  },
  {
    "text": " притащили,",
    "startMs": 10400,
    "endMs": 10880,
    "timestampMs": 10640,
    "confidence": 0.99983,
    "pageBreakAfter": true
  },
  {
    "text": " долбозвон.",
    "startMs": 10940,
    "endMs": 11380,
    "timestampMs": 11160,
    "confidence": 0.996037,
    "pageBreakAfter": true
  },
  {
    "text": " Скажу",
    "startMs": 11540,
    "endMs": 11820,
    "timestampMs": 11680,
    "confidence": 0.999094
  },
  {
    "text": " честно,",
    "startMs": 11820,
    "endMs": 12120,
    "timestampMs": 11970,
    "confidence": 0.999826
  },
  {
    "text": " женатик,",
    "startMs": 12180,
    "endMs": 12540,
    "timestampMs": 12360,
    "confidence": 0.99972,
    "pageBreakAfter": true
  },
  {
    "text": " скучаю",
    "startMs": 12580,
    "endMs": 12980,
    "timestampMs": 12780,
    "confidence": 0.999263
  },
  {
    "text": " по",
    "startMs": 12980,
    "endMs": 13100,
    "timestampMs": 13040,
    "confidence": 0.999792
  },
  {
    "text": " временам,",
    "startMs": 13100,
    "endMs": 13460,
    "timestampMs": 13280,
    "confidence": 0.999681,
    "pageBreakAfter": true
  },
  {
    "text": " когда",
    "startMs": 13540,
    "endMs": 13640,
    "timestampMs": 13590,
    "confidence": 0.999815
  },
  {
    "text": " были",
    "startMs": 13640,
    "endMs": 13840,
    "timestampMs": 13740,
    "confidence": 0.999143
  },
  {
    "text": " только",
    "startMs": 13840,
    "endMs": 14060,
    "timestampMs": 13950,
    "confidence": 0.99993
  },
  {
    "text": " ты",
    "startMs": 14060,
    "endMs": 14260,
    "timestampMs": 14160,
    "confidence": 0.999683,
    "pageBreakAfter": true
  },
  {
    "text": " да",
    "startMs": 14260,
    "endMs": 14400,
    "timestampMs": 14330,
    "confidence": 0.967729
  },
  {
    "text": " я.",
    "startMs": 14400,
    "endMs": 14620,
    "timestampMs": 14510,
    "confidence": 0.999887,
    "pageBreakAfter": true
  },
  {
    "text": " Единственные",
    "startMs": 14980,
    "endMs": 15420,
    "timestampMs": 15200,
    "confidence": 0.99466
  },
  {
    "text": " Рики,",
    "startMs": 15420,
    "endMs": 15620,
    "timestampMs": 15520,
    "confidence": 0.974062,
    "pageBreakAfter": true
  },
  {
    "text": " которые",
    "startMs": 15740,
    "endMs": 15920,
    "timestampMs": 15830,
    "confidence": 0.999663
  },
  {
    "text": " изобрели",
    "startMs": 15920,
    "endMs": 16240,
    "timestampMs": 16080,
    "confidence": 0.999439,
    "pageBreakAfter": true
  },
  {
    "text": " портальные",
    "startMs": 16240,
    "endMs": 16780,
    "timestampMs": 16510,
    "confidence": 0.997711
  },
  {
    "text": " путешествия.",
    "startMs": 16780,
    "endMs": 17440,
    "timestampMs": 17110,
    "confidence": 0.99991,
    "pageBreakAfter": true
  },
  {
    "text": " Больше",
    "startMs": 17740,
    "endMs": 18020,
    "timestampMs": 17880,
    "confidence": 0.999122
  },
  {
    "text": " никто",
    "startMs": 18020,
    "endMs": 18260,
    "timestampMs": 18140,
    "confidence": 0.999889
  },
  {
    "text": " не",
    "startMs": 18260,
    "endMs": 18380,
    "timestampMs": 18320,
    "confidence": 0.999929,
    "pageBreakAfter": true
  },
  {
    "text": " собирался",
    "startMs": 18380,
    "endMs": 18720,
    "timestampMs": 18550,
    "confidence": 0.998632
  },
  {
    "text": " заявиться",
    "startMs": 18720,
    "endMs": 19080,
    "timestampMs": 18900,
    "confidence": 0.999052,
    "pageBreakAfter": true
  },
  {
    "text": " попозже.",
    "startMs": 19080,
    "endMs": 19600,
    "timestampMs": 19340,
    "confidence": 0.998717,
    "pageBreakAfter": true
  },
  {
    "text": " Типа",
    "startMs": 19700,
    "endMs": 20100,
    "timestampMs": 19900,
    "confidence": 0.995622
  },
  {
    "text": " твои",
    "startMs": 20100,
    "endMs": 20340,
    "timestampMs": 20220,
    "confidence": 0.762737
  },
  {
    "text": " тарелки.",
    "startMs": 20340,
    "endMs": 20760,
    "timestampMs": 20550,
    "confidence": 0.999771,
    "pageBreakAfter": true
  },
  {
    "text": " Понимаю,",
    "startMs": 21700,
    "endMs": 22140,
    "timestampMs": 21920,
    "confidence": 0.993449
  },
  {
    "text": " почему",
    "startMs": 22240,
    "endMs": 22480,
    "timestampMs": 22360,
    "confidence": 0.999762
  },
  {
    "text": " он",
    "startMs": 22480,
    "endMs": 22720,
    "timestampMs": 22600,
    "confidence": 0.999736
  },
  {
    "text": " тебя",
    "startMs": 22720,
    "endMs": 22920,
    "timestampMs": 22820,
    "confidence": 0.999898,
    "pageBreakAfter": true
  },
  {
    "text": " бесит.",
    "startMs": 22920,
    "endMs": 23360,
    "timestampMs": 23140,
    "confidence": 0.999643,
    "pageBreakAfter": true
  },
  {
    "text": " Это",
    "startMs": 23520,
    "endMs": 23780,
    "timestampMs": 23650,
    "confidence": 0.99844
  },
  {
    "text": " голос",
    "startMs": 23780,
    "endMs": 24140,
    "timestampMs": 23960,
    "confidence": 0.999737
  },
  {
    "text": " нашей",
    "startMs": 24140,
    "endMs": 24500,
    "timestampMs": 24320,
    "confidence": 0.999786
  },
  {
    "text": " жены?",
    "startMs": 24500,
    "endMs": 24820,
    "timestampMs": 24660,
    "confidence": 0.999304,
    "pageBreakAfter": true
  },
  {
    "text": " Типа,",
    "startMs": 25140,
    "endMs": 25580,
    "timestampMs": 25360,
    "confidence": 0.998352
  },
  {
    "text": " звучит",
    "startMs": 25680,
    "endMs": 26080,
    "timestampMs": 25880,
    "confidence": 0.998509
  },
  {
    "text": " как",
    "startMs": 26080,
    "endMs": 26220,
    "timestampMs": 26150,
    "confidence": 0.972516,
    "pageBreakAfter": true
  },
  {
    "text": " поёбанный",
    "startMs": 26220,
    "endMs": 26660,
    "timestampMs": 26440,
    "confidence": 0.965346
  },
  {
    "text": " робот,",
    "startMs": 26660,
    "endMs": 26920,
    "timestampMs": 26790,
    "confidence": 0.999925
  },
  {
    "text": " но",
    "startMs": 26980,
    "endMs": 27060,
    "timestampMs": 27020,
    "confidence": 0.999253
  },
  {
    "text": " это",
    "startMs": 27060,
    "endMs": 27240,
    "timestampMs": 27150,
    "confidence": 0.999927,
    "pageBreakAfter": true
  },
  {
    "text": " точно",
    "startMs": 27240,
    "endMs": 27540,
    "timestampMs": 27390,
    "confidence": 0.999833
  },
  {
    "text": " её",
    "startMs": 27540,
    "endMs": 27760,
    "timestampMs": 27650,
    "confidence": 0.998124
  },
  {
    "text": " голос.",
    "startMs": 27760,
    "endMs": 28120,
    "timestampMs": 27940,
    "confidence": 0.999948,
    "pageBreakAfter": true
  },
  {
    "text": " Сентиментальный",
    "startMs": 29020,
    "endMs": 29440,
    "timestampMs": 29230,
    "confidence": 0.976567
  },
  {
    "text": " ты",
    "startMs": 29440,
    "endMs": 29580,
    "timestampMs": 29510,
    "confidence": 0.997223
  },
  {
    "text": " наш.",
    "startMs": 29580,
    "endMs": 29880,
    "timestampMs": 29730,
    "confidence": 0.995887,
    "pageBreakAfter": true
  },
  {
    "text": " О,",
    "startMs": 30840,
    "endMs": 31260,
    "timestampMs": 31050,
    "confidence": 0.903944
  },
  {
    "text": " это",
    "startMs": 31440,
    "endMs": 31560,
    "timestampMs": 31500,
    "confidence": 0.999432
  },
  {
    "text": " правильный",
    "startMs": 31560,
    "endMs": 31960,
    "timestampMs": 31760,
    "confidence": 0.99982,
    "pageBreakAfter": true
  },
  {
    "text": " подход,",
    "startMs": 31960,
    "endMs": 32200,
    "timestampMs": 32080,
    "confidence": 0.999889
  },
  {
    "text": " я",
    "startMs": 32320,
    "endMs": 32400,
    "timestampMs": 32360,
    "confidence": 0.999532
  },
  {
    "text": " бы",
    "startMs": 32400,
    "endMs": 32560,
    "timestampMs": 32480,
    "confidence": 0.998622
  },
  {
    "text": " тоже",
    "startMs": 32560,
    "endMs": 32740,
    "timestampMs": 32650,
    "confidence": 0.99286,
    "pageBreakAfter": true
  },
  {
    "text": " так",
    "startMs": 32740,
    "endMs": 32900,
    "timestampMs": 32820,
    "confidence": 0.999822
  },
  {
    "text": " сделал.",
    "startMs": 32900,
    "endMs": 33240,
    "timestampMs": 33070,
    "confidence": 0.998974,
    "pageBreakAfter": true
  },
  {
    "text": " Кстати,",
    "startMs": 38280,
    "endMs": 38640,
    "timestampMs": 38460,
    "confidence": 0.998621
  },
  {
    "text": " я",
    "startMs": 38720,
    "endMs": 38820,
    "timestampMs": 38770,
    "confidence": 0.999924
  },
  {
    "text": " прокачал",
    "startMs": 38820,
    "endMs": 39300,
    "timestampMs": 39060,
    "confidence": 0.998853
  },
  {
    "text": " эту",
    "startMs": 39300,
    "endMs": 39440,
    "timestampMs": 39370,
    "confidence": 0.999533,
    "pageBreakAfter": true
  },
  {
    "text": " штуку.",
    "startMs": 39440,
    "endMs": 39740,
    "timestampMs": 39590,
    "confidence": 0.99985,
    "pageBreakAfter": true
  },
  {
    "text": " В",
    "startMs": 39820,
    "endMs": 39900,
    "timestampMs": 39860,
    "confidence": 0.99841
  },
  {
    "text": " новой",
    "startMs": 39900,
    "endMs": 40060,
    "timestampMs": 39980,
    "confidence": 0.999534
  },
  {
    "text": " версии",
    "startMs": 40060,
    "endMs": 40360,
    "timestampMs": 40210,
    "confidence": 0.999919
  },
  {
    "text": " больше",
    "startMs": 40360,
    "endMs": 40600,
    "timestampMs": 40480,
    "confidence": 0.938646,
    "pageBreakAfter": true
  },
  {
    "text": " одного",
    "startMs": 40600,
    "endMs": 40920,
    "timestampMs": 40760,
    "confidence": 0.997872
  },
  {
    "text": " заряда.",
    "startMs": 40920,
    "endMs": 41340,
    "timestampMs": 41130,
    "confidence": 0.997657,
    "pageBreakAfter": true
  },
  {
    "text": " Теперь",
    "startMs": 41500,
    "endMs": 41900,
    "timestampMs": 41700,
    "confidence": 0.998937
  },
  {
    "text": " я",
    "startMs": 41900,
    "endMs": 42080,
    "timestampMs": 41990,
    "confidence": 0.999872
  },
  {
    "text": " могу",
    "startMs": 42080,
    "endMs": 42300,
    "timestampMs": 42190,
    "confidence": 0.999677
  },
  {
    "text": " стереть",
    "startMs": 42300,
    "endMs": 42580,
    "timestampMs": 42440,
    "confidence": 0.998937,
    "pageBreakAfter": true
  },
  {
    "text": " всю",
    "startMs": 42580,
    "endMs": 42780,
    "timestampMs": 42680,
    "confidence": 0.999711
  },
  {
    "text": " твою",
    "startMs": 42780,
    "endMs": 43160,
    "timestampMs": 42970,
    "confidence": 0.999915
  },
  {
    "text": " семью.",
    "startMs": 43160,
    "endMs": 43520,
    "timestampMs": 43340,
    "confidence": 0.999909,
    "pageBreakAfter": true
  },
  {
    "text": " Одного",
    "startMs": 43740,
    "endMs": 44180,
    "timestampMs": 43960,
    "confidence": 0.998146
  },
  {
    "text": " за",
    "startMs": 44180,
    "endMs": 44320,
    "timestampMs": 44250,
    "confidence": 0.999951
  },
  {
    "text": " другим,",
    "startMs": 44320,
    "endMs": 44660,
    "timestampMs": 44490,
    "confidence": 0.999946
  },
  {
    "text": " пока",
    "startMs": 44760,
    "endMs": 44860,
    "timestampMs": 44810,
    "confidence": 0.999871,
    "pageBreakAfter": true
  },
  {
    "text": " ты",
    "startMs": 44860,
    "endMs": 45040,
    "timestampMs": 44950,
    "confidence": 0.999892
  },
  {
    "text": " наконец-то",
    "startMs": 45040,
    "endMs": 45500,
    "timestampMs": 45270,
    "confidence": 0.708526
  },
  {
    "text": " не",
    "startMs": 45500,
    "endMs": 45620,
    "timestampMs": 45560,
    "confidence": 0.999948
  },
  {
    "text": " усвоишь",
    "startMs": 45620,
    "endMs": 46020,
    "timestampMs": 45820,
    "confidence": 0.999163,
    "pageBreakAfter": true
  },
  {
    "text": " урок.",
    "startMs": 46020,
    "endMs": 46300,
    "timestampMs": 46160,
    "confidence": 0.990092,
    "pageBreakAfter": true
  },
  {
    "text": " А",
    "startMs": 46480,
    "endMs": 46700,
    "timestampMs": 46590,
    "confidence": 0.999758
  },
  {
    "text": " ты",
    "startMs": 46700,
    "endMs": 46840,
    "timestampMs": 46770,
    "confidence": 0.999411
  },
  {
    "text": " его",
    "startMs": 46840,
    "endMs": 46980,
    "timestampMs": 46910,
    "confidence": 0.999876
  },
  {
    "text": " не",
    "startMs": 46980,
    "endMs": 47100,
    "timestampMs": 47040,
    "confidence": 0.999962,
    "pageBreakAfter": true
  },
  {
    "text": " усвоишь,",
    "startMs": 47100,
    "endMs": 47520,
    "timestampMs": 47310,
    "confidence": 0.998711
  },
  {
    "text": " так",
    "startMs": 47560,
    "endMs": 47640,
    "timestampMs": 47600,
    "confidence": 0.999807
  },
  {
    "text": " что",
    "startMs": 47640,
    "endMs": 47760,
    "timestampMs": 47700,
    "confidence": 0.999736
  },
  {
    "text": " потом",
    "startMs": 47760,
    "endMs": 48020,
    "timestampMs": 47890,
    "confidence": 0.999835,
    "pageBreakAfter": true
  },
  {
    "text": " я",
    "startMs": 48020,
    "endMs": 48180,
    "timestampMs": 48100,
    "confidence": 0.999971
  },
  {
    "text": " убью",
    "startMs": 48180,
    "endMs": 48540,
    "timestampMs": 48360,
    "confidence": 0.999601
  },
  {
    "text": " и",
    "startMs": 48540,
    "endMs": 48680,
    "timestampMs": 48610,
    "confidence": 0.998599
  },
  {
    "text": " тебя.",
    "startMs": 48680,
    "endMs": 48940,
    "timestampMs": 48810,
    "confidence": 0.999268,
    "pageBreakAfter": true
  },
  {
    "text": " Но",
    "startMs": 51320,
    "endMs": 51760,
    "timestampMs": 51540,
    "confidence": 0.998417
  },
  {
    "text": " сделаю",
    "startMs": 51760,
    "endMs": 52180,
    "timestampMs": 51970,
    "confidence": 0.999185
  },
  {
    "text": " это",
    "startMs": 52180,
    "endMs": 52340,
    "timestampMs": 52260,
    "confidence": 0.999935
  },
  {
    "text": " по",
    "startMs": 52340,
    "endMs": 52560,
    "timestampMs": 52450,
    "confidence": 0.999251,
    "pageBreakAfter": true
  },
  {
    "text": " старинке.",
    "startMs": 52560,
    "endMs": 53060,
    "timestampMs": 52810,
    "confidence": 0.998016,
    "pageBreakAfter": true
  },
  {
    "text": " Ладушки,",
    "startMs": 54120,
    "endMs": 54560,
    "timestampMs": 54340,
    "confidence": 0.992172
  },
  {
    "text": " пора",
    "startMs": 54700,
    "endMs": 54940,
    "timestampMs": 54820,
    "confidence": 0.99981
  },
  {
    "text": " вырезать",
    "startMs": 54940,
    "endMs": 55420,
    "timestampMs": 55180,
    "confidence": 0.999878,
    "pageBreakAfter": true
  },
  {
    "text": " семейку.",
    "startMs": 55420,
    "endMs": 56000,
    "timestampMs": 55710,
    "confidence": 0.999599,
    "pageBreakAfter": true
  },
  {
    "text": " Начнём",
    "startMs": 56320,
    "endMs": 56760,
    "timestampMs": 56540,
    "confidence": 0.893024
  },
  {
    "text": " с",
    "startMs": 56760,
    "endMs": 56880,
    "timestampMs": 56820,
    "confidence": 0.999976
  },
  {
    "text": " малого,",
    "startMs": 56880,
    "endMs": 57180,
    "timestampMs": 57030,
    "confidence": 0.997496
  },
  {
    "text": " но",
    "startMs": 57260,
    "endMs": 57360,
    "timestampMs": 57310,
    "confidence": 0.99495,
    "pageBreakAfter": true
  },
  {
    "text": " он",
    "startMs": 57360,
    "endMs": 57580,
    "timestampMs": 57470,
    "confidence": 0.99959
  },
  {
    "text": " тоже",
    "startMs": 57580,
    "endMs": 57900,
    "timestampMs": 57740,
    "confidence": 0.999907
  },
  {
    "text": " как",
    "startMs": 57900,
    "endMs": 58060,
    "timestampMs": 57980,
    "confidence": 0.996708
  },
  {
    "text": " родной.",
    "startMs": 58060,
    "endMs": 58420,
    "timestampMs": 58240,
    "confidence": 0.999865,
    "pageBreakAfter": true
  },
  {
    "text": " Где",
    "startMs": 58740,
    "endMs": 59000,
    "timestampMs": 58870,
    "confidence": 0.996291
  },
  {
    "text": " я?",
    "startMs": 59000,
    "endMs": 59320,
    "timestampMs": 59160,
    "confidence": 0.999918,
    "pageBreakAfter": true
  },
  {
    "text": " Два,",
    "startMs": 59500,
    "endMs": 59940,
    "timestampMs": 59720,
    "confidence": 0.83324
  },
  {
    "text": " Рика!",
    "startMs": 60120,
    "endMs": 60440,
    "timestampMs": 60280,
    "confidence": 0.96552,
    "pageBreakAfter": true
  },
  {
    "text": " Где",
    "startMs": 60700,
    "endMs": 61000,
    "timestampMs": 60850,
    "confidence": 0.994366
  },
  {
    "text": " моя",
    "startMs": 61000,
    "endMs": 61160,
    "timestampMs": 61080,
    "confidence": 0.999773
  },
  {
    "text": " жена?",
    "startMs": 61160,
    "endMs": 61380,
    "timestampMs": 61270,
    "confidence": 0.999685,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 61520,
    "endMs": 61660,
    "timestampMs": 61590,
    "confidence": 0.999608
  },
  {
    "text": " был",
    "startMs": 61660,
    "endMs": 61820,
    "timestampMs": 61740,
    "confidence": 0.965343
  },
  {
    "text": " со",
    "startMs": 61820,
    "endMs": 61920,
    "timestampMs": 61870,
    "confidence": 0.990713
  },
  {
    "text": " своей",
    "startMs": 61920,
    "endMs": 62120,
    "timestampMs": 62020,
    "confidence": 0.999191,
    "pageBreakAfter": true
  },
  {
    "text": " женой!",
    "startMs": 62120,
    "endMs": 62500,
    "timestampMs": 62310,
    "confidence": 0.999937,
    "pageBreakAfter": true
  },
  {
    "text": " Дядюшка",
    "startMs": 63060,
    "endMs": 63600,
    "timestampMs": 63330,
    "confidence": 0.951738
  },
  {
    "text": " Слоу!",
    "startMs": 63600,
    "endMs": 64420,
    "timestampMs": 64010,
    "confidence": 0.934422,
    "pageBreakAfter": true
  },
  {
    "text": " Какой",
    "startMs": 64500,
    "endMs": 64800,
    "timestampMs": 64650,
    "confidence": 0.987612
  },
  {
    "text": " нахуй",
    "startMs": 64800,
    "endMs": 65100,
    "timestampMs": 64950,
    "confidence": 0.981002
  },
  {
    "text": " Дядюшка",
    "startMs": 65100,
    "endMs": 65520,
    "timestampMs": 65310,
    "confidence": 0.920927,
    "pageBreakAfter": true
  },
  {
    "text": " Слоу?",
    "startMs": 65520,
    "endMs": 65880,
    "timestampMs": 65700,
    "confidence": 0.999754,
    "pageBreakAfter": true
  },
  {
    "text": " Слоу-Мобиус?",
    "startMs": 65980,
    "endMs": 66780,
    "timestampMs": 66380,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Да,",
    "startMs": 66920,
    "endMs": 67260,
    "timestampMs": 67090,
    "confidence": 0.913457,
    "pageBreakAfter": true
  },
  {
    "text": " мне",
    "startMs": 67560,
    "endMs": 67660,
    "timestampMs": 67610,
    "confidence": 0.995738
  },
  {
    "text": " тоже",
    "startMs": 67660,
    "endMs": 67920,
    "timestampMs": 67790,
    "confidence": 0.997469
  },
  {
    "text": " будет",
    "startMs": 67920,
    "endMs": 68200,
    "timestampMs": 68060,
    "confidence": 0.996064
  },
  {
    "text": " больно.",
    "startMs": 68200,
    "endMs": 68640,
    "timestampMs": 68420,
    "confidence": 0.999829,
    "pageBreakAfter": true
  }
]
} />;
export const Video08 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="08-finale-1" durationInFrames={2094} premountFor={fps}>
      <ScenePicture src={staticFile("media/08-finale-1.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header08 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions08 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header09 = () => <ClipHeader title={"Прайм не заметил\nГЛАВНУЮ подмену"} series={"Финал охоты"} part={2} parts={3} />;
export const Captions09 = () => <DynamicCaptions captions={
[
  {
    "text": " Что",
    "startMs": 6460,
    "endMs": 6940,
    "timestampMs": 6700,
    "confidence": 0.811012
  },
  {
    "text": " ж,",
    "startMs": 6940,
    "endMs": 7280,
    "timestampMs": 7110,
    "confidence": 0.952959,
    "pageBreakAfter": true
  },
  {
    "text": " мой",
    "startMs": 7580,
    "endMs": 7800,
    "timestampMs": 7690,
    "confidence": 0.976695
  },
  {
    "text": " родной",
    "startMs": 7800,
    "endMs": 8220,
    "timestampMs": 8010,
    "confidence": 0.998328
  },
  {
    "text": " внучок.",
    "startMs": 8220,
    "endMs": 8720,
    "timestampMs": 8470,
    "confidence": 0.982893,
    "pageBreakAfter": true
  },
  {
    "text": " Странные,",
    "startMs": 9000,
    "endMs": 9540,
    "timestampMs": 9270,
    "confidence": 0.983149
  },
  {
    "text": " конечно,",
    "startMs": 9540,
    "endMs": 9720,
    "timestampMs": 9630,
    "confidence": 0.998781,
    "pageBreakAfter": true
  },
  {
    "text": " обстоятельства.",
    "startMs": 9840,
    "endMs": 10580,
    "timestampMs": 10210,
    "confidence": 0.999671,
    "pageBreakAfter": true
  },
  {
    "text": " Ну,",
    "startMs": 10780,
    "endMs": 10940,
    "timestampMs": 10860,
    "confidence": 0.371585
  },
  {
    "text": " то",
    "startMs": 10940,
    "endMs": 10980,
    "timestampMs": 10960,
    "confidence": 0.979951
  },
  {
    "text": " есть",
    "startMs": 10980,
    "endMs": 11040,
    "timestampMs": 11010,
    "confidence": 0.99956
  },
  {
    "text": " мы",
    "startMs": 11040,
    "endMs": 11160,
    "timestampMs": 11100,
    "confidence": 0.720615,
    "pageBreakAfter": true
  },
  {
    "text": " пытаемся",
    "startMs": 11160,
    "endMs": 11560,
    "timestampMs": 11360,
    "confidence": 0.999593
  },
  {
    "text": " убить",
    "startMs": 11560,
    "endMs": 12020,
    "timestampMs": 11790,
    "confidence": 0.99747
  },
  {
    "text": " друг",
    "startMs": 12020,
    "endMs": 12200,
    "timestampMs": 12110,
    "confidence": 0.998155,
    "pageBreakAfter": true
  },
  {
    "text": " друга.",
    "startMs": 12200,
    "endMs": 12620,
    "timestampMs": 12410,
    "confidence": 0.999904,
    "pageBreakAfter": true
  },
  {
    "text": " Ох,",
    "startMs": 13100,
    "endMs": 13440,
    "timestampMs": 13270,
    "confidence": 0.895359
  },
  {
    "text": " блин.",
    "startMs": 13520,
    "endMs": 13760,
    "timestampMs": 13640,
    "confidence": 0.999719,
    "pageBreakAfter": true
  },
  {
    "text": " Ну,",
    "startMs": 13960,
    "endMs": 14200,
    "timestampMs": 14080,
    "confidence": 0.997635
  },
  {
    "text": " я",
    "startMs": 14400,
    "endMs": 14500,
    "timestampMs": 14450,
    "confidence": 0.999768
  },
  {
    "text": " рад",
    "startMs": 14500,
    "endMs": 14700,
    "timestampMs": 14600,
    "confidence": 0.992717
  },
  {
    "text": " знакомству,",
    "startMs": 14700,
    "endMs": 15220,
    "timestampMs": 14960,
    "confidence": 0.997764,
    "pageBreakAfter": true
  },
  {
    "text": " наверное.",
    "startMs": 15380,
    "endMs": 15640,
    "timestampMs": 15510,
    "confidence": 0.999761,
    "pageBreakAfter": true
  },
  {
    "text": " Ну,",
    "startMs": 15920,
    "endMs": 16180,
    "timestampMs": 16050,
    "confidence": 0.998456
  },
  {
    "text": " я",
    "startMs": 16400,
    "endMs": 16620,
    "timestampMs": 16510,
    "confidence": 0.999603
  },
  {
    "text": " тогда",
    "startMs": 16620,
    "endMs": 16940,
    "timestampMs": 16780,
    "confidence": 0.999632
  },
  {
    "text": " сразу",
    "startMs": 16940,
    "endMs": 17600,
    "timestampMs": 17270,
    "confidence": 0.996935,
    "pageBreakAfter": true
  },
  {
    "text": " к",
    "startMs": 17600,
    "endMs": 17760,
    "timestampMs": 17680,
    "confidence": 0.999683
  },
  {
    "text": " делу",
    "startMs": 17760,
    "endMs": 18080,
    "timestampMs": 17920,
    "confidence": 0.999731
  },
  {
    "text": " перейду,",
    "startMs": 18080,
    "endMs": 18420,
    "timestampMs": 18250,
    "confidence": 0.989789
  },
  {
    "text": " или...",
    "startMs": 18460,
    "endMs": 19200,
    "timestampMs": 18830,
    "confidence": 0.983179,
    "pageBreakAfter": true
  },
  {
    "text": " Клёвый",
    "startMs": 21670,
    "endMs": 22250,
    "timestampMs": 21960,
    "confidence": 0.769706
  },
  {
    "text": " внучок.",
    "startMs": 22250,
    "endMs": 22830,
    "timestampMs": 22540,
    "confidence": 0.970631,
    "pageBreakAfter": true
  },
  {
    "text": " Херовый",
    "startMs": 25010,
    "endMs": 25570,
    "timestampMs": 25290,
    "confidence": 0.864546
  },
  {
    "text": " дедуля.",
    "startMs": 25570,
    "endMs": 25990,
    "timestampMs": 25780,
    "confidence": 0.998065,
    "pageBreakAfter": true
  },
  {
    "text": " Почему",
    "startMs": 27410,
    "endMs": 27970,
    "timestampMs": 27690,
    "confidence": 0.672939
  },
  {
    "text": " на",
    "startMs": 27970,
    "endMs": 28230,
    "timestampMs": 28100,
    "confidence": 0.602488
  },
  {
    "text": " мне",
    "startMs": 28230,
    "endMs": 28350,
    "timestampMs": 28290,
    "confidence": 0.998699
  },
  {
    "text": " повязка?",
    "startMs": 28350,
    "endMs": 29030,
    "timestampMs": 28690,
    "confidence": 0.999648,
    "pageBreakAfter": true
  },
  {
    "text": " И,",
    "startMs": 29730,
    "endMs": 30230,
    "timestampMs": 29980,
    "confidence": 0.867433
  },
  {
    "text": " погоди,",
    "startMs": 30430,
    "endMs": 30790,
    "timestampMs": 30610,
    "confidence": 0.998635
  },
  {
    "text": " мы",
    "startMs": 30930,
    "endMs": 31110,
    "timestampMs": 31020,
    "confidence": 0.998804
  },
  {
    "text": " что,",
    "startMs": 31110,
    "endMs": 31250,
    "timestampMs": 31180,
    "confidence": 0.992633,
    "pageBreakAfter": true
  },
  {
    "text": " футболками",
    "startMs": 31370,
    "endMs": 31890,
    "timestampMs": 31630,
    "confidence": 0.998421
  },
  {
    "text": " поменялись?",
    "startMs": 31890,
    "endMs": 32470,
    "timestampMs": 32180,
    "confidence": 0.999687,
    "pageBreakAfter": true
  },
  {
    "text": " Да,",
    "startMs": 32570,
    "endMs": 32750,
    "timestampMs": 32660,
    "confidence": 0.988191,
    "pageBreakAfter": true
  },
  {
    "text": " спасибо",
    "startMs": 33170,
    "endMs": 33430,
    "timestampMs": 33300,
    "confidence": 0.998414
  },
  {
    "text": " за",
    "startMs": 33430,
    "endMs": 33710,
    "timestampMs": 33570,
    "confidence": 0.998756
  },
  {
    "text": " помощь.",
    "startMs": 33710,
    "endMs": 34230,
    "timestampMs": 33970,
    "confidence": 0.998663,
    "pageBreakAfter": true
  },
  {
    "text": " Рик,",
    "startMs": 34890,
    "endMs": 35290,
    "timestampMs": 35090,
    "confidence": 0.994602
  },
  {
    "text": " у",
    "startMs": 35450,
    "endMs": 35550,
    "timestampMs": 35500,
    "confidence": 0.999345
  },
  {
    "text": " нас",
    "startMs": 35550,
    "endMs": 35690,
    "timestampMs": 35620,
    "confidence": 0.99981
  },
  {
    "text": " получилось.",
    "startMs": 35690,
    "endMs": 36250,
    "timestampMs": 35970,
    "confidence": 0.998055,
    "pageBreakAfter": true
  },
  {
    "text": " Злой",
    "startMs": 36910,
    "endMs": 37430,
    "timestampMs": 37170,
    "confidence": 0.902539
  },
  {
    "text": " Морти",
    "startMs": 37430,
    "endMs": 37670,
    "timestampMs": 37550,
    "confidence": 0.961209
  },
  {
    "text": " разделался",
    "startMs": 37670,
    "endMs": 38250,
    "timestampMs": 37960,
    "confidence": 0.995091
  },
  {
    "text": " с",
    "startMs": 38250,
    "endMs": 38410,
    "timestampMs": 38330,
    "confidence": 0.998861,
    "pageBreakAfter": true
  },
  {
    "text": " ним.",
    "startMs": 38410,
    "endMs": 38590,
    "timestampMs": 38500,
    "confidence": 0.998853,
    "pageBreakAfter": true
  },
  {
    "text": " Рик?",
    "startMs": 39050,
    "endMs": 39570,
    "timestampMs": 39310,
    "confidence": 0.985677,
    "pageBreakAfter": true
  },
  {
    "text": " Вы",
    "startMs": 42860,
    "endMs": 43380,
    "timestampMs": 43120,
    "confidence": 0.982321
  },
  {
    "text": " пока",
    "startMs": 43380,
    "endMs": 43640,
    "timestampMs": 43510,
    "confidence": 0.998674
  },
  {
    "text": " не",
    "startMs": 43640,
    "endMs": 43800,
    "timestampMs": 43720,
    "confidence": 0.99984,
    "pageBreakAfter": true
  },
  {
    "text": " разбредайтесь,",
    "startMs": 43800,
    "endMs": 44440,
    "timestampMs": 44120,
    "confidence": 0.981417
  },
  {
    "text": " шелупонь.",
    "startMs": 44560,
    "endMs": 45000,
    "timestampMs": 44780,
    "confidence": 0.827478,
    "pageBreakAfter": true
  },
  {
    "text": " Ладно,",
    "startMs": 46260,
    "endMs": 46820,
    "timestampMs": 46540,
    "confidence": 0.929762,
    "pageBreakAfter": true
  },
  {
    "text": " кажется,",
    "startMs": 47140,
    "endMs": 47380,
    "timestampMs": 47260,
    "confidence": 0.997253
  },
  {
    "text": " я",
    "startMs": 47400,
    "endMs": 47680,
    "timestampMs": 47540,
    "confidence": 0.999647
  },
  {
    "text": " понял.",
    "startMs": 47680,
    "endMs": 48000,
    "timestampMs": 47840,
    "confidence": 0.99948,
    "pageBreakAfter": true
  },
  {
    "text": " Убиваешь",
    "startMs": 50120,
    "endMs": 50640,
    "timestampMs": 50380,
    "confidence": 0.99408
  },
  {
    "text": " мои",
    "startMs": 50640,
    "endMs": 50820,
    "timestampMs": 50730,
    "confidence": 0.976031
  },
  {
    "text": " копии.",
    "startMs": 50820,
    "endMs": 51220,
    "timestampMs": 51020,
    "confidence": 0.986043,
    "pageBreakAfter": true
  },
  {
    "text": " Зачёт.",
    "startMs": 51340,
    "endMs": 51820,
    "timestampMs": 51580,
    "confidence": 0.970003,
    "pageBreakAfter": true
  },
  {
    "text": " Так",
    "startMs": 51980,
    "endMs": 52140,
    "timestampMs": 52060,
    "confidence": 0.991714
  },
  {
    "text": " ты",
    "startMs": 52140,
    "endMs": 52320,
    "timestampMs": 52230,
    "confidence": 0.998706
  },
  {
    "text": " типа",
    "startMs": 52320,
    "endMs": 52560,
    "timestampMs": 52440,
    "confidence": 0.951103
  },
  {
    "text": " злой,",
    "startMs": 52560,
    "endMs": 52980,
    "timestampMs": 52770,
    "confidence": 0.990922,
    "pageBreakAfter": true
  },
  {
    "text": " Морти.",
    "startMs": 53080,
    "endMs": 53340,
    "timestampMs": 53210,
    "confidence": 0.993552,
    "pageBreakAfter": true
  },
  {
    "text": " Типа",
    "startMs": 53480,
    "endMs": 53860,
    "timestampMs": 53670,
    "confidence": 0.997483
  },
  {
    "text": " умный.",
    "startMs": 53860,
    "endMs": 54340,
    "timestampMs": 54100,
    "confidence": 0.993766,
    "pageBreakAfter": true
  },
  {
    "text": " Хорошо.",
    "startMs": 55640,
    "endMs": 56160,
    "timestampMs": 55900,
    "confidence": 0.987862,
    "pageBreakAfter": true
  },
  {
    "text": " Никогда",
    "startMs": 56440,
    "endMs": 56820,
    "timestampMs": 56630,
    "confidence": 0.997365
  },
  {
    "text": " не",
    "startMs": 56820,
    "endMs": 56940,
    "timestampMs": 56880,
    "confidence": 0.99996
  },
  {
    "text": " любил",
    "startMs": 56940,
    "endMs": 57200,
    "timestampMs": 57070,
    "confidence": 0.999795
  },
  {
    "text": " тему",
    "startMs": 57200,
    "endMs": 57400,
    "timestampMs": 57300,
    "confidence": 0.996188,
    "pageBreakAfter": true
  },
  {
    "text": " с",
    "startMs": 57400,
    "endMs": 57500,
    "timestampMs": 57450,
    "confidence": 0.999408
  },
  {
    "text": " напарниками,",
    "startMs": 57500,
    "endMs": 58000,
    "timestampMs": 57750,
    "confidence": 0.997861
  },
  {
    "text": " но",
    "startMs": 58040,
    "endMs": 58100,
    "timestampMs": 58070,
    "confidence": 0.999069
  },
  {
    "text": " теперь",
    "startMs": 58100,
    "endMs": 58300,
    "timestampMs": 58200,
    "confidence": 0.999537,
    "pageBreakAfter": true
  },
  {
    "text": " понимаю",
    "startMs": 58300,
    "endMs": 58680,
    "timestampMs": 58490,
    "confidence": 0.997733
  },
  {
    "text": " её",
    "startMs": 58680,
    "endMs": 58860,
    "timestampMs": 58770,
    "confidence": 0.999173
  },
  {
    "text": " ценность.",
    "startMs": 58860,
    "endMs": 59300,
    "timestampMs": 59080,
    "confidence": 0.999276,
    "pageBreakAfter": true
  },
  {
    "text": " Работа",
    "startMs": 59400,
    "endMs": 59840,
    "timestampMs": 59620,
    "confidence": 0.999056
  },
  {
    "text": " нужна?",
    "startMs": 59840,
    "endMs": 60100,
    "timestampMs": 59970,
    "confidence": 0.999948,
    "pageBreakAfter": true
  },
  {
    "text": " Будем",
    "startMs": 60220,
    "endMs": 60480,
    "timestampMs": 60350,
    "confidence": 0.999671
  },
  {
    "text": " как",
    "startMs": 60480,
    "endMs": 60600,
    "timestampMs": 60540,
    "confidence": 0.99599
  },
  {
    "text": " Бэтмен",
    "startMs": 60600,
    "endMs": 60880,
    "timestampMs": 60740,
    "confidence": 0.9877
  },
  {
    "text": " и",
    "startMs": 60880,
    "endMs": 60960,
    "timestampMs": 60920,
    "confidence": 0.999726,
    "pageBreakAfter": true
  },
  {
    "text": " Робин.",
    "startMs": 60960,
    "endMs": 61220,
    "timestampMs": 61090,
    "confidence": 0.999163,
    "pageBreakAfter": true
  },
  {
    "text": " Ах,",
    "startMs": 61660,
    "endMs": 62120,
    "timestampMs": 61890,
    "confidence": 0.427887
  },
  {
    "text": " мне",
    "startMs": 62320,
    "endMs": 62580,
    "timestampMs": 62450,
    "confidence": 0.999216
  },
  {
    "text": " не",
    "startMs": 62580,
    "endMs": 62740,
    "timestampMs": 62660,
    "confidence": 0.999626
  },
  {
    "text": " нужен",
    "startMs": 62740,
    "endMs": 63020,
    "timestampMs": 62880,
    "confidence": 0.99961,
    "pageBreakAfter": true
  },
  {
    "text": " Робин.",
    "startMs": 63020,
    "endMs": 63400,
    "timestampMs": 63210,
    "confidence": 0.918523,
    "pageBreakAfter": true
  },
  {
    "text": " Не",
    "startMs": 63940,
    "endMs": 64460,
    "timestampMs": 64200,
    "confidence": 0.997515
  },
  {
    "text": " нужны",
    "startMs": 64460,
    "endMs": 64820,
    "timestampMs": 64640,
    "confidence": 0.999861
  },
  {
    "text": " тебе",
    "startMs": 64820,
    "endMs": 65020,
    "timestampMs": 64920,
    "confidence": 0.999475
  },
  {
    "text": " эти",
    "startMs": 65020,
    "endMs": 65160,
    "timestampMs": 65090,
    "confidence": 0.999653,
    "pageBreakAfter": true
  },
  {
    "text": " чертежи,",
    "startMs": 65160,
    "endMs": 65560,
    "timestampMs": 65360,
    "confidence": 0.999243
  },
  {
    "text": " приятель,",
    "startMs": 65660,
    "endMs": 65940,
    "timestampMs": 65800,
    "confidence": 0.992476
  },
  {
    "text": " они",
    "startMs": 66020,
    "endMs": 66160,
    "timestampMs": 66090,
    "confidence": 0.988302,
    "pageBreakAfter": true
  },
  {
    "text": " для",
    "startMs": 66160,
    "endMs": 66320,
    "timestampMs": 66240,
    "confidence": 0.999811
  },
  {
    "text": " взрослых.",
    "startMs": 66320,
    "endMs": 66960,
    "timestampMs": 66640,
    "confidence": 0.999898,
    "pageBreakAfter": true
  },
  {
    "text": " Ага.",
    "startMs": 67500,
    "endMs": 67900,
    "timestampMs": 67700,
    "confidence": 0.997642,
    "pageBreakAfter": true
  },
  {
    "text": " Ну",
    "startMs": 73550,
    "endMs": 73960,
    "timestampMs": 73755,
    "confidence": 0.989031
  },
  {
    "text": " разве",
    "startMs": 73960,
    "endMs": 74400,
    "timestampMs": 74180,
    "confidence": 0.97221
  },
  {
    "text": " не",
    "startMs": 74400,
    "endMs": 74460,
    "timestampMs": 74430,
    "confidence": 0.999562
  },
  {
    "text": " здорово?",
    "startMs": 74460,
    "endMs": 74980,
    "timestampMs": 74720,
    "confidence": 0.999796,
    "pageBreakAfter": true
  },
  {
    "text": " Ладно,",
    "startMs": 75080,
    "endMs": 75460,
    "timestampMs": 75270,
    "confidence": 0.999621
  },
  {
    "text": " я",
    "startMs": 75520,
    "endMs": 75620,
    "timestampMs": 75570,
    "confidence": 0.999855
  },
  {
    "text": " всё",
    "startMs": 75620,
    "endMs": 75820,
    "timestampMs": 75720,
    "confidence": 0.896296
  },
  {
    "text": " понял.",
    "startMs": 75820,
    "endMs": 76280,
    "timestampMs": 76050,
    "confidence": 0.999643,
    "pageBreakAfter": true
  },
  {
    "text": " Что?",
    "startMs": 78840,
    "endMs": 79660,
    "timestampMs": 79250,
    "confidence": 0.97177,
    "pageBreakAfter": true
  },
  {
    "text": " Твою",
    "startMs": 80220,
    "endMs": 81040,
    "timestampMs": 80630,
    "confidence": 0.998148
  },
  {
    "text": " мать!",
    "startMs": 81040,
    "endMs": 81420,
    "timestampMs": 81230,
    "confidence": 0.999748,
    "pageBreakAfter": true
  },
  {
    "text": " Угу.",
    "startMs": 81860,
    "endMs": 82220,
    "timestampMs": 82040,
    "confidence": 0.687579,
    "pageBreakAfter": true
  },
  {
    "text": " Развлекайся.",
    "startMs": 82720,
    "endMs": 83540,
    "timestampMs": 83130,
    "confidence": 0.993179,
    "pageBreakAfter": true
  }
]
} />;
export const Video09 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="09-finale-2" durationInFrames={2523} premountFor={fps}>
      <ScenePicture src={staticFile("media/09-finale-2.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header09 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions09 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const Header10 = () => <ClipHeader title={"Месть сбылась.\nПочему легче не стало?"} series={"Финал охоты"} part={3} parts={3} />;
export const Captions10 = () => <DynamicCaptions captions={
[
  {
    "text": " Слушай,",
    "startMs": 640,
    "endMs": 1160,
    "timestampMs": 900,
    "confidence": 0.984049
  },
  {
    "text": " скажу",
    "startMs": 1300,
    "endMs": 1560,
    "timestampMs": 1430,
    "confidence": 0.99854
  },
  {
    "text": " тебе,",
    "startMs": 1560,
    "endMs": 1700,
    "timestampMs": 1630,
    "confidence": 0.999636
  },
  {
    "text": " как",
    "startMs": 1780,
    "endMs": 1840,
    "timestampMs": 1810,
    "confidence": 0.99853,
    "pageBreakAfter": true
  },
  {
    "text": " Рик",
    "startMs": 1840,
    "endMs": 2080,
    "timestampMs": 1960,
    "confidence": 0.828254
  },
  {
    "text": " Рику.",
    "startMs": 2080,
    "endMs": 2400,
    "timestampMs": 2240,
    "confidence": 0.976246,
    "pageBreakAfter": true
  },
  {
    "text": " Он",
    "startMs": 2520,
    "endMs": 2660,
    "timestampMs": 2590,
    "confidence": 0.999309
  },
  {
    "text": " получил",
    "startMs": 2660,
    "endMs": 3020,
    "timestampMs": 2840,
    "confidence": 0.999904
  },
  {
    "text": " чертежи",
    "startMs": 3020,
    "endMs": 3400,
    "timestampMs": 3210,
    "confidence": 0.997477,
    "pageBreakAfter": true
  },
  {
    "text": " оружия.",
    "startMs": 3400,
    "endMs": 3820,
    "timestampMs": 3610,
    "confidence": 0.967439,
    "pageBreakAfter": true
  },
  {
    "text": " Руби",
    "startMs": 4000,
    "endMs": 4340,
    "timestampMs": 4170,
    "confidence": 0.997567
  },
  {
    "text": " проблему",
    "startMs": 4340,
    "endMs": 4720,
    "timestampMs": 4530,
    "confidence": 0.817924
  },
  {
    "text": " на",
    "startMs": 4720,
    "endMs": 4840,
    "timestampMs": 4780,
    "confidence": 0.970546
  },
  {
    "text": " корню,",
    "startMs": 4840,
    "endMs": 5100,
    "timestampMs": 4970,
    "confidence": 0.96123,
    "pageBreakAfter": true
  },
  {
    "text": " дружище.",
    "startMs": 5200,
    "endMs": 5640,
    "timestampMs": 5420,
    "confidence": 0.999637,
    "pageBreakAfter": true
  },
  {
    "text": " Ему",
    "startMs": 5820,
    "endMs": 6140,
    "timestampMs": 5980,
    "confidence": 0.998739
  },
  {
    "text": " 14",
    "startMs": 6140,
    "endMs": 6540,
    "timestampMs": 6340,
    "confidence": 0.894817
  },
  {
    "text": " лет.",
    "startMs": 6540,
    "endMs": 6980,
    "timestampMs": 6760,
    "confidence": 0.999926,
    "pageBreakAfter": true
  },
  {
    "text": " Что",
    "startMs": 7100,
    "endMs": 7180,
    "timestampMs": 7140,
    "confidence": 0.99744
  },
  {
    "text": " будет",
    "startMs": 7180,
    "endMs": 7300,
    "timestampMs": 7240,
    "confidence": 0.80041
  },
  {
    "text": " в",
    "startMs": 7300,
    "endMs": 7440,
    "timestampMs": 7370,
    "confidence": 0.975529
  },
  {
    "text": " следующий",
    "startMs": 7440,
    "endMs": 7760,
    "timestampMs": 7600,
    "confidence": 0.99961,
    "pageBreakAfter": true
  },
  {
    "text": " раз,",
    "startMs": 7760,
    "endMs": 7900,
    "timestampMs": 7830,
    "confidence": 0.999872
  },
  {
    "text": " когда",
    "startMs": 7980,
    "endMs": 8100,
    "timestampMs": 8040,
    "confidence": 0.999757
  },
  {
    "text": " он",
    "startMs": 8100,
    "endMs": 8200,
    "timestampMs": 8150,
    "confidence": 0.999837
  },
  {
    "text": " разозлится",
    "startMs": 8200,
    "endMs": 8640,
    "timestampMs": 8420,
    "confidence": 0.995853,
    "pageBreakAfter": true
  },
  {
    "text": " на",
    "startMs": 8640,
    "endMs": 8800,
    "timestampMs": 8720,
    "confidence": 0.998859
  },
  {
    "text": " деда?",
    "startMs": 8800,
    "endMs": 9120,
    "timestampMs": 8960,
    "confidence": 0.999187,
    "pageBreakAfter": true
  },
  {
    "text": " Ну",
    "startMs": 11980,
    "endMs": 12500,
    "timestampMs": 12240,
    "confidence": 0.970385
  },
  {
    "text": " ладно,",
    "startMs": 12500,
    "endMs": 12760,
    "timestampMs": 12630,
    "confidence": 0.970232
  },
  {
    "text": " давай.",
    "startMs": 12920,
    "endMs": 13180,
    "timestampMs": 13050,
    "confidence": 0.999737,
    "pageBreakAfter": true
  },
  {
    "text": " Кстати,",
    "startMs": 14500,
    "endMs": 15020,
    "timestampMs": 14760,
    "confidence": 0.99859
  },
  {
    "text": " можешь",
    "startMs": 15080,
    "endMs": 15360,
    "timestampMs": 15220,
    "confidence": 0.999463
  },
  {
    "text": " не",
    "startMs": 15360,
    "endMs": 15520,
    "timestampMs": 15440,
    "confidence": 0.995621,
    "pageBreakAfter": true
  },
  {
    "text": " благодарить.",
    "startMs": 15520,
    "endMs": 16200,
    "timestampMs": 15860,
    "confidence": 0.998508,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 16300,
    "endMs": 16580,
    "timestampMs": 16440,
    "confidence": 0.999462
  },
  {
    "text": " создал",
    "startMs": 16580,
    "endMs": 17060,
    "timestampMs": 16820,
    "confidence": 0.999647
  },
  {
    "text": " тебя,",
    "startMs": 17060,
    "endMs": 17240,
    "timestampMs": 17150,
    "confidence": 0.997435
  },
  {
    "text": " показал",
    "startMs": 17320,
    "endMs": 17660,
    "timestampMs": 17490,
    "confidence": 0.99975,
    "pageBreakAfter": true
  },
  {
    "text": " тебе",
    "startMs": 17660,
    "endMs": 17780,
    "timestampMs": 17720,
    "confidence": 0.99571
  },
  {
    "text": " бесконечность.",
    "startMs": 17780,
    "endMs": 18680,
    "timestampMs": 18230,
    "confidence": 0.997893,
    "pageBreakAfter": true
  },
  {
    "text": " И",
    "startMs": 19740,
    "endMs": 20260,
    "timestampMs": 20000,
    "confidence": 0.996443
  },
  {
    "text": " как",
    "startMs": 20260,
    "endMs": 20420,
    "timestampMs": 20340,
    "confidence": 0.999776
  },
  {
    "text": " ты",
    "startMs": 20420,
    "endMs": 20540,
    "timestampMs": 20480,
    "confidence": 0.999852
  },
  {
    "text": " использовал",
    "startMs": 20540,
    "endMs": 21020,
    "timestampMs": 20780,
    "confidence": 0.990681,
    "pageBreakAfter": true
  },
  {
    "text": " эти",
    "startMs": 21020,
    "endMs": 21140,
    "timestampMs": 21080,
    "confidence": 0.991837
  },
  {
    "text": " знания?",
    "startMs": 21140,
    "endMs": 21520,
    "timestampMs": 21330,
    "confidence": 0.999151,
    "pageBreakAfter": true
  },
  {
    "text": " Тусуешься",
    "startMs": 22000,
    "endMs": 22520,
    "timestampMs": 22260,
    "confidence": 0.99537
  },
  {
    "text": " с",
    "startMs": 22520,
    "endMs": 22600,
    "timestampMs": 22560,
    "confidence": 0.999695
  },
  {
    "text": " моим",
    "startMs": 22600,
    "endMs": 22780,
    "timestampMs": 22690,
    "confidence": 0.999556
  },
  {
    "text": " внуком,",
    "startMs": 22780,
    "endMs": 23240,
    "timestampMs": 23010,
    "confidence": 0.999497,
    "pageBreakAfter": true
  },
  {
    "text": " воспитываешь",
    "startMs": 23320,
    "endMs": 23840,
    "timestampMs": 23580,
    "confidence": 0.999697
  },
  {
    "text": " отголоски",
    "startMs": 23840,
    "endMs": 24280,
    "timestampMs": 24060,
    "confidence": 0.99569,
    "pageBreakAfter": true
  },
  {
    "text": " моей",
    "startMs": 24280,
    "endMs": 24500,
    "timestampMs": 24390,
    "confidence": 0.999017
  },
  {
    "text": " дочери.",
    "startMs": 24500,
    "endMs": 25060,
    "timestampMs": 24780,
    "confidence": 0.999887,
    "pageBreakAfter": true
  },
  {
    "text": " Как",
    "startMs": 26940,
    "endMs": 27460,
    "timestampMs": 27200,
    "confidence": 0.99194
  },
  {
    "text": " ты",
    "startMs": 27460,
    "endMs": 27660,
    "timestampMs": 27560,
    "confidence": 0.999526
  },
  {
    "text": " будешь",
    "startMs": 27660,
    "endMs": 28020,
    "timestampMs": 27840,
    "confidence": 0.999746
  },
  {
    "text": " жить",
    "startMs": 28020,
    "endMs": 28280,
    "timestampMs": 28150,
    "confidence": 0.999796,
    "pageBreakAfter": true
  },
  {
    "text": " без",
    "startMs": 28280,
    "endMs": 28500,
    "timestampMs": 28390,
    "confidence": 0.999925
  },
  {
    "text": " меня?",
    "startMs": 28500,
    "endMs": 28760,
    "timestampMs": 28630,
    "confidence": 0.999895,
    "pageBreakAfter": true
  },
  {
    "text": " Вот",
    "startMs": 29400,
    "endMs": 30120,
    "timestampMs": 29760,
    "confidence": 0.921687
  },
  {
    "text": " и",
    "startMs": 30120,
    "endMs": 30300,
    "timestampMs": 30210,
    "confidence": 0.990411
  },
  {
    "text": " узнаем.",
    "startMs": 30300,
    "endMs": 31080,
    "timestampMs": 30690,
    "confidence": 0.994471,
    "pageBreakAfter": true
  },
  {
    "text": " Признай,",
    "startMs": 34260,
    "endMs": 34980,
    "timestampMs": 34620,
    "confidence": 0.931118
  },
  {
    "text": " ты",
    "startMs": 35260,
    "endMs": 35500,
    "timestampMs": 35380,
    "confidence": 0.984625
  },
  {
    "text": " бы",
    "startMs": 35500,
    "endMs": 35700,
    "timestampMs": 35600,
    "confidence": 0.270857
  },
  {
    "text": " стал",
    "startMs": 35700,
    "endMs": 36020,
    "timestampMs": 35860,
    "confidence": 0.971452,
    "pageBreakAfter": true
  },
  {
    "text": " мной.",
    "startMs": 36020,
    "endMs": 36520,
    "timestampMs": 36270,
    "confidence": 0.952187,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 37120,
    "endMs": 37840,
    "timestampMs": 37480,
    "confidence": 0.95804
  },
  {
    "text": " просто",
    "startMs": 37840,
    "endMs": 38240,
    "timestampMs": 38040,
    "confidence": 0.994288
  },
  {
    "text": " зашел",
    "startMs": 38240,
    "endMs": 38820,
    "timestampMs": 38530,
    "confidence": 0.93929
  },
  {
    "text": " в",
    "startMs": 38820,
    "endMs": 38920,
    "timestampMs": 38870,
    "confidence": 0.996012,
    "pageBreakAfter": true
  },
  {
    "text": " твой",
    "startMs": 38920,
    "endMs": 39120,
    "timestampMs": 39020,
    "confidence": 0.94209
  },
  {
    "text": " гараж,",
    "startMs": 39120,
    "endMs": 39660,
    "timestampMs": 39390,
    "confidence": 0.984957
  },
  {
    "text": " раньше",
    "startMs": 39720,
    "endMs": 40140,
    "timestampMs": 39930,
    "confidence": 0.978687
  },
  {
    "text": " чем",
    "startMs": 40140,
    "endMs": 40460,
    "timestampMs": 40300,
    "confidence": 0.356677,
    "pageBreakAfter": true
  },
  {
    "text": " ты",
    "startMs": 40460,
    "endMs": 40740,
    "timestampMs": 40600,
    "confidence": 0.996294
  },
  {
    "text": " зашел",
    "startMs": 40740,
    "endMs": 41200,
    "timestampMs": 40970,
    "confidence": 0.947219
  },
  {
    "text": " в",
    "startMs": 41200,
    "endMs": 41340,
    "timestampMs": 41270,
    "confidence": 0.970306
  },
  {
    "text": " мой.",
    "startMs": 41340,
    "endMs": 41640,
    "timestampMs": 41490,
    "confidence": 0.946024,
    "pageBreakAfter": true
  },
  {
    "text": " Ну",
    "startMs": 42420,
    "endMs": 42760,
    "timestampMs": 42590,
    "confidence": 0.599253
  },
  {
    "text": " в",
    "startMs": 42760,
    "endMs": 42940,
    "timestampMs": 42850,
    "confidence": 0.357238
  },
  {
    "text": " итоге",
    "startMs": 42940,
    "endMs": 43260,
    "timestampMs": 43100,
    "confidence": 0.997321
  },
  {
    "text": " ты",
    "startMs": 43260,
    "endMs": 43600,
    "timestampMs": 43430,
    "confidence": 0.909467,
    "pageBreakAfter": true
  },
  {
    "text": " пришел.",
    "startMs": 43600,
    "endMs": 44380,
    "timestampMs": 43990,
    "confidence": 0.985599,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 45020,
    "endMs": 45540,
    "timestampMs": 45280,
    "confidence": 0.979337
  },
  {
    "text": " жил",
    "startMs": 45540,
    "endMs": 46120,
    "timestampMs": 45830,
    "confidence": 0.906566
  },
  {
    "text": " в",
    "startMs": 46120,
    "endMs": 46260,
    "timestampMs": 46190,
    "confidence": 0.991881
  },
  {
    "text": " моем",
    "startMs": 46260,
    "endMs": 46700,
    "timestampMs": 46480,
    "confidence": 0.943365,
    "pageBreakAfter": true
  },
  {
    "text": " доме.",
    "startMs": 46700,
    "endMs": 47420,
    "timestampMs": 47060,
    "confidence": 0.995382,
    "pageBreakAfter": true
  },
  {
    "text": " Уже",
    "startMs": 69320,
    "endMs": 69660,
    "timestampMs": 69490,
    "confidence": 0.968881
  },
  {
    "text": " ухожу.",
    "startMs": 69660,
    "endMs": 70080,
    "timestampMs": 69870,
    "confidence": 0.991519,
    "pageBreakAfter": true
  },
  {
    "text": " Но",
    "startMs": 70200,
    "endMs": 70440,
    "timestampMs": 70320,
    "confidence": 0.893786
  },
  {
    "text": " не",
    "startMs": 70440,
    "endMs": 70520,
    "timestampMs": 70480,
    "confidence": 0.983776
  },
  {
    "text": " вынуждай",
    "startMs": 70520,
    "endMs": 70900,
    "timestampMs": 70710,
    "confidence": 0.997627
  },
  {
    "text": " меня",
    "startMs": 70900,
    "endMs": 71060,
    "timestampMs": 70980,
    "confidence": 0.995771,
    "pageBreakAfter": true
  },
  {
    "text": " улучшать",
    "startMs": 71060,
    "endMs": 71500,
    "timestampMs": 71280,
    "confidence": 0.989959
  },
  {
    "text": " конструкцию.",
    "startMs": 71500,
    "endMs": 72140,
    "timestampMs": 71820,
    "confidence": 0.996814,
    "pageBreakAfter": true
  },
  {
    "text": " Я",
    "startMs": 72600,
    "endMs": 73000,
    "timestampMs": 72800,
    "confidence": 0.985111
  },
  {
    "text": " могу",
    "startMs": 73000,
    "endMs": 73220,
    "timestampMs": 73110,
    "confidence": 0.994244
  },
  {
    "text": " покончить",
    "startMs": 73220,
    "endMs": 73680,
    "timestampMs": 73450,
    "confidence": 0.96963
  },
  {
    "text": " с",
    "startMs": 73680,
    "endMs": 73760,
    "timestampMs": 73720,
    "confidence": 0.954468,
    "pageBreakAfter": true
  },
  {
    "text": " экспериментом",
    "startMs": 73760,
    "endMs": 74300,
    "timestampMs": 74030,
    "confidence": 0.992569
  },
  {
    "text": " Рика",
    "startMs": 74300,
    "endMs": 74500,
    "timestampMs": 74400,
    "confidence": 0.985356
  },
  {
    "text": " в",
    "startMs": 74500,
    "endMs": 74620,
    "timestampMs": 74560,
    "confidence": 0.988801,
    "pageBreakAfter": true
  },
  {
    "text": " любой",
    "startMs": 74620,
    "endMs": 74840,
    "timestampMs": 74730,
    "confidence": 0.998473
  },
  {
    "text": " момент.",
    "startMs": 74840,
    "endMs": 75240,
    "timestampMs": 75040,
    "confidence": 0.999532,
    "pageBreakAfter": true
  },
  {
    "text": " К",
    "startMs": 75400,
    "endMs": 75700,
    "timestampMs": 75550,
    "confidence": 0.974004
  },
  {
    "text": " чему",
    "startMs": 75700,
    "endMs": 75860,
    "timestampMs": 75780,
    "confidence": 0.997403
  },
  {
    "text": " угрозы?",
    "startMs": 75860,
    "endMs": 76360,
    "timestampMs": 76110,
    "confidence": 0.996409,
    "pageBreakAfter": true
  },
  {
    "text": " Мог",
    "startMs": 76480,
    "endMs": 76680,
    "timestampMs": 76580,
    "confidence": 0.993081
  },
  {
    "text": " бы",
    "startMs": 76680,
    "endMs": 76760,
    "timestampMs": 76720,
    "confidence": 0.99917
  },
  {
    "text": " не",
    "startMs": 76760,
    "endMs": 76840,
    "timestampMs": 76800,
    "confidence": 0.99115
  },
  {
    "text": " тянуть.",
    "startMs": 76840,
    "endMs": 77180,
    "timestampMs": 77010,
    "confidence": 0.998919,
    "pageBreakAfter": true
  },
  {
    "text": " Как",
    "startMs": 77500,
    "endMs": 77740,
    "timestampMs": 77620,
    "confidence": 0.986986
  },
  {
    "text": " ты",
    "startMs": 77740,
    "endMs": 77820,
    "timestampMs": 77780,
    "confidence": 0.994707
  },
  {
    "text": " не",
    "startMs": 77820,
    "endMs": 77980,
    "timestampMs": 77900,
    "confidence": 0.990247
  },
  {
    "text": " поймёшь,",
    "startMs": 77980,
    "endMs": 78400,
    "timestampMs": 78190,
    "confidence": 0.979438,
    "pageBreakAfter": true
  },
  {
    "text": " Морти?",
    "startMs": 78540,
    "endMs": 78760,
    "timestampMs": 78650,
    "confidence": 0.979589,
    "pageBreakAfter": true
  },
  {
    "text": " Потому",
    "startMs": 78840,
    "endMs": 79000,
    "timestampMs": 78920,
    "confidence": 0.990134
  },
  {
    "text": " что",
    "startMs": 79000,
    "endMs": 79140,
    "timestampMs": 79070,
    "confidence": 0.996453
  },
  {
    "text": " такое",
    "startMs": 79140,
    "endMs": 79400,
    "timestampMs": 79270,
    "confidence": 0.997435
  },
  {
    "text": " оружие",
    "startMs": 79400,
    "endMs": 79820,
    "timestampMs": 79610,
    "confidence": 0.999471,
    "pageBreakAfter": true
  },
  {
    "text": " не",
    "startMs": 79820,
    "endMs": 80000,
    "timestampMs": 79910,
    "confidence": 0.990678
  },
  {
    "text": " принесёт",
    "startMs": 80000,
    "endMs": 80680,
    "timestampMs": 80340,
    "confidence": 0.992881
  },
  {
    "text": " покоя.",
    "startMs": 80680,
    "endMs": 81320,
    "timestampMs": 81000,
    "confidence": 0.998457,
    "pageBreakAfter": true
  },
  {
    "text": " Думаешь,",
    "startMs": 81520,
    "endMs": 81880,
    "timestampMs": 81700,
    "confidence": 0.997715
  },
  {
    "text": " мне",
    "startMs": 81960,
    "endMs": 82020,
    "timestampMs": 81990,
    "confidence": 0.997917
  },
  {
    "text": " нужна",
    "startMs": 82020,
    "endMs": 82340,
    "timestampMs": 82180,
    "confidence": 0.99506
  },
  {
    "text": " кучка",
    "startMs": 82340,
    "endMs": 82720,
    "timestampMs": 82530,
    "confidence": 0.946081,
    "pageBreakAfter": true
  },
  {
    "text": " мстящих",
    "startMs": 82720,
    "endMs": 83160,
    "timestampMs": 82940,
    "confidence": 0.997629
  },
  {
    "text": " Саммер,",
    "startMs": 83160,
    "endMs": 83500,
    "timestampMs": 83330,
    "confidence": 0.791298
  },
  {
    "text": " которые",
    "startMs": 83600,
    "endMs": 83820,
    "timestampMs": 83710,
    "confidence": 0.987112,
    "pageBreakAfter": true
  },
  {
    "text": " бы",
    "startMs": 83820,
    "endMs": 83920,
    "timestampMs": 83870,
    "confidence": 0.975453
  },
  {
    "text": " меня",
    "startMs": 83920,
    "endMs": 84060,
    "timestampMs": 83990,
    "confidence": 0.993018
  },
  {
    "text": " преследовали?",
    "startMs": 84060,
    "endMs": 84680,
    "timestampMs": 84370,
    "confidence": 0.999435,
    "pageBreakAfter": true
  },
  {
    "text": " Впрочем,",
    "startMs": 85020,
    "endMs": 85460,
    "timestampMs": 85240,
    "confidence": 0.998959
  },
  {
    "text": " ты",
    "startMs": 85560,
    "endMs": 85680,
    "timestampMs": 85620,
    "confidence": 0.997375
  },
  {
    "text": " отличаешься",
    "startMs": 85680,
    "endMs": 86260,
    "timestampMs": 85970,
    "confidence": 0.998785,
    "pageBreakAfter": true
  },
  {
    "text": " от",
    "startMs": 86260,
    "endMs": 86360,
    "timestampMs": 86310,
    "confidence": 0.999469
  },
  {
    "text": " других,",
    "startMs": 86360,
    "endMs": 86600,
    "timestampMs": 86480,
    "confidence": 0.999509
  },
  {
    "text": " Рик.",
    "startMs": 86760,
    "endMs": 86880,
    "timestampMs": 86820,
    "confidence": 0.992124,
    "pageBreakAfter": true
  },
  {
    "text": " Возможно,",
    "startMs": 87000,
    "endMs": 87420,
    "timestampMs": 87210,
    "confidence": 0.998905
  },
  {
    "text": " однажды",
    "startMs": 87560,
    "endMs": 87860,
    "timestampMs": 87710,
    "confidence": 0.998353
  },
  {
    "text": " мне",
    "startMs": 87860,
    "endMs": 87960,
    "timestampMs": 87910,
    "confidence": 0.99772,
    "pageBreakAfter": true
  },
  {
    "text": " это",
    "startMs": 87960,
    "endMs": 88060,
    "timestampMs": 88010,
    "confidence": 0.956633
  },
  {
    "text": " пригодится.",
    "startMs": 88060,
    "endMs": 88560,
    "timestampMs": 88310,
    "confidence": 0.998404,
    "pageBreakAfter": true
  },
  {
    "text": " Но",
    "startMs": 89300,
    "endMs": 89740,
    "timestampMs": 89520,
    "confidence": 0.952784
  },
  {
    "text": " если",
    "startMs": 89740,
    "endMs": 89880,
    "timestampMs": 89810,
    "confidence": 0.950487
  },
  {
    "text": " серьёзно,",
    "startMs": 89880,
    "endMs": 90300,
    "timestampMs": 90090,
    "confidence": 0.99705
  },
  {
    "text": " то",
    "startMs": 90340,
    "endMs": 90420,
    "timestampMs": 90380,
    "confidence": 0.996903,
    "pageBreakAfter": true
  },
  {
    "text": " идите",
    "startMs": 90420,
    "endMs": 90640,
    "timestampMs": 90530,
    "confidence": 0.980589
  },
  {
    "text": " в",
    "startMs": 90640,
    "endMs": 90760,
    "timestampMs": 90700,
    "confidence": 0.960912
  },
  {
    "text": " пизду.",
    "startMs": 90760,
    "endMs": 91080,
    "timestampMs": 90920,
    "confidence": 0.996132,
    "pageBreakAfter": true
  },
  {
    "text": " Не",
    "startMs": 91200,
    "endMs": 91460,
    "timestampMs": 91330,
    "confidence": 0.999103
  },
  {
    "text": " ищите",
    "startMs": 91460,
    "endMs": 91820,
    "timestampMs": 91640,
    "confidence": 0.999563
  },
  {
    "text": " меня,",
    "startMs": 91820,
    "endMs": 91980,
    "timestampMs": 91900,
    "confidence": 0.999312
  },
  {
    "text": " или",
    "startMs": 92060,
    "endMs": 92120,
    "timestampMs": 92090,
    "confidence": 0.999235,
    "pageBreakAfter": true
  },
  {
    "text": " всё",
    "startMs": 92120,
    "endMs": 92240,
    "timestampMs": 92180,
    "confidence": 0.998661
  },
  {
    "text": " закончится",
    "startMs": 92240,
    "endMs": 92680,
    "timestampMs": 92460,
    "confidence": 0.997899
  },
  {
    "text": " плохо.",
    "startMs": 92680,
    "endMs": 92960,
    "timestampMs": 92820,
    "confidence": 0.999816,
    "pageBreakAfter": true
  },
  {
    "text": " Ты",
    "startMs": 101210,
    "endMs": 101390,
    "timestampMs": 101300,
    "confidence": 0.752157
  },
  {
    "text": " в",
    "startMs": 101390,
    "endMs": 101530,
    "timestampMs": 101460,
    "confidence": 0.94852
  },
  {
    "text": " порядке?",
    "startMs": 101530,
    "endMs": 102050,
    "timestampMs": 101790,
    "confidence": 0.998649,
    "pageBreakAfter": true
  },
  {
    "text": " Да.",
    "startMs": 102810,
    "endMs": 103210,
    "timestampMs": 103010,
    "confidence": 0.980408,
    "pageBreakAfter": true
  }
]
} />;
export const Video10 = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101018"}}>
    <Sequence name="10-finale-3" durationInFrames={3108} premountFor={fps}>
      <ScenePicture src={staticFile("media/10-finale-3.mp4")} />
      <div style={{position: "absolute", left: 0, top: 190}}><Header10 /></div>
      <div style={{position: "absolute", left: 0, top: 1320}}><Captions10 /></div>
    </Sequence>
  </AbsoluteFill>;
};
export const StoryRoot = () => <>
  <Composition id="Story-01" component={Video01} width={1080} height={1920}
    fps={30} durationInFrames={1637} />
  <Composition id="Captions-01" component={Captions01} width={1080} height={200}
    fps={30} durationInFrames={1637} />
  <Composition id="Header-01" component={Header01} width={1080} height={380}
    fps={30} durationInFrames={1637} />
  <Composition id="Story-02" component={Video02} width={1080} height={1920}
    fps={30} durationInFrames={564} />
  <Composition id="Captions-02" component={Captions02} width={1080} height={200}
    fps={30} durationInFrames={564} />
  <Composition id="Header-02" component={Header02} width={1080} height={380}
    fps={30} durationInFrames={564} />
  <Composition id="Story-03" component={Video03} width={1080} height={1920}
    fps={30} durationInFrames={1496} />
  <Composition id="Captions-03" component={Captions03} width={1080} height={200}
    fps={30} durationInFrames={1496} />
  <Composition id="Header-03" component={Header03} width={1080} height={380}
    fps={30} durationInFrames={1496} />
  <Composition id="Story-04" component={Video04} width={1080} height={1920}
    fps={30} durationInFrames={897} />
  <Composition id="Captions-04" component={Captions04} width={1080} height={200}
    fps={30} durationInFrames={897} />
  <Composition id="Header-04" component={Header04} width={1080} height={380}
    fps={30} durationInFrames={897} />
  <Composition id="Story-05" component={Video05} width={1080} height={1920}
    fps={30} durationInFrames={1872} />
  <Composition id="Captions-05" component={Captions05} width={1080} height={200}
    fps={30} durationInFrames={1872} />
  <Composition id="Header-05" component={Header05} width={1080} height={380}
    fps={30} durationInFrames={1872} />
  <Composition id="Story-06" component={Video06} width={1080} height={1920}
    fps={30} durationInFrames={1995} />
  <Composition id="Captions-06" component={Captions06} width={1080} height={200}
    fps={30} durationInFrames={1995} />
  <Composition id="Header-06" component={Header06} width={1080} height={380}
    fps={30} durationInFrames={1995} />
  <Composition id="Story-07" component={Video07} width={1080} height={1920}
    fps={30} durationInFrames={2202} />
  <Composition id="Captions-07" component={Captions07} width={1080} height={200}
    fps={30} durationInFrames={2202} />
  <Composition id="Header-07" component={Header07} width={1080} height={380}
    fps={30} durationInFrames={2202} />
  <Composition id="Story-08" component={Video08} width={1080} height={1920}
    fps={30} durationInFrames={2094} />
  <Composition id="Captions-08" component={Captions08} width={1080} height={200}
    fps={30} durationInFrames={2094} />
  <Composition id="Header-08" component={Header08} width={1080} height={380}
    fps={30} durationInFrames={2094} />
  <Composition id="Story-09" component={Video09} width={1080} height={1920}
    fps={30} durationInFrames={2523} />
  <Composition id="Captions-09" component={Captions09} width={1080} height={200}
    fps={30} durationInFrames={2523} />
  <Composition id="Header-09" component={Header09} width={1080} height={380}
    fps={30} durationInFrames={2523} />
  <Composition id="Story-10" component={Video10} width={1080} height={1920}
    fps={30} durationInFrames={3108} />
  <Composition id="Captions-10" component={Captions10} width={1080} height={200}
    fps={30} durationInFrames={3108} />
  <Composition id="Header-10" component={Header10} width={1080} height={380}
    fps={30} durationInFrames={3108} />
</>;
