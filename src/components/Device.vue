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
  <div class="container">
    <input class="input-field" v-model="userAddress" type="text" placeholder="User address to assign device to user"/>
    <button class="action-button" @click="splitVesting()">Assign device to user</button>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.action-button {
  padding: 10px 20px;
  background-color: #007BFF;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
}
</style>