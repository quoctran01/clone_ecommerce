import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          shortDesc: newItem.shortDesc,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
      localStorage.setItem("CartItem", JSON.stringify(state.cartItems));
    },
    // deleteItem: (state, action) => {
    //   const id = action.payload;
    //   const existingItem = state.cartItems.find((item) => item.id === id);
    //   if (existingItem) {
    //     state.cartItems = state.cartItems.filter((item) => item.id !== id);
    //     state.totalQuantity = state.totalQuantity - existingItem.quantity;
    //   }
    //   state.totalAmount = state.cartItems.reduce((total, item) => {
    //     return total + Number(item.price) * Number(item.quantity);
    //   }, 0);
    // },
    deleteItem: (state, action) => {
      const ids = action.payload;
      console.log(ids);
      state.cartItems = state.cartItems.filter(
        (item) => !ids.includes(item.id)
      );
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(existingItem.price);
        state.totalQuantity++;
        state.totalAmount += Number(existingItem.price);
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) - Number(existingItem.price);
          state.totalQuantity--;
          state.totalAmount -= Number(existingItem.price);
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
