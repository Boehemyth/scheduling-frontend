import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_EVENTS, UPDATE_EVENT } from "../actionTypes";

export const loadEvents = events => ({
  type: LOAD_EVENTS,
  events
});

export const fetchEvents = () => {
  return dispatch => {
    return apiCall("get", "/api/admin/events")
      .then(res => {
        dispatch(loadEvents(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      })
  };
};

export const addEvent = event => (dispatch) => {
  return apiCall("post", "/api/admin/events", { event })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};

export const updateEvent = (id) => ({
  type: UPDATE_EVENT,
  id
});