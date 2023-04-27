import { useSelector, useDispatch  } from "react-redux";
import JustifiedText from "../../../../Components/JustifiedText";
import "../Shop.css"
import {useNavigate} from "react-router-dom"
import State, {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCheckoutOpen
} from "../../../../State"
import CartScroll from "./CartScroll";


const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.cart)

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0)

  const handleClickScroll = (e) => {
    const element = document.getElementById(`${e.target.id}-s`);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="cart">
      <CartScroll />
      <JustifiedText fontSize="24px" letterSpacing="-3px">
        YOUR CART
      </JustifiedText>
      <div className="cart-box">
      <p>SHOPPING BAG ({cart.length})</p> 

    

      {/* Cart List */}
      <div className="cart-list" >
        {cart.map((item) => (
          <div className="cart-list-items">
            <JustifiedText fontFamily="ArgentPixelItalic" fontSize="16px"> <span className="cart-number">{item.count}</span> <span className="list-x">x </span>{item.attributes.name}</JustifiedText>
              <div className="cart-button-list">
                <button className="decrement-btn" onClick={() => { 
                  if (item.count > 1) {
                    dispatch(decreaseCount({ id: item.id }))
                  }
                  }}>-1</button>
                <button className="increment-btn" onClick={() => dispatch(increaseCount({ id: item.id }))}>+1</button>
                <button className="view-btn" onClick={handleClickScroll} id={item.attributes.abbr}>VIEW ITEM</button>
                <button className="remove-btn" onClick={() => dispatch(removeFromCart({id: item.id}))}>REMOVE</button>
              </div>
          </div>
        ))}
      </div>

      <div className="cart-line"></div>
      {/* <JustifiedText fontSize="16px">SHIPPING AT CHECKOUT</JustifiedText> */}
      <p>SHOPPING TOTAL (${totalPrice})</p> 
      <button className="checkout-btn" onClick={() => dispatch(setIsCheckoutOpen({}))}>CHECKOUT</button>


          
      </div>
    </div>
  )
}

export default Cart;
