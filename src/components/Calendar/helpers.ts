import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns'

export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const getMonthDates = (date: Date) => {
  const startOfMonthDate = startOfMonth(date)
  const endOfMonthDate = endOfMonth(date)
  const startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 1 })
  const endOfWeekDate = endOfWeek(endOfMonthDate, { weekStartsOn: 1 })

  return eachDayOfInterval({
    start: startOfWeekDate,
    end: endOfWeekDate,
  })
}
