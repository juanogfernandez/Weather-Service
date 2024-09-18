import { useState, useEffect } from "react";
import { memo } from "react";
import { Language } from "@/store/language-slice";
import { retrieveFormattedDatetime } from "@/utils/format-datetime";
import { capitalize } from "@/utils/capitalize";

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
const TimeFragment = memo(
  ({ timezone, language, location }: TimeDataProps) => {
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
        <div className="hidden h-full w-1/2 flex-col items-center justify-center p-3 md:flex">
          <div className="my-1 flex h-12 w-full items-center justify-center animatecss animatecss-fadeIn">
            <div className="flex h-full items-center justify-center md:h-10">
              <img
                className="mx-1 w-6"
                src="/assets/calendar.svg"
                alt="Calendar"
                width={20}
              />
            </div>
            <div className="ml-1 flex h-full w-auto items-center justify-center">
              <span className="text-center md:text-base">
                {time?.date}
              </span>
            </div>
          </div>
          <div className="mb-3 flex h-12 w-full items-center justify-center animatecss animatecss-fadeIn md:my-1">
            <span className="text-center text-5xl font-bold">
              {time?.time}
            </span>
          </div>
          <div className="my-1 flex h-12 w-full items-center justify-center animatecss animatecss-fadeIn">
            <div className="flex h-full md:items-center md:justify-center">
              <img
                className="mx-1 w-6"
                src="/assets/location.svg"
                alt="location"
                width={20}
              />
              <span className="ml-1 text-base">{location}</span>
            </div>
          </div>
        </div>

        {/* UI para screen small*/}
        <div className="flex w-full items-start justify-center md:hidden">
          <div className="anitamecss mx-1 flex w-1/2 items-center justify-center animatecss-fadeIn">
            <span className="w-full text-center text-4xl font-bold leading-9">
              {time?.time}
            </span>
          </div>
          <div className="mx-1 flex w-1/2 flex-col">
            <div className="flex w-full flex-col">
              <div className="my-2 flex animatecss animatecss-fadeIn">
                <img
                  className="mx-1 w-5"
                  src="/assets/calendar.svg"
                  alt="calendar"
                  width={20}
                />
                <span className="ml-2 text-sm">
                  {time?.date}
                </span>
              </div>
              <div className="my-2 flex animatecss animatecss-fadeIn">
                <img
                  className="mx-1 w-5"
                  src="/assets/location.svg"
                  alt="location"
                  width={20}
                />
                <span className="ml-2 text-sm capitalize">
                  {capitalize(location)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },
);

TimeFragment.displayName = "TimeFragment";
export default TimeFragment;
