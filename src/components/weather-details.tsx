import { useSelector } from "react-redux";
import { RootState } from "@/store";
import tempFeelsLike from "@/assets/temperature-feels-like.svg";
import precipitations from "@/assets/rain-water.svg";

export default function WeatherDetails() {
  const language = useSelector((state: RootState) => state.language);
  const scale = useSelector((state: RootState) => state.scale);
  const weather = useSelector((state: RootState) => state.weather.value);

  return (
    <div className="flex flex-col">
      <div className="md:text-l text-md my-1 flex">
        <img
          className="mx-1 w-5"
          src={tempFeelsLike}
          alt="feels-like"
          width={20}
        />
        <span className="ml-2">
          {scale == "C"
            ? weather?.feelsLikeC + " °C"
            : weather?.feelsLikeF + " °F"}
        </span>
      </div>
      <div className="md:text-l text-md my-1 flex">
        <img
          className="mx-1 w-5"
          src={precipitations}
          alt="precipitations"
          width={20}
        />
        <span className="ml-2">
          {language == "es"
            ? weather?.precipitationsMm + " mm"
            : weather?.precipitationsIn + " In"}
        </span>
      </div>
    </div>
  );
}
