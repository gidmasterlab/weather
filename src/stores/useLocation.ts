import { ref, type Ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { LocationType } from '@/types'
import { fetchDefaultLocations, fetchLocations } from '@/services/location'
import { useWeather } from './useWeather'

export const useLocation = defineStore('location', () => {
  const weatherStore = useWeather()

  const preferredLocationId: Ref<number> = ref<number>(null)
  const locations: Ref<LocationType[]> = ref<LocationType[]>([])
  const searchedLocations: Ref<LocationType[]> = ref<LocationType[]>([])

  async function searchForLocations(searchKeyWord: string) {
    if (!searchKeyWord || searchKeyWord.length < 3) {
      searchedLocations.value = []
      return
    }

    const response: LocationType[] = await fetchLocations(searchKeyWord)
    const locationsIds: number[] = locations.value.map((item) => item.id)
    searchedLocations.value = response.filter((item) => !locationsIds.includes(item.id))
  }

  async function addLocation(location: LocationType) {
    locations.value = [...locations.value, location]
    setPreferredLocation(location.id)
  }

  async function loadDefaultLocations() {
    const response: LocationType[] = fetchDefaultLocations()

    locations.value = response
    setPreferredLocation(response[0].id)
  }

  function setPreferredLocation(locationId: number) {
    preferredLocationId.value = locationId

    const city: string = locations.value.find((item) => item.id === locationId).city
    weatherStore.loadWeatherForecast(city)
  }

  return {
    locations,
    preferredLocationId,
    searchedLocations,
    setPreferredLocation,
    searchForLocations,
    addLocation,
    loadDefaultLocations
  }
})

// Enable hot module
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocation, import.meta.hot))
}
