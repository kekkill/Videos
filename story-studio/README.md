# Story Caption Studio

Вертикальные нарезки фильмов и сериалов: оригинальный звук, отражённый видеоряд,
заголовок сверху, номер части для историй, светлые субтитры с мягкой золотистой
подсветкой внизу. Minecraft-таблички и рекламных слоёв нет.

Текущая подборка — 10 роликов из «Рика и Морти», сезон 4, серия 1:
четыре отдельных момента и две истории по три части. План и исходные таймкоды
сохранены в `data/selection.json`, точные параметры нарезок — в `data/clips.json`.

Зависимости закреплены: Remotion 4.0.534 и React 19.2.3. Системные FFmpeg,
Chromium `/usr/bin/chromium`, Node.js и Python venv нужны отдельно.
Для мультяшной речи используется локальный faster-whisper large-v3-turbo
на CPU. Проверенные субтитры, правки и их таймкоды сохранены в репозитории.
Промежуточное распознавание остаётся локальным; его можно пересчитать для
текущего подготовленного монтажа, если потребуется новое редактирование.

```bash
export npm_config_cache=/workspace/.cache/npm
export HF_HOME=/workspace/.cache/huggingface
export HF_XET_CACHE=/workspace/.cache/huggingface/xet
npm ci --no-audit --no-fund
/workspace/.venvs/snail-audio/bin/pip install -r scripts/requirements.txt
python scripts/fetch-source.py
/workspace/.venvs/snail-audio/bin/python scripts/prepare-clips.py
/workspace/.venvs/snail-audio/bin/python scripts/transcribe-clips.py --model large-v3-turbo --suffix=-turbo
/workspace/.venvs/snail-audio/bin/python scripts/refine-transcripts.py
/workspace/.venvs/snail-audio/bin/python scripts/prepare-captions.py --transcript-suffix=-reviewed
npm run lint
npm run dev -- --no-open --port=3002
```

Проверка макета из второго процесса: `node scripts/check-layout.cjs`.
Рендер слоёв: `node scripts/render-layers.cjs`.
Экспорт: `python scripts/export-clips.py`.
Для одного ролика рендер принимает ID, например `01-family`; экспорт —
`--only 01-family`. Все видеоряд и звук уже подготовленного монтажа остаются
вместе. Заголовки и новые субтитры не отражаются.

Основной кадр увеличен на 5% с сохранением широкого плана и всех действующих
персонажей; фон размыт. Заголовок начинается в y190, сцена в y580,
субтитры в y1320 с отступом справа и снизу под TikTok. Подсветка `#e6c777`.
Длительность выбрана по смыслу сцены, не по единому лимиту секунд.

Исходники в `public/media` и результаты в `out` игнорируются Git. Для нового
checkout исходный файл восстанавливается из пользовательской ссылки Drive
с проверкой SHA-256. Не перезаписывать пользовательский исходник, если его
контрольная сумма отличается. Предыдущие экспорты в корневой папке exports
сохраняются отдельно.
