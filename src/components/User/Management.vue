<script setup lang="ts">
import { UserStore } from "../../services/user_store";
import { ref, onMounted } from "vue";
import {Device} from "../../../ts-client/chain4energy.c4echain.cfetokenization";
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

      console.log(devices.value)
    }
  } catch (error) {
    console.error("Error fetching devices:", error);
    // Handle the error appropriately
  }
});
async function addCertificate(devAddress:any) {
  UserStore.setCurrentDevice(devAddress)
  console.log(devAddress)
  console.log("Set current device")
  router.push('/user/add-certificate');
}
</script>

<template>
  <div v-if="devices.length > 0">
    <div class="input_div" v-for="dev in devices" >
      <h3>Device address: {{dev.device_address}}</h3>
      <h3>Power sum: {{dev.power_sum}}</h3>
      <h3>Used power for energy certificates: {{dev.used_power}}</h3>
      <button @click="addCertificate(dev)">Add certificate from this device</button>
    </div>
  </div>
  <div v-if="devices.length === 0">
    <h2>Nie masz jeszcze żadnych urzadzeń</h2>
  </div>

</template>

<style scoped lang="scss">
.input_div {
  border-radius: 10px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  padding: 10px
}
</style>