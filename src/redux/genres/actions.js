export const GET_GENRES_REQUEST = 'GET_GENRES_REQUEST'
export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS'
export const GET_GENRES_FAILURE = 'GET_GENRES_FAILURE'


export const getGenresRequest = payload => ({
    type: GET_GENRES_REQUEST,
    payload,
  });

// magic keyword,string