import { retrieveTranslation } from "@/utils/retrieve-translation";

export async function fetchWeather(location: string, language: string) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&lang=${language}`;
  try {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(retrieveTranslation("weather-api-error"));
    }
    const data = await response.json();
    const locationData = {
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
    return locationData;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(retrieveTranslation("unexpected-error"));
  }
}
