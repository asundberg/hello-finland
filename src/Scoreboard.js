import React, { Component } from 'react';

class Scoreboard extends Component {
  constructor () {
    super();
    this.state = {

    }
  }
  render () {
    return (
      <div className="Scoreboard">
        Your score: {this.props.yourScore}/{this.props.totalSoFar}
      </div>
    );
  }
}

export default Scoreboard;
