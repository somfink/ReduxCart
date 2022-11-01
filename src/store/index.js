import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import showCartSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: showCartSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
