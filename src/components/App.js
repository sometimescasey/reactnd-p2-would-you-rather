import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TopNav from './TopNav';

class App extends Component () {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav/>
        </div>
      </Router>
    );
  }

}

export default connect()(App);
