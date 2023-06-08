import React, { useContext } from "react";
import { useSelector,useDispatch } from "react-redux";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cartdropdown.styles.scss";

import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cartSelector";
import {showCart} from "../../store/cart/cartAction"

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch()
 const loggedInUser =   useSelector((state)=>state.user.currentUser);


  const navigate = useNavigate();

  const goToCheckoutHandler = () => {

   if(!loggedInUser){
    dispatch(showCart)
    return navigate("/auth")
   }
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
