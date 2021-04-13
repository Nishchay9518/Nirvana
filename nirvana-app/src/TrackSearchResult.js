import React from "react"

export default function TrackSearchResult({ track, 
  chooseTrack
 }) {
  function handlePlay() {
    chooseTrack(track)
    // console.log(track);
  }

  return (
    <div
      className="search-items"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="song">
        <div className="song-name">{track.title}</div>
        <div className="song-artist">{track.artist}</div>
      </div>
    </div>
  )
}
