import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
export function getLegsData(flight, field, innerField = "", innerField2 = "") {
  let data;
  return flight.legs.map((leg) => {
    if (innerField && innerField2) {
      if (leg[field][innerField] instanceof Array) {
        data = leg[field][innerField][0][innerField2];
      }
    } else if (innerField) {
      data = leg[field][innerField];
    } else data = leg[field];

    return data;
  });
}

export function formatMinutes(totalMinutes) {
  return dayjs
    .duration({
      minutes: totalMinutes,
    })
    .asHours()
    .toFixed(2);
}

export function getDisplayDATime(dateAndTime) {
  return dayjs(dateAndTime).format("LT");
}
