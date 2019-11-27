import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { DragIt } from "./components/wrappers";
import { Section } from "./components/Section";
import { addSection } from './actions/gridActions';

import "./css/app.scss";

const initialInfo = {
		name: '',
		content: ''
}
const App = () => {
	const sections = useSelector(state => state.grid.sections);
	const dispatch = useDispatch();

	const [ info, setInfo ] = useState(initialInfo);
	
	const handleChanges = event => {
		setInfo({ 
			...info,
			[event.target.name]: event.target.value 
		});
	}

	const handleSubmit = event => {
		event.preventDefault();
		
		if (sections.find(section => section.name === info.name)) {
			return alert('must use a unique name');
		}

		dispatch(addSection(info));
		setInfo(initialInfo);
	}

  return (
    <div className="App">
			<form onSubmit={ handleSubmit }>

				<label>
					name:
					<input name="name" value={ info.name } onChange={ handleChanges } />
				</label>

				<label>
					content:
					<input name="content" value={ info.content } onChange= { handleChanges } />
				</label>

				<button type='submit'>add section</button>
			</form>

			{sections.map(section => (
				<DragIt key={section.name}>
					<Section name={section.name}>
						<p>{section.content}</p>
					</Section>
				</DragIt>
			))}
		</div>
  );
}

export default App;
