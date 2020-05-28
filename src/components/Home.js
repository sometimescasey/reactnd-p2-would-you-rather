import React, { Component } from 'react';
// import { connect } from 'react-redux';
import HomeSwitcher from './HomeSwitcher';
import QuestionList from './QuestionList';

class Home extends Component {
 	state = {
 		showAnswered: false,
 	}

 	switchList = (showAnswered) => {
 		// don't change state unless showAnswered actually changes
 		if (this.state.showAnswered !== showAnswered) {
 			this.setState((cs) => ({
 				showAnswered: showAnswered
 			}))
 		}
 	}

 	render() {
 		const { showAnswered } = this.state;

 		return (
 			<div className="home">
 				Home
 				<HomeSwitcher
 					switchCallback={(sA) => {this.switchList(sA)}}
 					showAnswered={this.state.showAnswered}
 					/>
 				{/* TODO: Answered vs Unanswered */}
 				{/*	STATE: Display list of answered vs unanswered qs */}
 				<QuestionList showAnswered={showAnswered}/>
 			</div>
 			);
 	}
}

export default Home;
// export default connect()(Home);