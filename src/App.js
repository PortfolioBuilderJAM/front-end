import React, { useState } from 'react';
import { DragIt } from './components/Wrappers';
import Header from './components/Header';
import SignIn from './components/SignIn';
import { Route } from 'react-router-dom';
import About from './components/About';
const App = () => {
	const [ values, setValues ] = useState({
		hello : '',
		world : '',
	});

	const [ isEditing, setIsEditing ] = useState(false);

	const handleChanges = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	const toggleEditing = (event) => {
		event.preventDefault();
		setIsEditing(!isEditing);
	};

	return (
		<div className='App'>
			<Header />
			<Route path='/about' component={About} />
			<Route exact path='/' component={SignIn} />
			<DragIt>
				<div className='handle'>{values.hello}</div>
			</DragIt>
			<DragIt>
				<div className='handle'>{values.world}</div>
			</DragIt>
			{isEditing && (
				<form>
					<input onChange={handleChanges} name='hello' placeholder='hello' value={values.hello} />
					<input onChange={handleChanges} name='world' placeholder='world' value={values.world} />
				</form>
			)}
			<button onClick={toggleEditing}>Edit</button>
		</div>
	);
};

export default App;
