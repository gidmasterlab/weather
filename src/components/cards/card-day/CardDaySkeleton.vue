<template>
  <SkeletonAnimation class="card-day-skeleton" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkeletonAnimation from '@/components/shared/SkeletonAnimation.vue'

export default defineComponent({
  name: 'CardDaySkeleton',
  components: {
    SkeletonAnimation
  }
})
</script>

<style lang="scss" scoped>
.card-day-skeleton {
  width: 144px;
  height: 188px;
  border-radius: 30px;

  @include mediaQuery($breakpoint-mobile) {
    width: 100%;
    height: 72px;
    border-radius: 10px;
  }
}
</style>
