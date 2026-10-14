const {openBrowser} = require('@remotion/renderer');
const fs = require('node:fs/promises');

(async () => {
  const clips = JSON.parse(await fs.readFile('data/clips.json', 'utf8'));
  const cases = [];
  for (const clip of clips) cases.push({...clip,
    captions: JSON.parse(await fs.readFile(`data/${clip.id}-captions.json`, 'utf8'))});
  const browser = await openBrowser('chrome', {browserExecutable: '/usr/bin/chromium', chromiumOptions: {gl: 'swangle'}});
  try {
    const errors = [];
    const page = await browser.newPage({context: () => null, logLevel: 'error', indent: false,
      pageIndex: 0, onBrowserLog: log => {
        if (log.type === 'error' && !log.stackTrace.some(f => f.url?.startsWith('https://bugs.remotion.dev/')))
          errors.push(log.text);
      }, onLog: () => {}});
    await page.goto({url: 'http://127.0.0.1:3002/Story-01', timeout: 30000});
    const ready = await page.evaluate(async () => {
      const deadline = Date.now()+20000;
      while (Date.now()<deadline) {
        if (document.title.includes('Story-01') && document.body.innerText.includes('INSTAGRAM') && document.querySelectorAll('canvas').length) {
          await document.fonts.ready;
          return {title:document.title, fontLoaded:document.fonts.check('56px "Russo One"')};
        }
        await new Promise(r=>setTimeout(r,200));
      }
      throw new Error('Story preview not ready');
    });
    if (!ready.fontLoaded) throw new Error('Font missing');
    const layout=await page.evaluate(items=>{
      const canvas=document.createElement('canvas').getContext('2d');
      const results=[];
      for(const clip of items){
        canvas.font='61px "Russo One"';
        const titleWidths=clip.title.split('\n').map(t=>canvas.measureText(t.toUpperCase()).width+4);
        let current=[]; const pages=[];
        for(const word of clip.captions){
          current.push(word.text);
          if(!word.pageBreakAfter) continue;
          const text=current.join('').trim().toUpperCase();
          const size=text.length>19?48:56;
          canvas.font=`${size}px "Russo One"`;
          pages.push({text,width:canvas.measureText(text).width+text.length*.3+6}); current=[];
        }
        results.push({id:clip.id,titleWidths,captionPages:pages.length,
          widestPage:pages.reduce((a,b)=>a.width>b.width?a:b),
          titleFits:titleWidths.every(w=>w<=920),captionsFit:pages.every(p=>p.width<=820)});
      }
      return results;
    },cases);
    if(errors.length) throw new Error(errors.join('\n'));
    if(layout.some(r=>!r.titleFits||!r.captionsFit)) throw new Error(JSON.stringify(layout.filter(r=>!r.titleFits||!r.captionsFit)));
    const result={...ready,validation:'passed',clipsChecked:layout.length,layout,errors};
    await fs.writeFile('out/layout-check.json',JSON.stringify(result,null,2));
    console.log(JSON.stringify(result));
  } finally {await browser.close({silent:true});}
})().catch(error=>{console.error(error);process.exitCode=1;});
