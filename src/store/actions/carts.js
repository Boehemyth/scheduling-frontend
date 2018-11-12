import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_CARTS } from "../actionTypes";

// Consider that after we update the cart there doesn't seem to be anything that puts the new values in the store.
// An easy but expensive solution is dispatch fetchCarts inside then.  A better solution would be to send an action
// with the new cart that we can then append to the carts in the store.
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

// See my note on addCart.
export const updateCart = cart => (dispatch) => {
  console.log(cart.id);
  return apiCall("put", `api/admin/carts/cart/${cart.id}`, { cart })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
}
