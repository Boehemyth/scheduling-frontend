import { combineReducers } from "redux";
import errors from "./errors";
import currentUser from "./currentUser";
import events from "./events";
import carts from "./carts";

const rootReducer = combineReducers({
  errors,
  currentUser,
  events,
  carts
});

export default rootReducer;