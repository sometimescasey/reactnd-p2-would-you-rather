import {
	RECEIVE_QUESTIONS,
	VOTE_QUESTION } from '../actions/questions';

// this only handles the "questions" slice of state
// not the whole state!
export default function questions(state={}, action) {

	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case VOTE_QUESTION:
			return {
				...state,
				[action.question_id]: process_vote_question(state, action)
			}
		default:
			return state;
	}
}

function process_vote_question(state, action) {
	if (action.type !== VOTE_QUESTION) {
		throw "process_vote_question() called on non VOTE_QUESTION action. This is a non-intended use of this function."
	} else {
		let question = state[action.question_id];
		if (action.voted_one) {
			question.optionOne.votes = question.optionOne.votes.concat(action.authedUser);
		} else {
			question.optionTwo.votes = question.optionTwo.votes.concat(action.authedUser);
		}

		return question;
	}
}