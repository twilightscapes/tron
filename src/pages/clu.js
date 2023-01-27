import React, { useState, useRef } from "react";
import Layout from "../components/siteLayout"

import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
import { StaticImage } from "gatsby-plugin-image"
import useSiteMetadata from "../hooks/SiteMetadata"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import ReactPlayer from 'react-player/lazy'
// import Controls from "../components/Controls"
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


import styled from "styled-components"
const CustomBox = styled.div`



@media (min-width: 58em) {

}


`





function CluPage() {


  const [state, setState] = useState({
    playing: true,
    controls: true,
    light: false,
    muted: true,
    loop: true,
  });

  const playerRef = useRef(null);
  const controlsRef = useRef(null);

  const {
    playing,
    controls,
    light,
    muted,
    loop,
    played,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };


  
  
  // const { iconimage } = useSiteMetadata()

  return (
  
<CustomBox style={{}}>
<Layout className="">
{/* GRID INTRO */}


{/* Panel Video */}
{/* <div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground"> */}
{/* c_V1iD6F1kk */}
{/* nJ38P5elTkg */}
{/* <div id="homestart" style={{position:'absolute', top:'-100vh'}}></div> */}
<div id="" className="wrap-element tronpanel" style={{overflow:'', height:'100vh'}}>

{/* <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          /> */}
      <ReactPlayer
            ref={playerRef}
            style={{position:'', zIndex:'0'}}
            width="100%"
            height="100vh"
            // url={iframeUrl}
            url="https://youtu.be/c_V1iD6F1kk"
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
          />
      
     
{/* Panel Video */}






{/* Panel Content */}
<div id="" className="wrap-element tronpanel" style={{position:'absolute', top:'0', zIndex:'2', overflow:'', height:'100vh', width:'100vw'}}>


<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:'0'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>TRON</div>
      </h1>


 


 <div id="" className="characters" style={{position:'relative', zIndex:'0', width:'100vw', height:'100vh', top:'0', background:'none', filter:'none', boxShadow:'none', padding:'5vh 0 0 0', overflow:'hidden', border:'0px solid blue'}}>




 
    
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', zIndex:'', position:'relative', width:'100vw' }}>

    
    
    <StaticImage className="character evil"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
    


    
    


    <div className="" style={{display:'flex', gap:'', justifyContent:'', position:'absolute', left:'10vw',  marginTop:'10vh', marginRight:''}}>

<div>
<h1 className="tronText" style={{paddingTop:'8vh', fontSize:'clamp(2rem, 3vw, 3rem)'}}>CLU</h1>
<ul style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', listStyle:'none', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px', maxWidth:'40vw'}}>
<li><strong>Actor:</strong> Jeff Bridges</li>
<li><strong>User:</strong> Kevin Flynn</li>
<li><strong>Allies:</strong> Jarvis, Rinzler, Black Guard, Sentries</li>
<li><strong>Enemies:</strong> Programs defying system rules</li>
</ul>

<a href="/enter-the-grid" style={{color:'#37f8f8', display:'block', placeContent:'center', border:'0px solid yellow'}}>
                <div className="font" style={{
          display:'flex', justifyContent:'center', marginTop:'150px', zIndex:'', filter:'drop-shadow(2px 2px 2px #000)', width:'100%',  padding:'5% 1rem', borderRadius:'200px', border:'3px dotted #666', lineHeight:'200%', fontSize:'clamp(1.5rem, 3vw, 3rem)', background:'radial-gradient(circle, rgba(10, 45, 48, 0.4) 17%, rgba(25, 96, 109, 0.4) 58%, rgba(10, 196, 206, 0.5) 97%)', textShadow:'2px 2px 2px #333'
          }}>
                  Enter The Grid
                  </div>
                </a>

<div>







</div>




      
      </div>


      </div>

      </div>

      </div>

      </div>
    
    


   
    
      </div>












</Layout>
</CustomBox>
  );
}

export default CluPage;