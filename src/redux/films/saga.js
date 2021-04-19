import { Get, Post } from "../services";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_FILMS_FAILURE, GET_FILMS_REQUEST, GET_FILMS_SUCCESS, RATE_FILM_FAILURE, RATE_FILM_REQUEST, RATE_FILM_SUCCESS, SEARCH_FILM_FAILURE, SEARCH_FILM_REQUEST, SEARCH_FILM_SUCCESS } from "./actions";

function* getFilmsSaga() {
  const key = '5f6dfd4cbbe3778697b2287c28081cc5'
  try {
    const response = yield call(Get, `/movie/popular?api_key=${key}`, {},false);
    if (response) {
      yield put({ type: GET_FILMS_SUCCESS, payload: response.results });
    } else {
      yield put({ type: GET_FILMS_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: GET_FILMS_FAILURE, payload: error });
  }
}

function* searchFilmSaga( payload ) {
  debugger
  const key = '5f6dfd4cbbe3778697b2287c28081cc5'
  try {
    const response = yield call(Get, `/search/movie?api_key=${key}&language=en-US&query=${payload}&page=1&include_adult=false`, {},false);
    if (response) {
      yield put({ type: SEARCH_FILM_SUCCESS, payload: response.results });
    } else {
      yield put({ type: SEARCH_FILM_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: SEARCH_FILM_FAILURE, payload: error });
  }
}

function* rateFilmSaga({ payload }) {
  const key = '5f6dfd4cbbe3778697b2287c28081cc5'
  const session_id = '9d4e2b1757ed3f577ad6f625c888fc2195160d50'
  try {
    const response = yield call(Post, `/movie/${payload.movie_id}/rating?api_key=${key}&session_id=${session_id}`, payload,{},false);
    if (response) {
      yield put({ type: RATE_FILM_SUCCESS, payload: response });
    } else {
      yield put({ type: RATE_FILM_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: RATE_FILM_FAILURE, payload: error });
  }
}


export default function* Saga() {
  yield takeLatest(GET_FILMS_REQUEST, getFilmsSaga);
  yield takeLatest(RATE_FILM_REQUEST, rateFilmSaga);
  yield takeLatest(SEARCH_FILM_REQUEST, searchFilmSaga);

  
}
