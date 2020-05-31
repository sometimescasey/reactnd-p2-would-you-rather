// one version for unanswered
// and one version for answered

import React, { Component } from 'react';
import { connect } from 'react-redux';
import OptionCards from './OptionCards';
import { voteQuestion } from '../actions/questions';

class QuestionPage extends Component {
	handleVote = (votedOne) => {
		const { question_id, authedUser, dispatch } = this.props;
		dispatch(voteQuestion(
			question_id,
			votedOne,
			authedUser
			));
		this.forceUpdate(); // TODO hack; fix; also does not work
	};

	render () {
		const { question_id, asker } = this.props;

		// handle the odd case that someone is logged in
		// but goes directly to a question page and not through "/":
		// do not render until "question" is defined
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
					</div>

					<h1>Would you rather...</h1>
						<OptionCards
							question_id={question_id}
							handleVote={this.handleVote}
						/>
				</div>
		)
		: null;
	}
}

function hasKeys(obj) {
	return (Object.getOwnPropertyNames(obj).length > 0);
}

function mapStateToProps({ questions, users, authedUser }, props) {
	const { question_id } = props.match.params;

	if (hasKeys(questions) && hasKeys(users)) {
		const question = questions[question_id];
		const asker = users[question.author];
		return {
			question_id,
			asker,
			authedUser,
		};
	} else {
		return {};
	}
}

export default connect(mapStateToProps)(QuestionPage);