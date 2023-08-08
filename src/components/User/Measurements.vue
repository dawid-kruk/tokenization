<script setup lang="ts">

import {UserStore} from "../../services/user_store";
import {ref} from "vue";

const userDevice = ref(UserStore.device)
console.log(userDevice)
</script>

<template>
  <div class="listing-div" style="border: 2px solid black;" v-for="measurement in userDevice.measurements">
    <h3>Timestamp: {{new Date(measurement.timestamp).toLocaleString()}}</h3>
    <h3>Power: {{measurement.power}}Wh</h3>
  </div>
</template>

<style scoped lang="scss">
</style>