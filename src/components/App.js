import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import TopNav from './TopNav';
import Home from './Home';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import QuestionPage from './QuestionPage';

// TODO: all these components
// should be behind a Login screen

// TODO: have routes lead conditionally to components only if
// user is logged in

// TODO: after login, redirect to Home per rubric

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
        <LoadingBar />
          <div className="App">
            <TopNav/>
            <div>
                  <Route path='/' exact component={Home} />
                  <Route path='/new-question' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/questions/:question_id' component={QuestionPage} />
            </div>
          </div>
          </Fragment>
      </Router>
    );
  }

}

export default connect()(App);
