import { describe, it, expect, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import CardCurrent from './CardCurrent.vue'
import { WEATHER_FORECAST_MOCK } from '@/mocks/weatherMock'
import type { LocationType, WeatherType } from '@/types'
import { formatTemperature } from '@/utils/format'

const CURRENT_WEATHER: WeatherType = WEATHER_FORECAST_MOCK.currentWeather
const LOCATION: LocationType = WEATHER_FORECAST_MOCK.location

describe('Verify card current elements', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(CardCurrent, {
      props: {
        city: LOCATION.city,
        code: CURRENT_WEATHER.code,
        icon: CURRENT_WEATHER.icon,
        condition: CURRENT_WEATHER.condition,
        temperature: CURRENT_WEATHER.temperature
      }
    })
  })

  it('should return the expected city', () => {
    expect(wrapper.find('.city').text()).toEqual(LOCATION.city)
  })

  it('should return the expected formatted condition', () => {
    expect(wrapper.find('.condition').text()).toEqual(CURRENT_WEATHER.condition)
  })

  it('should return the expected formatted temperature', () => {
    expect(wrapper.find('.temperature').text()).toEqual(formatTemperature(CURRENT_WEATHER.temperature, false))
  })

  it('should return the expected CDN image', () => {
    expect(wrapper.find('.icon').attributes()['src']).toContain(CURRENT_WEATHER.icon)
  })
})
