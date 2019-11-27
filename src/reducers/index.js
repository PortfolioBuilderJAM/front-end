import { createStore, combineReducers } from 'redux';
import { gridReducer } from './grid';

const rootReducer = combineReducers({
	grid: gridReducer
});

export const store = createStore(rootReducer);
