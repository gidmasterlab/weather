<template>
  <WeatherConditionColor :temperature="temperature" class="card-day">
    <WeatherConditionIcon :icon="icon" :code="code" :condition="condition" class="icon" />
    <div class="forecast">
      <span class="weekday">
        {{ formatWeekday(date, localTime) }}
      </span>
      <small class="condition">
        {{ condition }}
      </small>
    </div>
    <span class="temperature">
      {{ formatTemperature(temperature) }}
    </span>
  </WeatherConditionColor>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatTemperature, formatWeekday } from '@/utils/format'
import WeatherConditionColor from '@/components/cards/weather-condition-color/WeatherConditionColor.vue'
import WeatherConditionIcon from '@/components/shared/WeatherConditionIcon.vue'

export default defineComponent({
  name: 'CardDay',
  props: {
    localTime: {
      type: Date,
      required: true
    },
    date: {
      type: Date,
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
      formatTemperature,
      formatWeekday
    }
  }
})
</script>

<style lang="scss" scoped>
.card-day {
  width: 144px;
  height: 188px;
  padding: 15px 32px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // gap: 24px;

  .icon {
    width: 48px;
    height: 48px;
  }

  .forecast {
    margin-top: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .weekday {
      color: $text-primary-color;
    }

    .condition {
      color: $text-secondary-color;
      text-transform: capitalize;
      text-align: center;
    }
  }

  .temperature {
    color: $text-primary-color;
  }

  @include mediaQuery($breakpoint-mobile) {
    width: 100%;
    height: 72px;
    padding: 12px 16px;
    border-radius: 10px;

    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;

    .forecast {
      margin: unset;
      flex: 1;
      align-items: flex-start;
    }
  }
}
</style>
