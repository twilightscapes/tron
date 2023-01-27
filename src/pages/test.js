
import React, { useState } from "react";
import ReactPlayer from 'react-player/lazy';
import Layout from "../components/siteLayout"


const MyComponent = () => {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);

    return (
        <Layout className="page">
        <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            playing={playing}
            volume={volume}
            muted={muted}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onVolumeChange={value => setVolume(value)}
        />
        <button onClick={() => setPlaying(!playing)}>
            {playing ? "Pause" : "Play"}
        </button>
        <button onClick={() => setMuted(!muted)}>
            {muted ? "Unmute" : "Mute"}
        </button>
        <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={event => setVolume(event.target.value)}
        />
        </Layout>
    );
}

export default MyComponent;