import React, { Component } from 'react';
import contents from './idea';
import Question from './Question';
import Answer from './Answer';
import Countdown from './Countdown';
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
      endTime: new Date().getTime() + 300000,
      score: 0,
      disableAll: false
    };
  }
  onAnswered (lie) {
    if (lie) {
      this.setState({score: this.state.score + 1});
    }
    this.setState({nextButton: 'NEXT!', disableAll: true});
  }
  onNext () {
    const currentIndex = contents.indexOf(this.state.currentQuObj) + 1;
    this.setState({
      currentQuObj: contents[currentIndex],
      nextButton: 'SKIP!',
      disableAll: false
    });
  }
  onTimeOut () {
    const response = confirm('Your time is up and you got ' + this.state.score + ' points out of 14. Play again?');
    if (response) {
      this.setState(this.resetState());
    }
  }
  render () {
    return (
      <div>
        <div className="tracking">
          <Countdown timeToEnd={this.state.endTime} timeOut={this.onTimeOut.bind(this)}></Countdown>
          <Scoreboard yourScore={this.state.score} totalSoFar={contents.indexOf(this.state.currentQuObj) + 1}></Scoreboard>
        </div>
        <h2 className="Game">
          <Question text={this.state.currentQuObj.question}></Question>
        </h2>
        <button onClick={this.onNext.bind(this)}>{this.state.nextButton}</button>
        <p></p>
        <div>
          {this.state.currentQuObj.answers.map(answerObj => <Answer text={answerObj.answer} image={answerObj.image} lie={answerObj.lie} feedback={answerObj.feedback} key={answerObj.answer || answerObj.image} callOnAnswered={this.onAnswered.bind(this)} buttonDisable={this.state.disableAll}></Answer>)}
        </div>
      </div>
    );
  }
}

export default QA;

