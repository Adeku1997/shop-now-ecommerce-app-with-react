import {
  addItemToCart,
  removeItemFromCart,
  clearAnItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "TOGGLE_SHOW_CART":
      return {
        ...state,
        showCart: !state.showCart,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: clearAnItemFromCart(state.cartItems,action.payload),
      };

    default:
      return state;
  }
};
export default cartReducer;
