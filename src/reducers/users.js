import { RECEIVE_USERS } from '../actions/users';

// this only handles the "users" slice of state
// not the whole state!
export default function users(state={}, action) {

	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		default:
			return state;
	}
}
