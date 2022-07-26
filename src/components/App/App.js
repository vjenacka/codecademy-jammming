import React, { Component } from "react";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import Spotify from "../../util/Spotify";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null,
      playlistName: "",
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.search = this.search.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }
  componentDidMount() {
    Spotify.getAccessToken();
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
  //search spotify for track
  search(term) {
    Spotify.search(term).then(res => {
      this.setState({ searchResults: res });
    });
  }
  //save playlist to user account
  savePlaylist() {
    const uriArr = this.state.playlistTracks.map(track => track.URI);

    Spotify.savePlaylist(this.state.playlistName, uriArr);
    this.setState({ playlistName: "", playlistTracks: [] });
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {this.state.searchResults && (
              <SearchResults
                searchResults={this.state.searchResults}
                onAdd={this.addTrack}
              />
            )}
            {this.state.playlistTracks.length !== 0 && (
              <Playlist
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
