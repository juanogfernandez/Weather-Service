import WeatherFragment from "./weather-fragment";
import TimeFragment from "./time-fragment";

export default function WeatherCard() {
  return (
    <div className="flex min-h-60 w-5/6 items-center justify-around rounded-bl-[4700px] rounded-br-full rounded-tl-full rounded-tr-full bg-gradient-to-bl from-[#d0d0f8] via-[#76adbe] to-[#c8d9dc] p-5 shadow-[-3px_3px_2px_1px_#a6a6a6]">
      <WeatherFragment />
      <TimeFragment />
    </div>
  );
}
