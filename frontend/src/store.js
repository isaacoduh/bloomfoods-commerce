import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    // api slice
    // cart slice
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  // getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
