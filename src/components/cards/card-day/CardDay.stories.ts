import type { Meta, StoryObj } from '@storybook/vue3'
import CardDay from './CardDay.vue'
import { WEATHER_FORECAST_MOCK } from '@/mocks/weatherMock'
import type { LocationType, WeatherType } from '@/types'

const DAILY_WEATHER: WeatherType = WEATHER_FORECAST_MOCK.dailyWeather[0]
const LOCATION: LocationType = WEATHER_FORECAST_MOCK.location

type StoryArgs = typeof CardDay

const getDatesFromSundayToMonday = () => {
  const today = new Date()
  const sunday = new Date(today)

  sunday.setDate(today.getDate() - today.getDay())

  const dates = []
  for (let i = 0; i < 7; i++) {
    const date = new Date(sunday)
    date.setDate(sunday.getDate() + i)
    dates.push(date)
  }

  return dates
}

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  title: 'Cards/Daily Weather',
  component: CardDay,
  argTypes: {
    localTime: { table: { disable: true } },
    date: { control: 'select', options: getDatesFromSundayToMonday() },
    code: { control: 'number' },
    icon: { control: 'text' },
    condition: { control: 'text' },
    temperature: { control: 'number' }
  }
}

export default meta
type Story = StoryObj<StoryArgs>

export const Default: Story = {
  args: {
    localTime: LOCATION.localTime,
    date: DAILY_WEATHER.date,
    code: DAILY_WEATHER.code,
    icon: DAILY_WEATHER.icon,
    condition: DAILY_WEATHER.condition,
    temperature: DAILY_WEATHER.temperature
  }
}
