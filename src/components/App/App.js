import React, { Component } from "react";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";

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
    };
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
            <SearchResults searchResults={this.state.searchResults} />
            {/* <!-- Add a Playlist component --> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
