import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array of { id, title,image, price, quantity }
  totalAmount: 0,
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
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateQuantity(state, action) {
      const updatedItems = action.payload;
      state.items = updatedItems;
      state.totalAmount = updatedItems.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
