import WeatherFragment from "./weather-fragment";
import TimeFragment from "./time-fragment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../features/location-slice";
import { getWeatherData } from "../features/weather-slice";

export default function WeatherCard() {
  const location = useSelector((state) => state.location.value);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCityByIp() {
      const ipInfoToken = import.meta.env.VITE_IP_INFO_TOKEN;
      const response = await fetch(
        `https://ipinfo.io/json?token=${ipInfoToken}`,
      );
      const jsonResponse = await response.json();
      dispatch(setLocation(jsonResponse.city));
    }
    getCityByIp();
  }, [dispatch]);

  useEffect(() => {
    if (location) {
      dispatch(getWeatherData(location));
    }
  }, [location, dispatch]);

  return (
    <div className="flex min-h-60 w-5/6 items-center justify-around rounded-bl-[4700px] rounded-br-full rounded-tl-full rounded-tr-full bg-gradient-to-bl from-[#d0d0f8] via-[#76adbe] to-[#c8d9dc] p-5 shadow-[-3px_3px_2px_1px_#a6a6a6]">
      <WeatherFragment />
      <TimeFragment />
    </div>
  );
}
