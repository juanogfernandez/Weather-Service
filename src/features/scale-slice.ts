import { createSlice } from "@reduxjs/toolkit";

const scaleSlice = createSlice({
  name: "scale",
  initialState: {
    value: "C",
  },
  reducers: {
    switchScale: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchScale } = scaleSlice.actions;
export default scaleSlice.reducer;
