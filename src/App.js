import React, { Component } from 'react';
import logo from './logo.svg';
import mitch from './images/mitch.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-Body">
          <img className='img-circle' src={mitch}></img>
          <h5>Another Quirky Dev</h5>
          <p>Mitchell Henson</p>
        </div>
      </div>
    );
  }
}

export default App;
