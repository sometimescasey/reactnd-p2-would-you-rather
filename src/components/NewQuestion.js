import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleNewQuestion } from '../actions/shared';

// handleNewQuestion(optionOneText, optionTwoText, author)

class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
	};

	handleChange = (e, boxOne) => {
		e.persist();
		const key = boxOne? "optionOne" : "optionTwo";
		this.setState((cs) => ( { [key]: e.target.value } ))
	};

	handleSubmit = (e) => {
		const { dispatch, authedUser } = this.props;

		e.preventDefault();
		console.log(this.state);
		dispatch(handleNewQuestion(
			this.state.optionOne,
			this.state.optionTwo,
			authedUser));
	};

 	render() {
 		return (
 			<div className="new-question">
 				New Question
 				<h1>Would you rather...</h1>
 				<form className="new-question-form">
 					<div className = "new-question-option-list">
	 				<input
	 					placeholder="Option 1"
	 					className="new-question-option"
	 					onChange={(e) => {this.handleChange(e, true)}}
	 					/>
	 				<input
	 					placeholder='Option 2'
	 					className="new-question-option"
	 					onChange={(e) => {this.handleChange(e, false)}}
	 					/>
	 				</div>
 				<button
 					className="new-question-button"
 					onClick={this.handleSubmit}
 					>Submit</button>
 				</form>
 			</div>
 			);
 	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser,
	};
}

export default connect(mapStateToProps)(NewQuestion);
