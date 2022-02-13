export default val => {
  if (!val) return val
  const date = new Date()
  switch (val) {
    case 'day':
    case 'today':
      date.setHours(23, 59, 59, 999)
      return date
    case 'yesterday':
      date.setDate(date.getDate() - 1)
      date.setHours(23, 59, 59, 999)
      return date
    case 'tomorrow':
      date.setDate(date.getDate() + 1)
      date.setHours(23, 59, 59, 999)
      return date
    case 'hour':
      date.setHours(date.getHours(), 59, 59, 999)
      return date
    case 'week':
      const week = new Date(date.setDate(date.getDate() - date.getDay() + 6))
      week.setHours(23, 59, 59, 999)
      return week
    case 'month':
      const month = new Date(date.getFullYear(), date.getMonth() + 1, 0)
      month.setHours(23, 59, 59, 999)
      return month
    case 'year':
      return new Date(date.getFullYear(), 11, 31, 23, 59, 59, 999)
    default:
      throw `value (${val}) unknown date string`
  }
}
