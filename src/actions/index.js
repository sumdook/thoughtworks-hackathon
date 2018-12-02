import {INIT_MOVIES,INIT_GENRES, INIT_LANG, INIT_COUNTRY, SET_QUERY} from './types';

export function hydrateMovies(movies){
    return{
        type:INIT_MOVIES,
        payload:movies
    }
}

export function hydrateGenres(genres){
    return{
        type:INIT_GENRES,
        payload:genres
    }
}

export function hydrateLang(lauguages){
    return{
        type:INIT_LANG,
        payload:lauguages
    }
}

export function hydrateCountry(countries){
    return{
        type:INIT_COUNTRY,
        payload:countries
    }
}

export function setQuery(query){
    return{
        type:SET_QUERY,
        payload:query
    }
}