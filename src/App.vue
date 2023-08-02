<script setup lang="ts">

import {GlobalStore} from "./services/global_store.js";
</script>

<template>
  <div v-bind:style= "[GlobalStore.loader ? {display: 'none'} : {display: 'block'}]">
    <router-view />
  </div>
  <div v-bind:style= "[!GlobalStore.loader ? {display: 'none'} : {display: 'block'}]">
    <h1 style="font-size:45px; text-align: center; padding: 300px 0; margin: 0">Loading...</h1>
  </div>
</template>

<style scoped>

</style>
