import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginOption from './LoginOption';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom';

class Login extends Component {
	state = {
		selectedUser: null
	};

	handleLogin = () => {
		const { dispatch } = this.props;
		dispatch(setAuthedUser(this.state.selectedUser));
		this.props.history.push('/');
	};

	handleSelect = (e) => {
		this.setState({ selectedUser: e.target.value });
	};

 	render() {
 		const { usernameList } = this.props;

 		return (
 			(usernameList.length > 0)
 			? (
 			<div className="login">
 				<div className="login-selector">
	 				<label htmlFor="user-selector">Choose a user: </label>
	 				<select
	 					name="user-selector"
	 					id="user-selector"
	 					defaultValue=""
	 					onChange={this.handleSelect}
	 					>
	 						<option disabled value=""></option>
	 					{ usernameList.map((un) => (
	 						<LoginOption
	 							username={un}
	 							key={un}
	 							/>
	 						)) }
	 				</select>
	 				<div className="login-button">
		 				<button
		 					type="submit"
		 					className="user-selector-button"
		 					onClick={this.handleLogin}
		 					disabled={this.state.selectedUser ? false : true }
		 					>
		 					Login
		 				</button>
	 				</div>
 				</div>
 			</div>
 			)
 			: null
 			);
 	}
}

function mapStateToProps({ users }) {
	const usernameList = Object.keys(users).map((u) => (users[u].id));
	return {
		usernameList,
	};
}

export default withRouter(connect(mapStateToProps)(Login));