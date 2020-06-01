import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleNewQuestion } from '../actions/shared';

class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		submitDisabled: false,
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
			authedUser))
		.then(() => {
			this.props.history.push('/');
		} );
	};

 	render() {

 		return (
 			<div className="new-question">
 				<h1>Would you rather...</h1>
 				{ /* Note - LastPass noise when hitting Enter:
 				https://github.com/KillerCodeMonkey/ngx-quill/issues/351 */ }
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
 					type="submit"
 					disabled={this.state.submitDisabled}
 					onClick={(e) => {
 						this.setState({submitDisabled: true});
 						this.handleSubmit(e);
 					}}
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
