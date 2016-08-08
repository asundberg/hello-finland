import React, { Component } from 'react';

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
    let answerText;
    let answerImg;
    if (this.props.text) {
      answerText = <div>{this.props.text}</div>;
    }
    if (this.props.image) {
      answerImg = <img className="image" src={this.props.image}/>
    }
    return (
      <div className="Answer well col-md-4">
        {answerText}
        {answerImg}
        <div>
          <button onClick={this.onAnswerBtnClicked.bind(this)}>This is a lie</button>
        </div>
        <div className={this.state.feedbackColor}>{this.state.feedbackText}</div>
      </div>
    );
  }
}

export default Answer;

