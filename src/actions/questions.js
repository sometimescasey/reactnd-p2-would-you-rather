export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";

/* ACTION CREATOR */
export function receiveQuestions(questions) {
	return (
		{
			type: RECEIVE_QUESTIONS,
			questions,
		}
	);
}

export function voteQuestion(question_id, voted_one, authedUser) {
	return (
		{
			type: VOTE_QUESTION,
			question_id,
			voted_one,
			authedUser
		}
	);
}