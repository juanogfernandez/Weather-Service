import { useSelector } from "react-redux";
import { RootState } from "@/store";
import tempFeelsLike from "@/assets/temperature-feels-like.svg";
import precipitations from "@/assets/rain-water.svg";

export default function WeatherFragment() {
  const weather = useSelector((state: RootState) => state.weather.value);
  const scale = useSelector((state: RootState) => state.scale);
  const language = useSelector((state: RootState) => state.language);

  return (
    <div className="flex h-full w-auto flex-col items-center justify-center">
      <div className="text-l mb-1 flex h-1/4 w-full items-center justify-center -space-x-2">
        <div className="z-10 flex w-16 items-center justify-center rounded-full bg-white">
          <img
            className="z-20"
            src={weather?.conditionIcon}
            alt="condition"
            width={35}
          />
        </div>
        <div className="z-0 w-auto rounded-r-xl bg-gradient-to-tl from-red-300 via-red-200 to-red-200 p-1 pl-3 text-center text-[#636262] shadow-sm">
          <span>{weather?.condition}</span>
        </div>
      </div>
      <div className="mb-3 h-2/4 w-full items-center justify-center">
        <p className="text-center text-7xl font-bold">
          {scale == "C"
            ? weather?.temperatureC + "°C"
            : weather?.temperatureF + "°F"}
        </p>
      </div>
      <div className="flex h-1/4 flex-col">
        <div className="text-l mb-2 flex">
          <img className="mx-1" src={tempFeelsLike} alt="Sun" width={25} />
          <span>
            {scale == "C"
              ? weather?.feelsLikeC + " °C"
              : weather?.feelsLikeF + " °F"}
          </span>
        </div>
        <div className="text-l flex">
          <img className="mx-1" src={precipitations} alt="Sun" width={25} />
          <span>
            {language == "es"
              ? weather?.precipitationsMm + " mm"
              : weather?.precipitationsIn + " In"}
          </span>
        </div>
      </div>
    </div>
  );
}
