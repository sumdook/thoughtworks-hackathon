import {INIT_MOVIES} from '../actions/types';
export default function(state = {}, action){
	switch(action.type){
		case INIT_MOVIES:
			return action.payload;
		default:
			return state;
	}
}