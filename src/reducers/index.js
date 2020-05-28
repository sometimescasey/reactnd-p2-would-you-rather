import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';

/*
State shape:

{
	authedUser: "sarah_edo"
	loadingBar: <some loading bar object here>
	users: <object of user objects by uid>
	questions: <object of question objects by qid>
}
*/

export default combineReducers({
	authedUser,
	users,
	questions,
	// shorthand for the state slice having the same name as the function which handles it
	loadingBar: loadingBarReducer,
});