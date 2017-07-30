import React, { Component } from 'react';
import mitch from './images/mitch.jpg';
import github from './images/github.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'/>
        <div className='App-Body'>
          <img className='img-circle' src={mitch} alt='Picture of Mitchell Henson'/>
          <h3>Mitchell Henson</h3>
          <p>Australian developer based in Berlin</p>
          <a href='https://github.com/Mitch-Henson/'>
            <img src={github} alt='Github'/>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
