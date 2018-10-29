import { apiCall } from "../../services/api";
import { addError } from "./errors";
//import { ADD_CART } from "../actionTypes";

export const addCart = cart => (dispatch) => {
  return apiCall("post", "/api/admin/carts", { cart })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};