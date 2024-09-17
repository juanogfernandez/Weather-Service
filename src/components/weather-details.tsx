import { useSelector } from "react-redux";
import { RootState } from "@/store";
import tempFeelsLike from "@/assets/temperature-feels-like.svg";
import precipitations from "@/assets/rain-water.svg";

export default function WeatherDetails() {
  // Suscripción al store de Redux utilizando el hook useSelector de React-Redux
  // Al existir algún cambio en el estado del store, se re-renderiza.
  // Se podría sintetizar las variables weather, scale, language en una sola utilización del hook, para evitar re-renderizaciones
  const language = useSelector(
    (state: RootState) => state.language,
  );
  const scale = useSelector((state: RootState) => state.scale);
  const weather = useSelector(
    (state: RootState) => state.weather.value,
  );

  return (
    <div className="flex h-1/4 w-full flex-col md:my-1 md:h-1/3 md:flex-row md:items-center md:justify-center">
      <div className="my-2 flex md:items-center md:justify-center">
        <img
          className="mx-1 w-5 md:w-6"
          src={tempFeelsLike}
          alt="feels-like"
          width={20}
        />
        <span className="ml-1 text-sm md:text-base">
          {scale == "C"
            ? weather?.feelsLikeC + " °C"
            : weather?.feelsLikeF + " °F"}
        </span>
      </div>
      <div className="my-2 flex md:ml-2 md:items-center md:justify-center lg:ml-1">
        <img
          className="mx-1 w-5 md:w-6"
          src={precipitations}
          alt="precipitations"
          width={20}
        />
        <span className="ml-1 text-sm md:text-base">
          {language == "es"
            ? weather?.precipitationsMm + " mm"
            : weather?.precipitationsIn + " In"}
        </span>
      </div>
    </div>
  );
}
