import AddressForm from "./AddressForm.js";
import JustifiedText from "../../../../../Components/JustifiedText.js";

const Shipping = (
  {
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
  }
  ) => {
  return (
    <>
      <JustifiedText fontSize="20px">BILLING ADDRESS FORM</JustifiedText>
      <AddressForm 
        type="billingAddress"
        values={values.billingAddress}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <div className="check-same-row">
        <input 
          type="checkbox" 
          className="check-same"  
          // defaultChecked 
          value={values.shippingAddress.isSameAddress}
          onChange={() => {
            setFieldValue(
              "shippingAddress.isSameAddress",
              !values.shippingAddress.isSameAddress
            )
          }}
        />
        <span className="check-label">
          SAME FOR SHIPPING ADDRESS
        </span> 
      </div>

      {!values.shippingAddress.isSameAddress && (
        <div>
          <JustifiedText fontSize="20px">SHIPPING ADDRESS FORM</JustifiedText>
          <AddressForm 
          type="shippingAddress"
          values={values.shippingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
          />
        </div>
      )}

      <p>{console.log(errors)}</p>
    </>
  )
}

export default Shipping