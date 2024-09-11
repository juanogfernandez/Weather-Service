import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function WeatherStatusIcon() {
  const weather = useSelector((state: RootState) => state.weather.value);

  return (
    <div className="my-1 flex w-full items-center justify-center -space-x-2">
      <div className="z-10 flex w-8 items-center justify-center rounded-full bg-white md:w-16">
        <img
          className="z-20 w-8"
          src={weather?.conditionIcon}
          alt="condition"
          width={22}
        />
      </div>
      <div className="md:text-l z-0 w-auto rounded-xl bg-gradient-to-tl from-red-300 via-red-200 to-red-200 px-2 text-center text-sm shadow-sm">
        <span>{weather?.condition}</span>
      </div>
    </div>
  );
}
