import React, { Component } from 'react';

class Scoreboard extends Component {
  constructor () {
    super();
    this.state = {

    }
  }
  render () {
    return (
      <span className="Scoreboard">
          YOUR SCORE: {this.props.yourScore}/{this.props.totalSoFar} (14 questions total)
      </span>
    );
  }
}

export default Scoreboard;
