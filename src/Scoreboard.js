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
        Your score: {this.props.yourScore}/{this.props.totalSoFar}
      </span>
    );
  }
}

export default Scoreboard;
