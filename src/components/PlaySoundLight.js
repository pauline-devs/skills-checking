import React, { useState } from "react";
import Sound from "react-sound";
import "../App.css";
import AlbumIcon from '@mui/icons-material/Album';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

 const PlaySoundLight = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
  ) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="PlaySoundLight">
            <button class="sound" onClick={() => setIsPlaying(!isPlaying)}>
              <b>{!isPlaying ? <AlbumIcon /> : <PauseCircleFilledIcon />}</b>
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