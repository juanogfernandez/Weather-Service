import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function WeatherStatusIcon() {
  const weather = useSelector((state: RootState) => state.weather.value);

  return (
    <div className="my-1 flex h-1/4 w-full -space-x-5 md:h-1/3 md:items-center md:justify-center">
      <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white md:w-12">
        <img
          className="z-20 w-8"
          src={weather?.conditionIcon}
          alt="condition"
          width={20}
        />
      </div>
      <div className="z-0 flex w-auto items-center justify-center rounded-xl bg-gradient-to-tl from-red-300 via-red-200 to-red-200 pl-6 pr-2 shadow-sm lg:w-32">
        <span
          className={`text-wrap text-left ${
            weather?.condition
              ? weather?.condition?.length > 20
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
