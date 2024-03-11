import type { WeatherForecastType } from '@/types'

export const WEATHER_FORECAST_MOCK: WeatherForecastType = {
  location: {
    id: null,
    country: 'United States of America',
    city: 'Denver',
    region: 'Colorado',
    localTime: new Date('2024-03-09T00:55:00.000Z')
  },
  currentWeather: {
    id: '2024-03-09T00:45:00.000Z',
    code: 1003,
    icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
    date: new Date('2024-03-09T00:45:00.000Z'),
    condition: 'Partly cloudy',
    temperature: -3.5
  },
  dailyWeather: [
    {
      id: '2024-03-09T00:55:00.000Z',
      code: 1213,
      icon: '//cdn.weatherapi.com/weather/64x64/day/326.png',
      date: new Date('2024-03-08T00:00:00.000Z'),
      condition: 'Light snow',
      temperature: -0.5
    },
    {
      id: '2024-03-09T00:00:00.000Z',
      code: 1000,
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      date: new Date('2024-03-09T00:00:00.000Z'),
      condition: 'Sunny',
      temperature: 4.6
    },
    {
      id: '2024-03-10T00:00:00.000Z',
      code: 1000,
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      date: new Date('2024-03-10T00:00:00.000Z'),
      condition: 'Sunny',
      temperature: 8.2
    },
    {
      id: '2024-03-11T00:00:00.000Z',
      code: 1063,
      icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
      date: new Date('2024-03-11T00:00:00.000Z'),
      condition: 'Patchy rain nearby',
      temperature: 10.4
    },
    {
      id: '2024-03-12T00:00:00.000Z',
      code: 1063,
      icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
      date: new Date('2024-03-12T00:00:00.000Z'),
      condition: 'Patchy rain nearby',
      temperature: 9.7
    }
  ],
  hourlyWeather: [
    {
      id: '2024-03-09T00:00:00.000Z',
      code: 1003,
      icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
      date: new Date('2024-03-09T00:00:00.000Z'),
      condition: 'Partly cloudy',
      temperature: -3.5
    },
    {
      id: '2024-03-09T01:00:00.000Z',
      code: 1000,
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
      date: new Date('2024-03-09T01:00:00.000Z'),
      condition: 'Clear ',
      temperature: 0.3
    },
    {
      id: '2024-03-09T02:00:00.000Z',
      code: 1000,
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
      date: new Date('2024-03-09T02:00:00.000Z'),
      condition: 'Clear ',
      temperature: 0
    },
    {
      id: '2024-03-09T03:00:00.000Z',
      code: 1000,
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
      date: new Date('2024-03-09T03:00:00.000Z'),
      condition: 'Clear ',
      temperature: -0.3
    },
    {
      id: '2024-03-09T04:00:00.000Z',
      code: 1000,
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
      date: new Date('2024-03-09T04:00:00.000Z'),
      condition: 'Clear ',
      temperature: -0.6
    }
  ]
}
