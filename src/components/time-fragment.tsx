import { useSelector } from "react-redux";
import { RootState } from "@/store";
import calendar from "@/assets/calendar.svg";

export default function TimeFragment() {
  const weather = useSelector((state: RootState) => state.weather.value);

  return (
    <div className="flex h-full w-auto flex-col items-center justify-center">
      <div className="text-l mb-1 flex h-1/4 w-full items-center justify-center">
        <img className="mx-2" src={calendar} alt="Calendar" width={35} />
        <div className="ml-1 w-auto p-1 text-center">
          <span>{weather?.date || "No date"}</span>
        </div>
      </div>
      <p className="h-2/4 text-7xl font-bold">{weather?.time || "No time"}</p>
      <p className="text-l h-1/4">{weather?.location || "No location"}</p>
    </div>
  );
}
