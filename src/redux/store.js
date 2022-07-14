import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js";

const rootReducer = combineReducers({
  user: userSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
