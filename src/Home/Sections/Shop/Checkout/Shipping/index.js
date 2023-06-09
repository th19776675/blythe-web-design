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
      <JustifiedText fontSize="20px">PRODUCT DISCLAIMER</JustifiedText>
      <p style={{textAlign: "center", fontFamily: "ArgentPixelItalic", fontSize: "14px", marginTop: "15px"}}>
        
        All BLYTHE products are made to order and may take some time to create.
      </p>

      <p style={{textAlign: "center", fontFamily: "ArgentPixelItalic", fontSize: "14px", marginTop: "10px"}}>
        
      If you are based in Boorloo (Perth), you have the option to collect your items from our office space at 2A Walcott Street, Mount Lawley 6050. <br /> We will contact you via your phone number or email, once the item is ready to pickup.
      </p>
      <p style={{textAlign: "center", fontFamily: "ArgentPixelItalic", fontSize: "14px", marginTop: "10px", marginBottom: "5px"}}>
        
      If you wish to ship to a country not listed in the checkout form, please contact us via email at contact@blythe.world, or shoot us a message on Instagram (@blythe.magazine).
      </p>
      
   
          

    </>
  )
}

export default Shipping