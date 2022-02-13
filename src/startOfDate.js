export default val => {
  if (!val) return val
  const date = new Date()
  switch (val) {
    case 'day':
    case 'today':
      date.setHours(0, 0, 0, 0)
      return date
    case 'yesterday':
      date.setDate(date.getDate() - 1)
      date.setHours(0, 0, 0, 0)
      return date
    case 'tomorrow':
      date.setDate(date.getDate() + 1)
      date.setHours(0, 0, 0, 0)
      return date
    case 'week':
      const day = new Date(date.setDate(date.getDate() - date.getDay() + 1))
      day.setHours(0, 0, 0, 0)
      return day
    case 'hour':
      date.setHours(date.getHours(), 0, 0, 0)
      return date
    case 'month':
      date.setDate(1)
      date.setHours(0, 0, 0, 0)
      return date
    case 'year':
      return new Date(date.getFullYear(), 0)
    default:
      throw `value (${val}) unknown date string`
  }
}
