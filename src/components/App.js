import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TopNav from './TopNav';
import Home from './Home';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav/>
          <div>
                <Route path='/' exact component={Home} />
                <Route path='/new-question' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
// export default connect()(App);
