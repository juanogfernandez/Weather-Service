import moment from "moment-timezone";
import "moment/dist/locale/es";

export function retrieveFormattedDatetime(timezone: string, language: string) {
  moment.locale(language);
  const datetime = moment().tz(timezone);
  let date;
  if (language === "es") {
    date = datetime.format("D MMM").slice(0, -1);
    date = date.split(" ");
    date[1] = date[1].charAt(0).toUpperCase() + date[1].slice(1);
    date = date.join(" ");
  } else {
    date = datetime.format("D MMM");
  }
  return {
    time: datetime.format("HH:mm"),
    date: date,
  };
}
