import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // adjust if your slice filename/path differs

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});