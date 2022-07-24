import React, { Component } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export class TrackList extends Component {
  render() {
    const { trackList, onAdd, onRemove, isRemoval } = this.props;

    return (
      <div className="TrackList">
        {trackList.map(result => (
          <Track
            key={result.id}
            track={result}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemoval={isRemoval}
          />
        ))}
      </div>
    );
  }
}

export default TrackList;
