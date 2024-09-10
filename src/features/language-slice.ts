import { createSlice } from "@reduxjs/toolkit";

type Language = "es" | "en";

const initialState: Language = "es";

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
