<template>
  <div
    class="weather-color"
    :class="{
      darken: darken,
      cold: weatherConditionCategory === WeatherConditionCategoryEnum.COLD,
      chilly: weatherConditionCategory === WeatherConditionCategoryEnum.CHILLY,
      warm: weatherConditionCategory === WeatherConditionCategoryEnum.WARM,
      hot: weatherConditionCategory === WeatherConditionCategoryEnum.HOT
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, type ComputedRef, computed } from 'vue'

enum WeatherConditionCategoryEnum {
  COLD,
  CHILLY,
  WARM,
  HOT
}

export default defineComponent({
  name: 'WeatherConditionColor',
  props: {
    darken: Boolean,
    temperature: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const isBetween = (number: number, min: number, max: number) => number >= min && number <= max

    const weatherConditionCategory: ComputedRef<WeatherConditionCategoryEnum> = computed<WeatherConditionCategoryEnum>(
      () => {
        if (props.temperature < 5) {
          return WeatherConditionCategoryEnum.COLD
        }

        if (isBetween(props.temperature, 5, 14)) {
          return WeatherConditionCategoryEnum.CHILLY
        }

        if (isBetween(props.temperature, 15, 25)) {
          return WeatherConditionCategoryEnum.WARM
        }

        return WeatherConditionCategoryEnum.HOT
      }
    )

    return {
      WeatherConditionCategoryEnum,
      weatherConditionCategory
    }
  }
})
</script>

<style lang="scss" scoped>
$darken-percentage: 5%;

.weather-color {
  background-color: $primary-color;

  &.cold {
    // background-color: $weather-cold;
    background-color: $weather-cold;
  }

  &.chilly {
    background-color: $weather-chilly;
  }

  &.warm {
    background-color: $weather-warm;
  }

  &.hot {
    background-color: $weather-hot;
  }

  &.darken {
    &.cold {
      // background-color: $weather-cold;
      background-color: darken($weather-cold, $darken-percentage);
    }

    &.chilly {
      background-color: darken($weather-chilly, $darken-percentage);
    }

    &.warm {
      background-color: darken($weather-warm, $darken-percentage);
    }

    &.hot {
      background-color: darken($weather-hot, $darken-percentage);
    }
  }
}
</style>
