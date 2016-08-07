import React, { Component } from 'react';
import './App.css';
import contents from './idea';
import Question from './Question';
import Answer from './Answer';

class QA extends Component {
  constructor () {
    super();
    this.state = {
      currentQuObj: contents[0],
      nextButton: 'SKIP!'
    }
  }
  onAnswered (lie) {
    // if (lie) {
    //   score += 1;
    // }
    this.setState({nextButton: 'NEXT!'});
  }
  onNext () {
    const currentIndex = contents.indexOf(this.state.currentQuObj) + 1;
    this.setState({
      currentQuObj: contents[currentIndex],
      nextButton: 'SKIP!'
    });
  }
  render () {
    return (
      <div>
        <h2 className="Game">
          <Question text={this.state.currentQuObj.question}></Question>
        </h2>
        <button onClick={this.onNext.bind(this)}>{this.state.nextButton}</button>
        <p></p>
        {this.state.currentQuObj.answers.map(answerObj => <Answer text={answerObj.answer} lie={answerObj.lie} feedback={answerObj.feedback} key={answerObj.answer} callOnAnswered={this.onAnswered.bind(this)}></Answer>)}
      </div>
    );
  }
}

export default QA;

