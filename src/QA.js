import React, { Component } from 'react';
import contents from './idea';
import Question from './Question';
import Answer from './Answer';
import Timer from './Timer';
import Scoreboard from './Scoreboard';

class QA extends Component {
  constructor () {
    super();
    this.state = this.resetState();
  }
  resetState () {
    return {
      currentQuObj: contents[0],
      nextButton: 'SKIP!',
      endTime: new Date().getTime() + 180000,
      score: 0
    };
  }
  onAnswered (lie) {
    if (lie) {
      this.setState({score: this.state.score + 1});
    }
    this.setState({nextButton: 'NEXT!'});
  }
  onNext () {
    const currentIndex = contents.indexOf(this.state.currentQuObj) + 1;
    this.setState({
      currentQuObj: contents[currentIndex],
      nextButton: 'SKIP!'
    });
  }
  onTimeOut () {
    const response = confirm('Your time is up. Play again?');
    if (response) {
      this.setState(this.resetState());
    }
  }
  render () {
    return (
      <div>
        <h2 className="Game">
          <Question text={this.state.currentQuObj.question}></Question>
        </h2>
        <button onClick={this.onNext.bind(this)}>{this.state.nextButton}</button>
        <p></p>
        <div>
          {this.state.currentQuObj.answers.map(answerObj => <Answer text={answerObj.answer} image={answerObj.image} lie={answerObj.lie} feedback={answerObj.feedback} key={answerObj.answer || answerObj.image} callOnAnswered={this.onAnswered.bind(this)}></Answer>)}
        </div>
        <div className="tracking">
          <Timer timeToEnd={this.state.endTime} timeOut={this.onTimeOut.bind(this)}></Timer>
          <Scoreboard yourScore={this.state.score} totalSoFar={contents.indexOf(this.state.currentQuObj) + 1}></Scoreboard>
        </div>
      </div>
    );
  }
}

export default QA;

