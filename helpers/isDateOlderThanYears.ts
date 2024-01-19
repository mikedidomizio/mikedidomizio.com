export const isDateOlderThanYears = (date: string, yearsOlderThan = 10): boolean => {
  return new Date().getFullYear() - new Date(date).getFullYear() > yearsOlderThan
}

export const isDateLessThanDays = (date: string, lessThan = 30): boolean => {
  const oldDate = new Date(date)
  oldDate.setDate(oldDate.getDate() + lessThan)
  return oldDate > new Date()
}
