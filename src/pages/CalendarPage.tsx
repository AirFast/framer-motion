import { useState } from 'react'
import { Calendar, Section, SelectedDates } from '../components'

const CalendarPage = () => {
  const [selectedDates, setSelectedDates] = useState<SelectedDates>([
    new Date(),
    null,
  ])

  return (
    <Section>
      <h1 className='text-4xl font-medium'>Calendar</h1>
      <Calendar
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
      />
    </Section>
  )
}

export default CalendarPage
