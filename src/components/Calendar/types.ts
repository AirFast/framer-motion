export type SelectedDates = [Date, Date | null]

export type Props = {
  selectedDates: SelectedDates
  setSelectedDates: React.Dispatch<React.SetStateAction<SelectedDates>>
}
