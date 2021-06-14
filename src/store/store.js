import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import currencyReducer from "./currencySlice";
import loadingReducer from "./loadingSlice";
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    loading: loadingReducer,
    // users: userSlice,
  },
});
