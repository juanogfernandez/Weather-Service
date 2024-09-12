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

export default function TimeFragment({
  timezone,
}: TimeFragmentProps) {
  const [time, setTime] = useState<TimeData | null>(null);
  const location = useSelector(
    (state: RootState) => state.location,
  );
  const language = useSelector(
    (state: RootState) => state.language,
  );

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
      <div className="hidden h-2/3 w-1/2 flex-col items-center justify-center p-3 md:flex md:p-0 md:pr-1">
        <div className="my-1 flex h-1/3 w-full items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              className="mx-1 w-6"
              src={calendar}
              alt="Calendar"
              width={20}
            />
          </div>
          <div className="ml-1 w-auto text-center md:text-base">
            <span>{time?.date}</span>
          </div>
        </div>
        <div className="mb-3 flex h-1/3 w-full items-center justify-center md:my-1">
          <span className="text-center text-5xl font-bold">
            {time?.time}
          </span>
        </div>
        <div className="flex h-1/3 w-full items-center justify-center">
          <div className="my-1 flex md:items-center md:justify-center">
            <img
              className="mx-1 w-6"
              src={locationIcon}
              alt="location"
              width={20}
            />
            <span className="ml-1 text-base">
              {location.value}
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full items-start justify-center md:hidden">
        <div className="mx-1 flex w-1/2 items-center justify-center">
          <span className="w-full text-center text-4xl font-bold leading-9">
            {time?.time}
          </span>
        </div>
        <div className="mx-1 flex w-1/2 flex-col">
          <div className="flex w-full flex-col">
            <div className="my-2 flex">
              <img
                className="mx-1 w-5"
                src={calendar}
                alt="calendar"
                width={20}
              />
              <span className="ml-2 text-sm">{time?.date}</span>
            </div>
            <div className="my-2 flex">
              <img
                className="mx-1 w-5"
                src={locationIcon}
                alt="location"
                width={20}
              />
              <span className="ml-2 text-sm">
                {location.value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
