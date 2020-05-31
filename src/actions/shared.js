import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../utils/api';
import { receiveUsers, voteUser } from './users';
import { receiveQuestions, voteQuestion } from './questions';
import { setAuthedUser } from './authedUser';

import {
	_saveQuestionAnswer,
	_saveQuestion } from '../utils/_DATA';

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

export function handleVote(authedUser, qid, answer) {
	const voteObject = { authedUser, qid, answer };
	return (dispatch, getState) => {
		const { users } = getState();
		if (Object.keys(users[authedUser].answers).includes(qid)) {
			console.log("User has already voted in this poll.")
		} else {
			dispatch(showLoading());
			return _saveQuestionAnswer(voteObject)
			.then(({ users, questions }) => {
				dispatch(voteUser(users));
				dispatch(voteQuestion(questions));
				dispatch(hideLoading());
			})
			.catch();
		}
	}
}