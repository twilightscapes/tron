import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
// import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"

import Layout from "../../components/siteLayout";
import GoBack from "../../components/goBack";



const Sirens = ({ youtuber, youtubecontrols, youtubestart, youtubeend, youtubemute, youtubeloop, youtubeautostart }) => {

  
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(!false);



  return (


<Layout>



<div id="" className="wrap-element tronpanel" style={{position:'absolute', top:'0', zIndex:'2', overflow:'', height:'100vh', width:'100vw'}}>
<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'5vw', position:'absolute', top:'1vh', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:'5'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>THE SIRENS</div>
      </h1>



   




<div className="wrap-element" style={{overflow:'hidden', position:'relative', top:'0'}}></div>



<ReactPlayer
        // url={youtuber}
        url="https://youtu.be/yyovIAXi5mc"
        controls={youtubecontrols}
        start={youtubestart}
        end={youtubeend}
        mute={youtubemute}
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
        style={{zIndex:'0'}}


        config={{
          file: {
            attributes: {
              crossorigin: "anonymous",
            },
          },
          youtube: {
            playerVars: { showinfo:0, autoplay:1, controls:0, start:20, end:120, mute:1, loop:1  }
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
   


      {/* <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />
      <ReactPlayer
            ref={playerRef}
            style={{position:'', zIndex:'0'}}
            width="100%"
            height="100vh"
            // url={iframeUrl}
            url="https://youtu.be/yyovIAXi5mc"
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            muted={muted}
            playsinline
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, autoplay:1, controls:0, start:20, end:120, mute:1  }
              },
            }}
          /> */}


<div style={{position:'absolute', bottom:'0', left:'0', zIndex:'1', maxWidth:'30vw', height:'50vh',}}>




<object style={{height:'100%', bottom:'0', transform:'scaleX(-1)', zIndex:'1', position:'absolute'}} class="" id="svg1" data="/assets/tron-chick1.svg" type="image/svg+xml" alt="animated content" title="animated content" ></object>
<div style={{position:'fixed', bottom:'10vh', height:'', zIndex:'2'}}><GoBack /></div>




</div>




</div>
</Layout>



  );
}

export default Sirens;


// https://youtu.be/NmzuHjWmXOc