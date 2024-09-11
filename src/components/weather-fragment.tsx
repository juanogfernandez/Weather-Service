import { useSelector } from "react-redux";
import { RootState } from "@/store";
import WeatherDetails from "@/components/weather-details";
import WeatherStatusIcon from "./weather-status-icon";

export default function WeatherFragment() {
  const weather = useSelector((state: RootState) => state.weather.value);
  const scale = useSelector((state: RootState) => state.scale);

  return (
    <>
      <div className="hidden h-full w-auto flex-col items-center justify-center md:flex">
        <WeatherStatusIcon />
        <div className="mb-3 h-2/4 w-full items-center justify-center">
          <p className="text-center text-7xl font-bold">
            {scale == "C"
              ? weather?.temperatureC + "°C"
              : weather?.temperatureF + "°F"}
          </p>
        </div>
        <WeatherDetails />
      </div>

      <div className="flex w-full items-center justify-center md:hidden">
        <div className="mx-2 flex w-3/5 items-center justify-center">
          <span className="text-center text-5xl font-bold leading-9">
            {scale == "C"
              ? weather?.temperatureC + "°C"
              : weather?.temperatureF + "°F"}
          </span>
        </div>
        <div className="mx-2 flex w-2/5 flex-col">
          <WeatherStatusIcon />
          <WeatherDetails />
        </div>
      </div>
    </>
  );
}
