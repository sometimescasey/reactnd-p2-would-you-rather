import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import authedUser from './authedUser';

/*
State shape:

{
	authedUser: "sarah_edo"
	loadingBar: <some loading bar object here>
}
*/

export default combineReducers({
	authedUser,
	// shorthand for the state slice having the same name as the function which handles it
	loadingBar: loadingBarReducer,
});