import { CardElement } from "@stripe/react-stripe-js";
import './payment.style.scss';
import PaystackPop from '@paystack/inline-js'
import { useSelector } from "react-redux";
import Button from "../button/Button";

const PaymentForm = ({show,setShow,total}) => {
    const user = useSelector((state)=>state.user.currentUser)


    const payWithPaystack = (e) =>{
        e.preventDefault();
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key : 'pk_test_ff6fcb1470a68d6059152e10f9c0d24d0e7dc97a',
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