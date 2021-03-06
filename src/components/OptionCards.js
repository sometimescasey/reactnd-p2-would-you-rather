import React, { Component } from 'react';
import { connect } from 'react-redux';
import VoteInfo from './VoteInfo';

// TODOs: tiny avatars of the people who voted for it!

class OptionCards extends Component {
	state = {
		voteButtonsDisabled: false
	};

	isUserChoice = (questionOption, authedUser) => {
		return questionOption.votes.includes(authedUser);
	};

	userAnswered = (qo1, qo2, authedUser) => {
		if (qo1 && qo2) {
			const or = (this.isUserChoice(qo1, authedUser) || this.isUserChoice(qo2, authedUser));
			return or;
		} else {
			return false;
		}
	};

	render() {
		const {
			question,
			authedUser,
			handleVote,
			totalVoteCount } = this.props;

		if (question && authedUser) {
			const qo1 = question.optionOne;
			const qo2 = question.optionTwo;
			const userAnswered = this.userAnswered(qo1, qo2, authedUser);

			let optionCards = (
				<div className="question-page-option-list">
					<div className="question-page-option-wrapper">
						<div className="question-page-option">
								{qo1.text}
								<div className="your-choice">
								{this.isUserChoice(qo1, authedUser)
									? <div style={{fontWeight: 'bold'}}>(Your choice)</div>
									: <div></div> }
								</div>
								{ userAnswered
									? (
										<VoteInfo
										questionOption={qo1}
										totalVoteCount={totalVoteCount}
										/>
									)
									: (
										<button
										onClick={() => {
											handleVote(true);
											this.setState({voteButtonsDisabled: true});
											}}
										disabled={this.state.voteButtonsDisabled}
										>
											Vote Option One
										</button>
									)
								}
						</div>
					</div>
					<div className="question-page-option-wrapper">
						<div className="question-page-option">
							{qo2.text}
							<div className="your-choice">
							{this.isUserChoice(qo2, authedUser)
								? <div style={{fontWeight: 'bold'}}>(Your choice)</div>
								: <div></div> }
							</div>
							{ userAnswered ? (
								<VoteInfo
								questionOption={qo2}
								totalVoteCount={totalVoteCount}
							/>
								) : (
							<button
							onClick={() => {
								handleVote(false);
								this.setState({voteButtonsDisabled: true});
							}}
							disabled={this.state.voteButtonsDisabled}
							>
									Vote Option Two
								</button>
								)
							}
						</div>
					</div>
				</div>
			);

			return optionCards;
		} else {
			return null;
		}

	}
};

function mapStateToProps({ questions, users, authedUser }, props) {
	const { question_id } = props;
	const question = questions[question_id];
	const totalVoteCount = (question.optionOne.votes.length
			+ question.optionTwo.votes.length);
	return {
		question,
		authedUser,
		totalVoteCount,
	};
}

export default connect(mapStateToProps)(OptionCards);