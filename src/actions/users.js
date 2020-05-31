export const RECEIVE_USERS = "RECEIVE_USERS";
export const VOTE_USER = "VOTE_USER";

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