import { createSelector } from "reselect";
import { RootState } from "@/store/store";

const selectLanguage = (state: RootState) => state.language;
const selectLocation = (state: RootState) => state.location;
const selectWeather = (state: RootState) => state.weather;
const selectScale = (state: RootState) => state.scale;

export const selectWeatherCardData = createSelector(
  [selectLanguage, selectLocation, selectWeather, selectScale],
  (language, location, weather, scale) => ({
    language,
    location,
    weather,
    scale,
  }),
);

export const selectSwitchBarData = createSelector(
  [selectLanguage, selectLocation, selectScale],
  (language, location, scale) => ({
    language,
    location,
    scale,
  }),
);

export const selectFetchLocationAndWeather = createSelector(
  [selectLanguage, selectLocation],
  (language, location) => ({
    language,
    location,
  }),
);
