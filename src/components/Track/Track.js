import React, { Component } from "react";
import "./Track.css";

export class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }
  render() {
    const { track } = this.props;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>
            Artist: {track.artist} | Album: {track.album}
          </p>
        </div>
        <button className="Track-action">
          {this.props.isRemoval ? (
            <span className="track-action" onClick={this.removeTrack}>
              -
            </span>
          ) : (
            <span className="track-action" onClick={this.addTrack}>
              +
            </span>
          )}
        </button>
      </div>
    );
  }
}

export default Track;
