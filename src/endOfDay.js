export default val => {
  if (val === undefined) val = new Date()
  if (!val) return val
  const day = new Date(val)
  day.setHours(23, 59, 59, 999)
  return day
}
