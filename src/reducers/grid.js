import { ACTIVATE_SECTION, ADD_SECTION } from '../actions/gridActions';

const initialState = {
	sections: [],
	active: '',
}

export const gridReducer = (state=initialState, action) => {
	switch (action.type) {
		case ACTIVATE_SECTION:
			return {
				...state,
				active: action.payload
			}

		case ADD_SECTION:
			return {
				...state,
				sections: [ ...state.sections, action.payload ]
			}

		default:
			return state;
	}
}
