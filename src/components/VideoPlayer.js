
import React, {useState } from "react";
import ReactPlayer from "react-player/lazy";
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
// import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"
import useSiteMetadata from "../hooks/SiteMetadata"

const VideoPlayer = ({ youtuber, youtubecontrols, youtubestart, youtubeend, youtubemute, youtubeloop, youtubeautostart }) => {

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(!false);
    const { iconimage } = useSiteMetadata()


    return (
      <>
      <ReactPlayer
        // ref={playerRef}
        url={youtuber}
        controls={youtubecontrols}
        start={youtubestart}
        end={youtubeend}
        mute={youtubemute.toString()}
        loop={youtubeloop}
        light={false}
        autoPlay={youtubeautostart}
        playsinline
        playing={playing}
        volume={volume}
        muted={muted}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onVolumeChange={value => setVolume(value)}


        config={{
          file: {
            attributes: {
              crossorigin: "anonymous",
            },
          },
          youtube: {
            playerVars: { showinfo:0, autoplay:youtubeautostart, controls:youtubecontrols, start:youtubestart, end:youtubeend, mute:youtubemute  }
          },
        }}
      />



{!youtubecontrols ? (
  <div className="controlsbox" style={{ }}>

<button onClick={() => setPlaying(!playing)}>
    {playing ? 
    <>
    <MdPause className="hudicon1" style={{fontSize:""}} />
    </>
    :
    <>
    <MdPlayArrow className="hudicon1" style={{fontSize:""}}  />
    <div style={{position:'fixed', top:'0', left:'0', right:'0', bottom:'0', width:'100vw', height:'100vh', backgroundColor:'#111', zIndex:'2'}}>
    <div style={{position:'relative', maxWidth:'100vw', margin:'4% 0', zIndex:'0', display:'flex', flexDirection:'column', justifyContent:'center', background:'transparent',}}>
<img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'30vw', margin:'0 auto', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
<span className="mobile">Click to play</span>
</div>
    </div>
    </>
    }
</button>
<button onClick={() => {
setMuted(!muted); 
}}>
    {muted ? 
    <MdVolumeOff className="hudicon1" style={{fontSize:""}}  /> 
    :
    <MdVolumeUp className="hudicon1" style={{fontSize:""}}  />}
</button>
{/* <input
    type="range"
    min={0}
    max={1}
    step={0.01}
    value={volume}
    onChange={event => {console.log(event.target.value); setVolume(event.target.value)}}
/> */}
</div>
     ) : (
       ""
       )}


      
      </>
    )
  }

  export default VideoPlayer
  