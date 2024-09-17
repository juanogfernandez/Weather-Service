import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState, AppDispatch } from "@/store";
import { getWeatherData } from "@/features/weather-slice";
import {
  setLocation,
  setLocationLoading,
  setLocationError,
} from "@/features/location-slice";
import WeatherFragment from "@/components/weather-fragment";
import TimeFragment from "@/components/time-fragment";
import WeatherCardSkeleton from "@/components/weather-card-skeleton";
import ErrorSpan from "@/components/error";

// Componente central de la aplicación que muestra los datos de clima y tiempo
export default function WeatherCard() {
  // Suscripción al store de Redux utilizando el hook useSelector de React-Redux
  // Al existir algún cambio en el estado del store, se re-renderiza.
  // Se podría sintetizar las variables language, location y weather en una sola utilización del hook, para evitar re-renderizaciones
  const language = useSelector(
    (state: RootState) => state.language,
  );
  const location = useSelector(
    (state: RootState) => state.location,
  );
  const weather = useSelector(
    (state: RootState) => state.weather,
  );
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // Función central del componente, utilizando useEffect con dependencias
    const fetchLocationAndWeather = async () => {
      // Si no hay locación y no existe error, intenta obtener locación por ip para utilizar api de clima basado en locación aproximada
      if (!location.value && !location.error) {
        dispatch(setLocationLoading());

        try {
          // Token de api es tomado por variable de entorno
          const ipInfoToken = import.meta.env.VITE_IP_INFO_TOKEN;
          // Como mejora, podría agregarse una capa de abstracción y agnosticismo respeto de la api externa.
          // Esto permitiría cambiar fácilmente de api o consumir de distintas según necesidad.
          const url = `https://ipinfo.io/json?token=${ipInfoToken}`;
          // Esta consulta se podría cachear
          const response = await fetch(url, {
            cache: "no-cache",
          });
          if (!response.ok) {
            /*  
          Error se traduce con i18next, que luego se guardará en el estado del clima en este caso
          La traducción se podría hacer en el componente que visualiza el error.
          */
            throw new Error(t("location-ip-error"));
          }
          const jsonResponse = await response.json();
          const city = jsonResponse.city;
          dispatch(setLocation(city));
        } catch (error) {
          error instanceof Error
            ? dispatch(setLocationError(error.message))
            : dispatch(setLocationError(t("unexpected-error")));
        }
      }

      // Si hay locación y lenguaje, consulta los datos del clima
      if (location.value && language) {
        dispatch(getWeatherData(location.value, language));

        // Se setea un intervalo para hacer una consulta a la api cada 5 min
        // Se agrega limpieza de intervalo para evitar que intervalo(s) anterior(es) sigan ejecutando al re-renderizar
        const interval = setInterval(
          () => {
            dispatch(getWeatherData(location.value, language));
          },
          1000 * 60 * 5,
        );
        return () => clearInterval(interval);
      }
    };

    fetchLocationAndWeather();
  }, [location.value, location.error, language, dispatch, t]);

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
        {weather.error || location.error ? <ErrorSpan /> : null}
      </div>
    );
  }

  return (
    <>
      <div className="flex h-52 w-80 max-w-xs grow flex-col items-center justify-center rounded-bl-lg rounded-br-[70px] rounded-tl-[90px] rounded-tr-2xl bg-gradient-to-bl from-[#e6e6ff] via-[#a8d0e0] to-[#e0ecee] p-2 shadow-[-3px_3px_2px_1px_#a6a6a6] md:max-w-md md:flex-row md:rounded-br-[90px] lg:h-60">
        <WeatherFragment />
        <TimeFragment timezone={weather?.value?.timezone} />
        {/* Si existe un error en la consulta a la api de clima o de locación, se renderiza componente de error. ¿Tiene sentido acá?*/}
        {weather.error || location.error ? <ErrorSpan /> : null}
      </div>
    </>
  );
}
