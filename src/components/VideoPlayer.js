
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
// import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"

const VideoPlayer = ({ youtuber, youtubecontrols, youtubestart, youtubeend, youtubemute, youtubeloop, youtubeautostart }) => {

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(!false);
  
  // console.log(muted);
  // console.log(playing);
  

    return (
      <>
      <ReactPlayer
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
      {/* <div style={{position:'absolute', top:'0', zIndex:'2', display:'flex', justifyContent:'space-around', width:'100vw'}}> */}

      <div className="controlsbox" style={{ }}>

        <button onClick={() => setPlaying(!playing)}>
            {playing ? <MdPause className="hudicon1" style={{fontSize:""}} /> : <MdPlayArrow className="hudicon1" style={{fontSize:""}}  />}
        </button>
        <button onClick={() => {
        setMuted(!muted); 
        console.log(muted);
        }}>
            {muted ? <MdVolumeOff className="hudicon1" style={{fontSize:""}}  /> : <MdVolumeUp className="hudicon1" style={{fontSize:""}}  />}
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
      </>
    )
  }

  export default VideoPlayer
  