<script setup lang="ts">

import {GlobalStore} from "./services/global_store.js";
</script>

<template>
  <div v-if="!GlobalStore.loader">
  <router-view />
  </div>
  <div v-if="GlobalStore.loader">
    <h1 style="font-size:45px; text-align: center; padding: 300px 0; margin: 0">Loading...</h1>
  </div>
</template>

<style scoped>

</style>
