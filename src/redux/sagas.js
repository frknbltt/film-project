import { all } from 'redux-saga/effects'
import films from "./films/saga"
import people from "./people/saga"
import genres from "./genres/saga"

export default function* rootSaga() {
    yield all([films(),people(),genres()])
}