import React, { Component } from "react";
import './searchbar.css'


class SearchBar extends Component {

handleSubmit(e) {
    e.preventDefault();
    return this.props.searchTerm(e.target.bookTitle.value);
}

  render() {
    return (
      <div>
        <form className="addbook-form" onSubmit={(e) => this.handleSubmit(e)}>
          <label className='search' >Search: </label>
          <input
            type="text"
            name="bookTitle"
            id="bookTitle"
            placeholder="Book Title"
            onChange={(e) => this.props.updateSearchWord(e)}
            //value={this.props.title}
          />
          <button type="submit" >Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
