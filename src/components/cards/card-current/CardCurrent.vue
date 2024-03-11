<template>
  <WeatherConditionColor :temperature="temperature" class="card-current">
    <WeatherConditionColor :darken="true" :temperature="temperature" class="icon-wrapper">
      <WeatherConditionIcon :icon="icon" :code="code" :condition="condition" class="icon" />
    </WeatherConditionColor>

    <div class="forecast">
      <span class="city">
        {{ city }}
      </span>
      <small class="condition">
        {{ condition }}
      </small>
    </div>
    <span class="temperature">
      {{ formatTemperature(temperature, false) }}
    </span>
  </WeatherConditionColor>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatTemperature } from '@/utils/format'
import WeatherConditionColor from '@/components/cards/weather-condition-color/WeatherConditionColor.vue'
import WeatherConditionIcon from '@/components/shared/WeatherConditionIcon.vue'

export default defineComponent({
  name: 'CardCurrent',
  props: {
    city: {
      type: String,
      required: true
    },
    code: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    condition: {
      type: String,
      required: true
    },
    temperature: {
      type: Number,
      required: true
    }
  },
  components: {
    WeatherConditionColor,
    WeatherConditionIcon
  },
  setup() {
    return {
      formatTemperature
    }
  }
})
</script>

<style lang="scss" scoped>
.card-current {
  width: 256px;
  height: 470px;
  padding: 48px;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  .icon-wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      width: 60px;
      height: 60px;
    }
  }

  .forecast {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    .city {
      color: $text-primary-color;
      font-size: 32px;
      line-height: 39px;
      text-align: center;
    }

    .condition {
      color: $text-secondary-color;
      text-align: center;
      text-transform: capitalize;
    }
  }

  .temperature {
    position: relative;
    color: $text-primary-color;
    font-weight: 500;
    font-size: 120px;
    line-height: 108px;
    padding-right: 25px;

    &::after {
      content: '°C';
      position: absolute;
      line-height: 40px;
      font-size: 32px;
    }
  }

  @include mediaQuery($breakpoint-mobile) {
    width: 100%;
    height: 97px;
    padding: 16px;
    border-radius: 20px;

    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;

    .icon-wrapper {
      width: 60px;
      height: 60px;

      .icon {
        width: 36px;
        height: 36px;
      }
    }

    .forecast {
      align-items: flex-start;

      .city {
        color: $text-primary-color;
        font-size: 20px;
        line-height: 24px;
        text-align: left;
      }

      .condition {
        text-align: left;
      }
    }

    .temperature {
      font-size: 52px;
      line-height: 90%;

      &::after {
        font-size: 19px;
        line-height: 120%;
      }
    }
  }
}
</style>
