import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array of { id, title,image, price, quantity }
  totalAmount: 0,
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.items));
  localStorage.setItem("cartTotalAmount", JSON.stringify(state.totalAmount));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  //   reducers: {
  //     addToCart: (state, action) => {
  //       state.items = [...state.items, action.payload];
  //     },
  //     removeFromCart: (state, action) => {
  //       state.items = state.items.filter((item) => item.id !== action.payload.id);
  //     },
  //   },
  reducers: {
    setCart(state, action) {
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const newItem = action.payload; // { id, title,image, price, quantity }
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }

      state.totalAmount += newItem.price * newItem.quantity;
      saveToLocalStorage(state);
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
      saveToLocalStorage(state);
    },
    updateQuantity(state, action) {
      const updatedItems = action.payload;
      state.items = updatedItems;
      state.totalAmount = updatedItems.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
      saveToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      saveToLocalStorage(state);
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
