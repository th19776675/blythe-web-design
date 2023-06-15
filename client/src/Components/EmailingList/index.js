import JustifiedText from "../JustifiedText"
import "./EmailingList.css"
import { useEffect, useState } from "react";

const EmailingList = () => {

  const [emailValue, setEmailValue] = useState("")
  const [errorEmailMsg, setErrorEmailMsg] = useState()

  const [confirmEmailState, setConfirmEmailState] = useState(false)

  const confirmEmailHandler = () => {
    setConfirmEmailState(false)
  }


  async function emailHandler() {
    try {
      const response = await fetch("http://localhost:1337/api/email-lists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            email: emailValue
          }
        }),
      });
  
      if (response.ok) {
        setEmailValue("");
        setConfirmEmailState(true);
        setErrorEmailMsg("")
      } else {
        const promise = await response.json()
        throw new Error(promise.error.message);
      }
    } catch (error) {
      setErrorEmailMsg(error.message);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  }
    

  return (
    <div>
      {
          confirmEmailState ?
          <div className="confirm-wrapper">
            <div className="confirm-box">
              <p>Thanks for joining! <br /> All good now.</p>
            </div>
            <button className="image-box-btn" onClick={confirmEmailHandler}>Close</button>
          </div>
          :
          ""
      }
      <div className="email-wrapper">
        <JustifiedText fontSize="32px" letterSpacing="-4px">EMAILING LIST</JustifiedText>
        <input type="text" value={emailValue} onChange={e => setEmailValue(e.target.value)}/>
        <div className="email-btn" onClick={emailHandler}>
          <JustifiedText fontSize="14px" letterSpacing="0px">CLICK TO JOIN EMAILING LIST</JustifiedText>
        </div>
      </div>
      <div className="email-error-msg">{errorEmailMsg}</div>
    </div>
  )
}

export default EmailingList