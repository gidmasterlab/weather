import { ref, type Ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { WeatherType, WeatherForecastType, LocationType } from '@/types'
import { fetchWeatherForecast } from '@/services/weather'

export const useWeather = defineStore('weather', () => {
  const loadingWeather: Ref<boolean> = ref<boolean>(true)
  const weatherLocation: Ref<LocationType> = ref<LocationType>(null)
  const currentWeather: Ref<WeatherType> = ref<WeatherType>(null)
  const dailyWeather: Ref<WeatherType[]> = ref<WeatherType[]>(null)
  const hourlyWeather: Ref<WeatherType[]> = ref<WeatherType[]>(null)

  async function loadWeatherForecast(city: string) {
    loadingWeather.value = true

    const response: WeatherForecastType = await fetchWeatherForecast(city)

    weatherLocation.value = response.location
    currentWeather.value = response.currentWeather
    dailyWeather.value = response.dailyWeather
    hourlyWeather.value = response.hourlyWeather

    loadingWeather.value = false
  }

  return {
    loadingWeather,
    weatherLocation,
    currentWeather,
    dailyWeather,
    hourlyWeather,
    loadWeatherForecast
  }
})

// Enable hot module
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeather, import.meta.hot))
}
