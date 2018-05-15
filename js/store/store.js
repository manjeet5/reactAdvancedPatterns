import { createStore, applyMiddleware,combineReducers,compose } from 'redux';
import initialReducer from './initialReducer';

const Reducers = combineReducers({
	init: initialReducer
});


const store = createStore(
	Reducers
);

module.exports = store;
