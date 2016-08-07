import React, { Component } from 'react';
import './App.css';

class Answer extends Component {
  constructor () {
    super();
    this.state = {
      feedback: null
    }
  }
  onAnswerBtnClicked () {
    this.props.callOnAnswered(this.props.lie, this.props.feedback);

  }
  render () {
    return (
      <div className="Answer well col-md-4">
        <div>{this.props.text}</div>
        <div>
          <button onClick={this.onAnswerBtnClicked.bind(this)}>This is a lie</button>
        </div>
        <div className={this.props.feedbackColor}>{this.props.feedback}</div>
      </div>
    );
  }
}

export default Answer;

