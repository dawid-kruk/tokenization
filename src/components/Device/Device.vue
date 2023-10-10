<script setup lang="ts">
import {ref} from "vue";
import {UserStore} from "../../services/user_store";
import {getFees, handleTransaction} from "../helpers";
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
  <div>
    <div class="router-links">
      <router-link to="/device/assign-device" class="h3">Assign device to user</router-link>
      <router-link to="/device/add-measurement">Add measurement</router-link>
    </div>
    <hr style="border: 1px solid black">
    <router-view></router-view>
  </div>

</template>

<style scoped lang="scss">

</style>