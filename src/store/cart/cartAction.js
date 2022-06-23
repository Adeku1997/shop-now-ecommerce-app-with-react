export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const showCart = {
  type: "TOGGLE_SHOW_CART",
};

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: "CLEAR_ITEM_FROM_CART",
  payload: item,
});

export const setCartCount = {
  type: "SET_CART_COUNT",
};

export const setCartTotal = {
  type: "SET_CART_TOTAL",
};
