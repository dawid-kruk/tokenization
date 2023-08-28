<script setup lang="ts">

import {UserStore} from "../../services/user_store";
import {ref} from "vue";

const userDevice = ref(UserStore.device)
</script>

<template>
  <div class="listing-div" style="border: 2px solid black;" v-for="measurement in userDevice.measurements">
    <h3>Timestamp: {{new Date(measurement.timestamp).toLocaleString()}}</h3>
    <h3 v-if="measurement.used_for_certificate" style="color: red">Already used</h3>
    <h3 v-if="!measurement.used_for_certificate" style="color: green">Can be used for an energy certificate</h3>
    <h3>Energy produced: {{measurement.reverse_power}}Wh</h3>
    <h3>Energy consumed: {{measurement.active_power}}Wh</h3>
    <h3>Metadata: {{measurement.metadata}}</h3>
  </div>
</template>

<style scoped lang="scss">
</style>