import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "@/utils/fetch-weather";
import { retrieveTranslation } from "@/utils/retrieve-translation";
import { AppDispatch } from "@/store";

interface WeatherData {
  location: string;
  datetime: string;
  temperatureC: number;
  temperatureF: number;
  feelsLikeC: number;
  feelsLikeF: number;
  humidity: number;
  precipitationsIn: number;
  precipitationsMm: number;
  condition: string;
  conditionIcon: string;
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
    setWeatherData: (
      state,
      action: PayloadAction<WeatherData>,
    ) => {
      state.value = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
    setWeatherLoading: (state) => {
      state.status = "loading";
      state.error = null;
    },
    setWeatherError: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  setWeatherData,
  setWeatherLoading,
  setWeatherError,
} = weatherSlice.actions;

export const getWeatherData =
  (location: string, language: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(setWeatherLoading());
    try {
      const response = await fetchWeather(location, language);
      dispatch(setWeatherData(response));
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : retrieveTranslation("unexpected-error");

        dispatch(setWeatherError(errorMessage));
      }
    }
  };

export default weatherSlice.reducer;
