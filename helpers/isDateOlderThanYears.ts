export const isDateOlderThanYears = (postDate: string, yearsOlderThan = 10): boolean => {
  return new Date().getFullYear() - new Date(postDate).getFullYear() > yearsOlderThan
}
