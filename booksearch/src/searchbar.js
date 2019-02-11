import React, { Component } from "react";
import App from "./App";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form class="addbook-form" onSubmit={e => this.handleSubmit(e)}>
          <label>Search:</label>
          <input
            type="text"
            name="Book-Title"
            id="Book Title"
            placeholder="Book Title"
            value={this.state.title}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
