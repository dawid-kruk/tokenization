<!--suppress ALL -->
<script setup lang="ts">
import { UserStore } from "../../services/user_store";
import { ref, onMounted } from "vue";
import {router} from '../../router'
import {Device} from "../../ts/Sg721.types";
const devices = ref<Device[]>([]);

onMounted(async () => {
  try {
    const userDevicesResponse = await UserStore.client.userDevices({owner: UserStore.userAddress});
    if (userDevicesResponse.user_devices.devices.length > 0) {
      for (const dev of userDevicesResponse.user_devices.devices) {
        const deviceResponse = await UserStore.client.device({deviceAddress: dev.device_address})
        deviceResponse.name = dev.name
        deviceResponse.location = dev.location
        devices.value.push(deviceResponse)
      }
    }

  } catch (error) {
    console.error("Error fetching devices:", error);
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

async function energyRaport(device:any) {
  UserStore.setCurrentDevice(device)
  router.push('/user/energy-raport');
}

</script>

<template>
  <div v-if="devices.length > 0">
    <div class="listing-div" v-for="dev in devices" >
      <h3>Device name: {{dev.name}}</h3>
      <h3>Device address: {{dev.device_address}}</h3>
      <h3>Device location: {{dev.location}}</h3>
      <h3>Energy produced sum: {{dev.energy_produced_sum}}Wh</h3>
      <h3>Energy consumed: {{dev.energy_consumed_sum}}Wh</h3>
      <h3>Used power for energy certificates: {{dev.used_energy_produced}}Wh</h3>
      <h3>Fulfilled energy consumed: {{dev.fulfilled_energy_consumed}}Wh</h3>
      <button @click="showMeasurements(dev)" style="background: green; margin-bottom: 10px; color: white">Show all measurements</button>
      <button @click="energyRaport(dev)" style="background: #77341b; margin-bottom: 10px; color: white">Show energy raport</button>
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