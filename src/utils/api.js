import { _getUsers, _getQuestions } from "./_DATA.js";

export function getInitialData() {
	return Promise.all(
		[
			_getUsers(),
			_getQuestions(),
		]
		).then(
		([users, questions]) => {
			console.group("getInitialData()");
				console.log("users: ", users);
				console.log("questions: ", questions);
			console.groupEnd();
			return ({ users, questions, });

	}
		);
}