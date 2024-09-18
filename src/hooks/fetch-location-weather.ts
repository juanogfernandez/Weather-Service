import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getWeatherData } from "@/store/weather-slice";
import {
  setLocation,
  setLocationLoading,
  setLocationError,
} from "@/store/location-slice";
import { useTranslation } from "react-i18next";
import { Language } from "@/store/language-slice";
import { LocationState } from "@/store/location-slice";
export function useFetchLocationAndWeather(
  location: LocationState,
  language: Language,
) {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Función central del componente, utilizando useEffect con dependencias
    const fetchLocation = async () => {
      // Si no hay locación y no existe error, intenta obtener locación por ip para utilizar api de clima basado en locación aproximada
      if (!location.value && !location.error) {
        dispatch(setLocationLoading());

        try {
          // Token de api es tomado por variable de entorno
          const ipInfoToken = import.meta.env.VITE_IP_INFO_TOKEN;
          // Como mejora, podría agregarse una capa de abstracción y agnosticismo respeto de la api externa.
          // Esto permitiría cambiar fácilmente de api o consumir de distintas según necesidad.
          const url = `https://ipinfo.io/json?token=${ipInfoToken}`;
          // Esta consulta se cachea
          const response = await fetch(url);
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
          dispatch(
            setLocationError(
              error instanceof Error
                ? error.message
                : t("unexpected-error"),
            ),
          );
        }
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      // Si hay locación y lenguaje, consulta los datos del clima
      await dispatch(getWeatherData(location.value, language));

      // Se setea un intervalo para hacer una consulta a la api cada 5 min
      // Se agrega limpieza de intervalo para evitar que intervalo(s) anterior(es) sigan ejecutando al re-renderizar
      const interval = setInterval(
        () => {
          dispatch(getWeatherData(location.value, language));
        },
        1000 * 60 * 5,
      );
      return () => clearInterval(interval);
    };

    if (location.value && language) {
      fetchWeather(); // Fetch weather when location or language changes
    }
  }, [location.value, language, dispatch]);
}
