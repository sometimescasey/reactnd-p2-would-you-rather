import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionList extends Component {
	render () {
		const { questionIds, showAnswered } = this.props;
		return (
			<div className="question-list">
				{questionIds.map((qid) => (
					<Question
						key={qid}
						qid={qid}
						showAnswered={showAnswered}
					/>))}
			</div>
			);
	}
}

function mapStateToProps({ questions, authedUser }, { showAnswered }) {
 	return {
 		questionIds: Object.keys(questions)
 			.filter((q) => {
 				const voter_list =
 					questions[q].optionOne.votes
 					+ questions[q].optionTwo.votes
 				const answered = voter_list.includes(authedUser);
 				return ( showAnswered === answered );
 			})
 			.sort(
 			(a,b) => questions[b].timestamp - questions[a].timestamp)
 	};
}

export default connect(mapStateToProps)(QuestionList);