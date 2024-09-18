import { WeatherDataProps } from "@/components/weather-card/weather-fragment";

// Componente que renderiza icono y estado del clima, tomados de la api
// Parte del Componente Weather Card
export default function WeatherStatusIcon({
  weather,
}: WeatherDataProps) {
  return (
    <div className="my-1 flex w-full items-center -space-x-5 animatecss animatecss-fadeIn md:h-12 md:justify-center">
      <div className="z-10 flex w-8 items-center justify-center rounded-full bg-white md:h-10 md:w-12">
        <img
          className="z-20 w-8 transition duration-200 ease-in hover:scale-150"
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
