export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

/* ACTION CREATOR */
export function receiveQuestions(questions) {
	return (
		{
			type: RECEIVE_QUESTIONS,
			questions,
		}
	);
}