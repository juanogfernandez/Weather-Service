import { useSelector } from "react-redux";
import { RootState } from "@/store";
import sun from "@/assets/sun.svg";

export default function WeatherFragment() {
  const weather = useSelector((state: RootState) => state.weather.value);
  const scale = useSelector((state: RootState) => state.scale);

  return (
    <div className="flex h-full w-auto flex-col items-center justify-center">
      <div className="text-l mb-1 flex h-1/4 w-full items-center justify-center">
        <img className="mx-2" src={sun} alt="Sun" width={35} />
        <div className="ml-1 w-auto rounded-full bg-[#ff914d] p-1 text-center opacity-75">
          <span>{weather?.condition}</span>
        </div>
      </div>
      <p className="h-2/4 text-7xl font-bold">
        {scale == "C"
          ? weather?.temperatureC + "°C" || "No temp"
          : weather?.temperatureF + "°F" || "No temp"}
      </p>
      <p className="text-l h-1/4">Min 14° / Max 28°</p>
    </div>
  );
}
