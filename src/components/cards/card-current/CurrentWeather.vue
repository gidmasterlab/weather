<template>
  <div class="current-weather">
    <SuspenseLoading :loading="loading">
      <template #fallback>
        <CardCurrentSkeleton />
      </template>

      <template #children>
        <CardCurrent
          :city="city"
          :code="currentWeather.code"
          :icon="currentWeather.icon"
          :condition="currentWeather.condition"
          :temperature="currentWeather.temperature"
        />
      </template>
    </SuspenseLoading>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { WeatherType } from '@/types'

import SuspenseLoading from '@/components/shared/SuspenseLoading.vue'
import CardCurrent from './CardCurrent.vue'
import CardCurrentSkeleton from './CardCurrentSkeleton.vue'

export default defineComponent({
  name: 'CurrentWeather',
  props: {
    loading: Boolean,
    currentWeather: Object as PropType<WeatherType>,
    city: String
  },
  components: {
    SuspenseLoading,
    CardCurrent,
    CardCurrentSkeleton
  }
})
</script>

<style lang="scss" scoped>
.current-weather {
  width: 100%;
}
</style>
