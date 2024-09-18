import { WeatherDataProps } from "@/components/weather-card/weather-fragment";

export default function WeatherDetails({
  language,
  scale,
  weather,
}: WeatherDataProps) {
  return (
    <div className="flex w-full flex-col justify-around md:my-1 md:h-12 md:flex-row md:items-center">
      <div className="my-2 flex animatecss animatecss-fadeIn md:items-center md:justify-center">
        <img
          className="mx-1 w-5 md:w-6"
          src="/assets/temperature-feels-like.svg"
          alt="feels-like"
          width={20}
        />
        <span className="ml-1 text-sm md:text-base">
          {scale == "C"
            ? weather?.feelsLikeC + " °C"
            : weather?.feelsLikeF + " °F"}
        </span>
      </div>
      <div className="my-2 flex animatecss animatecss-fadeIn md:ml-2 md:items-center md:justify-center lg:ml-1">
        <img
          className="mx-1 w-5 md:w-6"
          src="/assets/rain-water.svg"
          alt="precipitations"
          width={20}
        />
        <span className="ml-1 text-sm md:text-base">
          {language == "es"
            ? weather?.precipitationsMm + " mm"
            : weather?.precipitationsIn + " In"}
        </span>
      </div>
    </div>
  );
}
