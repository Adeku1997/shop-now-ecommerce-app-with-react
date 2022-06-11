import React from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopcart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
const CartIcon = () => {
  const {showCart, setShowCart } = useContext(CartContext);
  return (
    <div className="cart-icon-component">
      <ShopIcon onClick={() => setShowCart(!showCart)} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
