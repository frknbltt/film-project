import { GET_GENRES_FAILURE, GET_GENRES_REQUEST, GET_GENRES_SUCCESS } from "./actions";

const initialState = {
  data: null,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_GENRES_REQUEST:
      return { ...state, error: '' };
    case GET_GENRES_SUCCESS:
      return { ...state, data: payload };
    case GET_GENRES_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
}