import React, { Component } from 'react';
import './App.css';
import TweetPoster from './components/TweetPoster';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TweetPoster />
        <Footer />
      </div>
    );
  }
}

export default App;