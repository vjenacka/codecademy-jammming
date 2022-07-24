import React, { Component } from "react";
import "./Track.css";

export class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }
  render() {
    const { track } = this.props;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        <button className="Track-action">
          <a className="track-action">+</a>
        </button>
      </div>
    );
  }
}

export default Track;
