import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {
	render () {
		const { user, question, yourAnswer } = this.props;

		return (
			<div className="question-wrapper">
				<Link to={`/questions/${question.id}`} className='question-link'>
					<div className="question">
						<div className="question-user-name">
							{user.name}
						</div>
						<div className="option" id="option-1">
							{question.optionOne.text}
						</div>
						<div className="option" id="option-2">
							{question.optionTwo.text}
						</div>
						{ yourAnswer && (
							<div className="your-answer">
							Your answer: {yourAnswer.text}
							</div>
							)}
					</div>
				</Link>
			</div>
		);
	}
}

function mapStateToProps({ users, questions, authedUser }, {qid, showAnswered}) {
	let props = {
		user: users[questions[qid].author],
		question: questions[qid],
	};

	if (showAnswered) {
		const a1 = questions[qid].optionOne;
		const a2 = questions[qid].optionTwo;

		/* little wasteful to check through the answers again
		potential optimization: could somehow encode this data into props
		in QuestionList.mapStateToProps() */
		if (a1.votes.includes(authedUser)) {
			props["yourAnswer"] = a1;
		} else if (a2.votes.includes(authedUser)) {
			props["yourAnswer"] = a2;
		} else {
			// this should never occur
			console.log("Question.mapStateToProps(): error when getting user answer for qid ", qid);
		}
	}

	return props;
}

export default connect(mapStateToProps)(Question);
