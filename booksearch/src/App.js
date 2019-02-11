import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './searchbar';
//import SearchFilter from './searchfilter';
import Results from './results';

// api key: AIzaSyDU51la7XQeUPpOQJ55ue3seE2sfhzTlcg
//base url GET https://www.googleapis.com/books/v1/volumes?q=
//variable for user input flowers+inauthor:keyes&key=yourAPIKey






class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
      title: '',
      results: ['placeholder'],
      filterOption: null,
      error: null
    //   saleInfo": {
    //     "country": "US",
    //     "saleability": "NOT_FOR_SALE",
    //     "isEbook": false
    // }
    //"printType": "BOOK"
    };
  }



  searchTerm(word) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${word}&key=AIzaSyDU51la7XQeUPpOQJ55ue3seE2sfhzTlcg`;
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
        //"Authorization": "Bearer AIzaSyDU51la7XQeUPpOQJ55ue3seE2sfhzTlcg"
      }
    }
    fetch(url, options)
      .then(res => {
        if(!res.ok){
          throw new Error('Something went wrong')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        let newItems = data.items;
        const newResults = this.state.results
        this.props.setState({
          results: [...newResults, newItems],
          error: null
        });
      })
      // .catch(err => {
      //   this.setState({
      //     error: err.message
      //   })
      // })
     }
     

  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <div className="Booksearch-bar">
          <SearchBar searchTerm={this.searchTerm} />
          </div>
          </header>
          <div className="Booksearch-filter">
          {/* <SearchFilter /> */}
          </div>
          <div className="Results-list"></div>
          <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
