import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    value: {},
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setWeatherData } = weatherSlice.actions;

export const getWeatherData = createAsyncThunk(
  "weather/getWeatherData",
  async (location, { rejectWithValue }) => {
    try {
      const response = await fetchWeather(location);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export default weatherSlice.reducer;
