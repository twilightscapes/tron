import React, {useState} from "react";
import ReactPlayer from "react-player/lazy";

// import { MdVolumeDown } from "react-icons/md"


import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
import { StaticImage } from "gatsby-plugin-image"
// import useSiteMetadata from "../hooks/SiteMetadata"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
// import ReactPlayer from 'react-player/lazy'
// import Controls from "../components/Controls"
// import { ImPlay } from "react-icons/im"
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





const Panel1 = ({ youtuber, youtubecontrols, youtubestart, youtubeend, youtubemute, youtubeloop, youtubeautostart }) => {


  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  // const [muted, setMuted] = useState(!false);


  
  // const { iconimage } = useSiteMetadata()

  return (
  
<CustomBox style={{}}>

{/* GRID INTRO */}




{/* c_V1iD6F1kk */}
{/* nJ38P5elTkg */}
<div id="homestart" style={{position:'absolute', top:'-100vh', height:'100vh'}}></div>
<div id="" className="wrap-element tronpanel" style={{overflow:'hidden', top:'-10px', width:'100vw', height:'100vh'}}>




<ReactPlayer
        // ref={useRef}
        // url={youtuber}
        url="https://youtu.be/c_V1iD6F1kk"
        controls={youtubecontrols}
        start={youtubestart}
        end={youtubeend}
        mute={youtubemute}
        loop={true}
        light={false}
        autoPlay={true}
        playsinline
        playing={playing}
        volume={volume}
        muted={true}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onVolumeChange={value => setVolume(value)}
        style={{zIndex:'0', background:'transparent', opacity:'.6'}}


        config={{
          file: {
            attributes: {
              crossorigin: "anonymous",
            },
          },
          youtube: {
            playerVars: { showinfo:0, autoplay:1, controls:0, start:20, end:29, mute:1, loop:1  }
          },
        }}
      />


<div className="youblock" style={{position:'absolute', display:'flex',  height:'55px', width:'100%', zIndex:'0', top:'0', left:'0', textAlign:'center', color:'#fff', borderRadius:'0', padding:'12px 10px', background:'linear-gradient(180deg, rgb(7, 104, 115) 1%, rgb(2, 38, 43) 80%)', }}>
tron.<a href="https://allin60.com">allin60.com</a>
</div>
      {/* <div style={{position:'absolute', top:'0', zIndex:'2', display:'flex', justifyContent:'space-around', width:'100vw'}}> */}

      





</div>


      
     
{/* Panel Video */}






{/* Panel Content */}
<h2 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30% 0 30%', opacity:'', zIndex:'1'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>TRON</div>
      </h2>

    
<div className="" style={{display:'flex', flexDiection:'', justifyContent:'center',  position:'absolute', left:'', right:'', top:'6vh', zIndex:'1', width:'100vw', margin:'0 auto', height:'', border:'0px solid red', textAlign:'center'}}>

   
<div id="characters" className="characters" style={{display:'flex', flexDirection:'row', justifyContent:'space-around', position:'absolute', zIndex:'0', width:'', height:'', top:'', border:'0px solid yellow' }}>

<div id="" className="" style={{position:'relative', display:'flex', justifyContent:'center', border:'0px solid red',}}>
         <Link to="/sam-flynn/" title="Sam Flynn"  aria-label="Sam Flynn">
<StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/sam-flynn.png" />
</Link>
</div>

<div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
 padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
<Link to="/quorra" title="Quorra" aria-label="Quorra">
  <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/quora.png" />
  </Link>
</div>

<div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
 padding:' 0', display:'flex', justifyContent:'center',}}>
<Link to="/kevin-flynn/" title="Kevin Flynn" aria-label="Kevin Flynn">
<StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/kevin-flynn.png" />
</Link>
</div>

<div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
display:'flex', flexDiection:'column', justifyContent:'center',
padding:'0', border:'0px solid red',}}>
  <Link to="/tron/" title="Tron" aria-label="Tron">
<StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/tron.png" />
</Link>
</div>

<div id="" className="donation2" style={{position:'relative', transform:'', maxWidth:'', height:'100vh', 
// background:'rgba(6, 70, 90, 0.6)', 
padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
<Link to="/clu/" title="Clu" aria-label="Clu">
<StaticImage className="character evil"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
</Link>
</div>

</div>
  
       

          
        
        
        </div>


        <div className="tronText TronType" style={{
          display:'flex', justifyContent:'center', filter:'drop-shadow(2px 2px 2px #000)', width:'70%', position:'absolute', top:'40vh', left:'10%',  padding:'1% 0', borderRadius:'200px', border:'0px dotted #04e2ff', lineHeight:'200%', fontSize:'clamp(1.2rem, 3vw, 2.8rem)', color:'rgb(6, 232, 240)',  textShadow:'2px 2px 2px #333', zIndex:'2',
          }}>
            CHOOSE YOUR CHARACTER
            </div>

       




{/* Panel Content */}





{/*  */}











</CustomBox>
  );
}

export default Panel1;