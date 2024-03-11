import type { Meta, StoryObj } from '@storybook/vue3'
import CardCurrent from './CardCurrent.vue'
import type { LocationType, WeatherType } from '@/types'
import { WEATHER_FORECAST_MOCK } from '@/mocks/weatherMock'

const CURRENT_WEATHER: WeatherType = WEATHER_FORECAST_MOCK.currentWeather
const LOCATION: LocationType = WEATHER_FORECAST_MOCK.location

type StoryArgs = typeof CardCurrent

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  title: 'Cards/Current Weather',
  component: CardCurrent,
  argTypes: {
    city: { control: 'text' },
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
    city: LOCATION.city,
    code: CURRENT_WEATHER.code,
    icon: CURRENT_WEATHER.icon,
    condition: CURRENT_WEATHER.condition,
    temperature: CURRENT_WEATHER.temperature
  }
}
