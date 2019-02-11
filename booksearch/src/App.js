import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './searchbar';
import SearchFilter from './searchfilter';
import Results from './results';

// api key: AIzaSyDU51la7XQeUPpOQJ55ue3seE2sfhzTlcg
//base url GET https://www.googleapis.com/books/v1/volumes?q=
//variable for user input flowers+inauthor:keyes&key=yourAPIKey






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      results: [],
      filterOption: null
    //   saleInfo": {
    //     "country": "US",
    //     "saleability": "NOT_FOR_SALE",
    //     "isEbook": false
    // }
    //"printType": "BOOK"
    };
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const API_KEY = 'AIzaSyDU51la7XQeUPpOQJ55ue3seE2sfhzTlcg'
    const options = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
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
        this.setState({
          results: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Booksearch-bar">
          <SearchBar  />
          </div>
          <div className="Booksearch-filter">
          <SearchFilter />
          </div>
          <div className="Results-list"></div>
          <Results results={this.state.results} />
        </header>
      </div>
    );
  }
}

export default App;
