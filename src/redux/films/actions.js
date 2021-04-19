export const GET_FILMS_REQUEST = "GET_FILMS_REQUEST";
export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_FILMS_FAILURE = "GET_FILMS_FAILURE";

export const RATE_FILM_REQUEST = "RATE_FILM_REQUEST";
export const RATE_FILM_SUCCESS = "RATE_FILM_SUCCESS";
export const RATE_FILM_FAILURE = "RATE_FILM_FAILURE";

export const SEARCH_FILM_REQUEST = "SEARCH_FILM_REQUEST";
export const SEARCH_FILM_SUCCESS = "SEARCH_FILM_SUCCESS";
export const SEARCH_FILM_FAILURE = "SEARCH_FILM_FAILURE";

export const getFilmsRequest = (payload) => ({
  type: GET_FILMS_REQUEST,
  payload,
});

export const searchFilmRequest = (payload) => ({
  type: SEARCH_FILM_REQUEST,
  payload,
});

export const rateFilmRequest = (payload) => ({
  type: RATE_FILM_REQUEST,
  payload,
});

// magic keyword,string
