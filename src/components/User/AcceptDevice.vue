<template>
  <div class="input-div">
    <input  v-model="deviceAddress" type="text" placeholder="Device address"/>
    <input v-model="deviceName" type="text" placeholder="Device name"/>
    <div style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin-bottom: 10px">
      <input v-model="location" type="text" placeholder="Device location"/>
      <button style="background: green; color: white" class="action-button" @click="getCurrentLocation()">Get current location</button>
    </div>

    <button class="action-button" @click="acceptDevice()">Add device</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {confirmTransaction, getFees, handleTransaction} from "../helpers";
import { txClient} from "../../../ts-client/chain4energy.c4echain.cfetokenization";
import {UserStore} from "../../services/user_store";
const deviceAddress = ref("");
const deviceName = ref("");
const location = ref("");
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
    location.value = position.coords.latitude + " " + position.coords.longitude
  }
}

const acceptDevice = async () => {
  if (deviceAddress.value == "" || deviceName.value == "") {
    alert("All fields are required");
    return;
  }
  const msgAcceptDevice = {
    deviceAddress: deviceAddress.value,
    deviceName: deviceName.value,
    deviceLocation: location.value,
  };
  await handleTransaction(() => UserStore.client.acceptDevice(msgAcceptDevice, getFees()));
}
</script>