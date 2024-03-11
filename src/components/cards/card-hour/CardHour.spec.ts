import { describe, it, expect, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import CardHour from './CardHour.vue'
import { WEATHER_FORECAST_MOCK } from '@/mocks/weatherMock'
import type { LocationType, WeatherType } from '@/types'
import { formatTemperature, formatTime } from '@/utils/format'

const HOURLY_WEATHER_NOW: WeatherType = WEATHER_FORECAST_MOCK.hourlyWeather[0]
const LOCATION: LocationType = WEATHER_FORECAST_MOCK.location

describe('Verify card hour elements', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(CardHour, {
      props: {
        localTime: LOCATION.localTime,
        date: HOURLY_WEATHER_NOW.date,
        code: HOURLY_WEATHER_NOW.code,
        icon: HOURLY_WEATHER_NOW.icon,
        condition: HOURLY_WEATHER_NOW.condition,
        temperature: HOURLY_WEATHER_NOW.temperature
      }
    })
  })

  it('should return the expected formatted hour', () => {
    expect(wrapper.find('.time').text()).toEqual(formatTime(HOURLY_WEATHER_NOW.date, LOCATION.localTime))
  })

  it('should return the expected formatted temperature', () => {
    expect(wrapper.find('.temperature').text()).toEqual(formatTemperature(HOURLY_WEATHER_NOW.temperature))
  })

  it('should return the expected CDN image', () => {
    expect(wrapper.find('.icon').attributes()['src']).toContain(HOURLY_WEATHER_NOW.icon)
  })
})
