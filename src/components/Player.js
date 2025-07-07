import React from "react";
import "./Player.css";

const Player = ({ isPlaying, playTrack, pauseTrack, nextTrack, prevTrack }) => {
  return (
    <div className="player">
      <button onClick={prevTrack}>⏮️ Prev</button>
      {isPlaying ? (
        <button onClick={pauseTrack}>⏸️ Pause</button>
      ) : (
        <button onClick={playTrack}>▶️ Play</button>
      )}
      <button onClick={nextTrack}>⏭️ Next</button>
    </div>
  );
};

export default Player;
