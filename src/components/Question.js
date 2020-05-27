import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
	render () {
		const { user, question } = this.props;

		console.log("user ", user);
		console.log("question ", question);

		return (
			<div className="question">
				<div className="user-name">
					{user.name}
				</div>
				<div className="option" id="option-1">
					{question.optionOne.text}
				</div>
				<div className="option" id="option-2">
					{question.optionTwo.text}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ users, questions }, {qid}) {
	return {
		user: users[questions[qid].author],
		question: questions[qid],
	};
}

export default connect(mapStateToProps)(Question);
