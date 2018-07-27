import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from '../Map/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Active Defender</h1>
        </header>
        <p className="App-intro">
          Current task: Navigate a piece on a map.
        </p>
        <Map />
      </div>
    );
  }
}

export default App;
