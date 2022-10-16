import React, { useState } from "react";
import Sound from "react-sound";

 const PlaySoundDark = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
  ) => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    return (
        <div className="PlaySoundDark">
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {!isPlaying ? 'Play' : 'Stop'}
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