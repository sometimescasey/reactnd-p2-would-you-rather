export const SET_AUTHED_USER = "SET_AUTHED_USER";

/* ACTION CREATOR */
export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id,
	};
}