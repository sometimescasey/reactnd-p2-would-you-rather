import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import TopNav from './TopNav';
import LoggedInRoutes from './LoggedInRoutes';

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
    const { authedUser } = this.props;

    return (
      <Router>
        <Fragment>
        <LoadingBar />
          <div className="App">
            <TopNav/>
            { authedUser && (
                  <LoggedInRoutes/>
              )}

          </div>
          </Fragment>
      </Router>
    );
  }

}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
