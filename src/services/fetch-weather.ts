import moment from "moment";

export async function fetchWeather(location: string) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!data.location) {
      throw new Error();
    }

    const date = moment(data.location.localtime).format("dddd, D MMM");
    const time = moment(data.location.localtime).format("HH:mm");
    const locationData = {
      location: data.location.name,
      date: date,
      time: time,
      temperatureC: data.current.temp_c,
      temperatureF: data.current.temp_f,
      condition: data.current.condition.text,
    };
    return locationData;
  } catch (error) {
    throw new Error();
  }
}
