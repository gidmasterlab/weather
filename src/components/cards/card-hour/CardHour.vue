<template>
  <div class="card-hour">
    <span class="time">
      {{ formatTime(date, localTime) }}
    </span>

    <WeatherConditionColor :temperature="temperature" class="icon-wrapper">
      <WeatherConditionIcon :icon="icon" :code="code" :condition="condition" class="icon" />
    </WeatherConditionColor>

    <span class="temperature">
      {{ formatTemperature(temperature) }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatTemperature, formatTime } from '@/utils/format'
import WeatherConditionColor from '@/components/cards/weather-condition-color/WeatherConditionColor.vue'
import WeatherConditionIcon from '@/components/shared/WeatherConditionIcon.vue'

export default defineComponent({
  name: 'CardHour',
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
      formatTime
    }
  }
})
</script>

<style lang="scss" scoped>
.card-hour {
  width: 144px;
  height: 172px;
  padding: 0 22px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      width: 48px;
      height: 48px;
    }
  }

  .time {
    color: $text-secondary-color;
    text-transform: capitalize;
  }

  .temperature {
    color: $text-primary-color;
  }
}
</style>
