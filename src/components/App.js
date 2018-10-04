import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Scroll from './scroll';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-image"></div>
          <SearchBar />
          <Scroll>
         	 <WeatherList />
          </Scroll>
      </div>
    );
  }
}

export default App;
