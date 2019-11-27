import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SignIn = (props) => {
	const [ login, setLogin ] = useState({
		username : '',
		password : '',
	});
	const handleChange = (e) => {
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post()
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/private');
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<h1>Welcome to Portfolio Builder</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' name='username' onChange={handleChange} placeholder='Username' />
				<input type='password' name='password' onChange={handleChange} placeholder='Password' />
			</form>
		</div>
	);
};

export default SignIn;
