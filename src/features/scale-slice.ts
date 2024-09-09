import { createSlice } from "@reduxjs/toolkit";

type Scale = "C" | "F";

const initialState: Scale = "C";

const scaleSlice = createSlice({
  name: "scale",
  initialState,
  reducers: {
    setScale: (state, action) => {
      return action.payload;
    },
  },
});

export const { setScale } = scaleSlice.actions;

export default scaleSlice.reducer;
