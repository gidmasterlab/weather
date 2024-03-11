export type LocationType = {
  id: number
  country: string
  city: string
  region: string
  localTime?: Date
}

export type WeatherType = {
  id: string
  code: number
  icon: string
  date: Date
  condition: string
  temperature: number
}

export type WeatherForecastType = {
  location: LocationType
  currentWeather: WeatherType
  dailyWeather: WeatherType[]
  hourlyWeather: WeatherType[]
}
