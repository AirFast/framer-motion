export type SelectedDates = [Date, Date | null]

export type DefaultRangeDate = {
  label: string
  value: SelectedDates
}

export type Props = {
  selectedDates: SelectedDates
  setSelectedDates: React.Dispatch<React.SetStateAction<SelectedDates>>
  defaultRangeDates?: DefaultRangeDate[]
}
