import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { activateSection } from '../actions/gridActions';

export const Section = props => {
	const { children, name } = props;
	const dispatch = useDispatch();
	const active = useSelector(state => state.grid.active);

	const [ isHovering, setIsHovering ] = useState(false);

	const handleClicked = () => {
		dispatch(activateSection(name));
	}

	const hoverOn = () => {
		setIsHovering(true);
	}

	const hoverOff = () => {
		setIsHovering(false);
	}

	useEffect(() => {
		const oldActive = document.querySelector('.active');
		const newActive = document.querySelector(`[name="${active}"]`);
		
		if (oldActive) {
			oldActive.classList.remove('active');
			oldActive.classList.remove('handle');
		}

		if (newActive) {
			newActive.classList.add('active');
			newActive.classList.add('handle');
		}

	}, [active]);

	return (
		<div 
			className='section'
			name={ name }
			onMouseEnter={ hoverOn }
			onMouseLeave={ hoverOff }
		>
			{ isHovering && active !== name && <button onClick={ handleClicked }>activate</button> }
			{ children }
		</div>
	);
}
