import React, { useState, useRef } from "react";
import Layout from "../../components/siteLayout";
import GoBack from "../../components/goBack";
import ReactPlayer from 'react-player/lazy'
import Controls from "../../components/Controls"






function TheGrid() {

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
  

<Layout>
{/* GRID INTRO */}

<div id="" className="wrap-element tronpanel" style={{position:'fixed', top:'0', zIndex:'2', overflow:'', height:'100vh', width:'100vw'}}>

<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:'0'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>TRON</div>
      </h1>



<Controls
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



 




<div style={{position:'relative', top:'-100px'}}><GoBack /></div>

</div>
</Layout>











  );
}

export default TheGrid;