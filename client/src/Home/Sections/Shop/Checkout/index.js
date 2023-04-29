import JustifiedText from "../../../../Components/JustifiedText"
import Shipping from "./Shipping";
// import Payment from "./Payment";
import { Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import "./Checkout.css"

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;



  return (
    <>
      <div className="checkout-col">
        <div className="step-label">
          <JustifiedText fontSize="16px">
            <span style={{opacity: activeStep === 0 ? 1 : 0.5}}>Billing</span>  <span className="step-line" style={{opacity: activeStep === 1 ? 1 : 0.5}}></span> <span style={{opacity: activeStep === 1 ? 1 : 0.5}}>Payment</span>
          </JustifiedText>
        </div>
        <Shipping />
      </div>
    </>
  )
}

export default Checkout