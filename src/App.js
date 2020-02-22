import React, { Component } from 'react';
import './App.css';
import TweetPoster from './components/TweetPoster';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TweetPoster />
      </div>
    );
  }
}

export default App;