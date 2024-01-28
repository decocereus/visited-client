import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers if needed
  },
  //middleware: [thunk],
});

export default store;