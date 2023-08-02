<template>
  <div class="container">
    <h2>Dodaj nowy certyfikat</h2>
    <p>Max power: {{maxPower}}</p>
    <input class="input-field" v-model="power" type="number" placeholder="Power"/>
    <p>Selected certificate type: {{certyficateTypeId}}</p>
    <div v-for="cert in certificateTypes" @click="selectCertificateType(cert.id)">
      <p>
        {{cert.id}} {{cert.name}} {{cert.description}}
      </p>
    </div>
    <!-- You can further customize allowedAuthorities input -->
    <button class="action-button" @click="createUserCertificates()">Create user certificates</button>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {confirmTransaction} from "../helpers";
import { txClient} from "../../../ts-client/chain4energy.c4echain.cfetokenization";
import {UserStore} from "../../services/user_store";

const power = ref();
const maxPower = ref(UserStore.device.power_sum - UserStore.device.used_power);
const certyficateTypeId = ref();
const certificateTypes = ref([]);

const allowedAuthorities = ref([]); // you can further customize this field

function selectCertificateType(id: number) {
  certyficateTypeId.value = id
}
onMounted(async () => {
  try {
    const certs = await UserStore.getAllCertificateTypes();
    certificateTypes.value = certs

  } catch (error) {
    console.error("Error fetching devices:", error);
    // Handle the error appropriately
  }
});
const createUserCertificates = async () => {
  if (power.value > maxPower.value) {
    alert("You don't have enough power")
    return
  }
  const msgCreateUserCertificates = {
    owner: UserStore.userAddress,
    deviceAddress: UserStore.device.deviceAddress,
    power: power.value,
    allowedAuthorities: allowedAuthorities.value,
    certyficateTypeId: certyficateTypeId.value
  };
  const x = txClient().msgCreateUserCertificates({value: msgCreateUserCertificates});
  await confirmTransaction(x);
}
</script>

<style scoped lang="scss">
.container {
  border: 1px solid black
}
</style>