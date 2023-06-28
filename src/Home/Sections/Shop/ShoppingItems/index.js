import "./ShoppingItems.css"
import JustifiedText from "../../../../Components/JustifiedText";
import HiddenText from "../../../../Components/HiddenText";
import { setItems } from "../../../../State";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import ImageBox from "../../../../Components/ImageBox";
import { addToCart, increaseCount } from "../../../../State";

const ShoppingItems = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  console.log(items)
  const getShoppingItems = async () => {
    const items = await fetch(
      "http://api.blythe.world:1337/api/items?populate=image",
      { method: "GET" }
    );

    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data))
  }

  useEffect(() => {
    getShoppingItems()
    console.log()
  }, [])

  const handleSpecs = (specs) => {
    const specsArr = specs.split("\n")
    console.log(specsArr)
    return (
      specsArr.map((spec) => (
        <p>{spec} <br /></p> 
      ))
    )
  }

  const cart = useSelector((state) => state.cart.cart)

  return (
    <div>
      {/* <JustifiedText fontSize="24px" letterSpacing="-3px">
        ALL ITEMS
      </JustifiedText>    */}
      <div className="shopping-list">
        {items ? items.map((item) => (
          <div className="shopping-item" id={`${item.attributes.abbr}-s`}>

            <div className="div-line"></div>   
            <div className="shop-name">
            <JustifiedText fontSize="20px" letterSpacing="-2px">{item.attributes.name}</JustifiedText>
            </div>
            <div className="shop-col">
              <div className="shop-img">
                <ImageBox src={`http://api.blythe.world:1337${item.attributes.image.data[0].attributes.url}`} alt="Product Image. If it hasn't loaded then Lol."/>
              </div>
              <div className="shop-spec">
                {/* {item.attributes.specs} */}
                {handleSpecs(item.attributes.specs)}
                {/* text <br /> text */}
              </div>

            </div>
            <HiddenText>
              {item.attributes.shortDesc}            
            </HiddenText>
            <div className="item-foot">
              <span className="item-price">${item.attributes.price}</span>
              <span className="item-cat">{item.attributes.category}</span>
              <button className="item-add" onClick={() => {
                if (cart.some(e => e.id === item.id)) {
                  dispatch(increaseCount({ id: item.id }))
                } else {
                  dispatch(addToCart({ item: { ...item, count: 1}}))
                }
              }
            }>ADD TO CART</button>
            </div>
          </div>
        )) : "Loading Items ..."}

      </div>
    </div>
  )
}

export default ShoppingItems