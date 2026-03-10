/**
 * @param {Date} date1
 * @param {Date} date2
 */
export function weeksBetween(date1, date2) {
  const msPerWeek = 1000 * 60 * 60 * 24 * 7;

  const date1_ms = date1.getTime();
  const date2_ms = date2.getTime();

  const difference_ms = Math.abs(date2_ms - date1_ms);

  return Math.floor(difference_ms / msPerWeek) + 1;
}

export const FIRST_DAY = new Date(2026, 0, 20);
