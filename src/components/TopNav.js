import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TopNav() {
	return (
		<nav className="top-nav">
			<ul>
				<li>
					<NavLink to="/" exact activeClassName='active'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/new-question" exact activeClassName='active'>
						New Question
					</NavLink>
				</li>
				<li>
					<NavLink to="/leaderboard" exact activeClassName='active'>
						Leaderboard
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}