<template>
  <div id="nav" class="bg-black">
    <div
      class="container p-3 mx-auto flex items-center justify-between text-white"
    >
      <div class="inline-flex items-center">
        <img src="@/assets/logo-nav-brand.png" alt="" class="mr-4 w-10" />
        <span class="text-2xl roboto-text font-light"
          >mpp - a modern C++ matrix library</span
        >
      </div>
      <div class="flex items-center">
        <router-link to="/" class="nav-item">Home</router-link>
        <!-- <router-link to="/about" class="nav-item">About</router-link> -->
      </div>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {}
</script>

<style scoped lang="stylus">
.roboto-text {
  font-family: 'Roboto', sans-serif;
}

.nav-item {
  @apply: px-4;
  @apply: rounded-xl;
  @apply: text-xl;
  @apply: roboto-text;
}

.nav-item-active {
  @apply: bg-white;
  @apply: text-black;
  @apply: font-semibold;
}
</style>
