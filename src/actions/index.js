import axios from 'axios'; 

export const FETCHING_CHARS = 'FETCHING_CHARS';
export const CHARS_FETCHED = 'CHARS_FETCHED';
export const ERROR_FETCHING_CHARS = 'ERROR_FETCHING_CHARS';

export const getChars = () => {
    const endpoint = 'https://swapi.co/api/people/';
    const chars = axios.get(endpoint);
    return dispatch => {
        dispatch({ type: FETCHING_CHARS });
        chars
            .then((response) => {
                dispatch({ type: CHARS_FETCHED, payload: response.data });
                console.log(response.data);
            })
            .catch(err => {
                dispatch({ type: ERROR_FETCHING_CHARS, payload: err });
            });
    };
};
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based
