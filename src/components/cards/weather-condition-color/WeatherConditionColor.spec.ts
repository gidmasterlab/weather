import { describe, it, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import WeatherConditionColor from './WeatherConditionColor.vue'

const getMountedComponent = (temperature: number): VueWrapper => {
  return mount(WeatherConditionColor, {
    props: {
      temperature: temperature
    }
  })
}

describe('Verify weather condition color elements', () => {
  it('should return the weather condition cold', () => {
    const wrapper = getMountedComponent(4)
    expect(wrapper.find('.weather-color').classes()).toContain('cold')
  })

  it('should return the weather condition chilly', () => {
    const wrapper = getMountedComponent(10)
    expect(wrapper.find('.weather-color').classes()).toContain('chilly')
  })

  it('should return the weather condition warm', () => {
    const wrapper = getMountedComponent(20)
    expect(wrapper.find('.weather-color').classes()).toContain('warm')
  })

  it('should return the weather condition hot', () => {
    const wrapper = getMountedComponent(40)
    expect(wrapper.find('.weather-color').classes()).toContain('hot')
  })
})
