import { useState, useEffect } from "react";
import { Language } from "@/store/language-slice";
import { retrieveFormattedDatetime } from "@/utils/format-datetime";
import calendar from "@/assets/calendar.svg";
import locationIcon from "@/assets/location.svg";

interface TimeDataProps {
  timezone?: string;
  location: string;
  language: Language;
}

interface TimeData {
  date: string;
  time: string;
}

// Componente que es la mitad de la Weather Card, correspondiente a los datos de fecha y hora
export default function TimeFragment({
  timezone,
  language,
  location,
}: TimeDataProps) {
  const [time, setTime] = useState<TimeData | null>(null);
  useEffect(() => {
    // Se genera un reloj en la página, que se actualiza una vez por minuto.
    // No es el tiempo real, sino una aproximación al mismo con una diferencia de segundos.
    // Solución elegida para tener tiempo real, ya que la api no actualiza datos horarios por minutos, sino en una ventana temporal más grande.
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
      {/* UI para screen medium en adelante*/}
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
            <span className="ml-1 text-base">{location}</span>
          </div>
        </div>
      </div>

      {/* UI para screen small*/}
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
              <span className="ml-2 text-sm capitalize">
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
