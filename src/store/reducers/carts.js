import { LOAD_CARTS } from "../actionTypes";

const carts = (state = [], action) => {
  switch (action.type) {
    case LOAD_CARTS:
      return [...action.carts];
    default:
      return state;
  }
}

export default carts;