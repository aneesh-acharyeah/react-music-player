import React from "react";
import "./TrackDetails.css";

const TrackDetails = ({ track }) => {
  return (
    <div className="track-details">
      <div className="album-art">
        <img
          src={track.image}
          alt={`${track.title} cover`}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x300?text=No+Image"; // Fallback
          }}
        />
      </div>
      <div className="track-info">
        <h2>{track.title}</h2>
        <h3>{track.artist}</h3>
      </div>
    </div>
  );
};

export default TrackDetails;
