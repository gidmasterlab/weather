import type { WeatherType, LocationType } from '@/types'

/**
 * NOTE
 * The purpose of this bridge is to serve as an intermediary layer between third-party libraries and the application.
 * Here, we convert the API response into the object type utilized within the application, facilitating seamless integration and data consistency.
 */

export const LIMIT_WEATHER_DAYS = 5
export const LIMIT_WEATHER_HOURS = 5

// parse the current weather condition
export const currentWeatherParser = (currentWeather: any): WeatherType => {
  return {
    id: currentWeather.last_updated,
    code: currentWeather.condition.code,
    icon: currentWeather.condition.icon,
    date: convertToDateWithTimeZone(currentWeather.last_updated),
    condition: currentWeather.condition.text,
    temperature: currentWeather.temp_c
  }
}

// parse the weather condition from now to the next days
export const dailyWeatherForecastParser = (dailyWeatherForecast: any[]): WeatherType[] => {
  return dailyWeatherForecast.map((item: any) => {
    return {
      id: item.date,
      code: item.day.condition.code,
      icon: item.day.condition.icon,
      date: convertToDateWithTimeZone(item.date),
      condition: item.day.condition.text,
      temperature: item.day.avgtemp_c
    }
  })
}

// parse the weather condition for all hours of the current or folowwing day
export const hourlyWeatherForecastParser = (dailyWeatherForecast: any[], weatherLocation: any): WeatherType[] => {
  // It cover cases where it's more than 19h, so we need to get time from the following day
  const todayHours = dailyWeatherForecast[0].hour
  const followingDayHours = dailyWeatherForecast[1].hour
  const twoDaysHours = todayHours.concat(followingDayHours)

  // get the current hour based on the location timeZone
  // populate the object only with data that will be used in the application
  const localtime = convertToDateWithTimeZone(weatherLocation.localtime)
  const hourFrom = localtime.getHours()
  const hourTo = hourFrom + LIMIT_WEATHER_HOURS
  const hours = twoDaysHours.slice(hourFrom, hourTo)

  return hours.map((item: any) => {
    return {
      id: item.time,
      code: item.condition.code,
      icon: item.condition.icon,
      date: convertToDateWithTimeZone(item.time),
      condition: item.condition.text,
      temperature: item.temp_c
    }
  })
}

// parse the weather location to be able to use timezone to format data
export const weatherLocationParser = (weatherLocation: any): LocationType => {
  return {
    id: weatherLocation.id,
    country: weatherLocation.country,
    city: weatherLocation.name,
    region: weatherLocation.region,
    localTime: convertToDateWithTimeZone(weatherLocation.localtime)
  }
}

// parse the auto complete locations
export const locationsParser = (locations: any[]): LocationType[] => {
  return locations.map((item: any) => ({
    id: item.id,
    country: item.country,
    city: item.name,
    region: item.region,
    localTime: null
  }))
}

// Convert string data to a Date object while ensuring proper handling of time zones to mitigate issues.
// Adding a specified time zone can help ensure accurate conversion and alleviate potential discrepancies in date representation.
const convertToDateWithTimeZone = (date: string): Date => {
  const [datePart, timePart] = date.split(' ')

  if (!timePart) {
    return new Date(`${datePart}T00:00:00`)
  }

  const [hour, minute] = timePart.split(':')
  const formattedHour = hour.padStart(2, '0')

  return new Date(`${datePart}T${formattedHour}:${minute}`)
}
