import sun from "/sun.svg";
import { useSelector } from "react-redux";

export default function WeatherFragment() {
  const weather = useSelector((state) => state.weather.value);
  const scale = useSelector((state) => state.scale.value);

  return (
    <div className="flex h-full w-auto flex-col items-center justify-center">
      <div className="text-l mb-1 flex h-1/4 w-full items-center justify-center">
        <img className="mx-2" src={sun} alt="Sun" width={35} />
        <span className="mx-2 w-16 rounded-full bg-[#ff914d] text-center opacity-75">
          {weather.condition}
        </span>
      </div>
      <p className="h-2/4 text-7xl font-bold">
        {scale == "C"
          ? weather.temperatureC + "°C"
          : weather.temperatureF + "°F"}
      </p>
      <p className="text-l h-1/4">Min 14° / Max 28°</p>
    </div>
  );
}
