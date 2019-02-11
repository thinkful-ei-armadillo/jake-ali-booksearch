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
      filterOption: '',
      error: null,
      searchWord: ''
    };
  }

  handleFilter(e) {
    console.log('this is e', e);
    this.setState({
      filterOption: e
    },function(){
      if(this.state.searchWord!=''){
        this.searchTerm();
      }
    });
  }

  updateSearchWord(e){
    this.setState({
      searchWord: e.target.value
    });
  }



  searchTerm() {
    let word = this.state.searchWord;
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="
    const KEY_END = "&key=AIzaSyDU51la7XQeUPpOQJ55ue3seE2sfhzTlcg"
    let PARAMS = this.state.filterOption !== '' ? ('&' + this.state.filterOption) : ''
    const url = (BASE_URL + word + PARAMS + KEY_END);
    console.log(url);
    ;
    const options = {
      method: 'GET',
      headers: {
         
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
        console.log(data);
        this.setState({
          results: data.items,
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
        <header className="App-header" >
          <div className="Booksearch-bar">
          <SearchBar searchTerm={(word) => this.searchTerm(word)} updateSearchWord={(e) => this.updateSearchWord(e)} />
          </div>
          </header>
          <div className="Booksearch-filter">
          {<SearchFilter handleFilter={(filter) => this.handleFilter(filter)}/>}
          </div>
          <div className="Results-list"></div>
          <Results filterOption={this.state.filterOption} results={this.state.results} />
      </div>
    );
  }
}

export default App;
