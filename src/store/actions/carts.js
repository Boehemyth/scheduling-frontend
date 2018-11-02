import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_CARTS } from "../actionTypes";

export const addCart = cart => (dispatch) => {
  return apiCall("post", "/api/admin/carts", { cart })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};

export const loadCarts = carts => ({
  type: LOAD_CARTS,
  carts
});

export const fetchCarts = () => (dispatch) => {
  return apiCall("get", "api/admin/carts")
    .then(res => {
      dispatch(loadCarts(res));
    })
    .catch(err => dispatch(addError(err.message)));
};

export const updateCart = cart => (dispatch) => {
  console.log(cart.id);
  return apiCall("put", `api/admin/carts/cart/${cart.id}`, { cart })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
}