<template>
  <div id="nav" class="bg-black">
    <div
      class="container p-3 mx-auto flex items-center justify-between text-white"
    >
      <div class="inline-flex">
        <img src="@/assets/logo-nav-brand.png" alt="" class="mr-4 w-8" />
        <span class="text-xl font-bold">mpp</span>
      </div>
      <div class="flex space-x-3 font-semibold text-lg">
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
.nav-item {
  @apply: px-4;
}

.nav-item-active {
  @apply: bg-white;
  @apply: text-black;
  @apply: underline;
}
</style>
