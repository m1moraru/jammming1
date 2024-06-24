import React, { useCallback } from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";



const Playlist = (props) => {
  const { onNameChange, playlistTracks, onRemove, onPlay, currentTrackId, onSave } = props;

  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} placeholder="Create playlist ..." />
      <TrackList
        tracks={playlistTracks}
        isRemoval={true}
        onRemove={onRemove}
        onPlay={onPlay} // Pass onPlay to TrackList
        currentTrackId={currentTrackId} // Pass currentTrackId to TrackList
      />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};



export default Playlist;
