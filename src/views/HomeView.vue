<template>
  <div class="container">
    <header>
      <h1>Good {{ formatTimeOfDay() }}, Samantha 🌞</h1>
    </header>

    <nav>
      <SearchCityInput
        :locations="searchedLocations"
        @search-location="searchForLocations"
        @add-location="addLocation" />

      <CityToggleButtons
        :locations="locations"
        :preferredLocationId="preferredLocationId"
        @select-location="setPreferredLocation" />
    </nav>

    <main>
      <CurrentWeather :loading="loadingWeather" :currentWeather="currentWeather" :city="weatherLocation?.city" />

      <div class="forecast">
        <GridHours :loading="loadingWeather" :hourlyWeather="hourlyWeather" :localTime="weatherLocation?.localTime" />

        <GridDays :loading="loadingWeather" :dailyWeather="dailyWeather" :localTime="weatherLocation?.localTime" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { formatTimeOfDay } from "@/utils/format"

import GridDays from '@/components/cards/card-day/GridDays.vue'
import GridHours from '@/components/cards/card-hour/GridHours.vue'
import CurrentWeather from '@/components/cards/card-current/CurrentWeather.vue'

import CityToggleButtons from '@/components/navbar/CityToggleButtons.vue'
import SearchCityInput from '@/components/navbar/SearchCityInput.vue'

import { useWeather } from '@/stores/useWeather'
import { useLocation } from '@/stores/useLocation'

export default defineComponent({
  name: 'HomeView',
  components: {
    GridDays,
    GridHours,
    CurrentWeather,
    CityToggleButtons,
    SearchCityInput
  },
  setup() {
    const weatherStore = useWeather()
    const { loadingWeather, weatherLocation, currentWeather, dailyWeather, hourlyWeather } = storeToRefs(weatherStore)

    const locationStore = useLocation()
    const { preferredLocationId, locations, searchedLocations } = storeToRefs(locationStore)
    const { loadDefaultLocations, setPreferredLocation, searchForLocations, addLocation } = locationStore

    onMounted(async () => {
      loadDefaultLocations()
    })

    return {
      loadingWeather,
      preferredLocationId,
      locations,
      searchedLocations,
      weatherLocation,
      currentWeather,
      dailyWeather,
      hourlyWeather,
      setPreferredLocation,
      searchForLocations,
      addLocation,
      formatTimeOfDay
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 32px;

  header {
    width: 100%;
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  main {
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 28px;

    .forecast {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 72px;
    }
  }

  @include mediaQuery($breakpoint-mobile) {
    gap: 24px;

    nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    main {
      flex-direction: column;
      align-items: flex-start;

      .forecast {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }
    }
  }
}
</style>
@/stores/useWeather
