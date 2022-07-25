import React, { Component } from "react";
import "./SearchBar.css";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search(e) {
    e.preventDefault();
    this.props.onSearch(this.state.term);
    this.setState({ term: "" });
  }
  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }
  render() {
    return (
      <div className="SearchBar">
        <input value={this.state.term} onChange={this.handleTermChange} />
        <button
          className="SearchButton"
          onClick={e => {
            this.search(e);
          }}
        >
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
