// import JustifiedText from "./JustifiedText"
import "./Header.css"
// import { useEffect } from "react"

const Header = () => {


  return (
    <header>
        <h1 className="blythe-logo">
          BLYTHE(dot)WORLD
        </h1>
      <div className="header-links-wrapper">
        <a href={"https://www.instagram.com/blythe.magazine"}>
          <img src={require("./ig-logo.png")} alt="" />  
        </a> 
        <a href={"https://www.soundcloud.com/blythe-dot-world"}>
          <img src={require("./sc-logo.png")} alt="" />
        </a>
        <a href={"https://www.youtube.com/@blythedotworld"}>
          <img src={require("./yt-logo.png")} alt="" /> 
        </a>
      </div>
    </header>
  )
}

export default Header;

