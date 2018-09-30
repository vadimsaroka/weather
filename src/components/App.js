import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-image"></div>
          <SearchBar />
      </div>
    );
  }
}

export default App;
