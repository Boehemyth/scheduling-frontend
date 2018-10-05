import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { GET_EVENTS, REMOVE_EVENT, UPDATE_EVENT } from "../actionTypes";

export const getEvents = events => ({
  type: GET_EVENTS,
  events
});

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