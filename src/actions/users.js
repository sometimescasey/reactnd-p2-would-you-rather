export const RECEIVE_USERS = "RECEIVE_USERS";

/* ACTION CREATOR */
export function receiveUsers(users) {
	return (
		{
			type: RECEIVE_USERS,
			users,
		}
	);
}