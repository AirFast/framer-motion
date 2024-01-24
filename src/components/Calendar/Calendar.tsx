import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  addMonths,
  format,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  subMonths,
} from 'date-fns'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Props, SelectedDates } from './types'
import { days, getMonthDates } from './helpers'

export const Calendar: React.FC<Props> = ({
  selectedDates,
  setSelectedDates,
  defaultRangeDates,
}) => {
  const [baseDate, setBaseDate] = useState<Date | null>(null)
  const dates = getMonthDates(baseDate ?? selectedDates[0])

  const handleSubMonth = () => {
    setBaseDate(subMonths(baseDate ?? selectedDates[0], 1))
  }

  const handleAddMonth = () => {
    setBaseDate(addMonths(baseDate ?? selectedDates[0], 1))
  }

  const handleSetSelectedDates = (date: Date) => {
    if (selectedDates[1] === null) {
      const sortedDates = [selectedDates[0], date].sort(
        (a, b) => a.getTime() - b.getTime(),
      )
      setSelectedDates(sortedDates as SelectedDates)

      return
    }

    setSelectedDates([date, null])
  }

  const handleSetDefaultDates = (value: SelectedDates) => {
    setSelectedDates(value)
  }

  return (
    <div className='flex w-fit rounded-2xl border border-slate-800 px-10 pb-8 pt-10'>
      <div className='flex max-w-sm flex-col gap-6'>
        <div className='mx-3 flex items-center justify-between text-xl font-semibold'>
          <button
            onClick={handleSubMonth}
            className='rounded-full bg-white p-2 transition-all hover:bg-slate-300'
          >
            <ChevronLeftIcon className='h-4 w-4 mix-blend-exclusion' />
          </button>
          <span>{format(baseDate ?? selectedDates[0], 'MMMM yyyy')}</span>
          <button
            onClick={handleAddMonth}
            className='rounded-full bg-white p-2 transition-all hover:bg-slate-300'
          >
            <ChevronRightIcon className='h-4 w-4 mix-blend-exclusion' />
          </button>
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
                onClick={() => handleSetSelectedDates(date)}
                className={`group relative flex h-12 w-12 items-center justify-center outline-none duration-100${
                  !isSameMonth(date, baseDate ?? selectedDates[0]) &&
                  !isSameDay(baseDate ?? selectedDates[0], date) &&
                  !isWithinInterval(date, {
                    start: selectedDates[0],
                    end: selectedDates[1] ?? selectedDates[0],
                  })
                    ? ' text-slate-700 hover:text-slate-500'
                    : ''
                }${
                  !isSameDay(baseDate ?? selectedDates[0], date) &&
                  !isWithinInterval(date, {
                    start: selectedDates[0],
                    end: selectedDates[1] ?? selectedDates[0],
                  })
                    ? ' hover:text-slate-500'
                    : ''
                }`}
              >
                <span className='relative z-10 mix-blend-exclusion'>
                  {format(date, 'dd')}
                </span>
                {(isSameDay(selectedDates[0], date) ||
                  isWithinInterval(date, {
                    start: selectedDates[0],
                    end: selectedDates[1] ?? selectedDates[0],
                  })) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      duration: 0.5,
                    }}
                    className='absolute inset-0 left-0 h-12 w-12 bg-white group-hover:bg-slate-300'
                    style={{
                      borderRadius: 9999,
                    }}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {defaultRangeDates?.length && (
        <ul className='ml-20'>
          {defaultRangeDates.map(({ label, value }) => (
            <li key={label}>
              <button
                onClick={() => handleSetDefaultDates(value)}
                className='relative px-4 py-2 font-semibold uppercase duration-200 hover:text-slate-300'
              >
                <span className='relative z-10 mix-blend-exclusion'>
                  {label}
                </span>
                {selectedDates === value && (
                  <motion.div
                    layoutId='active-default-dates'
                    className='absolute inset-0 bg-white'
                    style={{
                      borderRadius: 9999,
                    }}
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
