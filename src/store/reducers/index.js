import { combineReducers } from "redux";
import errors from "./errors";
import currentUser from "./currentUser";
import events from "./events";

const rootReducer = combineReducers({
  errors,
  currentUser,
  events
});

export default rootReducer;