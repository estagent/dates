export default val => {
  if (val === undefined) val = new Date()
  if (!val) return val
  const day = new Date(val)
  day.setHours(0, 0, 0, 0)
  return day
}
