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
<div id="" className="wrap-element tronpanel" style={{overflow:'hidden', width:'100vw', height:'100vh'}}>




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
      {/* <div style={{position:'absolute', top:'0', zIndex:'2', display:'flex', justifyContent:'space-around', width:'100vw'}}> */}

      





</div>

{/* <div style={{position:'absolute', bottom:'0', left:'0', zIndex:'1', width:'100vw', height:'100%', border:'0px solid yellow', padding:'0', margin:'0'}}>
<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/shawshank-stuff.png" style={{height:'100vh'}}  />
</div> */}

          {/* <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          /> */}
      
     
{/* Panel Video */}






{/* Panel Content */}
<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:'1'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>TRON</div>
      </h1>




 


 {/* <div id="characters" className="characters" style={{position:'absolute', zIndex:'0', width:'', height:'', top:'0', background:'none', filter:'none', boxShadow:'none', padding:'0 0 0 0', border:'1px solid red', display:'flex', flexDiection:'column', justifyContent:'flex-end'}}> */}

 
    


    {/* </div>  */}
    
<div className="" style={{display:'flex', flexDiection:'', justifyContent:'center',  position:'absolute', left:'', right:'', top:'10vh', zIndex:'1', width:'100vw', margin:'0 auto', height:'', border:'0px solid red', textAlign:'center'}}>

   
<div id="characters" className="characters" style={{display:'flex', flexDirection:'row', justifyContent:'space-around', position:'absolute', zIndex:'0', width:'', height:'', top:'', border:'0px solid yellow' }}>

<div id="" className="" style={{position:'relative', display:'flex', justifyContent:'center', border:'0px solid red',}}>
         <Link to="/sam-flynn/" title="Sam Flynn"  aria-label="Sam Flynn">
{/* <SamFlynn className="character" style={{height:'100vh', width:'90%', margin:'0 0 0 0',}} /> */}
<StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/sam-flynn.png" />
</Link>
</div>

<div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
 padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
<Link to="/quorra" title="Quorra" aria-label="Quorra">
  {/* <QuoraStand className="character" style={{height:'100%', width:'85%', margin:'0 0 0 10%', right:'', zIndex:''}} /> */}
  <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/quora.png" />
  </Link>
</div>

<div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
 padding:' 0', display:'flex', justifyContent:'center',}}>
<Link to="/kevin-flynn/" title="Kevin Flynn" aria-label="Kevin Flynn">
{/* <KevinFlynn className="character" style={{position:'relative', height:'100%', width:'130%', zIndex:'', margin:'0 0 0 -16%'}} /> */}
<StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/kevin-flynn.png" />
</Link>
</div>

<div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
display:'flex', flexDiection:'column', justifyContent:'center',
padding:'0', border:'0px solid red',}}>
  <Link to="/tron/" title="Tron" aria-label="Tron">
{/* <TronGuy className="character" style={{height:'100%', width:'100%', margin:'0 0 0 0', transform: 'scaleX(-1)'}} /> */}
<StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/tron.png" />
</Link>
</div>

<div srl_exclude="true" id="mylink15" className="donation2" style={{position:'relative', transform:'', maxWidth:'', height:'100vh', 
// background:'rgba(6, 70, 90, 0.6)', 
padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
<Link to="/clu/" title="Clu" aria-label="Clu">
{/* <CluGuy className="character evil" style={{height:'100%', width:'100%', margin:'0 0 0 -20%',}} /> */}
<StaticImage className="character evil"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
</Link>
</div>

</div>
  
       

          
        
        
        </div>


        <div className="tronText TronType" style={{
          display:'flex', justifyContent:'center', filter:'drop-shadow(2px 2px 2px #000)', width:'80%', position:'absolute', top:'40vh', left:'10%',  padding:'2% 1rem', borderRadius:'200px', border:'3px dotted #04e2ff', lineHeight:'200%', fontSize:'clamp(1.2rem, 3vw, 2.8rem)', color:'rgb(6, 232, 240)',  textShadow:'2px 2px 2px #333', zIndex:'2',
          }}>
            CHOOSE YOUR CHARACTER
            </div>

       




{/* Panel Content */}





{/*  */}
{/* Image Gallery */}

  {/* {data.allFile.edges.map(edge => {
  return <GatsbyImage
  image={edge.node.childImageSharp.gatsbyImageData}
  srl_gallery_image="true"
  alt={edge.node.name}
  key={edge.node.id}
/>
})} */}










</CustomBox>
  );
}

export default Panel1;