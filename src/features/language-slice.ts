import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    value: "es",
  },
  reducers: {
    switchLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;
