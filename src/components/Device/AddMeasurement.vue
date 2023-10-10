<script setup lang="ts">
import Device from "./Device.vue";
import {onMounted, ref} from "vue";
import {UserStore} from "../../services/user_store";
import {getFees, handleTransaction} from "../helpers";
const devices = ref<Device[]>([]);
const selectedDevice = ref<Device|null>(null)
const metadata = ref("{\"CO2Emmision\":\"2Tons\"}")
const activePower = ref()
const reversePower = ref()
const timestamp = ref()
onMounted(async () => {
  try {
    const userDevicesResponse = await UserStore.client.userDevices({owner: UserStore.userAddress});
    console.log(userDevicesResponse)
    if (userDevicesResponse.user_devices.devices.length > 0) {
      for (const dev of userDevicesResponse.user_devices.devices) {
        const deviceResponse = await UserStore.client.device({deviceAddress: dev.device_address})
        console.log(deviceResponse)
        const device = deviceResponse.device
        device.name = dev.name
        device.location = dev.location
        devices.value.push(device)
      }
    }

  } catch (error) {
    console.error("Error fetching devices:", error);
  }
});

async function selectDevice(device:any) {
  selectedDevice.value = device
}

async function addMeasurement() {
  const timestampDate = new Date(timestamp.value).getTime() / 1000
  await handleTransaction(() => UserStore.client.addMeasurement({
    activePower: activePower.value,
    reversePower: reversePower.value,
    timestamp: timestampDate + "",
    metadata: metadata.value
  }, getFees()));

}

</script>

<template>
  <div class="input-div">
    <input class="input-field" v-model="reversePower" type="number" placeholder="Energy produced" />
    <input class="input-field" v-model="activePower" type="number" placeholder="Energy consumed" />
    <input class="input-field" v-model="timestamp" type="datetime-local" placeholder="Valid untill" />
    <input class="input-field" v-model="metadata" type="text" placeholder="Metadata" />
    <button @click="addMeasurement()">Add measurement</button>
  </div>
</template>

<style scoped lang="scss">

</style>