<script setup lang="ts">
import { UserStore } from "../../services/user_store";
import { ref, onMounted } from "vue";
import {router} from '../../router'

const devices = ref([]);

onMounted(async () => {
  try {
    const userDevices = await UserStore.getUserDevices();
    if (userDevices.length > 0) {
      for (const dev of userDevices) {
        const device = await UserStore.getDevice(dev.device_address)
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
</script>

<template>
  <div v-if="devices.length > 0">
    <div class="listing-div" v-for="dev in devices" >
      <h3>Device address: {{dev.device_address}}</h3>
      <h3>Power sum: {{dev.power_sum}}Wh</h3>
      <h3>Used power for energy certificates: {{dev.used_power}}Wh</h3>
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