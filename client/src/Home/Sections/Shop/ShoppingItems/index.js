import "./ShoppingItems.css"
import JustifiedText from "../../../../Components/JustifiedText";
import HiddenText from "../../../../Components/HiddenText";

const ShoppingItems = () => {
  return (
    <div>
      {/* <JustifiedText fontSize="24px" letterSpacing="-3px">
        ALL ITEMS
      </JustifiedText>    */}
      <div className="shopping-list">
        <div className="shopping-item">

          <div className="div-line"></div>   
          <div className="shop-name">
          <JustifiedText fontSize="20px" letterSpacing="-2px">HPHF HANDBOOK DLX</JustifiedText>
          </div>
          <div className="shop-col">
            <div className="shop-img">
            </div>
            <div className="shop-spec">
              • 100 pp <br />
              • Perfect Bound <br />
              • 2 Paper Stocks <br />
              • 100 Copies <br />
              • DigiCam Recap
            </div>

          </div>
          <HiddenText>
            This is a short text but it can also be a long paragraph that exceeds 97 characters which makes it into the hidden state. Lets see if it works.
          </HiddenText>
          <div className="item-foot">
            <span className="item-price">$15</span>
            <span className="item-cat">ZINE</span>
            <button className="item-add">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingItems