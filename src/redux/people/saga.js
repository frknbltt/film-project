import { Get, Post } from "../services";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PEOPLE_FAILURE, GET_PEOPLE_REQUEST, GET_PEOPLE_SUCCESS } from "./actions";

function* getPeopleSaga({ payload }) {
  const key = '5f6dfd4cbbe3778697b2287c28081cc5'
  try {
    const response = yield call(Get, `/person/popular?api_key=${key}`, {},false);
    if (response) {
      yield put({ type: GET_PEOPLE_SUCCESS, payload: response.results });
    } else {
      yield put({ type: GET_PEOPLE_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: GET_PEOPLE_FAILURE, payload: error });
  }
}


export default function* Saga() {
  yield takeLatest(GET_PEOPLE_REQUEST, getPeopleSaga);
}
