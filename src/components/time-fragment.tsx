import { useSelector } from "react-redux";
import { RootState } from "@/store";
import calendar from "@/assets/calendar.svg";
import { useState, useEffect } from "react";
import { retrieveFormattedDatetime } from "@/utils/format-datetime";
import locationIcon from "@/assets/location.svg";

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
    <>
      <div className="flex hidden h-auto w-full flex-col items-center justify-center md:flex">
        <div className="text-l mb-1 flex h-1/4 w-full items-center justify-center">
          <img className="mx-2" src={calendar} alt="Calendar" width={35} />
          <div className="ml-1 w-auto p-1 text-center">
            <span>{time?.date}</span>
          </div>
        </div>
        <span className="h-2/4 text-7xl font-bold">{time?.time}</span>
        <span className="text-l h-1/4">{location.value}</span>
      </div>

      <div className="flex w-full items-center justify-center md:hidden">
        <div className="mx-2 flex w-3/5 items-center justify-center">
          <span className="text-center text-4xl font-bold leading-9">
            {time?.time}
          </span>
        </div>
        <div className="mx-2 flex w-2/5 flex-col">
          <div className="flex flex-col">
            <div className="text-md my-1 flex">
              <img
                className="mx-1 w-5"
                src={calendar}
                alt="calendar"
                width={20}
              />
              <span className="ml-2">{time?.date}</span>
            </div>
            <div className="text-md my-1 flex">
              <img
                className="mx-1 w-5"
                src={locationIcon}
                alt="location"
                width={20}
              />
              <span className="ml-2">{location.value}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
