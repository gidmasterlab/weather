<template>
  <div ref="searchRef" class="search-city-input">
    <div class="input-wrapper">
      <input
        placeholder="Search for a location..."
        class="input"
        type="text"
        v-model="searchTerm"
        @input="handleSearch" />
      <button class="clear" @click="clearSearchTem" v-if="searchTerm">&times;</button>
    </div>
    <ul class="result-list" v-if="locations?.length > 0">
      <li v-for="location in locations" :key="location.id">
        <button class="item" @click="handleAddLocation(location)">{{ location.city }} ({{ location.country }})</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import type { LocationType } from '@/types'
import { defineComponent, ref, type InputHTMLAttributes, type PropType, onMounted, onUnmounted, type Ref } from 'vue'

export default defineComponent({
  name: 'SearchCityInput',
  props: {
    locations: Array as PropType<LocationType[]>
  },
  emits: ['search-location', 'add-location'],
  setup(props, { emit }) {
    const searchRef: Ref<HTMLDivElement> = ref<HTMLDivElement>(null)
    const searchTerm: Ref<string> = ref<string>(null)

    const handleSearch = (event: Event) => {
      const target: InputHTMLAttributes = event.target as InputHTMLAttributes
      emit('search-location', target.value)
    }

    const handleAddLocation = (location: LocationType) => {
      emit('add-location', location)
      clearSearchTem()
    }

    const handleClickOutside = (event: Event) => {
      const target: HTMLElement = event.target as HTMLElement
      if (searchRef.value && !searchRef.value.contains(target)) {
        emit('search-location', null)
        clearSearchTem()
      }
    }

    const clearSearchTem = () => {
      searchTerm.value = null
      emit('search-location', null)
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      searchRef,
      searchTerm,
      handleSearch,
      handleAddLocation,
      clearSearchTem
    }
  }
})
</script>

<style lang="scss" scoped>
.search-city-input {
  position: relative;
  width: 400px;

  .input-wrapper {
    position: relative;
    width: 100%;
    height: 46px;
    border: 1px solid $divider-color;
    border-radius: 5px;

    .input {
      width: 100%;
      height: 100%;
      border: 0;
      background-color: transparent;
      padding: 5px 40px 5px 20px;
    }

    .clear {
      cursor: pointer;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      border: 0;
      background-color: transparent;
      color: $text-secondary-color;
    }
  }

  .result-list {
    position: absolute;
    width: 100%;
    background-color: $neutral-color;
    border: 1px solid $divider-color;
    z-index: 1;

    list-style: none;
    border-top: none;

    li {
      .item {
        cursor: pointer;
        border: 0;
        background-color: transparent;

        height: 100%;
        width: 100%;
        padding: 10px 20px;

        text-align: left;
        color: $text-primary-color;
      }

      &:not(:last-child) {
        border-bottom: 1px solid $divider-color;
      }

      &:hover {
        background-color: $primary-color;
      }
    }
  }

  @include mediaQuery($breakpoint-mobile) {
    width: 100%;
  }
}
</style>
