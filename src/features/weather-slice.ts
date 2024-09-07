import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "@/utils/fetch-weather";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface WeatherData {
  condition: string;
  temperatureC: number;
  temperatureF: number;
  datetime: string;
  location: string;
  feelsLikeC: number;
  feelsLikeF: number;
  humidity: number;
  precipitationsIn: number;
  precipitationsMm: number;
  timezone: string;
}

interface WeatherState {
  value: WeatherData | null;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: WeatherState = {
  value: null,
  error: null,
  status: "idle",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
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
      .addCase(
        getWeatherData.fulfilled,
        (state, action: PayloadAction<WeatherData>) => {
          state.status = "succeeded";
          state.value = action.payload;
        },
      )
      .addCase(
        getWeatherData.rejected,
        (state, action: PayloadAction<string | unknown>) => {
          state.status = "failed";
          state.error = action.payload as string | null;
        },
      );
  },
});

export const { setWeatherData } = weatherSlice.actions;

export const getWeatherData = createAsyncThunk<
  WeatherData,
  string,
  { rejectValue: string }
>("weather/getWeatherData", async (location, { rejectWithValue }) => {
  try {
    const response = await fetchWeather(location);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unexpected error ocurred");
  }
});

export default weatherSlice.reducer;
