import "./Home.css"
import JustifiedText from "../Components/JustifiedText"
import { useState } from 'react'

const Home = () => {
  let x = true
  const [arrowPad, setArrowPad] = useState(3)

  setInterval(() => {
    if (arrowPad === 3){
      setArrowPad(6)
    } else {
      setArrowPad(3)
    }
  }, 500);
  

  return (
    <div>
      <div className="outer-wrapper">
        <main className="home-wrapper">
          <div className="menu-option">
            <h3>SHOP <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {x ? <JustifiedText fontSize="16px" letterSpacing="-2px">CLICK TO VIEW PRODUCTS</JustifiedText> : ""}
          </div>
          <div className="menu-option">
            <h3>CONTACT <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {x ? <JustifiedText fontSize="16px">CLICK TO VIEW CONTACT OPTIONS</JustifiedText> : ""}

          </div>
          <div className="menu-option">
            <h3>LATEST VIDEO <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {x ? <JustifiedText fontSize="16px">CLICK TO WATCH A VIDEO</JustifiedText> : ""}

          </div>
          <div className="menu-option">
            <h3>UPCOMING EVENT <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {x ? <JustifiedText fontSize="16px">CLICK TO EXPAND</JustifiedText> : ""}

          </div>
          <div className="menu-option">
            <h3>UPCOMING ZINE <span className="arrow" style={{paddingLeft: `${arrowPad}px`}}>»</span></h3>
            {x ? <JustifiedText fontSize="16px">CLICK TO EXPAND</JustifiedText> : ""}

          </div>



        </main>
      </div>



    </div>
  )
}

export default Home;

