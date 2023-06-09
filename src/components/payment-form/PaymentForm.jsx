import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import './payment.style.scss';
import PaystackPop from '@paystack/inline-js'
import { useSelector } from "react-redux";
import Button from "../button/Button";

const PaymentForm = ({show,setShow,total}) => {
    const user = useSelector((state)=>state.user.currentUser)
   console.log(process.env.REACT_APP_PAYSTACK_KEY,"adeku")

    const payWithPaystack = (e) =>{
        e.preventDefault();
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key : process.env.REACT_APP_PAYSTACK_KEY,
        amount : total,
        email : user.email,
    })
  }
   return (
    <div>
        <Button type='submit' onClick={payWithPaystack}>pay now</Button>
    </div>
   )
}

export default PaymentForm;