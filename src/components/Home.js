import React, { Component } from 'react';
import HomeSwitcher from './HomeSwitcher';
import QuestionList from './QuestionList';

class Home extends Component {
 	state = {
 		showAnswered: false,
 	}

 	switchList = (showAnswered) => {
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
 				<HomeSwitcher
 					switchCallback={(sA) => {this.switchList(sA)}}
 					showAnswered={this.state.showAnswered}
 					/>
 				<QuestionList showAnswered={showAnswered}/>
 			</div>
 			);
 	}
}

export default Home;