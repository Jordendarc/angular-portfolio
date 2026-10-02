import { Timestamp } from 'firebase/firestore'

export type DateValue = string | number | Timestamp

const monthYear = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' })

// Date-only strings ("2020", "2020-03", "2020-03-01") are read as local time, the way
// Angular's DatePipe did; `new Date()` would treat them as UTC and can land in the previous month.
const DATE_ONLY = /^(\d{4})(?:-(\d{1,2})(?:-(\d{1,2}))?)?$/

function toDate(value: DateValue): Date {
  if (value instanceof Timestamp) return value.toDate()
  if (typeof value === 'string') {
    const match = DATE_ONLY.exec(value.trim())
    if (match) {
      const [, year, month = '1', day = '1'] = match
      return new Date(Number(year), Number(month) - 1, Number(day))
    }
  }
  return new Date(value)
}

// "March 2021" — same output as Angular's `date:'MMMM y'`
export function formatMonthYear(value: DateValue): string {
  const date = toDate(value)
  return Number.isNaN(date.getTime()) ? String(value) : monthYear.format(date)
}
