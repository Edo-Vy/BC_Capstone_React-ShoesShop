import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

export const store = configureStore({
  reducer: {

    productReducer : productReducer,
    cartReducer : cartReducer,
  },
});
