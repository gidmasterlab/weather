import httpClient from './httpClient'
import type { WeatherType, WeatherForecastType, LocationType } from '@/types'
import {
  LIMIT_WEATHER_DAYS,
  weatherLocationParser,
  currentWeatherParser,
  dailyWeatherForecastParser,
  hourlyWeatherForecastParser
} from './weatherApiBridge'

/**
 * https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7
 *
 * When fetching this API, we can retrieve both the current weather conditions and the forecast for the upcoming days.
 * It's unnecessary to fetch real-time isolated data for this purpose.
 *
 * During the API response parsing, I cover situations where the local time (based on the location's timeZone) is greater than 19:00.
 * In such scenarios, we retrieve weather conditions from the following day.
 * To fulfill the application's requirements, I load data for only the next five days and the next five hours of the current day and locate time.
 */

export const fetchWeatherForecast = async (city: string): Promise<WeatherForecastType> => {
  const response: any = await httpClient.get('/forecast', {
    params: { q: city, days: LIMIT_WEATHER_DAYS }
  })

  const location: LocationType = weatherLocationParser(response.location)
  const currentWeather: WeatherType = currentWeatherParser(response.current)
  const dailyWeather: WeatherType[] = dailyWeatherForecastParser(response.forecast.forecastday)
  const hourlyWeather: WeatherType[] = hourlyWeatherForecastParser(response.forecast.forecastday, response.location)

  return {
    location,
    currentWeather,
    dailyWeather,
    hourlyWeather
  }
}
