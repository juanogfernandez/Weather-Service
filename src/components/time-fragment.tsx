import { useSelector } from "react-redux";
import { RootState } from "@/store";
import calendar from "@/assets/calendar.svg";
import { useState, useEffect } from "react";
import { retrieveFormattedDatetime } from "@/utils/format-datetime";

interface TimeFragmentProps {
  timezone?: string;
}

interface TimeData {
  date: string;
  time: string;
}

export default function TimeFragment({ timezone }: TimeFragmentProps) {
  const [time, setTime] = useState<TimeData | null>(null);
  const location = useSelector((state: RootState) => state.location);
  const language = useSelector((state: RootState) => state.language);

  useEffect(() => {
    if (timezone) {
      setTime(retrieveFormattedDatetime(timezone, language));

      const interval = setInterval(() => {
        setTime(retrieveFormattedDatetime(timezone, language));
      }, 1000 * 60);

      return () => clearInterval(interval);
    }
  }, [timezone, language]);

  return (
    <div className="flex h-full w-auto flex-col items-center justify-center">
      <div className="text-l mb-1 flex h-1/4 w-full items-center justify-center">
        <img className="mx-2" src={calendar} alt="Calendar" width={35} />
        <div className="ml-1 w-auto p-1 text-center">
          <span>{time?.date || ""}</span>
        </div>
      </div>
      <p className="h-2/4 text-7xl font-bold">{time?.time || ""}</p>
      <p className="text-l h-1/4">{location.value}</p>
    </div>
  );
}
