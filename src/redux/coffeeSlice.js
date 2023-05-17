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
      action.payload.count += 1;
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
    increaseItem: (state, action) => {
      action.payload.count += 1;
      state.orderDetails.map((item) => {
        if (item.id === action.payload.id) {
          item.count = action.payload.count;
          let itemTotalPrice = parseInt(item.itemTotalPrice.slice(1));
          itemTotalPrice += parseInt(item.price.slice(1));
          item.itemTotalPrice = `$${itemTotalPrice}`;
          state.totalPrice += parseInt(item.price.slice(1));
        }
      });
    },
    decreaseItem: (state, action) => {
      action.payload.count -= 1;
      state.orderDetails.map((item) => {
        if (item.id === action.payload.id) {
          item.count = action.payload.count;
          let itemTotalPrice = parseInt(item.itemTotalPrice.slice(1));
          itemTotalPrice -= parseInt(item.price.slice(1));
          item.itemTotalPrice = `$${itemTotalPrice}`;
          state.totalPrice -= parseInt(item.price.slice(1));
        }
      });
    },
    deleteFromOrder: (state, action) => {
      state.orderDetails.map((item) => {
        if (item.id === action.payload) {
          state.totalPrice -= parseInt(item.price.slice(1)) * item.count;
        }
      });
      state.orderDetails = state.orderDetails.filter(
        (item) => item.id !== action.payload
      );

      //   state.orderDetails = state.orderDetails
      //     .map((item) => {
      //       if (item.id === action.payload) {
      //         state.totalPrice -= parseInt(item.price.slice(1)) * item.count;
      //         console.log(item);
      //       }
      //     })
      //     .filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToOrder,
  makeScroll,
  makeOrder,
  increaseItem,
  decreaseItem,
  deleteFromOrder,
} = coffeeSlice.actions;
export default coffeeSlice.reducer;
