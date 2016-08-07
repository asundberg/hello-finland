import React, { Component } from 'react';
import './App.css';

class Answer extends Component {
  constructor () {
    super();
    this.state = {
      feedbackColor: '',
      feedbackText: ''
    }
  }
  onAnswerBtnClicked () {
    this.props.callOnAnswered(this.props.lie);
    if (this.props.lie) {
      this.setState({feedbackColor: 'feedback-correct', feedbackText: this.props.feedback});
    } else {
      this.setState({feedbackColor: 'feedback-incorrect', feedbackText: this.props.feedback});
    }
  }
  render () {
    return (
      <div className="Answer well col-md-4">
        <div>{this.props.text}</div>
        <div>
          <button onClick={this.onAnswerBtnClicked.bind(this)}>This is a lie</button>
        </div>
        <div className={this.state.feedbackColor}>{this.state.feedbackText}</div>
      </div>
    );
  }
}

export default Answer;

