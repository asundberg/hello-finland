import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import contents from './idea';
import QA from './QA';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-name">DOES FINLAND EXIST?!?</h1>
          <p className="tagline">Two truths and one lie about Finland</p>
        </div>
        <p>blurb here and then button, and when you click it, the below QA would be displayed.</p>
        <QA></QA>
      </div>
    );
  }
}

export default App;
