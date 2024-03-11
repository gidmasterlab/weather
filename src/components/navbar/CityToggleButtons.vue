<template>
  <ul class="city-toggle-buttons">
    <li v-for="location in locations" :key="location.id">
      <button
        class="button"
        :class="{ selected: preferredLocationId === location.id }"
        :disabled="preferredLocationId === location.id"
        @click="selectLocation(location.id)">
        {{ location.city }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { LocationType } from '@/types'

export default defineComponent({
  name: 'CityToggleButtons',
  props: {
    locations: {
      type: Array as PropType<LocationType[]>,
      required: true
    },
    preferredLocationId: Number
  },
  emits: ['select-location'],
  setup(props, { emit }) {
    const selectLocation = (id: number) => {
      emit('select-location', id)
    }

    return {
      selectLocation
    }
  }
})
</script>

<style lang="scss" scoped>
.city-toggle-buttons {
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    .button {
      border: 0;
      background-color: transparent;
      cursor: pointer;

      padding: 8px 24px;
      border-radius: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: $text-primary-color;
      white-space: nowrap;

      &:hover {
        background-color: $primary-color;
      }

      &.selected {
        background-color: $primary-color;
      }

      &:disabled {
        cursor: default;
      }
    }
  }

  @include mediaQuery($breakpoint-mobile) {
    flex-wrap: nowrap;
    width: 100vw;
    padding: 0 $h-margin-mobile;
    margin-left: calc($h-margin-mobile * -1);
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
