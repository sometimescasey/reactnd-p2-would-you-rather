import React from 'react';

// Tabs on home page to switch between answered / unanswered
// sets vanilla React state on Home component

export default function HomeSwitcher(props) {
	const { switchCallback, showAnswered } = props;

	return (
		<div className="home-switch">
			<ul>
				<li>
					<button
						onClick={() => {switchCallback(false)}}
						className={showAnswered ? "home-switch-link" : "home-switch-link-active"}
						>
						Unanswered
					</button>
				</li>
				<li>
					<button
						onClick={() => {switchCallback(true)}}
						className={showAnswered ? "home-switch-link-active" : "home-switch-link"}
					>
						Answered
					</button>
				</li>
			</ul>
		</div>
	);
}