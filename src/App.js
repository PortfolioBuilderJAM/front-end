import React, { useState } from "react";
import  { DragIt } from "./components/Wrappers";

const App = () => {
	const [ values, setValues ] = useState({
		hello: "",
		world: ""
	});

	const [ isEditing, setIsEditing ] = useState(false);

	const handleChanges = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})	
	}

	const toggleEditing = (event) => {
		event.preventDefault();
		setIsEditing(!isEditing);
	}

  return (
    <div className="App">
			<DragIt>
				<div className="handle">{values.hello}</div>
			</DragIt>
			<DragIt>
				<div className="handle">{values.world}</div>
			</DragIt>
			{ isEditing && 
				<form>
					<input onChange={ handleChanges } name="hello" placeholder="hello" value={ values.hello } />
					<input onChange={ handleChanges } name="world" placeholder="world" value={ values.world } />
				</form>
			}
			<button onClick={ toggleEditing }>Edit</button>
    </div>
  );
}

export default App;
