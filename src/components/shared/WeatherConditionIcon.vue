<template>
  <img :src="icon" :alt="condition" class="weather-condition-icon" />
  <!-- <component :is="svg" class="weather-condition-icon" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { defineComponent, defineAsyncComponent, watch, shallowRef, type ShallowRef, onMounted } from "vue";

export default defineComponent({
  name: 'WeatherConditionIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    code: {
      type: Number,
      required: true
    },
    condition: {
      type: String,
      required: true
    }
  },
  setup() {
    /**
     * NOTE
     * The icons provided in the Figma design are incomplete.
     * While I could map the weather condition codes to custom icons, many of them are missing.
     * Currently, I'm using CDN images for this component, but another option would be to dynamically load SVGs based on the condition codes.
     */

    // const svg: ShallowRef<string> = shallowRef(null);
    // onMounted(() => {
    //     svg.value = defineAsyncComponent(() => import(`./../../assets/icons/${props.code}.svg`));
    // });
    // return {
    //     svg
    // };
  }
})
</script>

<style lang="scss" scoped>
.weather-condition-wrapper {
  width: 48px;
  height: 48px;
}
</style>
