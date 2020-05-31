import {
	RECEIVE_USERS,
	VOTE_USER,
	NEW_QUESTION_USER } from '../actions/users';

// this only handles the "users" slice of state
// not the whole state!
export default function users(state={}, action) {

	switch (action.type) {
		case RECEIVE_USERS:
		case VOTE_USER:
		case NEW_QUESTION_USER:
			return {
				...state,
				...action.users,
			};
		default:
			return state;
	}
}
