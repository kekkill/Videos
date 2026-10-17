const fs = require('node:fs/promises');
const path = require('node:path');
const {createHash} = require('node:crypto');
const {bundle} = require('@remotion/bundler');
const {renderFrames, selectComposition} = require('@remotion/renderer');

(async () => {
  const clips = JSON.parse(await fs.readFile('data/clips.json', 'utf8'));
  const only = process.argv.slice(2).find(arg => !arg.startsWith('--'));
  const previews = process.argv.includes('--previews');
  const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts'), outDir: path.resolve('out/bundle')});
  const options = {serveUrl, inputProps: {}, browserExecutable: '/usr/bin/chromium', chromiumOptions: {gl: 'swangle'}};
  const captionStyleSha256 = createHash('sha256').update(await fs.readFile('src/Common.tsx')).digest('hex');
  for (const [i, clip] of clips.entries()) {
    if (only && clip.id !== only) continue;
    const index = String(i + 1).padStart(2, '0');
    const folder = path.join('out', clip.id);
    await fs.mkdir(folder, {recursive: true});
    const captionBytes = await fs.readFile(`data/${clip.id}-captions.json`);
    const captions = JSON.parse(captionBytes.toString('utf8'));
    const captionsSha256 = createHash('sha256').update(captionBytes).digest('hex');
    const old = JSON.parse(await fs.readFile(path.join(folder, 'manifest.json'), 'utf8').catch(() => '{}'));
    if (old.captionsSha256 === captionsSha256 && old.captionStyleSha256 === captionStyleSha256 && old.frames === clip.frames) {
      console.log(`${clip.id}: validated cached layers reused`);
      continue;
    }
    const frames = new Set([0, clip.frames - 1]);
    for (const word of captions) {
      for (const ms of [word.startMs, word.endMs, ...(word.pageBreakAfter ? [word.endMs + 180] : [])])
        frames.add(Math.ceil(ms * 30 / 1000));
    }
    const boundaries = [...frames].filter(f => f >= 0 && f < clip.frames).sort((a, b) => a - b);
    const overlay = await selectComposition({...options, id: `Captions-${index}`});
    await renderFrames({...options, composition: overlay, frames: boundaries,
      outputDir: path.resolve(folder, 'states'), imageFormat: 'png', concurrency: 2,
      imageSequencePattern: 'state-[frame].[ext]',
      onStart: () => console.log(`${clip.id}: ${boundaries.length} word states`),
      onFrameUpdate: n => {if (n % 80 === 0 || n === boundaries.length) console.log(`${clip.id}: ${n}/${boundaries.length}`);},
    });
    const header = await selectComposition({...options, id: `Header-${index}`});
    await renderFrames({...options, composition: header, frames: [0],
      outputDir: path.resolve(folder, 'header'), imageFormat: 'png', concurrency: 1,
      imageSequencePattern: 'header-[frame].[ext]'});
    await fs.writeFile(path.join(folder, 'manifest.json'), JSON.stringify({
      ...clip, fps: 30, boundaries,
      captionWords: captions.length, captionPages: captions.filter(w => w.pageBreakAfter).length,
      captionsSha256,
      captionStyleSha256,
      headerY: 190, captionY: 1320,
    }, null, 2));
    if (previews) {
      const video = await selectComposition({...options, id: `Story-${index}`});
      await renderFrames({...options, composition: video,
        frames: [Math.min(Math.round(30 * 1.5), clip.frames - 1)],
        outputDir: path.resolve(folder, 'preview'), imageFormat: 'png', concurrency: 1,
        imageSequencePattern: 'preview-[frame].[ext]'});
    }
    console.log(`${clip.id}: caption layers ready`);
  }
})().catch(error => {console.error(error); process.exitCode = 1;});
