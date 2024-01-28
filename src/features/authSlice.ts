import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../lib/definitions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    // Add other authentication-related state if needed
  } as AuthState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
    loggedInUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logoutUser, loggedInUser } = authSlice.actions;
export default authSlice.reducer;
