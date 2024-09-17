import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import WeatherFragment from "@/components/weather-card/weather-fragment";
import TimeFragment from "@/components/weather-card/time-fragment";
import WeatherCardSkeleton from "@/components/weather-card/weather-card-skeleton";
import ErrorSpan from "@/components/ui/error";
import { useFetchLocationAndWeather } from "@/hooks/fetch-location-weather";

// Componente central de la aplicación que muestra los datos de clima y tiempo
export default function WeatherCard() {
  useFetchLocationAndWeather();

  // Suscripción al store de Redux utilizando el hook useSelector de React-Redux
  // Al existir algún cambio en el estado del store, se re-renderiza.
  const { language, location, weather, scale } = useSelector(
    (state: RootState) => ({
      language: state.language,
      location: state.location,
      weather: state.weather,
      scale: state.scale,
    }),
  );

  // Si no existen en el store datos del clima o locación o alguno de ambos está esperando la resolución de la promesa, se muestra un skeleton de carga
  if (
    !weather.value ||
    !location.value ||
    [weather.status, location.status].some(
      (status) => status === "loading",
    )
  ) {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <WeatherCardSkeleton />
        {/* Si existe un error en la consulta a la api de clima o de locación, se renderiza componente de error */}
        {weather.error || location.error ? (
          <ErrorSpan message={weather.error || location.error} />
        ) : null}
      </div>
    );
  }
  return (
    <>
      <div className="flex h-52 w-80 max-w-xs grow flex-col items-center justify-center rounded-bl-lg rounded-br-[70px] rounded-tl-[90px] rounded-tr-2xl bg-gradient-to-bl from-[#e6e6ff] via-[#a8d0e0] to-[#e0ecee] p-2 shadow-[-3px_3px_2px_1px_#a6a6a6] md:max-w-md md:flex-row md:rounded-br-[90px] lg:h-60">
        <WeatherFragment
          language={language}
          scale={scale}
          weather={weather.value}
        />
        <TimeFragment
          location={location.value}
          language={language}
          timezone={weather.value.timezone}
        />
        {/* Si existe un error en la consulta a la api de clima o de locación, se renderiza componente de error. ¿Tiene sentido acá?*/}
        {weather.error || location.error ? (
          <ErrorSpan message={weather.error || location.error} />
        ) : null}
      </div>
    </>
  );
}
