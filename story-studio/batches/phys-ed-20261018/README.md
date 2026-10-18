# Истории с физры — 10 вертикальных роликов

Подборка из пользовательского исходника «Не люблю я физкультуру… (анимация)»: шесть отдельных моментов и две истории по две части. Исходная реклама, благодарности подписчикам и финальный призыв исключены. Границы — в data/selection.json, проверенные субтитры — в data/*-reviewed-transcript.json и редактируемых массивах src/Clips.tsx.

Выход: 1080×1920, исходные 24 fps, отражение видеоряда один раз, обычное направление новых титров. Текст без Minecraft-таблички, подсветка #e6c777. Изображение — H.264 CRF18. Оригинальные речь, музыка, эффекты и скорость сохранены; звук при точной нарезке кодируется AAC256, затем копируется в финальные MP4 без повторной обработки.

## Запуск

Нужны Node.js/npm, Python 3 с numpy, FFmpeg/ffprobe и Chromium по пути /usr/bin/chromium.

```bash
npm ci
python3 scripts/restore-media.py
python3 scripts/prepare-clips.py
python3 scripts/prepare-captions.py --transcript-suffix=-reviewed
npm run dev -- --no-open --port=3004
```

Полный исходник в Git не включён. Восстановление по предоставленной ссылке Drive проверяет SHA-256 из data/source-metadata.json. Старые проекты и экспорты не заменяются.

## Экспорт и проверки

```bash
node scripts/render-layers.cjs --previews
python3 scripts/export-clips.py
npm run lint
node scripts/check-layout.cjs
python3 scripts/check-source-orientation.py
python3 scripts/check-exports.py
node scripts/check-playback.cjs
```

Команды запускаются из этой папки. Во время проверки разметки Studio должен работать на 3004. В текущей облачной среде установленный Python для общего пакетного запуска: /workspace/.venvs/snail-audio/bin/python. scripts/run-batch.py использует этот путь и запускает необходимые шаги с контрольными точками; в другой среде замените путь либо выполните команды выше.

Проверяются размеры, все временные метки кадров, пакеты звука подготовленного монтажа, отрисованные состояния субтитров, отсутствие переполнений строк, отражение оригинала и воспроизведение начала/конца каждого MP4. Готовые файлы — out/phys-ed-*.mp4, отчёты — out/validation.json и out/playback-check.json.
