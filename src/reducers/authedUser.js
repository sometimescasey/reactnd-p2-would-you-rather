import { SET_AUTHED_USER } from '../actions/authedUser';

// note to self:
// this does not need to return the WHOLE STATE
// just the authedUser slice of state!
// based on function name (combinedReducers takes care of this )
export default function authedUser(state=null, action) {
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.id;
		default:
			return state;
	}
}