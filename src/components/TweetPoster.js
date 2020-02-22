import React, { Component } from "react";
import axios from "axios";

class Quote extends Component {
  state = {
    quote: "",
    character: "",
    imageSrc: ""
  };

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
      .then(response => {
        console.log(response.data);
        let quote = response.data[0].quote,
        character = response.data[0].character,
        imageSrc = response.data[0].image
        this.setState({ quote, character, imageSrc });
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  tweetQuote = () => {
    console.log("tweet", this.state);
    let tweetUrl = `https://twitter.com/intent/tweet?text="${
      this.state.quote
    }"-${this.state.character}`;
    window.open(tweetUrl, "", "width=500,height=300");
  };

  render() {
    return (
      <div className="container">
        <div className="quote-card">
        <img src={this.state.imageSrc} className="App-logo" alt="logo" />
          <h2>
            <strong>{this.state.quote}</strong>
          </h2>
          <h4>
            <i>&mdash; {this.state.character}</i>
          </h4>
        </div>
        <button className="quote" onClick={this.getQuote}>
          Get Quote
        </button>
        <button className="fa fa-twitter" onClick={this.tweetQuote}>
          {" "}
          Tweet
        </button>
      </div>
    );
  }
}

export default Quote;