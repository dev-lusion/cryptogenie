import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

const loadingSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    apiLoaded: (state, { payload }) => {
      state.loading = payload;
    },
  },
});
export const selectLoadingStatus = (state) => state.loading.loading;

export const { apiLoaded } = loadingSlice.actions;
export default loadingSlice.reducer;
