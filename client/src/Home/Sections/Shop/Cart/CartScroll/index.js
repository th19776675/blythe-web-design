import "./CartScroll.css"

const CartScroll = () => {
    const handleCartScroll = () => {
        const element = document.getElementById(`cart`);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <>
            <button className="scroll-btn" onClick={handleCartScroll}>BACK TO CART</button>
        </>
    )
}

export default CartScroll