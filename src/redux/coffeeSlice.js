import { createSlice } from "@reduxjs/toolkit";

export const coffeeSlice = createSlice({
  name: "coffee",
  initialState: {
    orderDetails: [],
    orderCount: 0,
    totalPrice: 0,
    scrolled: false,
  },

  reducers: {
    addToOrder: (state, action) => {
      state.orderDetails = [...state.orderDetails, action.payload];
      state.orderCount += 1;
      state.totalPrice += parseInt(action.payload.price.slice(1));
    },
    makeScroll: (state, action) => {
      state.scrolled = action.payload;
    },
    makeOrder: (state) => {
      state.orderDetails = [];
      state.orderCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToOrder, makeScroll, makeOrder } = coffeeSlice.actions;
export default coffeeSlice.reducer;
