import React, { Component } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export class TrackList extends Component {
  render() {
    const { trackList, onAdd } = this.props;
    console.log(trackList);
    return (
      <div className="TrackList">
        {trackList.map(result => (
          <Track key={result.id} track={result} onAdd={onAdd} />
        ))}
      </div>
    );
  }
}

export default TrackList;
