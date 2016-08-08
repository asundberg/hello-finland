import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import contents from './idea';
import QA from './QA';


class App extends Component {
  constructor () {
    super();
    this.state = {
      gameDisplay: false
    }
  }
  startGame () {
    this.setState({gameDisplay: true})
  }
  render() {
    let view;
    if (!this.state.gameDisplay) {
      view = <div className="App-intro"><p>Being from a small country, it is always interesting to hear what beliefs people from other countries hold about your country. I tend to get a bit startled whenever I hear Finland mentioned in international books and movies, or when someone I meet abroad has visited Finland, or knows someone from Finland. I've lived abroad for most of my adult life, but this past year in particular I've been getting strangely nostalgic about Finland, so I wanted to create a game as a fun way for people to learn random facts about my country (and some other countries too). Can you pick out the lies? Hope you enjoy playing!</p><p className="warning">No Googling! There is a timer so you can't cheat.</p><button onClick={this.startGame.bind(this)}>START GAME!</button></div>
    } else {
      view = <QA></QA>
    }
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-name">DOES FINLAND EXIST?!?</h1>
          <p className="tagline">Two truths and one lie about Finland</p>
        </div>
        <div>{view}</div>
      </div>
    );
  }
}

export default App;
