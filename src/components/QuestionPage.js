// one version for unanswered
// and one version for answered

import React, { Component } from 'react';
import { connect } from 'react-redux';
import OptionCards from './OptionCards';
import { handleVote } from '../actions/shared';
import { parseTimestamp } from '../utils/parseTimestamp';
import ErrorPage from './ErrorPage';

class QuestionPage extends Component {
	handleVote = (votedOne) => {
		const { question_id, authedUser, dispatch } = this.props;
		const answer = votedOne ? "optionOne" : "optionTwo";
		dispatch(handleVote(authedUser, question_id, answer));
	};

	render () {
		const { question_id, asker, timestamp } = this.props;


		/* Won't happen here, but handle the IRL case that someone is logged in (i.e. via cookies)
		and goes directly to a question page for
		a question that exists in the backend,
		and not through "/":
		do not render until "question" is defined */
		return (question_id && asker)
		? (

				<div className="question-page">
					<div className="asker-info">
						<img src={asker.avatarURL}
						className='asker-img'
						alt={`Avatar of ${asker.name}`}/>
						<div className="asker-name">
						Asked by {asker.name}
						</div>
						<div className="asked-date">
						{parseTimestamp(timestamp)}
						</div>
					</div>

					<h1>Would you rather...</h1>
						<OptionCards
							question_id={question_id}
							handleVote={this.handleVote}
						/>
				</div>
		)
		: <ErrorPage/>;
	}
}

function hasKeys(obj) {
	return (Object.getOwnPropertyNames(obj).length > 0);
}

function mapStateToProps({ questions, users, authedUser }, props) {
	const { question_id } = props.match.params;

	if (hasKeys(questions) && hasKeys(users)) {
		const question = questions[question_id];
		// handle non-existent question
		if (question) {
			console.log(question);
			const asker = users[question.author];
			return {
				question_id,
				asker,
				authedUser,
				timestamp: question.timestamp,
			};
		}
	}

	return {};
}

export default connect(mapStateToProps)(QuestionPage);