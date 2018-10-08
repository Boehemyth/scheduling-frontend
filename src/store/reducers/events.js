import { LOAD_EVENTS, UPDATE_EVENT } from "../actionTypes";

const events = (state = [], action) => {
  switch (action.type) {
    case LOAD_EVENTS: 
      return [...action.events];
    case UPDATE_EVENT:
      return state;
    default:
      return state;
  }
}

export default events;