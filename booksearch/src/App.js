import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './searchbar';
import SearchFilter from './searchfilter';
import Results from './results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      filterOption: null
    };
  }

//ComponentDidMount() {
  //fetch().then().
//}  

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
          <Results />
        </header>
      </div>
    );
  }
}

export default App;
