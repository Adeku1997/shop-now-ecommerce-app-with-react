import { CardElement } from "@stripe/react-stripe-js";
import './payment.style.scss';

import Button from "../button/Button";

const PaymentForm = ({show,setShow}) => {
   return (
    <div>
        {/* <CardElement className="card"/><br/> */}
        <Button type='submit' onClick={()=>setShow(true)}>pay now</Button>
    </div>
   )
}

export default PaymentForm;