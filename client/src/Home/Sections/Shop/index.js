import { useSelector } from "react-redux";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ShoppingItems from "./ShoppingItems";



const Shop = () => {

  const isCheckoutOpen = useSelector((state) => state.cart.isCheckoutOpen)
  return (
    <div>

      {isCheckoutOpen ? "" : <Cart />}
      {isCheckoutOpen ? <Checkout /> : <ShoppingItems />}
    </div>
  )
}

export default Shop;

