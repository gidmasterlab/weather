<template>
  <div class="container">
    <header>
      <h1 class="title">Error {{ error }}</h1>
    </header>

    <main>
      <p class="text" v-if="error === 404">We're sorry, but the page you are looking for could not be found.</p>

      <p class="text" v-else>We're sorry, but the application failed to fetch weather API data</p>

      <router-link to="/" class="link"> back to home ! </router-link>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, type Ref, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ErrorView',
  setup() {
    const error: Ref<number> = ref<number>(null)
    const route = useRoute()

    watch(
      () => route.params.id,
      async (slug) => {
        if (route.params?.id) {
          error.value = Number(slug)
        }
      },
      { immediate: true }
    )

    return {
      error
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
    display: flex;

    .title {
      color: $text-primary-color;
    }
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    .text {
      color: $text-secondary-color;
    }

    .link {
      cursor: pointer;
      width: 200px;
      height: 46px;
      border-radius: 5px;

      background-color: $primary-color;
      color: $text-primary-color;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @include mediaQuery($breakpoint-mobile) {
    gap: 24px;

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
