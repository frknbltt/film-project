export const GET_PEOPLE_REQUEST = 'GET_PEOPLE_REQUEST'
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS'
export const GET_PEOPLE_FAILURE = 'GET_PEOPLE_FAILURE'


export const getPeopleRequest = payload => ({
    type: GET_PEOPLE_REQUEST,
    payload,
  });

// magic keyword,string