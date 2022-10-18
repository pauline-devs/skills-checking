import React, { useState } from "react";
import Sound from "react-sound";
import "../App.css";

 const PlaySoundDark = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
  ) => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    return (
        <div className="PlaySoundDark">
            <button class="sound" onClick={() => setIsPlaying(!isPlaying)}>
              <b>{!isPlaying ? 'PLAY     ▹' : 'STOP'}</b>
            </button>
            <Sound
              url="/assets/audio/kudasai-serenade.mp3"
              playStatus={
                isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
              }
              playFromPosition={300}
              onLoading={handleSongLoading}
              onPlaying={handleSongPlaying}
              onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    );
};

export default PlaySoundDark;