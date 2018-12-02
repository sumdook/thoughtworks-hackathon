import {INIT_GENRES} from '../actions/types';
export default function(state = {}, action){
	switch(action.type){
		case INIT_GENRES:
			return action.payload;
		default:
			return state;
	}
}