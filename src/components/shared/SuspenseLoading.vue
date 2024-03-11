<template>
  <slot name="fallback" v-if="loading" />
  <slot name="children" v-if="!loading" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SuspenseLoading',
  props: {
    loading: Boolean
  }
})
</script>
