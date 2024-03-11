import type { Meta, StoryObj } from '@storybook/vue3'
import CardHour from './CardHour.vue'
import { WEATHER_FORECAST_MOCK } from '@/mocks/weatherMock'
import type { LocationType, WeatherType } from '@/types'

const HOURLY_WEATHER_NOW: WeatherType = WEATHER_FORECAST_MOCK.hourlyWeather[0]
const HOURLY_WEATHER_NEXT_HOUR: WeatherType = WEATHER_FORECAST_MOCK.hourlyWeather[1]
const LOCATION: LocationType = WEATHER_FORECAST_MOCK.location

type StoryArgs = typeof CardHour

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  title: 'Cards/Horly Weather',
  component: CardHour,
  argTypes: {
    localTime: { table: { disable: true } },
    date: { control: 'select', options: [HOURLY_WEATHER_NOW.date, HOURLY_WEATHER_NEXT_HOUR.date] },
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
    date: new Date(HOURLY_WEATHER_NOW.date),
    code: HOURLY_WEATHER_NOW.code,
    icon: HOURLY_WEATHER_NOW.icon,
    condition: HOURLY_WEATHER_NOW.condition,
    temperature: HOURLY_WEATHER_NOW.temperature
  }
}
