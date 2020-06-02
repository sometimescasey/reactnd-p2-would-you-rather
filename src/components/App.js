import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/shared';
import { setAuthedUser } from '../actions/authedUser';

import TopNav from './TopNav';
import Login from './Login';
import LoggedInRoutes from './LoggedInRoutes';


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  logoutHandler = () => {
    const { dispatch } =  this.props;
    dispatch(setAuthedUser(null));
  };

  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        <Fragment>
        <LoadingBar />
          <div className="App">
            <TopNav logoutHandler={this.logoutHandler}/>
            {
              authedUser
              ? ( <LoggedInRoutes/> )
              : ( <Login/> )
            }

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
