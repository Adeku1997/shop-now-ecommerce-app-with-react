import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSelector";
import { addToCart, removeFromCart } from "../../store/cart/cartAction";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import "./checkout.styles.scss";
import PaymentForm from "../../components/payment-form/PaymentForm";
import Modal from "../../components/modal/Modal";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [show,setShow] = useState(false);

  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span className="table-header">product</span>
        </div>
        <div className="header-block">
          <span className="table-header">description</span>
        </div>
        <div className="header-block">
          {" "}
          <span className="table-header">quantity</span>
        </div>
        <div className="header-block">
          {" "}
          <span className="table-header">price</span>
        </div>
        <div className="header-block">
          {" "}
          <span className="table-header"> remove</span>
        </div>
      </div>

      {cartItems?.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">${cartTotal}</span>
      <PaymentForm setShow={setShow} />
      {/* <Modal show={show} setShow={setShow}/> */}
    </div>
  );
};

export default Checkout;
