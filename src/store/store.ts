import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "@/store/language-slice";
import scaleReducer from "@/store/scale-slice";
import weatherReducer from "@/store/weather-slice";
import locationReducer from "@/store/location-slice";

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
