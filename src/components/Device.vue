<script setup lang="ts">
import {ref} from "vue";
import {UserStore} from "../services/user_store";
import {getFees, handleTransaction} from "./helpers";
const amount = ref("")
const userAddress = ref("")

const assingDevice = async () => {
  if (userAddress.value == "") {
    alert("Enter user address")
    return
  }
  await handleTransaction(() => UserStore.client.assignDeviceToUser({userAddress: userAddress.value}, getFees()));
}
</script>

<template>
  <div class="input-div">
    <input class="input-field" v-model="userAddress" type="text" placeholder="User address"/>
    <button class="action-button" @click="assingDevice()">Assign device to user</button>
  </div>
</template>

<style scoped lang="scss">
button {
  width: 300px;
}
</style>