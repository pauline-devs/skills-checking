import React, { useState } from "react";
import Sound from "react-sound";

 const PlaySoundLight = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
  ) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="PlaySoundLight">
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {!isPlaying ? 'Play' : 'Stop'}
            </button>
            <Sound
              url="/assets/audio/kudasai-vibrancy.mp3"
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

export default PlaySoundLight;