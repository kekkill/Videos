const {openBrowser}=require('@remotion/renderer');const fs=require('node:fs/promises');
(async()=>{
 const browser=await openBrowser('chrome',{browserExecutable:'/usr/bin/chromium',chromiumOptions:{gl:'swangle'}});
 try{
 const page=await browser.newPage({context:()=>null,logLevel:'error',indent:false,pageIndex:0,onBrowserLog:()=>{},onLog:()=>{}});
 await page.goto({url:'http://127.0.0.1:3007/Natria-01',timeout:30000});
 const info=await page.evaluate(async()=>{const end=Date.now()+30000;while(Date.now()<end){if(document.title.includes('Natria-01')&&document.querySelectorAll('canvas').length)return {title:document.title,canvases:document.querySelectorAll('canvas').length};await new Promise(r=>setTimeout(r,200))}throw Error('Composition not loaded');});
 await fs.writeFile('out/studio-check.json',JSON.stringify({validation:'passed',...info},null,2));console.log(info);
 }finally{await browser.close({silent:true})}
})().catch(e=>{console.error(e);process.exitCode=1});
