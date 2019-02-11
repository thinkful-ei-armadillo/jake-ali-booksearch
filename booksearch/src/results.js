import React, { Component } from "react";


class Results extends Component {
 
  resultsList() {
   
      
   return this.props.results.map((book, key) => (
      <li>
        <h3>{book.volumeInfo.title}</h3>
        <p>Author:{(book.volumeInfo.hasOwnProperty('authors')) ? book.volumeInfo.authors[0] : ''}</p>
        <p>Price:{book.saleInfo.saleability}</p>
        <p>{book.volumeInfo.description}</p>
        <img src={book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : 'N/A'} alt="thumbnail" />
      </li>
    ));
  };

  render() {
    console.log('results', this.props.results)
    return (
      <div>
        <ul>{this.resultsList()}</ul>
      </div>
    );
  }
}

export default Results;
