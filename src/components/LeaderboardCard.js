import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderboardCard extends Component {
	render() {
		const { user, rank } = this.props;
		return (
			<div className="leaderboard-card-wrapper">
				<div
					className="leaderboard-card"
					>
					Rank: {rank}
					<div className="leaderboard-card-avatar">
						<img
							className="leaderboard-card-img"
							src={user.avatarURL}
							alt={`avatar of ${user.name}`}/>
					</div>
					<div className="leaderboard-card-name">
						Name: {user.name}
					</div>
					<div className="leaderboard-card-username">
						Username: {user.id}
					</div>
					<div className="leaderboard-card-questions">
						Questions: {user.questions.length}
					</div>
					<div className="leaderboard-card-answers">
						Answers: {Object.keys(user.answers).length}
					</div>
				</div>
			</div>
			);
	}
}

function mapStateToProps({ users }, { uid }) {
	return {
		user: users[uid]
	};
}

export default connect(mapStateToProps)(LeaderboardCard);