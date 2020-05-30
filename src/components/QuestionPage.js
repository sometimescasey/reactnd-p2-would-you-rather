// one version for unanswered
// and one version for answered

import React, { Component } from 'react';
import { connect } from 'react-redux';
import OptionCards from './OptionCards';

class QuestionPage extends Component {

	render () {
		const { question, asker, authedUser, } = this.props;

		// handle the odd case that someone is logged in
		// but goes directly to a question page and not through "/":
		// do not render until "question" is defined
		return (question && asker)
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
							question={question}
							authedUser={authedUser}
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
			question,
			authedUser,
			asker,
		};
	} else {
		return {};
	}
}

export default connect(mapStateToProps)(QuestionPage);