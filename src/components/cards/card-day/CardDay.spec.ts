import { describe, it, expect, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import CardDay from './CardDay.vue'
import { WEATHER_FORECAST_MOCK } from '@/mocks/weatherMock'
import type { LocationType, WeatherType } from '@/types'
import { formatTemperature, formatWeekday } from '@/utils/format'

const DAILY_WEATHER: WeatherType = WEATHER_FORECAST_MOCK.dailyWeather[0]
const LOCATION: LocationType = WEATHER_FORECAST_MOCK.location

describe('Verify card day elements', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(CardDay, {
      props: {
        localTime: LOCATION.localTime,
        date: DAILY_WEATHER.date,
        code: DAILY_WEATHER.code,
        icon: DAILY_WEATHER.icon,
        condition: DAILY_WEATHER.condition,
        temperature: DAILY_WEATHER.temperature
      }
    })
  })

  it('should return the expected formatted weekday', () => {
    expect(wrapper.find('.weekday').text()).toEqual(formatWeekday(DAILY_WEATHER.date, LOCATION.localTime))
  })

  it('should return the expected condition', () => {
    expect(wrapper.find('.condition').text()).toEqual(DAILY_WEATHER.condition)
  })

  it('should return the expected formatted temperature', () => {
    expect(wrapper.find('.temperature').text()).toEqual(formatTemperature(DAILY_WEATHER.temperature))
  })

  it('should return the expected CDN image', () => {
    expect(wrapper.find('.icon').attributes()['src']).toContain(DAILY_WEATHER.icon)
  })
})
