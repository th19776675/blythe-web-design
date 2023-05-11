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
  const [errorMsg, setErrorMsg] = useState() 

  
  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue( "shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true, 
      })
    }

    if  (isSecondStep) {
      makePayment(values)
    }

    actions.setTouched({})
  }

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.billingAddress.firstName, values.billingAddress.lastName].join(" "),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
      billingAddress: `${values.billingAddress.street1} ${values.billingAddress.street2}, ${values.billingAddress.city} ${values.billingAddress.postCode}, ${values.billingAddress.state}, ${values.billingAddress.country}`,
      shippingAddress: `${values.shippingAddress.street1} ${values.shippingAddress.street2}, ${values.shippingAddress.city} ${values.shippingAddress.postCode}, ${values.shippingAddress.state}, ${values.shippingAddress.country}`,
      phone: values.phoneNumber
    };

    const response = await fetch("http://localhost:1337/api/orders", {
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
            <span style={{opacity: activeStep === 0 ? 1 : 0.5}}>Billing</span>  <span className="step-line" style={{opacity: activeStep === 1 ? 1 : 0.5}}></span> <span style={{opacity: activeStep === 1 ? 1 : 0.5}}>Payment</span>
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
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
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
                <div className="address-double" style={{width: "100%"}}>
                  {!isFirstStep && (
                    <button className="checkout-buttons"
                    onClick={() => setActiveStep(activeStep - 1)}
                    >
                      Back
                    </button>
                  )}
                  <button className="checkout-buttons" type="submit" onClick={() => {
                    if (Object.keys(errors).length > 0) {
                      console.log(errors);
                      setErrorMsg("*MISSING FIELDS*")
                    } else {
                      setErrorMsg("")
                    }
                  }}>
                    {!isSecondStep ? "Next" : "Place Order"}
                  </button>

                </div>
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
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    postCode: "",
  },
  shippingAddress: {
    isSameAddress: false,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    postCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      postCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: () => yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: () => yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: () => yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: () => yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: () => yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: () => yup.string().required("required"),
      }),
      postCode: yup.string().when("isSameAddress", {
        is: false,
        then: () => yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];


export default Checkout