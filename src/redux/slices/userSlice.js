import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: null, isLoggedIn: false };

const slice = createSlice({
  initialState,
  name: "user",
  reducers: {
    userLogIn: (state, action) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    userLogOut: (state) => {
      state.userName = null;
      state.isLoggedIn = false;
    },
  },
});

export const { userLogIn, userLogOut } = slice.actions;
export default slice.reducer;
