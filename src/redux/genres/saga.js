import { Get, Post } from "../services";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_GENRES_FAILURE, GET_GENRES_REQUEST, GET_GENRES_SUCCESS } from "./actions";

function* getGenresSaga({ payload }) {
  const key = '5f6dfd4cbbe3778697b2287c28081cc5'
  try {
    const response = yield call(Get, `/genre/movie/list?api_key=${key}`, {},false);
    if (response) {
      yield put({ type: GET_GENRES_SUCCESS, payload: response.genres });
    } else {
      yield put({ type: GET_GENRES_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: GET_GENRES_FAILURE, payload: error });
  }
}


export default function* Saga() {
  yield takeLatest(GET_GENRES_REQUEST, getGenresSaga);
}
