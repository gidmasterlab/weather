<template>
  <div class="grid-hours">
    <SuspenseLoading :loading="loading">
      <template #fallback>
        <CardHourSkeleton v-for="index in 5" :key="index" />
      </template>

      <template #children>
        <CardHour
          v-for="weather in hourlyWeather"
          :key="weather.id"
          :localTime="localTime"
          :date="weather.date"
          :code="weather.code"
          :icon="weather.icon"
          :condition="weather.condition"
          :temperature="weather.temperature"
        />
      </template>
    </SuspenseLoading>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { WeatherType } from '@/types'

import SuspenseLoading from '@/components/shared/SuspenseLoading.vue'
import CardHour from './CardHour.vue'
import CardHourSkeleton from './CardHourSkeleton.vue'

export default defineComponent({
  name: 'GridHours',
  props: {
    loading: Boolean,
    hourlyWeather: Array as PropType<WeatherType[]>,
    localTime: Date
  },
  components: {
    SuspenseLoading,
    CardHour,
    CardHourSkeleton
  }
})
</script>

<style lang="scss" scoped>
.grid-hours {
  width: 100%;
  display: flex;
  gap: 24px;

  @include mediaQuery($breakpoint-mobile) {
    width: 100vw;
    padding: 0 $h-margin-mobile;
    margin-left: calc($h-margin-mobile * -1);
    overflow-x: auto;
    gap: 16px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
