import React from 'react';
import { NavLink } from 'react-router-dom';

// TODO: add name and avatar
// TODO: add Logout button

export default function TopNav() {
	return (
		<nav className="top-nav">
			<ul>
				<li>
					<NavLink to="/" exact activeClassName='top-link-active' className="top-link">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/new-question" activeClassName='top-link-active' className="top-link">
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
	);
}