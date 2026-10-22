const {openBrowser} = require('@remotion/renderer');
const fs = require('node:fs/promises');
const {createReadStream} = require('node:fs');
const path = require('node:path');
const http = require('node:http');

(async()=>{
  const allClips=JSON.parse(await fs.readFile('data/clips.json','utf8'));
  const clips=allClips.filter(clip=>!process.argv[2]||clip.id===process.argv[2]);
  const files=new Map();
  for(const clip of clips){
    const name=`${clip.id}-platina.mp4`; const file=path.resolve('out',name);
    files.set('/'+name,{file,size:(await fs.stat(file)).size});
  }
  const server=http.createServer((request,response)=>{
    if(request.url==='/'){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.end('<html><body><video controls muted playsinline></video></body></html>');return;
    }
    const item=files.get(request.url); if(!item){response.writeHead(404);response.end();return;}
    const range=request.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    const start=range?Number(range[1]):0;
    const end=range&&range[2]?Math.min(Number(range[2]),item.size-1):item.size-1;
    response.writeHead(range?206:200,{'Content-Type':'video/mp4','Accept-Ranges':'bytes','Content-Length':end-start+1,
      ...(range?{'Content-Range':`bytes ${start}-${end}/${item.size}`}:{})});
    createReadStream(item.file,{start,end}).pipe(response);
  });
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  const browser=await openBrowser('chrome',{browserExecutable:'/usr/bin/chromium',chromiumOptions:{gl:'swangle'}});
  try{
    const page=await browser.newPage({context:()=>null,logLevel:'error',indent:false,pageIndex:0,onBrowserLog:()=>{},onLog:()=>{}});
    await page.goto({url:`http://127.0.0.1:${server.address().port}/`,timeout:30000});
    const reports=[];
    for(const clip of clips){
      const report=await page.evaluate(async name=>{
        const v=document.querySelector('video');v.pause();v.src='/'+name;v.load();
        const wait=async condition=>{const end=Date.now()+20000;while(!condition()){
          if(v.error)throw new Error(v.error.message);if(Date.now()>end)throw new Error('Playback timeout');
          await new Promise(r=>setTimeout(r,100));}};
        await wait(()=>v.readyState>=2);await v.play();await wait(()=>v.currentTime>.25);v.pause();
        v.currentTime=Math.max(0,v.duration-.65);await wait(()=>!v.seeking&&v.readyState>=2);
        await v.play();await wait(()=>v.currentTime>v.duration-.25);v.pause();
        return {file:name,width:v.videoWidth,height:v.videoHeight,duration:v.duration,error:v.error};
      },`${clip.id}-platina.mp4`);
      if(report.width!==1080||report.height!==1920||report.error)throw new Error(JSON.stringify(report));
      reports.push(report);console.log(`Playback passed: ${clip.id}`);
    }
    const previous=process.argv[2]?JSON.parse(await fs.readFile('out/playback-check.json','utf8')).clips:[];
    const updated=new Map(previous.map(r=>[r.file,r]));for(const report of reports)updated.set(report.file,report);
    await fs.writeFile('out/playback-check.json',JSON.stringify({validation:'passed',clips:[...updated.values()]},null,2));
  }finally{await browser.close({silent:true});await new Promise(r=>server.close(r));}
})().catch(error=>{console.error(error);process.exitCode=1;});
