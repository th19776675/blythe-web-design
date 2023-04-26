import "./HiddenText.css"
import { useState } from "react";
var ellipsis = require('text-ellipsis');



const HiddenText = (props) => {
  const [isTextOpen, setIsTextOpen] = useState([false, "Click To Expand", "»"])
  const str = props.children
  const charLimit = 100

  const hiddenHandler = () => {
    if (isTextOpen[0] === false) {
      setIsTextOpen([true, "Click To Contract", "«"] )
    } else {
      setIsTextOpen([false, "Click To Expand", "»"])
    }
  }

  return (
    <div>
      {str.length >= 97 ? isTextOpen[0] ? <p>{str}</p> : <p className="hidden-short">{ellipsis(str, charLimit)}</p> : <p>{str}</p>}
      {str.length >= 97 ? <button className="hidden-btn" onClick={hiddenHandler}> {isTextOpen[1]} <span className="btn-arrow">{isTextOpen[2]}</span> </button> : ""}
    </div>
  )
};

export default HiddenText;