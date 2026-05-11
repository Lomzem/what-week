function getSunday(d: Date) {
  const day = d.getDay()
  const sunday = new Date(d)
  sunday.setDate(d.getDate() - day)
  sunday.setHours(0, 0, 0, 0)
  return sunday
}

export function getWeekNumber(start: Date, current: Date) {
  const msPerDay = 1000 * 60 * 60 * 24

  const sunday_start = getSunday(start)
  const sunday_curr = getSunday(current)

  const daysBetween =
    (sunday_curr.getTime() - sunday_start.getTime()) / msPerDay - sunday_curr.getDay()

  return Math.ceil(daysBetween / 7) + 1
}
