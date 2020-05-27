import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

/* NOTES */
// need API call to get data, Promise.then() ->
// need action creators to generate actions with those data
// dispatch the actions <- assuming these are all cheap operations
// hide loading bar

// any action creator that returns a function which takes dispatch
// instead of an Object
// requires thunk as first middleware to store
const AUTHED_USER = "sarahedo"; // TODO: allow a dropdown later

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData()
		.then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
			dispatch(setAuthedUser(AUTHED_USER));
			dispatch(hideLoading());
			})
		.catch();
	}
}