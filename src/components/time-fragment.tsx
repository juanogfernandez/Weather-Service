import calendar from "/calendar.svg";
import { useSelector } from "react-redux";

export default function TimeFragment() {
  const weather = useSelector((state) => state.weather.value);

  return (
    <div className="flex h-full w-auto flex-col items-center justify-center">
      <div className="text-l mb-1 flex h-1/4 w-full items-center justify-center">
        <img className="mx-2" src={calendar} alt="Calendar" width={35} />
        <span className="mx-2">{weather.date}</span>
      </div>
      <p className="h-2/4 text-7xl font-bold">{weather.time}</p>
      <p className="text-l h-1/4">{weather.location}</p>
    </div>
  );
}
