export const GET_CARTS = "GET_CARTS";
export const ADD_CART = "ADD_CART";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const getCarts = data => ({
  type: GET_CARTS,
  data
});

export const addCart = data => ({
  type: ADD_CART,
  data
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_CAPITOL: "SHOW_CAPITOL",
  SHOW_LIBRARY: "SHOW_LIBRARY"
};

export const AdminFilters = {
  ACCOUNT_TAB: "ACCOUNT_TAB",
  CART_TAB: "CART_TAB",
  SCHEDULE_TAB: "SCHEDULE_TAB"
};