"""Render a 50/50 vertical composition using only the main video's audio."""
import argparse, json, subprocess
from pathlib import Path

ROOT=Path(__file__).resolve().parent
DEFAULT_GAME1=ROOT/'bouncing-ball-ring-escape-9x16-20s.mp4'
DEFAULT_GAME2=ROOT/'bouncing-ball-custom-9x16-40s.mp4'

def probe(path):
    return json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(path)]))

def run(cmd, log):
    log.write_text('')
    with log.open('w') as f:
        subprocess.run(cmd,stdout=f,stderr=subprocess.STDOUT,check=True)

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('--source',type=Path,default=ROOT/'source.mp4')
    ap.add_argument('--game1',type=Path,default=DEFAULT_GAME1)
    ap.add_argument('--game2',type=Path,default=DEFAULT_GAME2)
    ap.add_argument('--preview',action='store_true')
    ap.add_argument('--start',type=float,default=0)
    ap.add_argument('--output',type=Path)
    args=ap.parse_args()
    metadata=probe(args.source)
    video=next(s for s in metadata['streams'] if s['codec_type']=='video')
    duration=float(video['duration'])
    first_duration=float(next(s for s in probe(args.game1)['streams'] if s['codec_type']=='video')['duration'])
    duration_expr=f'{duration:.9f}'
    filters=[
        '[0:v]crop=1080:1280:0:0,split=2[main_fg_in][main_bg_in]',
        '[main_fg_in]scale=810:960:flags=lanczos,setsar=1[main_fg]',
        '[main_bg_in]scale=270:320,gblur=sigma=16,scale=1080:1280,crop=1080:960:0:160,eq=brightness=-0.05[main_bg]',
        '[main_bg][main_fg]overlay=x=135:y=0:shortest=1:format=auto[top]',
        f'[1:v]trim=duration={first_duration:.9f},setpts=PTS-STARTPTS[game1]',
        f'[2:v]trim=duration={duration-first_duration:.9f},setpts=PTS-STARTPTS[game2]',
        '[game1][game2]concat=n=2:v=1:a=0,split=3[game_bg_in][game_fg_in][counter_in]',
        '[game_bg_in]crop=64:1080:0:420,scale=108:96,gblur=sigma=6,scale=1080:960[game_bg]',
        '[game_fg_in]crop=1080:1080:0:420,scale=940:940:flags=lanczos,setsar=1[game_fg]',
        '[game_bg][game_fg]overlay=x=70:y=-40:shortest=1:format=auto[game_field]',
        '[counter_in]crop=320:140:380:1610,scale=224:98:flags=lanczos[counter]',
        '[game_field][counter]overlay=x=428:y=862:shortest=1:format=auto[bottom]',
        '[top][bottom]vstack=inputs=2:shortest=1,setsar=1,format=yuv420p[outv]',
    ]
    graph=';\n'.join(filters)
    (ROOT/'composition.ffscript').write_text(graph)
    name='preview-8s' if args.preview else 'video-game-split-50-50'
    output=args.output or ROOT/(name+'.mp4')
    output.parent.mkdir(parents=True,exist_ok=True)
    video_only=ROOT/(name+'-video.mp4')
    cmd=['ffmpeg','-hide_banner','-y','-threads','2','-i',str(args.source),'-threads','2','-i',str(args.game1),'-stream_loop','-1','-threads','2','-i',str(args.game2),'-filter_complex_threads','2','-filter_complex_script',str(ROOT/'composition.ffscript'),'-map','[outv]','-an']
    if args.preview:
        cmd+=['-ss',str(args.start),'-t','8']
    cmd+=['-c:v','libx264','-threads','4','-preset','fast','-crf','18','-pix_fmt','yuv420p','-fps_mode','passthrough','-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709','-color_range','tv','-movflags','+faststart',str(video_only)]
    run(cmd,ROOT/(name+'-render.log'))
    mux=['ffmpeg','-hide_banner','-y','-i',str(video_only)]
    if args.preview: mux+=['-ss',str(args.start)]
    mux+=['-i',str(args.source),'-map','0:v:0','-map','1:a:0','-c','copy']
    if args.preview:mux+=['-t','8']
    mux+=['-map_metadata','-1','-metadata','title=Video and gameplay - 50/50','-video_track_timescale','60000','-movflags','+faststart',str(output)]
    run(mux,ROOT/(name+'-mux.log'))
    print(output,flush=True)

if __name__=='__main__':main()
