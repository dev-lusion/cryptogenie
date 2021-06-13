import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import currencyReducer from "./currencySlice";
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    // users: userSlice,
  },
});
