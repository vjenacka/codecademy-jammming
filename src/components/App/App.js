import React, { Component } from "react";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Hamina pjesma",
          artist: "Hamo",
          album: "Hamin album",
          id: 1,
        },
        {
          name: "Sabahetina pjesma",
          artist: "Sabaheta",
          album: "Sabahetin album",
          id: 2,
        },
        {
          name: "Ruskina pjesma",
          artist: "Rusko",
          album: "Ruskin album",
          id: 3,
        },
      ],
      playlistName: "My playlist",
      playlistTracks: [
        {
          name: "Hamina pjesma",
          artist: "Hamo",
          album: "Hamin album",
          id: 1,
        },
        {
          name: "Sabahetina pjesma",
          artist: "Sabaheta",
          album: "Sabahetin album",
          id: 2,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  //add new track to playlist
  addTrack(track) {
    //looks for existing track in the playlist, if found returns
    if (this.state.playlistTracks.find(ele => ele.id === track.id)) return;

    const newPlaylist = [...this.state.playlistTracks, track];
    this.setState({ playlistTracks: newPlaylist });
  }

  //add new track to playlist
  removeTrack(track) {
    const newPlaylist = this.state.playlistTracks.filter(
      ele => ele.id !== track.id
    );

    this.setState({ playlistTracks: newPlaylist });
  }

  //change playlist name
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
