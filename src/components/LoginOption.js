import React from 'react';

export default function LoginOption(props) {
	const { username } = props;

	return (
		<option value={username}>{ username }</option>
		);
}