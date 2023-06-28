import JustifiedText from "../../../../Components/JustifiedText"
import Shipping from "./Shipping";
import Payment from "./Payment";
import { Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import "./Checkout.css"
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51N2WpbApEmDpm3BWbttFPh5xWGszsbXI3qhO986VkAZzog8RxK9vA8p8kVAG6qkODyVtuShQnWrAxZ8lhyv1Yjcu00QhQqy42T"
);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const isThirdStep = activeStep === 2;
  const [errorMsg, setErrorMsg] = useState() 

  
  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    if  (isSecondStep) {
      makePayment(values)
    }

    actions.setTouched({})
  }

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: values.fullName,
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
      phone: values.phoneNumber
    };

    const response = await fetch("http://api.blythe.world:1337/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    
  }


  return (
    <>
      <div className="checkout-col">
        <div className="step-label">
          <JustifiedText fontSize="16px">
            <span style={{opacity: activeStep === 0 ? 1 : 0.5}}>Disclaimer</span>  <span className="step-line" style={{opacity: activeStep === 1 ? 1 : 0.5}}></span> <span style={{opacity: activeStep === 1 ? 1 : 0.5}}>User Info</span>
          </JustifiedText>
        </div>
        
        <div className="check-form">
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema[activeStep]}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {isFirstStep && (
                  <Shipping
                  />
                )}
                {isSecondStep && (
                  <Payment
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
                {isThirdStep? <p style={{textAlign: "center", marginTop: "5px", fontSize:"12px"}}>Loading...</p> : <>
                  <div className="address-double" style={{width: "100%"}}>
                    {!isFirstStep && (
                      <button className="checkout-buttons"
                      onClick={() => setActiveStep(activeStep - 1)}
                      >
                        Back
                      </button>
                    )}
                    <button className="checkout-buttons" type="submit" >
                      {!isSecondStep ? "Next" : "Place Order"}
                    </button>

                  </div>
                </>}

                    {errorMsg && (
                      <div className="span-error-msg">{errorMsg}</div>
                    )}
              </form>
            )}
          </Formik>      

        </div>
      </div>
    </>
  )
}

const initialValues = {
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({}),
  yup.object().shape({
    fullName: yup.string().required("required"),
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];


export default Checkout