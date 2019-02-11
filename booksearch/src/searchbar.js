import React, { Component } from "react";
import App from "./App";

class SearchBar extends Component {

handleSubmit(e) {
    e.preventDefault();
    return this.props.searchTerm(e.target.bookTitle.value);
}

  render() {
    return (
      <div>
        <form className="addbook-form" onSubmit={(e) => this.handleSubmit(e)}>
          <label>Search:</label>
          <input
            type="text"
            name="bookTitle"
            id="Book Title"
            placeholder="Book Title"
            value={this.props.title}
          />
          <button type="submit" >Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
