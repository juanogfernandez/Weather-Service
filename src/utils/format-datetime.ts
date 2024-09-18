import { toZonedTime, format } from "date-fns-tz";
import { enUS, es } from "date-fns/locale";
import { capitalize } from "@/utils/capitalize";

/*
Esta función devuelve el fecha y hora en el formato adecuado según el idioma y la zona horaria.
Se utilizó primeramente la librería moment.js pero era pesada para el build sumado a que importaba la información de todos los timezones, a pesar de querer importar únicamente los necesarios.
 */

const localesFromLanguage = {
  en: enUS,
  es: es,
};

type LocaleType = keyof typeof localesFromLanguage;

export function retrieveFormattedDatetime(
  timezone: string,
  language: LocaleType,
) {
  const date = new Date();
  const zonedDate = toZonedTime(date, timezone);
  let formattedDate = format(zonedDate, "d MMM", {
    locale: localesFromLanguage[language],
  });
  // Según la mayoría de las librerías, el formato de fecha para el timezone de Argentina es sin mayúscula.
  // Se agrega mayúscula al mes, solo con fines estéticos.
  if (language === "es") {
    const esFormattedDate = formattedDate.split(" ");
    esFormattedDate[1] = capitalize(esFormattedDate[1]);
    formattedDate = esFormattedDate.join(" ");
  }
  return {
    time: format(zonedDate, "HH:mm", {
      locale: localesFromLanguage[language],
    }),
    date: formattedDate,
  };
}
