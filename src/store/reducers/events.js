import { LOAD_EVENTS, REMOVE_EVENT, UPDATE_EVENT } from "../actionTypes";

const events = (state = [], action) => {
  switch (action.type) {
    case LOAD_EVENTS: 
      return [...action.events];
    //add remove & update later
    case REMOVE_EVENT: 
      return state;
    case UPDATE_EVENT:
      return state;
    default:
      return state;
  }
}

export default events;