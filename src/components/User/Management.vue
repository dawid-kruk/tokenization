<script setup lang="ts">
import { UserStore } from "../../services/user_store";
import { ref, onMounted } from "vue";
import {router} from '../../router'
import {Device} from "../../../ts-client/chain4energy.c4echain.cfetokenization";

const devices = ref([]);

onMounted(async () => {
  try {

    const userDevices = await UserStore.getUserDevices();
    console.log(userDevices)
    if (userDevices.length > 0) {
      for (const dev of userDevices) {
        const device = await UserStore.getDevice(dev.device_address)
        device.name = dev.name
        device.location = dev.location
        devices.value.push(device)
      }
    }

  } catch (error) {
    console.error("Error fetching devices:", error);
    // Handle the error appropriately
  }
});

async function addCertificate(device:any) {
  UserStore.setCurrentDevice(device)
  router.push('/user/add-certificate');
}

async function showMeasurements(device:any) {
  UserStore.setCurrentDevice(device)
  router.push('/user/show-measurements');
}

</script>

<template>
  <div v-if="devices.length > 0">
    <div class="listing-div" v-for="dev in devices" >
      <h3>Device name: {{dev.name}}</h3>
      <h3>Device address: {{dev.device_address}}</h3>
      <h3>Device location: {{dev.location}}</h3>
      <h3>Active power sum: {{dev.active_power_sum}}Wh</h3>
      <h3>Reverse power sum: {{dev.reverse_power_sum}}Wh</h3>
      <h3>Used power for energy certificates: {{dev.used_active_power}}Wh</h3>
      <h3>Fulfilled reverse power: {{dev.fulfilled_reverse_power}}Wh</h3>
      <button @click="showMeasurements(dev)" style="background: green; margin-bottom: 10px; color: white">Show all measurements</button>
      <button @click="addCertificate(dev)">Add certificate from this device</button>
    </div>
  </div>
  <div v-if="devices.length === 0">
    <h3>
      You don't have any devices yet
    </h3>
  </div>

</template>

<style scoped lang="scss">

</style>