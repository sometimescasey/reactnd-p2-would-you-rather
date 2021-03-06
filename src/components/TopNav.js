import React, { Component }from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// TODO: add Logout button

class TopNav extends Component {
	render () {
		const { users, authedUser, logoutHandler } = this.props;
		const currentUser = (users && authedUser)
			? users[authedUser]
			: null;

		return (
			<div className="top-nav-wrapper">
				<div className="top-nav">
				<nav>
					<ul>
						<li>
							<NavLink to="/" exact activeClassName='top-link-active' className="top-link">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/add" activeClassName='top-link-active' className="top-link">
								New Question
							</NavLink>
						</li>
						<li>
							<NavLink to="/leaderboard" activeClassName='top-link-active' className="top-link">
								Leaderboard
							</NavLink>
						</li>
					</ul>
				</nav>
				</div>
				<div className="top-userinfo">
					<div className="top-name">
						{ currentUser && currentUser.name}
					</div>
					<div className="top-avatar">
					{ currentUser &&
						<img
						src={currentUser.avatarURL}
						className="top-avatar-img"
						alt={`Avatar of ${currentUser.name}`}/> }
					</div>
					<div className="top-logout">
						{ authedUser
							? ( <button
								className="top-logout-button"
								onClick={() => {logoutHandler()}}>
								Logout
								</button> )
							: null }
					</div>
				</div>
			</div>

		);
	}
}

function mapStateToProps({ users, authedUser }) {
	 return {
	 	users,
	 	authedUser,
	 };
}

export default connect(mapStateToProps)(TopNav);