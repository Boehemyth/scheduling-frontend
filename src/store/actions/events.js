import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_EVENTS, REMOVE_EVENT, UPDATE_EVENT } from "../actionTypes";

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

export const removeEvent = id => ({
  type: REMOVE_EVENT,
  id
});

export const addEvent = event => (dispatch) => {
  return apiCall("post", "/api/admin/events", { event })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};

export const updateEvent = (id) => ({
  type: UPDATE_EVENT,
  id
});