import React, { Component } from 'react';
// import { connect } from 'react-redux';
import QuestionList from './QuestionList';

class Home extends Component {
 	render() {
 		return (
 			<div className="home">
 				Home
 				{/* TODO: Answered vs Unanswered */}
 				{/*	STATE: Display list of answered vs unanswered qs */}
 				<QuestionList/>
 			</div>
 			);
 	}
}

export default Home;
// export default connect()(Home);