import React, { useCallback } from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";



const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} placeholder="Create playlist ..." />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
        onPlay={props.onPlay} // Pass onPlay to TrackList
        currentTrackId={props.currentTrackId} // Pass currentTrackId to TrackList
      />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};



export default Playlist;
