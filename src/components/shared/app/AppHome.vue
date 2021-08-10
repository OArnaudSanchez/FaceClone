<template>
  <div>
    <app-header />
    <div class="container">
      <slot></slot>
    </div>
    <!-- <app-footer /> -->
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";

export default {
  name: "AppHome",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped>
</style>