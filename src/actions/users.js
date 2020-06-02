export const RECEIVE_USERS = "RECEIVE_USERS";
export const VOTE_USER = "VOTE_USER";
// does NOT create new user, see note below
export const NEW_QUESTION_USER = "NEW_QUESTION_USER";


/* ACTION CREATOR */
export function receiveUsers(users) {
	return (
		{
			type: RECEIVE_USERS,
			users,
		}
	);
}

export function voteUser(users) {
	return (
		{
			type: VOTE_USER,
			users,
		}
	);
}

// does necessary changes to users when adding a new q
// DOES NOT CREATE A NEW USER
export function nqUser(users) {
	return (
		{
			type: NEW_QUESTION_USER,
			users,
		}
	);
}