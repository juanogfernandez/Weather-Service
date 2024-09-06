import { createSlice } from "@reduxjs/toolkit";

type Language = "es" | "en";

const initialState: Language = "es";

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      return action.payload;
    },
  },
});

export const { switchLanguage } = languageSlice.actions;

export default languageSlice.reducer;
