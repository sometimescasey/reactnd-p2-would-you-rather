import { RECEIVE_QUESTIONS } from '../actions/questions';

// this only handles the "questions" slice of state
// not the whole state!
export default function questions(state={}, action) {

	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		default:
			return state;
	}
}
