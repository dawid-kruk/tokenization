<template>
  <div class="input-div">
    <input  v-model="deviceAddress" type="text" placeholder="Device address"/>
    <input v-model="deviceName" type="text" placeholder="Device name"/>
    <button class="action-button" @click="acceptDevice()">Add device</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {confirmTransaction} from "../helpers";
import { txClient} from "../../../ts-client/chain4energy.c4echain.cfetokenization";
import {UserStore} from "../../services/user_store";
const deviceAddress = ref("");
const deviceName = ref("");

const acceptDevice = async () => {
  if (deviceAddress.value == "" || deviceName.value == "") {
    alert("All fields are required");
    return;
  }
  const msgAcceptDevice = {userAddress: UserStore.userAddress, deviceAddress: deviceAddress.value, deviceName: deviceName.value};
  const x = txClient().msgAcceptDevice({value: msgAcceptDevice});
  await confirmTransaction(x);
}
</script>