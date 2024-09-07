import moment from "moment-timezone";

export function retrieveFormattedDatetime(timezone: string) {
  const datetime = moment().tz(timezone);
  return {
    time: datetime.format("HH:mm"),
    date: datetime.format("ddd, MMM D"),
  };
}
