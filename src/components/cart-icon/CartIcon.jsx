import React from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopcart.svg";

import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../../store/cart/cartAction";
import { selectCartCount } from "../../store/cart/cartSelector";
 import "./carticon.styles.scss"
const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="cart-icon-component">
      <ShopIcon onClick={()=>dispatch(showCart)} className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
