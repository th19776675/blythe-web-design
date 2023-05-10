import { getIn } from "formik"

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {

  const formattedName = (field) => `${type}.${field}`

  return (
    <>
      <div className="address-double">
        <input className="address-input" 
          type="text" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          label="First Name"
          placeholder="First Name"
          name={formattedName("firstName")}
        />
        <input className="address-input" 
          type="text" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          label="Last Name"
          placeholder="Last Name"
          name={formattedName("lastName")}    
          />
      </div>
      <p className="error-text">

      </p>
      <input className="address-input" 
        type="text" 
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        label="Street Address"
        placeholder="Street Address"
        name={formattedName("street1")}         
      />
      <input className="address-input" 
        type="text" 
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        label="Street Address 2"
        placeholder="Street Address 2 (Optional)"
        name={formattedName("street2")}
      />
      <div className="address-double">
        <input className="address-input" 
          type="text" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.city}
          label="City"
          placeholder="City"
          name={formattedName("city")}
        />
      <div className="address-double">
      <input className="address-input" 
          type="text" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.postCode}
          label="Postcode"
          placeholder="Post#"
          name={formattedName("postCode")}
        />
        <input className="address-input" 
          type="text" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.state}
          label="State"
          placeholder="State"
          name={formattedName("state")}
        />

      </div>

      </div>
      <input className="address-input" 
        type="text" 
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        label="Country"
        placeholder="Country"
        name={formattedName("country")}
      />
    </>
  )
}

export default AddressForm