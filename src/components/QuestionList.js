import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionList extends Component {
	render () {
		const { questionIds } = this.props;
		console.log("questionIds: ", questionIds);
		return (
			<div>
				{questionIds.map((qid) => (qid))}
			</div>
			);
	}
}

function mapStateToProps({ questions }) {
 	return {
 		questionIds: Object.keys(questions).sort(
 			(a,b) => questions[b].timestamp - questions[a].timestamp)
 	};
}

export default connect(mapStateToProps)(QuestionList);