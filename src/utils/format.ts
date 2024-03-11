const locale = navigator?.language || 'en-CA'

export const formatTemperature = (value: number, symbol = true): string => {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }

  if (symbol) {
    options.style = 'unit'
    options.unit = 'celsius'
  }

  const formatter = new Intl.NumberFormat(locale, options)
  return formatter.format(value)
}

export const formatWeekday = (date: Date, localTime: Date): string => {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: 'long'
  })

  const tomorrow = new Date(localTime)
  tomorrow.setDate(tomorrow.getDate() + 1)

  if (date.getDay() === localTime.getDay()) {
    return 'Today'
  }

  if (date.getDay() === tomorrow.getDay()) {
    return 'Tomorrow'
  }

  return formatter.format(date)
}

export const formatTime = (dateTime: Date, localTime: Date): string => {
  const localHour = localTime.getHours()
  const dateHour = dateTime.getHours()

  if (localHour == dateHour) {
    return 'now'
  }

  const formatter = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    hour12: true
  })
  return formatter.format(dateTime)
}

export const formatTimeOfDay = (date: Date = new Date()): string => {
  const now = date.getHours()

  if (now < 12) {
    return 'morning'
  }

  if (now < 18) {
    return 'afternoon'
  }

  return 'evening'
}
