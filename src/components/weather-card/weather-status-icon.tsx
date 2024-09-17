import { WeatherDataProps } from "./weather-fragment";

// Componente que renderiza icono y estado del clima, tomados de la api
// Parte del Componente Weather Card
export default function WeatherStatusIcon({
  weather,
}: WeatherDataProps) {
  return (
    <div className="my-1 flex h-1/4 w-full items-center -space-x-5 md:h-1/3 md:justify-center">
      <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white md:h-10 md:w-12">
        <img
          className="z-20 w-8"
          src={weather?.conditionIcon}
          alt="condition"
          width={20}
        />
      </div>
      <div className="z-0 flex h-auto w-auto items-center justify-center rounded-2xl bg-gradient-to-tl from-red-300 via-red-200 to-red-200 pl-6 pr-2 shadow-sm md:min-h-8 lg:w-32">
        {/* Tamaño del texto variable según longitud de string */}
        <span
          className={`text-wrap text-left font-medium ${
            weather?.condition
              ? weather?.condition?.length > 25
                ? "text-[9px]"
                : weather?.condition?.length > 20
                  ? "text-xs"
                  : weather?.condition?.length > 10
                    ? "text-sm"
                    : "text-base"
              : "text-base"
          }`}
        >
          {weather?.condition}
        </span>
      </div>
    </div>
  );
}
