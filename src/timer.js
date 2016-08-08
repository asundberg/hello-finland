// create a component, put it inside QA, give it the prop of totalSeconds
// inside the component constructor, create a setTimeout for every 1000 milliseconds to decrement totalSeconds.
// totalSeconds should be copied and put inside the state

import React, { Component } from 'react';

class Timer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      secondsRemaining: this.calculateSecondsRemaining()
    }
    const intervalId = setInterval(() => {
      const timeLeft = this.calculateSecondsRemaining();
      if (timeLeft > 0) {
        this.setState({secondsRemaining: timeLeft});
      } else if (timeLeft === 0) {
        this.setState({secondsRemaining: timeLeft});
        this.props.timeOut();
      }
    }, 1000);
  }
  calculateSecondsRemaining () {
    const now = new Date().getTime();
    return Math.round((this.props.timeToEnd - now) / 1000);
  }
  render () {
    return (
      <div className="Timer">
        Countdown: {this.state.secondsRemaining} seconds
      </div>
    );
  }
}

export default Timer;




// setTimeout and setInterval are two functions you can create that will take a function and call it asynchronously at a later point.
