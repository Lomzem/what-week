/**
 * @param {Date} date1
 * @param {Date} date2
 */
export function getWeekNumber(date1, date2) {
  const msPerDay = 1000 * 60 * 60 * 24;

  const getSunday = (d) => {
    const day = d.getDay();
    const sunday = new Date(d);
    sunday.setDate(d.getDate() - day);
    sunday.setHours(0, 0, 0, 0);
    return sunday;
  };

  const sunday1 = getSunday(date1);
  const sunday2 = getSunday(date2);

  const daysBetween = Math.floor(
    (sunday2.getTime() - sunday1.getTime()) / msPerDay,
  );

  return Math.floor(daysBetween / 7) + 1;
}

export const FIRST_DAY = new Date(2026, 0, 20);
