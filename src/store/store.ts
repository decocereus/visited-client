import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    authSliceReducer: authSliceReducer,
    // Add other reducers if needed
  },
  //middleware: [thunk],
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
