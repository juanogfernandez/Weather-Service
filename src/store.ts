import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/language-slice";
import scaleReducer from "./features/scale-slice";
import weatherReducer from "./features/weather-slice";
import locationReducer from "./features/location-slice";

export default configureStore({
  reducer: {
    language: languageReducer,
    scale: scaleReducer,
    weather: weatherReducer,
    location: locationReducer,
  },
});
