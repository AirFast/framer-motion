import { useState } from 'react'
import { motion } from 'framer-motion'

import { Section } from '../components'
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const CalendarPage = () => {
  const getCurrentMonthDates = () => {
    const today = new Date()
    const startOfMonthDate = startOfMonth(today)
    const endOfMonthDate = endOfMonth(today)
    const startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 1 })
    const endOfWeekDate = endOfWeek(endOfMonthDate, { weekStartsOn: 1 })

    const dates = eachDayOfInterval({
      start: startOfWeekDate,
      end: endOfWeekDate,
    })

    return { today, dates }
  }

  const { today, dates } = getCurrentMonthDates()

  const [selected, setSelected] = useState(today)

  return (
    <Section>
      <h1 className='text-4xl font-medium'>Calendar</h1>
      <div className='flex max-w-sm flex-col gap-6'>
        <div className='flex justify-between text-xl font-semibold'>
          <span>{format(today, 'MMMM')}</span>
          <span>{format(today, 'MMMM yyyy')}</span>
        </div>
        <div className='grid grid-cols-7 gap-2 font-medium'>
          {days.map((day) => (
            <div
              key={day}
              className='flex h-12 w-12 items-center justify-center text-lg'
            >
              {day}
            </div>
          ))}
          {dates.map((date, i) => (
            <div key={i} className='w-full'>
              <button
                onClick={() => setSelected(date)}
                className={`relative flex h-12 w-12 items-center justify-center duration-100${
                  !isSameMonth(date, today) && !isSameDay(selected, date)
                    ? ' text-slate-700 hover:text-slate-500'
                    : ''
                }${
                  isSameDay(selected, date)
                    ? ' cursor-default'
                    : ' hover:text-slate-500'
                }`}
              >
                <span className='relative z-10 mix-blend-exclusion'>
                  {format(date, 'dd')}
                </span>
                {isSameDay(selected, date) && (
                  <motion.div
                    layoutId='active-d-item'
                    className='absolute inset-0 left-0 h-12 w-12 bg-white'
                    style={{
                      borderRadius: 9999,
                    }}
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default CalendarPage
