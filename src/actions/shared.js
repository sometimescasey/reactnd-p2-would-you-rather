import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../utils/api';
import { receiveUsers, voteUser, nqUser } from './users';
import { receiveQuestions, voteQuestion, nqQuestion } from './questions';

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

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData()
		.then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
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

export function handleNewQuestion(optionOneText, optionTwoText, author) {
	const newQuestionObject = { optionOneText, optionTwoText, author };
	return (dispatch) => {
		dispatch(showLoading());
		return _saveQuestion(newQuestionObject)
		.then(({ users, questions }) => {
			dispatch(nqUser(users));
			dispatch(nqQuestion(questions));
			dispatch(hideLoading());
		})
		.catch();
	}
}