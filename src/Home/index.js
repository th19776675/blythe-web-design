import "./Home.css"
import JustifiedText from "../Components/JustifiedText"
import { useState, useEffect } from 'react'

import Shop from "./Sections/Shop"
import Videos from "./Sections/Videos"
import EmailingList from "../Components/EmailingList"
import ArrowAni from "../Components/ArrowAni"
import Contact from "./Sections/Contact"
import Events from "./Sections/Events"
import Zines from "./Sections/Zines" 

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


const Home = () => {
  // let x = true
  // const [arrowPad, setArrowPad] = useState(2)
  
  // useEffect(() => {
  //   let arrowRight = true
  //   setInterval(() => {
  //     if (arrowRight === true){
  //       setArrowPad(5)
  //       arrowRight = false
  //     } else {
  //       setArrowPad(2)
  //       arrowRight = true
  //     }
  //   }, 500);

  // }, [])



  const [confirmState, setConfirmState] = useState(false)

  const location = useLocation();
  const queryParams = queryString.parse(location.search);


  const [shopState, setShopState] = useState([true, "»"])
  
  const shopHandler = () => {
    if (shopState[0] === true) {
      setShopState([false, "«"])
    } else {
      setShopState([true, "»"])
    }
  }
  
  const [contactState, setContactState] = useState([true, "»"])

  const contactHandler = () => {
    if (contactState[0] === true) {
      setContactState([false, "«"])
    } else {
      setContactState([true, "»"])
    }
  }
  
  const [videoState, setVideoState] = useState([true, "»"])
 
  const videoHandler = () => {
    if (videoState[0] === true) {
      setVideoState([false, "«"])
    } else {
      setVideoState([true, "»"])
    }
  }
  
  const [eventState, setEventState] = useState([true, "»"])
  
  const eventHandler = () => {
    if (eventState[0] === true) {
      setEventState([false, "«"])
    } else {
      setEventState([true, "»"])
    }
  }
  
  const [zineState, setZineState] = useState([true, "»"])
  
  const zineHandler = () => {
    if (zineState[0] === true) {
      setZineState([false, "«"])
    } else {
      setZineState([true, "»"])
    }
  }

  useEffect(()=> {
    console.log(queryParams)
    if (queryParams.payment && queryParams.payment == "true") {
      setConfirmState(true)
      console.log("TEST")
    } 
  }, [])

  const confirmHandler = () => {
    setConfirmState(false)
  }


  return (
    <div>
      <div className="outer-wrapper">
        {
          confirmState ?
          <div className="confirm-wrapper">
            <div className="confirm-box">
              <p>Thanks for purchasing! <br /> All good now.</p>
            </div>
            <button className="image-box-btn" onClick={confirmHandler}>Close</button>
          </div>
          :
          ""
        }
        <main className="home-wrapper">
          <div className="menu-option">
            <h3 onClick={shopHandler}>SHOP <ArrowAni>{shopState[1]}</ArrowAni></h3>
            {shopState[0] ? <JustifiedText fontSize="16px">CLICK TO VIEW PRODUCTS</JustifiedText> : <Shop />}
          </div>
          <div className="menu-option">
            <h3 onClick={videoHandler}>LATEST VIDEO <ArrowAni>{videoState[1]}</ArrowAni></h3>
            {videoState[0] ? <JustifiedText fontSize="16px">CLICK TO WATCH A VIDEO</JustifiedText> : <Videos />}

          </div>
          <div className="menu-option">
            <h3 onClick={eventHandler}>UPCOMING EVENT <ArrowAni>{eventState[1]}</ArrowAni></h3>
            {eventState[0] ? <JustifiedText fontSize="16px">CLICK TO EXPAND</JustifiedText> : <Events />}

          </div>
          <div className="menu-option" id="test-s">
            <h3 onClick={zineHandler}>UPCOMING ZINE <ArrowAni>{zineState[1]}</ArrowAni></h3>
            {zineState[0] ? <JustifiedText fontSize="16px">CLICK TO EXPAND</JustifiedText> : <Zines />}

          </div>

          <div className="menu-option">
            <h3 onClick={contactHandler}>CONTACT <ArrowAni>{contactState[1]}</ArrowAni></h3>
            {contactState[0] ? <JustifiedText fontSize="16px">CLICK TO VIEW CONTACT OPTIONS</JustifiedText> : <Contact />}

          </div>
          <EmailingList />
        </main>
      </div>



    </div>
  )
}

export default Home;

