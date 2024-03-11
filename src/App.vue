<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style lang="scss">
.app {
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: $screen-max-width;
  margin: 0 auto;
  padding: $v-margin-desktop $h-margin-desktop;

  @include mediaQuery($breakpoint-mobile) {
    padding: $v-margin-mobile $h-margin-mobile;
  }
}
</style>
