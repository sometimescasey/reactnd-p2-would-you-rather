import React from 'react';

export default function VoteInfo(props) {
	const { questionOption, totalVoteCount } = props;

	return (
			<div className="vote-info">
				<div className="vote-count">
					Count: { questionOption.votes.length }
				</div>
				<div className="vote-percent">
					({ (questionOption.votes.length * 100 / totalVoteCount).toFixed(1) }%)
				</div>
			</div>
		);
}