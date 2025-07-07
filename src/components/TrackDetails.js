import React from "react";
import "./TrackDetails.css";

const TrackDetails = ({ track }) => {
  return (
    <div className="track-details">
      <img src={track.image} alt={`${track.title} cover`} />
      <h2>{track.title}</h2>
      <h3>{track.artist}</h3>
    </div>
  );
};

export default TrackDetails;
