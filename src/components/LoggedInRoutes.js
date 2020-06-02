import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import QuestionPage from './QuestionPage';
import ErrorPage from './ErrorPage';

export default function LoggedInRoutes(props) {
	return (
		<div className="logged-in-routes">
          <Switch>
	          <Route path='/' exact component={Home} />
	          <Route path='/add' component={NewQuestion} />
	          <Route path='/leaderboard' component={Leaderboard} />
	          <Route path='/questions/:question_id' component={QuestionPage} />
	          <Route component={ErrorPage}/>
          </Switch>
         </div>
		);
}