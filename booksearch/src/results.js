import React, { Component } from "react";


class Results extends Component {
 
  resultsList() {
   
      
   return this.props.results.map((book, key) => (
      <li>
        <h3>{book.volumeInfo.title}</h3>
        <img src={book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : 'N/A'} alt="thumbnail" />
        <p>Author: {(book.volumeInfo.hasOwnProperty('authors')) ? book.volumeInfo.authors[0] : ''}</p>
        <p>{book.volumeInfo.description}</p>
        <p>Price: {book.saleInfo.hasOwnProperty('listPrice') ? book.saleInfo.listPrice.amount : 'Not For Sale'}</p>
        
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
