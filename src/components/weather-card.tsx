import WeatherFragment from "./weather-fragment";
import TimeFragment from "./time-fragment";

export default function WeatherCard() {
  return (
    <div dir="ltr">
      <div className="rounded-md-full flex bg-zinc-600"></div>
      <WeatherFragment />
      <TimeFragment />
    </div>
  );
}
