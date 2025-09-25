import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./loginSlice";
import productsRducer from "./productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsRducer,
  },
});

export { store };