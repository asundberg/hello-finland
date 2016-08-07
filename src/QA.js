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
      feedbackText: '',
      feedbackColor: null,
      nextButton: ''
    }
  }
  onAnswered (lie, feedback) {
    if (lie) {
      this.setState({feedbackColor: 'feedback-correct', feedbackText: feedback});
    } else {
      this.setState({feedbackColor: 'feedback-incorrect', feedbackText: feedback});
    }
  }
  onNext () {
    const currentIndex = contents.indexOf(this.state.currentQuObj) + 1;
    this.setState({
      currentQuObj: contents[currentIndex],
      feedbackText: '',
      feedbackColor: null});
  }
  render () {
    return (
      <div>
        <h2 className="Game">
          <Question text={this.state.currentQuObj.question}></Question>
        </h2>
        <button onClick={this.onNext.bind(this)}>{NEXT!}</button>
        <p></p>
        {this.state.currentQuObj.answers.map(answerObj => <Answer text={answerObj.answer} lie={answerObj.lie} feedback={this.state.feedbackText} callOnAnswered={this.onAnswered.bind(this)} feedbackColor={this.state.feedbackColor}></Answer>)}
      </div>
    );
  }
}

export default QA;

