import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

export class Playlist extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const val = e.target.value;
    this.props.onNameChange(val);
  }
  render() {
    return (
      <div className="Playlist">
        <input value={this.props.playlistName} onChange={this.handleChange} />
        <TrackList
          trackList={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
