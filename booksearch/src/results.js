import React, { Component } from "react";
import App from "./App";

class Results extends Component {
    
  resultsList = () => {
    this.props.results.map((book, key) => {
      <li>
        <h3>{book.name}</h3>
        <p>Author:{book.author}</p>
        <p>Price:{book.price}</p>
        <p>{book.review}</p>
        <img href={book.image} />
      </li>;
    });
  };

  render() {
    return (
      <div>
        <ul>{this.resultsList}</ul>
      </div>
    );
  }
}

export default Results;
