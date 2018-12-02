import {INIT_GENRES,INIT_LANG,INIT_COUNTRY, SET_QUERY} from '../actions/types';
const INITIAL_STATE={genres:{},languages:{},countries:{},query:""};
export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case INIT_GENRES:
            return {...state, genres:action.payload};
        case INIT_LANG:
            return {...state, languages:action.payload};
        case INIT_COUNTRY:
            return {...state, countries:action.payload};
        case SET_QUERY:
            return {...state, query:action.payload};
		default:
			return state;
	}
}
