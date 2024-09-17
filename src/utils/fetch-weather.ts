import { retrieveTranslation } from "@/utils/retrieve-translation";

/*
Esta función se encarga de hacer la consulta a la api de clima.
Se realiza una consulta HTTP de tipo GET, pasando como query params la locación y el lenguaje (recibidos vía parámetros de la función).
La api requiere la utilización de una api-key en la consulta.
La función tiene handler de errores ante posibles fallos en la api o en la comunicación con la api.
Como mejora, podría agregarse una capa de abstracción y agnosticismo respeto de la api externa.
Esto permitiría cambiar fácilmente de api o consumir de distintas según necesidad.
*/
export async function fetchWeather(
  location: string,
  language: string,
) {
  // Api key es tomada por variable de entorno
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&lang=${language}`;
  try {
    // Se evita cacheo de consulta, a costas de perder un poco de performance pero priorizando los datos actualizados.
    // Se podría hacer un refinamiento de esto, sabiendo cada cuanto se actualiza la información en la api.
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) {
      /*  
      Error se traduce con i18next, que luego se guardará en el estado del clima en este caso
      La traducción se podría hacer en el componente que visualiza el error.
      Se utiliza una función porque el hook de translation de i18next no puede ser utilizado por fuera de componentes de React
      */
      throw new Error(retrieveTranslation("weather-api-error"));
    }
    const data = await response.json();
    return {
      location: data.location.name,
      datetime: data.location.localtime,
      temperatureC: data.current.temp_c,
      temperatureF: data.current.temp_f,
      feelsLikeC: data.current.feelslike_c,
      feelsLikeF: data.current.feelslike_f,
      humidity: data.current.humidity,
      precipitationsIn: data.current.precip_in,
      precipitationsMm: data.current.precip_mm,
      condition: data.current.condition.text,
      conditionIcon: data.current.condition.icon,
      timezone: data.location.tz_id,
    };
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : retrieveTranslation("unexpected-error"),
    );
  }
}
