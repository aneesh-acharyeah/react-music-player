import React, { useState, useRef, useEffect } from "react";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import TrackDetails from "./components/TrackDetails";
import tracks from "./data/tracks";
import "./App.css";

const App = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playTrack = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex + 1 < tracks.length ? prevIndex + 1 : 0
    );
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : tracks.length - 1
    );
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      playTrack();
    }
    // eslint-disable-next-line
  }, [currentTrackIndex]);

  return (
    <div className="app">
      <h1>🎶 React Music Player</h1>
      <TrackDetails track={tracks[currentTrackIndex]} />
      <audio
        ref={audioRef}
        src={tracks[currentTrackIndex].audioSrc}
        onEnded={nextTrack}
      />
      <Player
        isPlaying={isPlaying}
        playTrack={playTrack}
        pauseTrack={pauseTrack}
        nextTrack={nextTrack}
        prevTrack={prevTrack}
      />
      <Playlist
        tracks={tracks}
        setCurrentTrackIndex={setCurrentTrackIndex}
        playTrack={playTrack}
      />
    </div>
  );
};

export default App;
