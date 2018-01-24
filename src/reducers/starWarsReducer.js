import { FETCHING_CHARS, CHARS_FETCHED, ERROR_FETCHING_CHARS } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS: 
      return { ...state, fetching: true };
    case CHARS_FETCHED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        chars: action.payload.results
      };
    case ERROR_FETCHING_CHARS:
      return { 
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
