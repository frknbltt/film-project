import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import films from "./films/reducers";
import people from "./people/reducers"
import genres from "./genres/reducers"

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    films,people,genres,
  });
