const {bundle}=require('@remotion/bundler');const {selectComposition,renderStill}=require('@remotion/renderer');const path=require('node:path');
(async()=>{
 const serveUrl=await bundle({entryPoint:path.resolve('src/index.ts'),outDir:path.resolve('out/bundle')});
 const options={serveUrl,browserExecutable:'/usr/bin/chromium',chromiumOptions:{gl:'swangle'},inputProps:{}};
 for(const id of ['Folder-01','Folder-05']){
 const composition=await selectComposition({...options,id});await renderStill({...options,composition,frame:90,output:`out/${id}-studio.png`});console.log('Studio composition rendered: '+id);
 }
})().catch(e=>{console.error(e);process.exitCode=1});
