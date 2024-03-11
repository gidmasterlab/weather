<template>
  <SkeletonAnimation class="card-current-skeleton" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkeletonAnimation from '@/components/shared/SkeletonAnimation.vue'

export default defineComponent({
  name: 'CardCurrentSkeleton',
  components: {
    SkeletonAnimation
  }
})
</script>

<style lang="scss" scoped>
.card-current-skeleton {
  width: 256px;
  height: 470px;
  border-radius: 40px;

  @include mediaQuery($breakpoint-mobile) {
    width: 100%;
    height: 97px;
    border-radius: 20px;
  }
}
</style>
