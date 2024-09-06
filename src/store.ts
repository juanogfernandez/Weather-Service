import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/language-slice";
import scaleReducer from "./features/scale-slice";
import weatherReducer from "./features/weather-slice";
import locationReducer from "./features/location-slice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    scale: scaleReducer,
    weather: weatherReducer,
    location: locationReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
