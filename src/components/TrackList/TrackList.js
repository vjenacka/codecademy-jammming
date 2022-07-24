import React, { Component } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export class TrackList extends Component {
  render() {
    const { searchResults } = this.props;
    console.log(searchResults);
    return (
      <div className="TrackList">
        {searchResults.map(result => (
          <Track key={result.id} track={result} />
        ))}
      </div>
    );
  }
}

export default TrackList;
