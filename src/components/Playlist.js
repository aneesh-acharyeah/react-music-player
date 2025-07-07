import React from "react";
import "./Playlist.css";

const Playlist = ({ tracks, setCurrentTrackIndex, playTrack }) => {
  return (
    <div className="playlist">
      <h3>🎵 Playlist</h3>
      <ul>
        {tracks.map((track, index) => (
          <li
            key={index}
            onClick={() => {
              setCurrentTrackIndex(index);
              playTrack();
            }}
          >
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
