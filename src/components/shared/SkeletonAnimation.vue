<template>
  <div class="skeleton-animation" />
</template>

<style lang="scss" scoped>
.skeleton-animation {
  width: 100%;
  height: 100%;
  background-color: $skeleton-color;
  animation: skeleton-pulse 1s infinite alternate;
}

@keyframes skeleton-pulse {
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
