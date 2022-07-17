const DateToString = date => {
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1 > 9 ? "" : "0") + (date.getMonth()).toString()
  const dayOfMonth = (date.getDate() > 9 ? "" : "0") + date.getDate().toString()

  return `${year}-${month}-${dayOfMonth}`
}

export default DateToString