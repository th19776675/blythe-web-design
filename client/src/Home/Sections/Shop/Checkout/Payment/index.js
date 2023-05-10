import JustifiedText from "../../../../../Components/JustifiedText"

const Payment = (
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
      <JustifiedText fontSize="20px">CONTACT INFO FORM</JustifiedText>
      <input className="address-input" 
          type="text" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          label="Email"
          placeholder="Email (example@gmail.com)"
          name={"email"}
        />
      <input className="address-input" 
          type="text" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          label="Phone Number"
          placeholder="Phone Number (+61 516 920 134)"
          name={"phoneNumber"}
        />

</>
  )
}

export default Payment