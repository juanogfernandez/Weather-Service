export async function fetchWeather(location: string) {
  console.log("City from fetch", location);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  try {
    const response = await fetch(url, { cache: "no-cache" });
    const data = await response.json();
    if (!data.location) {
      throw new Error();
    }
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
      timezone: data.location.tz_id,
    };
    return locationData;
  } catch (error) {
    throw new Error();
  }
}
