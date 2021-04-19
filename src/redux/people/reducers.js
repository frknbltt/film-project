import { GET_PEOPLE_FAILURE, GET_PEOPLE_REQUEST, GET_PEOPLE_SUCCESS } from "./actions";

const initialState = {
  data: null,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_PEOPLE_REQUEST:
      return { ...state, error: '' };
    case GET_PEOPLE_SUCCESS:
      return { ...state, data: payload };
    case GET_PEOPLE_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
}