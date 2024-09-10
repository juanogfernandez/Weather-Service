import { toZonedTime, format } from "date-fns-tz";
import { enUS, es } from "date-fns/locale";

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
  if (language === "es") {
    const esFormattedDate = formattedDate.split(" ");
    esFormattedDate[1] =
      esFormattedDate[1].charAt(0).toUpperCase() + esFormattedDate[1].slice(1);
    formattedDate = esFormattedDate.join(" ");
  }
  return {
    time: format(zonedDate, "HH:mm", {
      locale: localesFromLanguage[language],
    }),
    date: formattedDate,
  };
}
