"""Verify the exported video, exact source audio and browser playback."""
import argparse,hashlib,json,subprocess,threading,http.server,functools,time,re,os
from pathlib import Path
from fractions import Fraction

ROOT=Path(__file__).resolve().parent

def probe(path):
    return json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(path)]))

def packets(path):
    return json.loads(subprocess.check_output(['ffprobe','-v','error','-select_streams','a:0','-show_packets','-show_data_hash','sha256','-show_entries','packet=pts_time,dts_time,duration_time,size,data_hash','-of','json',str(path)]))['packets']

def browser_check(path):
    from playwright.sync_api import sync_playwright
    class Handler(http.server.SimpleHTTPRequestHandler):
        def log_message(self,*args):pass
        def send_head(self):
            target=Path(self.translate_path(self.path))
            if not target.is_file():
                self.send_error(404);return None
            stream=target.open('rb');size=target.stat().st_size
            start=0;end=size-1;partial=False
            value=self.headers.get('Range')
            if value:
                match=re.fullmatch(r'bytes=(\d*)-(\d*)',value)
                if match:
                    a,b=match.groups()
                    if a:start=int(a);end=min(int(b) if b else size-1,size-1)
                    elif b:start=max(0,size-int(b))
                    if start> end or start>=size:
                        stream.close();self.send_response(416);self.send_header('Content-Range',f'bytes */{size}');self.end_headers();return None
                    partial=True
            self.send_response(206 if partial else 200)
            self.send_header('Content-Type',self.guess_type(str(target)))
            self.send_header('Content-Length',str(end-start+1))
            self.send_header('Accept-Ranges','bytes')
            if partial:self.send_header('Content-Range',f'bytes {start}-{end}/{size}')
            self.end_headers();stream.seek(start);self.remaining=end-start+1
            return stream
        def copyfile(self,source,outputfile):
            try:
                while self.remaining:
                    block=source.read(min(256*1024,self.remaining))
                    if not block:break
                    outputfile.write(block);self.remaining-=len(block)
            except (BrokenPipeError,ConnectionResetError):
                pass  # Browser cancels previous range requests during seeks.
    handler=functools.partial(Handler,directory=str(path.parent))
    server=http.server.ThreadingHTTPServer(('127.0.0.1',0),handler)
    threading.Thread(target=server.serve_forever,daemon=True).start()
    states=[]
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
            page=browser.new_page()
            page.goto('http://127.0.0.1:'+str(server.server_port)+'/'+path.name)
            print('Browser media document loaded',flush=True)
            page.wait_for_function('document.querySelector("video") && document.querySelector("video").readyState>=2',timeout=60000)
            duration=page.evaluate('document.querySelector("video").duration')
            print('Browser ready, duration',duration,flush=True)
            for t in [0.1,min(19.9,duration-0.5),min(20.1,duration-0.4),min(60.1,duration-0.3),duration-0.15]:
                page.evaluate('(t)=>{const v=document.querySelector("video");v.pause();v.currentTime=t;}',t)
                page.wait_for_function('(t)=>{const v=document.querySelector("video");return !v.seeking && v.readyState>=2 && Math.abs(v.currentTime-t)<0.06}',arg=t,timeout=30000)
                state=page.evaluate('(()=>{const v=document.querySelector("video");return {time:v.currentTime,width:v.videoWidth,height:v.videoHeight,error:v.error?v.error.message:null}})()')
                assert state['error'] is None and state['width']==1080 and state['height']==1920,state
                states.append(state)
                print('Browser seek OK',t,flush=True)
            page.evaluate('(()=>{const v=document.querySelector("video");v.muted=true;v.currentTime=0;return v.play()})()')
            page.wait_for_function('document.querySelector("video").currentTime>0.25',timeout=30000)
            browser.close()
        return {'passed':True,'duration':duration,'seekStates':states,'playbackAdvanced':True}
    finally:
        server.shutdown();server.server_close()

def main():
    ap=argparse.ArgumentParser();ap.add_argument('--source',type=Path,default=ROOT/'source.mp4');ap.add_argument('--output',type=Path,default=ROOT/'video-game-split-50-50.mp4');args=ap.parse_args()
    src=probe(args.source);out=probe(args.output)
    sv=next(s for s in src['streams'] if s['codec_type']=='video')
    videos=[s for s in out['streams'] if s['codec_type']=='video'];audio=[s for s in out['streams'] if s['codec_type']=='audio']
    assert len(videos)==1 and len(audio)==1
    ov=videos[0]
    assert (ov['width'],ov['height'])==(1080,1920)
    assert ov['sample_aspect_ratio']=='1:1'
    assert abs(float(Fraction(ov['avg_frame_rate']))-60)<0.001
    assert ov['nb_frames']==sv['nb_frames'],(ov['nb_frames'],sv['nb_frames'])
    assert abs(float(out['format']['duration'])-float(src['format']['duration']))<0.03
    sp=packets(args.source);op=packets(args.output)
    assert len(sp)==len(op),(len(sp),len(op))
    assert [p['data_hash'] for p in sp]==[p['data_hash'] for p in op],'Audio packets differ'
    assert max(abs(float(a['pts_time'])-float(b['pts_time'])) for a,b in zip(sp,op))<1/44100,'Audio timing changed'
    decoded=subprocess.run(['ffmpeg','-hide_banner','-v','error','-threads','2','-i',str(args.output),'-map','0:v:0','-map','0:a:0','-f','null','-'],capture_output=True,text=True)
    assert decoded.returncode==0 and not decoded.stderr.strip(),decoded.stderr
    print('Metadata, audio packet identity and full decode OK',flush=True)
    browser=browser_check(args.output)
    digest=hashlib.sha256(args.output.read_bytes()).hexdigest()
    report={'passed':True,'filename':args.output.name,'sizeBytes':args.output.stat().st_size,'sha256':digest,'width':ov['width'],'height':ov['height'],'fps':ov['avg_frame_rate'],'frames':int(ov['nb_frames']),'duration':float(out['format']['duration']),'topRegion':[0,0,1080,960],'bottomRegion':[0,960,1080,960],'audio':{'streams':len(audio),'codec':audio[0]['codec_name'],'packetCount':len(op),'allSourcePacketsIdentical':True,'originalTimestampsPreserved':True,'gameplayAudioIncluded':False},'fullDecodePassed':True,'browser':browser}
    (ROOT/'validation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
    print(json.dumps(report,ensure_ascii=False,indent=2))

if __name__=='__main__':main()
