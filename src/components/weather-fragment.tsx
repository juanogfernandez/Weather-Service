import { useSelector } from "react-redux";
import { RootState } from "@/store";
import WeatherDetails from "@/components/weather-details";
import WeatherStatusIcon from "./weather-status-icon";

// Componente que es la mitad de la Weather Card, correspondiente a los datos del clima
// Renderiza la temperatura y dos componentes pequeños, que representan detalles del clima e icono y leyenda de condición climática
export default function WeatherFragment() {
  // Suscripción al store de Redux utilizando el hook useSelector de React-Redux
  // Al existir algún cambio en el estado del store, se re-renderiza.
  // Se podría sintetizar las variables weather y scale en una sola utilización del hook, para evitar re-renderizaciones
  const weather = useSelector(
    (state: RootState) => state.weather.value,
  );
  const scale = useSelector((state: RootState) => state.scale);

  return (
    <>
      {/* UI para screen medium en adelante*/}
      <div className="hidden h-2/3 w-1/2 flex-col items-center justify-center p-3 md:flex md:p-0 md:pl-1">
        <WeatherStatusIcon />
        <div className="mb-3 flex h-1/3 w-full items-center justify-center md:my-1">
          <span className="text-center text-5xl font-bold">
            {scale == "C"
              ? weather?.temperatureC + "°C"
              : weather?.temperatureF + "°F"}
          </span>
        </div>
        <WeatherDetails />
      </div>

      {/* UI para screen small*/}
      <div className="flex w-full items-center justify-center md:hidden">
        <div className="mx-1 flex w-1/2 items-center justify-center">
          <span className="w-full text-center text-4xl font-bold leading-9">
            {scale == "C"
              ? weather?.temperatureC + "°C"
              : weather?.temperatureF + "°F"}
          </span>
        </div>
        <div className="mx-1 flex w-1/2 flex-col">
          <WeatherStatusIcon />
          <WeatherDetails />
        </div>
      </div>
    </>
  );
}
