import { memo } from "react";
import { Scale } from "@/store/scale-slice";
import { Language } from "@/store/language-slice";
import { WeatherData } from "@/store/weather-slice";
import WeatherDetails from "@/components/weather-card/weather-details";
import WeatherStatusIcon from "@/components/weather-card/weather-status-icon";

export type WeatherDataProps = {
  language?: Language;
  scale?: Scale;
  weather: WeatherData;
};

// Componente que es la mitad de la Weather Card, correspondiente a los datos del clima
// Renderiza la temperatura y dos componentes pequeños, que representan detalles del clima e icono y leyenda de condición climática
const WeatherFragment = memo(
  ({ language, scale, weather }: WeatherDataProps) => {
    return (
      <>
        {/* UI para screen medium en adelante*/}
        <div className="anitamecss hidden h-full w-1/2 flex-col items-center justify-center p-3 animatecss-fadeIn md:flex">
          <WeatherStatusIcon weather={weather} />
          <div className="mb-3 flex h-12 w-full items-center justify-center md:my-1">
            <span className="text-center text-5xl font-bold animatecss animatecss-fadeIn">
              {scale == "C"
                ? weather?.temperatureC + "°C"
                : weather?.temperatureF + "°F"}
            </span>
          </div>
          <WeatherDetails
            language={language}
            scale={scale}
            weather={weather}
          />
        </div>

        {/* UI para screen small*/}
        <div className="anitamecss flex w-full items-center justify-center animatecss-fadeIn md:hidden">
          <div className="mx-1 flex w-1/2 items-center justify-center">
            <span className="w-full text-center text-4xl font-bold leading-9 animatecss animatecss-fadeIn">
              {scale == "C"
                ? weather?.temperatureC + "°C"
                : weather?.temperatureF + "°F"}
            </span>
          </div>
          <div className="mx-1 flex w-1/2 flex-col">
            <WeatherStatusIcon weather={weather} />
            <WeatherDetails
              language={language}
              scale={scale}
              weather={weather}
            />
          </div>
        </div>
      </>
    );
  },
);

WeatherFragment.displayName = "WeatherFragment";

export default WeatherFragment;
