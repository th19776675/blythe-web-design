import { useState, useEffect } from "react"

const ArrowAni = (props) => {

  const [arrowPad, setArrowPad] = useState(2)
  
  useEffect(() => {
    let arrowRight = true
    setInterval(() => {
      if (arrowRight === true){
        setArrowPad(5)
        arrowRight = false
      } else {
        setArrowPad(2)
        arrowRight = true
      }
    }, 500);

  }, [])

  return (
    <>
      <span 
        className="arrow" 
        style={{
          paddingLeft: `${arrowPad}px`,
          fontFamily: "ArgentPixel"
        }}
      >
        {props.children}
      </span>
    </>
  )
}

export default ArrowAni;