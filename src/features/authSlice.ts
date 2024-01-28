// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// // Async action to handle logout
// export const logoutAsync = () => async (dispatch) => {
//   // You can include any asynchronous logic here, like making an API call

//   // Simulating an asynchronous operation (e.g., logging out from a server)
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   // Dispatch the actual logout action
//   dispatch(logoutUser());
// };

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    // Add other authentication-related state if needed
  },
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
