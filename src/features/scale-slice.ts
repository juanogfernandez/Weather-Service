import { createSlice } from "@reduxjs/toolkit";

type Scale = "C" | "F";

const initialState: Scale = "C";

const scaleSlice = createSlice({
  name: "scale",
  initialState,
  reducers: {
    switchScale: (state, action) => {
      return action.payload;
    },
  },
});

export const { switchScale } = scaleSlice.actions;

export default scaleSlice.reducer;
