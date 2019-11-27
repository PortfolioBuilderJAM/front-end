export const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
export const ADD_SECTION = 'ADD_SECTION';

export const activateSection = name => {
	return { type: ACTIVATE_SECTION, payload: name };
}

export const addSection = section => {
	return { type: ADD_SECTION, payload: section };
}

