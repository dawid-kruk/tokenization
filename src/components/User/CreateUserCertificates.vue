<template>
  <div class="container">
    <input class="input-field" v-model="owner" type="text" placeholder="Owner"/>
    <input class="input-field" v-model="deviceAddress" type="text" placeholder="Device address"/>
    <input class="input-field" v-model="power" type="number" placeholder="Power"/>
    <input class="input-field" v-model="certyficateTypeId" type="number" placeholder="Certificate Type ID"/>
    <!-- You can further customize allowedAuthorities input -->
    <button class="action-button" @click="createUserCertificates()">Create user certificates</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {confirmTransaction} from "../helpers";
import { txClient} from "../../../ts-client/chain4energy.c4echain.cfetokenization";

const owner = ref("");
const deviceAddress = ref("");
const power = ref(0);
const certyficateTypeId = ref(0);
const allowedAuthorities = ref([]); // you can further customize this field

const createUserCertificates = async () => {
  const msgCreateUserCertificates = {
    owner: owner.value,
    deviceAddress: deviceAddress.value,
    power: power.value,
    allowedAuthorities: allowedAuthorities.value,
    certyficateTypeId: certyficateTypeId.value
  };
  const x = txClient().msgCreateUserCertificates({value: msgCreateUserCertificates});
  await confirmTransaction(x);
}
</script>