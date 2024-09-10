import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { getWeatherData } from "@/features/weather-slice";
import {
  setLocation,
  setLocationLoading,
  setLocationError,
} from "@/features/location-slice";
import WeatherFragment from "@/components/weather-fragment";
import TimeFragment from "@/components/time-fragment";
import WeatherCardSkeleton from "@/utils/weather-card-skeleton";
import ErrorSpan from "@/components/error";
import { useTranslation } from "react-i18next";

export default function WeatherCard() {
  const language = useSelector((state: RootState) => state.language);
  const location = useSelector((state: RootState) => state.location);
  const weather = useSelector((state: RootState) => state.weather);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!location.value) {
      dispatch(setLocationLoading());
      async function getLocationByIp() {
        try {
          const ipInfoToken = import.meta.env.VITE_IP_INFO_TOKEN;
          const url = `https://ipinfo.io/json?token=${ipInfoToken}`;
          const response = await fetch(url, { cache: "no-cache" });
          if (!response.ok) {
            throw new Error(t("location-ip-error"));
            //response.status;
          }
          const jsonResponse = await response.json();
          const city = jsonResponse.city;
          dispatch(setLocation(city));
        } catch (error) {
          if (error instanceof Error) {
            dispatch(setLocationError(error.message));
            throw error;
          }
          const unexpected = t("unexpected-error");
          dispatch(setLocationError(unexpected));
          throw new Error(unexpected);
        }
      }
      getLocationByIp();
    }
  }, [dispatch]);

  useEffect(() => {
    if (location.value && language) {
      dispatch(getWeatherData(location.value, language));
    }
  }, [location, dispatch]);

  useEffect(() => {
    if (location.value) {
      const interval = setInterval(
        () => {
          console.log("ja");
          dispatch(getWeatherData(location.value, language));
        },
        10000 * 6 * 5,
      );
      return () => clearInterval(interval);
    }
  }, [location, dispatch]);

  if (
    !weather.value ||
    !location.value ||
    [weather.status, location.status].some((status) => status === "loading")
  ) {
    return (
      <div className="flex h-60 w-full flex-col items-center justify-center">
        <WeatherCardSkeleton />
        {weather.error || location.error ? <ErrorSpan /> : null}
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-60 w-full items-center justify-around rounded-bl-[4700px] rounded-br-full rounded-tl-full rounded-tr-full bg-gradient-to-bl from-[#e6e6ff] via-[#a8d0e0] to-[#e0ecee] p-5 shadow-[-3px_3px_2px_1px_#a6a6a6]">
        <WeatherFragment />
        <TimeFragment timezone={weather?.value?.timezone} />
      </div>
    </>
  );
}
