import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { getWeatherData } from "@/features/weather-slice";
import { setLocation } from "@/features/location-slice";
import WeatherFragment from "@/components/weather-fragment";
import TimeFragment from "@/components/time-fragment";
import WeatherCardSkeleton from "@/utils/weather-card-skeleton";

export default function WeatherCard() {
  const location = useSelector((state: RootState) => state.location);
  const weather = useSelector((state: RootState) => state.weather.value);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!location) {
      console.log("Running with no location", location);
      async function getLocationByIp() {
        const ipInfoToken = import.meta.env.VITE_IP_INFO_TOKEN;
        const url = `https://ipinfo.io/json?token=${ipInfoToken}`;
        const response = await fetch(url, { cache: "no-cache" });
        const jsonResponse = await response.json();
        const city = jsonResponse.city;
        console.log("City from ip", city);
        if (!city) {
          throw new Error();
        }
        dispatch(setLocation(city));
      }
      getLocationByIp();
    }
  }, [dispatch]);

  useEffect(() => {
    if (location) {
      dispatch(getWeatherData(location));
    }
  }, [location, dispatch]);

  useEffect(() => {
    if (location) {
      const interval = setInterval(
        () => {
          dispatch(getWeatherData(location));
        },
        10000 * 6 * 5,
      );
      return () => clearInterval(interval);
    }
  }, [location, dispatch]);

  if (!weather || !location) {
    return <WeatherCardSkeleton />;
  }

  return (
    <div className="flex min-h-60 w-5/6 items-center justify-around rounded-bl-[4700px] rounded-br-full rounded-tl-full rounded-tr-full bg-gradient-to-bl from-[#d0d0f8] via-[#76adbe] to-[#c8d9dc] p-5 shadow-[-3px_3px_2px_1px_#a6a6a6]">
      <WeatherFragment />
      <TimeFragment timezone={weather?.timezone} />
    </div>
  );
}
