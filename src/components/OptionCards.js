import React, { Component } from 'react';
import VoteInfo from './VoteInfo';

// TODOs: tiny avatars of the people who voted for it!

export default class OptionCards extends Component {

	getVoteCount = () => {
		const { question } = this.props;
		return (question.optionOne.votes.length
			+ question.optionTwo.votes.length);
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
			authedUser } = this.props;

		if (question && authedUser) {
			const totalVoteCount = this.getVoteCount();
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
								{ userAnswered && (
									<VoteInfo
									questionOption={qo1}
									totalVoteCount={totalVoteCount}
								/>
									)}
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
							{ userAnswered && (
								<VoteInfo
								questionOption={qo2}
								totalVoteCount={totalVoteCount}
							/>
								)}
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