import {
  eachDayOfInterval,
  endOfMonth,
  endOfQuarter,
  endOfWeek,
  endOfYear,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
  subMonths,
  subQuarters,
  subWeeks,
  subYears,
} from 'date-fns'
import { DefaultRangeDate } from './types'

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

export const defaultRangeDates: DefaultRangeDate[] = [
  {
    label: 'Current week',
    value: [
      startOfWeek(new Date(), { weekStartsOn: 1 }),
      endOfWeek(new Date(), { weekStartsOn: 1 }),
    ],
  },
  {
    label: 'Last week',
    value: [
      startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
      endOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
    ],
  },
  {
    label: 'Current month',
    value: [startOfMonth(new Date()), endOfMonth(new Date())],
  },
  {
    label: 'Last month',
    value: [
      startOfMonth(subMonths(new Date(), 1)),
      endOfMonth(subMonths(new Date(), 1)),
    ],
  },
  {
    label: 'Current quarter',
    value: [startOfQuarter(new Date()), endOfQuarter(new Date())],
  },
  {
    label: 'Last quarter',
    value: [
      startOfQuarter(subQuarters(new Date(), 1)),
      endOfQuarter(subQuarters(new Date(), 1)),
    ],
  },
  {
    label: 'Current year',
    value: [startOfYear(new Date()), endOfYear(new Date())],
  },
  {
    label: 'Last year',
    value: [
      startOfYear(subYears(new Date(), 1)),
      endOfYear(subYears(new Date(), 1)),
    ],
  },
]
