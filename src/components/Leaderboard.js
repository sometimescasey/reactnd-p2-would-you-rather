import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardCard from './LeaderboardCard';

class Leaderboard extends Component {
	sortByTotal = (a,b) => {
		const { users } = this.props;

		const aTotal = users[a].questions.length + Object.keys(users[a].answers).length;

		const bTotal = users[b].questions.length + Object.keys(users[b].answers).length;

		return bTotal - aTotal;
	};

 	render() {
 		const { users } = this.props;

 		return (
 			<div className="leaderboard">
 				Leaderboard
 				<div className="leaderboard-list">
 					{Object.keys(users)
 						.sort(this.sortByTotal)
 						.map((u,i) => (
 						<LeaderboardCard
 							uid={u}
 							key={u}
 							rank={i+1}
 						/>
 						))}
 				</div>
 			</div>
 			);
 	}
}

function mapStateToProps({ users }) {
	return {
		users,
	};
}

export default connect(mapStateToProps)(Leaderboard);