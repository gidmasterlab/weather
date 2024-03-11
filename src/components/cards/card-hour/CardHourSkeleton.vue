<template>
  <SkeletonAnimation class="card-hour-skeleton" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkeletonAnimation from '@/components/shared/SkeletonAnimation.vue'

export default defineComponent({
  name: 'CardHourSkeleton',
  components: {
    SkeletonAnimation
  }
})
</script>

<style lang="scss" scoped>
.card-hour-skeleton {
  width: 144px;
  height: 172px;
  border-radius: 30px;

  @include mediaQuery($breakpoint-mobile) {
    min-width: 144px;
    height: 172px;
    padding: 0 22px;
  }
}
</style>
