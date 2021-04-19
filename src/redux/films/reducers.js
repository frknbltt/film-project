import { SEARCH_FILM_FAILURE, SEARCH_FILM_REQUEST, SEARCH_FILM_SUCCESS,GET_FILMS_FAILURE, GET_FILMS_REQUEST, GET_FILMS_SUCCESS, RATE_FILM_FAILURE, RATE_FILM_REQUEST, RATE_FILM_SUCCESS } from "./actions";

const initialState = {
  data: null,
  error: null,
  rateData: null
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_FILMS_REQUEST:
      return { ...state, error: '' };
    case GET_FILMS_SUCCESS:
      return { ...state, data: payload };
    case GET_FILMS_FAILURE:
      return { ...state, error: payload };
    case RATE_FILM_REQUEST:
      return { ...state, error: '', rateData: '' };
    case RATE_FILM_SUCCESS:
      return { ...state, rateData: payload };
    case RATE_FILM_FAILURE:
      return { ...state, rateData: payload };
    case SEARCH_FILM_REQUEST:
      return { ...state, error: '' };
    case SEARCH_FILM_SUCCESS:
      return { ...state, data: payload };
    case SEARCH_FILM_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
}