import React, { Component } from "react";
import "./Playlist.css";

export class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist" />
        {/* <!-- Add a TrackList component --> */}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
Playlist.defaultValue = {
  value: "New Playlist",
};

export default Playlist;
