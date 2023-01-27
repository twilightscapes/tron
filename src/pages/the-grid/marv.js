import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
// import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"
import Layout from "../../components/siteLayout";
import GoBack from "../../components/goBack";

// import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
// import { StaticImage } from "gatsby-plugin-image"
// import useSiteMetadata from "../../hooks/SiteMetadata"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

// import { ImPlay } from "react-icons/im"
// import LightCycle from "../../static/assets/light-cycle.svg"
// import { ImPlay } from "react-icons/im"
// import LightCycle from "../../static/assets/light-cycle.svg"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
// import SamFlynn from "../../static/assets/sam-flynn.png"
// import CluGuy from "../../static/assets/clu.png"
// import TronGuy from "../../static/assets/tron.png"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.png"
// import KevinFlynn from "../../static/assets/kevin-flynn.png"
// import TronChick from "../../static/assets/tron-chick1.svg"

// import SorryFolks from "../../../static/assets/sorry-folks-moose.svg"
// import { RiArrowLeftSLine, RiBugLine } from "react-icons/ri"






const Marv = ({ youtuber, youtubecontrols, youtubestart, youtubeend, youtubemute, youtubeloop, youtubeautostart }) => {

   
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(!false);



  return (


<Layout>


<div id="" className="wrap-element tronpanel" style={{position:'absolute', top:'0', zIndex:'2', overflow:'', height:'100vh', width:'100vw'}}>



<ReactPlayer
        // url={youtuber}
        url="https://youtu.be/s0fpz3DkCT4"
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
            playerVars: { showinfo:0, autoplay:1, controls:0, start:0, end:3, mute:1, loop:1  }
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

<div style={{position:'relative', top:'-100px'}}><GoBack /></div>

</div>
</Layout>



      
  );
}

export default Marv;