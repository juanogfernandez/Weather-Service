import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  value: string;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: LocationState = {
  value: "",
  error: null,
  status: "idle",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
    setLocationLoading: (state) => {
      state.status = "loading";
      state.error = null;
    },
    setLocationError: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { setLocation, setLocationLoading, setLocationError } =
  locationSlice.actions;

export default locationSlice.reducer;
