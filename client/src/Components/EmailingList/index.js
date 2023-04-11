import JustifiedText from "../JustifiedText"
import "./EmailingList.css"

const EmailingList = () => {
  const emailHandler = () => {
    return
  }

  return (
    <div>
      <div className="email-wrapper">
        <JustifiedText fontSize="32px" letterSpacing="-4px">EMAILING LIST</JustifiedText>
        <input type="text"/>
        <div className="email-btn" onClick={emailHandler}>
          <JustifiedText fontSize="16px" letterSpacing="-2px">CLICK TO JOIN EMAILING LIST</JustifiedText>
        </div>
      </div>
    </div>
  )
}

export default EmailingList