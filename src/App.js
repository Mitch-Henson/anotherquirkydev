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
          <img className='img-circle' src={mitch} alt='Mitchell Henson'/>
          <h2>Mitchell Henson</h2>
          <p>Developer - Gamer - Aussie</p>
          <a href='https://github.com/Mitch-Henson/'>
            <img src={github} alt='Github'/>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
