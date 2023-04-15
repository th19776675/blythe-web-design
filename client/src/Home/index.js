import "./Home.css"
import JustifiedText from "../Components/JustifiedText"
import { useState, useEffect } from 'react'

import Shop from "./Sections/Shop"
import Videos from "./Sections/Videos"
import EmailingList from "../Components/EmailingList"

const Home = () => {
  // let x = true
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

  
  const [shopState, setShopState] = useState(true)
  
  const shopHandler = () => {
    if (shopState === true) {
      setShopState(false)
    } else {
      setShopState(true)
    }
  }
  
  const [contactState, setContactState] = useState(true)
  
  const contactHandler = () => {
    if (contactState === true) {
      setContactState(false)
    } else {
      setContactState(true)
    }
  }
  
  const [videoState, setVideoState] = useState(true)
  
  const videoHandler = () => {
    if (videoState === true) {
      setVideoState(false)
    } else {
      setVideoState(true)
    }
  }
  
  const [eventState, setEventState] = useState(true)
  
  const eventHandler = () => {
    if (eventState === true) {
      setEventState(false)
    } else {
      setEventState(true)
    }
  }
  
  const [zineState, setZineState] = useState(true)
  
  const zineHandler = () => {
    if (zineState === true) {
      setZineState(false)
    } else {
      setZineState(true)
    }
  }




  return (
    <div>
      <div className="outer-wrapper">
        <main className="home-wrapper">
          <div className="menu-option">
            <h3 onClick={shopHandler}>SHOP <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {shopState ? <JustifiedText fontSize="16px" letterSpacing="-2px">CLICK TO VIEW PRODUCTS</JustifiedText> : <Shop />}
          </div>
          <div className="menu-option">
            <h3 onClick={contactHandler}>CONTACT <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {contactState ? <JustifiedText fontSize="16px">CLICK TO VIEW CONTACT OPTIONS</JustifiedText> : ""}

          </div>
          <div className="menu-option">
            <h3 onClick={videoHandler}>LATEST VIDEO <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {videoState ? <JustifiedText fontSize="16px">CLICK TO WATCH A VIDEO</JustifiedText> : <Videos />}

          </div>
          <div className="menu-option">
            <h3 onClick={eventHandler}>UPCOMING EVENT <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {eventState ? <JustifiedText fontSize="16px">CLICK TO EXPAND</JustifiedText> : ""}

          </div>
          <div className="menu-option">
            <h3 onClick={zineHandler}>UPCOMING ZINE <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {zineState ? <JustifiedText fontSize="16px">CLICK TO EXPAND</JustifiedText> : ""}

          </div>

          <EmailingList />
        </main>
      </div>



    </div>
  )
}

export default Home;

