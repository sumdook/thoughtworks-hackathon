import { combineReducers } from 'redux';
import movieReducer from './movieReducer'
import utilReducer from './utilReducer'
export default combineReducers({
	movies: movieReducer,
	util: utilReducer
});
