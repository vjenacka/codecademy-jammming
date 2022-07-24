import React, { Component } from "react";
import "./Track.css";

export class Track extends Component {
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
          {/* <!-- + or - will go here --> */}
        </button>
      </div>
    );
  }
}

export default Track;
