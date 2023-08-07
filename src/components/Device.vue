<script setup lang="ts">
import {ref} from "vue";
import {MsgAssignDeviceToUser, txClient} from "../../ts-client/chain4energy.c4echain.cfetokenization/module.js";
import {UserStore} from "../services/user_store";
import {confirmTransaction} from "./helpers";

const amount = ref("")
const userAddress = ref("")

const splitVesting = async () => {
  if (userAddress.value == "") {
    alert("Enter user address")
    return
  }
  const msgAssign:MsgAssignDeviceToUser = {
    deviceAddress: UserStore.userAddress,
    userAddress: userAddress.value
  }
 const x = txClient().msgAssignDeviceToUser({value: msgAssign})
  await confirmTransaction(x)
}
</script>

<template>
  <div class="input-div">
    <input class="input-field" v-model="userAddress" type="text" placeholder="User address"/>
    <button class="action-button" @click="splitVesting()">Assign device to user</button>
  </div>
</template>

<style scoped lang="scss">
button {
  width: 300px;
}
</style>