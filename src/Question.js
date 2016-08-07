import React, { Component } from 'react';
import './App.css';

class Question extends Component {

  render () {
    return (
      <div className="Question">
        {this.props.text}
      </div>
    );
  }
}

export default Question;
