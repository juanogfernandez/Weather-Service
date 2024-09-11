import { useSelector } from "react-redux";
import { RootState } from "@/store";
import tempFeelsLike from "@/assets/temperature-feels-like.svg";
import precipitations from "@/assets/rain-water.svg";

export default function WeatherDetails() {
  const language = useSelector((state: RootState) => state.language);
  const scale = useSelector((state: RootState) => state.scale);
  const weather = useSelector((state: RootState) => state.weather.value);

  return (
    <div className="flex w-full flex-col">
      <div className="my-1 flex">
        <img
          className="mx-1 w-5"
          src={tempFeelsLike}
          alt="feels-like"
          width={20}
        />
        <span className="md:text-l ml-2 text-sm">
          {scale == "C"
            ? weather?.feelsLikeC + " °C"
            : weather?.feelsLikeF + " °F"}
        </span>
      </div>
      <div className="my-1 flex">
        <img
          className="mx-1 w-5"
          src={precipitations}
          alt="precipitations"
          width={20}
        />
        <span className="md:text-l ml-2 text-sm">
          {language == "es"
            ? weather?.precipitationsMm + " mm"
            : weather?.precipitationsIn + " In"}
        </span>
      </div>
    </div>
  );
}
