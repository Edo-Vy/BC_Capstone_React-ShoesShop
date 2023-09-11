import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {

    productReducer : productReducer,
    cartReducer : cartReducer,
    userReducer : userReducer,
  },
});
