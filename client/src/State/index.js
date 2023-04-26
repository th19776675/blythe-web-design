import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isCheckoutOpen: false,
  cart: [],
  items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCard: (state, action) => {
      state.cart = [...state.cart, action.payload.item]
    },
    removeFromCard: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++
        }
        return item;
      })
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count--
        }
        return item;
      })
    },
    setIsCheckoutOpen: (state) => {
      state.isCheckoutOpen = !state.isCheckoutOpen
    }
  }
});

export const {
  setItems, 
  addToCard,
  removeFromCard,
  increaseCount,
  decreaseCount,
  setIsCheckoutOpen,
} = cartSlice.actions;

export default cartSlice.reducer;