// one version for unanswered
// and one version for answered

import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPage extends Component {
	render () {
		const { question_id } = this.props;
		console.log("question_id, ", question_id);
		return (
			<div className="question-page">
				This is a question detail page for qid { question_id }
			</div>
			);
	}
}

function mapStateToProps({}, props) {
	const { question_id } = props.match.params;
	// this is what grabs the match from the Route URL
	return {
		question_id,
	};
}

export default connect(mapStateToProps)(QuestionPage);