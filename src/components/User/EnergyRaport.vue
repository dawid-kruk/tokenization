<script setup lang="ts">

import {UserStore} from "../../services/user_store";
import {ref} from "vue";
import {GlobalStore} from "../../services/global_store";

const userDevice = ref(UserStore.device)
console.log(userDevice.value.measurements)

const calculateProgress = (measurement) => {
  if (measurement.fulfilled_active_power.length === 0) {
    return "0%"
  }
  let fulfiledActivePowerSum = 0
  measurement.fulfilled_active_power.forEach(x => {
    fulfiledActivePowerSum += +x.amount
  })
  return (fulfiledActivePowerSum / measurement.active_power) * 100 + "%"
}
</script>

<template>
  <span v-for="measurement in userDevice.measurements">
    <div class="listing-div energy-measurement" style="border: 2px solid black;">
      <h3>Timestamp: {{new Date(measurement.timestamp).toLocaleString()}}</h3>
      <h3>Energy consumed: {{measurement.active_power}}Wh</h3>
    <hr style="border: 1px solid black; width: 100%">
      <span v-for="fulfiledPower in measurement.fulfilled_active_power">
        <h3>
          Fulfilled {{fulfiledPower.amount}}Wh using certificate with id {{fulfiledPower.certificateId}}
        </h3>
      </span>
      <div class="progress-bar-wrapper">
        <div class="progress-bar" v-bind:style="{width: calculateProgress(measurement)}"></div>
      </div>
    </div>
  </span>

</template>

<style scoped lang="scss">
.progress-bar-wrapper {
  background: red;
  height: 20px;
  border-radius: 40px;
  width: 100%;
  position: relative;
}

.progress-bar {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 40px;
  background: rgba(126, 187, 60, 1);
  z-index: 10;
}
</style>