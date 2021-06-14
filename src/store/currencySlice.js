import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultCurrency: localStorage.getItem("currency") || "inr",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    updateCurrency: (state, action) => {
      state.defaultCurrency = action.payload;
    },
  },
});
export const selectCurrency = (state) => state.currency.defaultCurrency;
export const { updateCurrency } = currencySlice.actions;
export default currencySlice.reducer;
