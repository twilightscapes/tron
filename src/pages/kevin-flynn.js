import React from "react";
import Layout from "../components/siteLayout";
import { StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player/lazy'


function KevinPage() {


  // const { iconimage } = useSiteMetadata()

  return (
  

<Layout>


<div id="" className="wrap-element tronpanel" style={{overflow:'hidden', height:'100vh'}}>
<ReactPlayer
          // url={youtuber}
        url="https://youtu.be/c_V1iD6F1kk"
        light={false}
        playsinline
        playing
        loop={true}
        style={{zIndex:'0', opacity:'.5'}}


        config={{
          file: {
            attributes: {
              crossorigin: "anonymous",
            },
          },
          youtube: {
            playerVars: { showinfo:0, autoplay:1, controls:0, start:20, end:28, mute:1, loop:1  }
          },
        }}
      />

<div className="youblock" style={{position:'absolute', display:'flex',  height:'55px', width:'100%', zIndex:'0', top:'0', left:'0', textAlign:'center', color:'#fff', background:'', padding:'12px 10px', background:'linear-gradient(180deg, rgb(7, 104, 115) 1%, rgb(2, 38, 43) 80%)', }}>
tron.<a href="https://allin60.com">allin60.com</a>
</div>


<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'10px', width:'100%', padding:'0 30%', opacity:'1', zIndex:'0'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>TRON</div>
      </h1>


<div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', zIndex:'', position:'absolute', top:'0', width:'100vw' }}>

<StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/kevin-flynn.png" />

    <div className="" style={{display:'flex', gap:'', justifyContent:'', position:'absolute', left:'10vw',  marginTop:'15vh', marginRight:''}}>

<div>
<h2 className="tronText" style={{paddingTop:'18vh', fontSize:'clamp(2rem, 3vw, 3rem)'}}>Kevin Flynn</h2>

<ul style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', listStyle:'none', background:'rgba(0, 0, 0, .8)', padding:'1rem', borderRadius:'12px', maxWidth:'40vw', color:'#fff'}}>
<li><strong>Actor:</strong> Jeff Bridges</li><br />
<li><strong>Allies:</strong> Quorra, Sam Flynn</li>
<li><strong>Enemies:</strong> Jarvis, Rinzler, Black Guard, all of Clu's faithful</li>
</ul>

<div className="font" style={{
          display:'flex', justifyContent:'center', marginTop:'50px', zIndex:'', filter:'drop-shadow(2px 2px 2px #000)', width:'100%',  padding:'2% 1rem', borderRadius:'200px', border:'3px dotted #666', lineHeight:'200%', fontSize:'clamp(1.5rem, 3vw, 3rem)', background:'radial-gradient(circle, rgba(10, 45, 48, 0.4) 17%, rgba(25, 96, 109, 0.4) 58%, rgba(10, 196, 206, 0.5) 97%)', textShadow:'2px 2px 2px #333'
          }}>
<a href="/enter-the-grid" style={{color:'#37f8f8', display:'block', placeContent:'center', border:'0px solid yellow',}}>Enter The Grid</a>
</div>


      </div>

      </div>

      </div>
</div>


</Layout>

  );
}

export default KevinPage;