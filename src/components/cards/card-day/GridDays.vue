<template>
  <div class="grid-days">
    <SuspenseLoading :loading="loading">
      <template #fallback>
        <CardDaySkeleton v-for="index in 5" :key="index" />
      </template>

      <template #children>
        <CardDay
          v-for="weather in dailyWeather"
          :key="weather.id"
          :localTime="localTime"
          :date="weather.date"
          :code="weather.code"
          :icon="weather.icon"
          :condition="weather.condition"
          :temperature="weather.temperature" />
      </template>
    </SuspenseLoading>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { WeatherType } from '@/types'

import SuspenseLoading from '@/components/shared/SuspenseLoading.vue'
import CardDay from './CardDay.vue'
import CardDaySkeleton from './CardDaySkeleton.vue'

export default defineComponent({
  name: 'GridDays',
  props: {
    loading: Boolean,
    dailyWeather: Array as PropType<WeatherType[]>,
    localTime: Date
  },
  components: {
    SuspenseLoading,
    CardDay,
    CardDaySkeleton
  }
})
</script>

<style lang="scss" scoped>
.grid-days {
  width: 100%;
  display: flex;
  gap: 24px;

  @include mediaQuery($breakpoint-mobile) {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
