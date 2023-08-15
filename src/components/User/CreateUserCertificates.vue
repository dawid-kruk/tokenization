<template>
  <div class="input-div" style="border: 2px solid black;">
    <h2>Dodaj nowy certyfikat</h2>
    <p>Max power: {{maxPower}}Wh</p>
    <input class="input-field" v-model="power" type="number" placeholder="Power"/>
    <hr>
    <div style="text-align: center">
      <p>Select authority:</p>
      <div v-for="authority in allowedAuthoritiesList" @click="selectAuthority(authority.address)">
        <p v-bind:class="[allowedAuthorities.findIndex(aut => aut === authority.address) !== -1 ? 'activeCertificateType' : '']" class="certType">
          {{authority.name}} - {{authority.address}}
        </p>
      </div>
    </div>
    <hr>
    <p>Select certificate type:</p>
    <div v-for="cert in certificateTypes" @click="selectCertificateType(cert.id)">
      <p v-bind:class="[certyficateTypeId === cert.id ? 'activeCertificateType' : '']" class="certType">
        {{cert.name}} - {{cert.description}}
      </p>
    </div>
    <hr>
    <p>Specify which measurements to use</p>
    <div class="listing-div" style="border: 2px solid black;" v-for="measurement in userDevice.measurements">
      <h3>Timestamp: {{new Date(measurement.timestamp).toLocaleString()}}</h3>
      <h3>Active power: {{measurement.active_power}}Wh</h3>
    </div>
    <hr>
    <!-- You can further customize allowedAuthorities input -->
    <button class="action-button" @click="createUserCertificates()" style="width: 350px;">Create user certificates</button>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {confirmTransaction} from "../helpers";
import { txClient} from "../../../ts-client/chain4energy.c4echain.cfetokenization";
import {UserStore} from "../../services/user_store";
const userDevice = ref(UserStore.device)
const power = ref();
const maxPower = ref(UserStore.device.power_sum - UserStore.device.used_power);
const certyficateTypeId = ref();
const certificateTypes = ref([]);

const allowedAuthoritiesList = ref([
    {address: "c4e1lt5npfrl4fnvkxm387d8fc59x3vwugagm4vnzm", name: "authority 1"},
    {address: "c4e1n65nctlr97na2h9sjul94ge4y95uhtxwmhn9kx", name: "authority 2"},

]);

const allowedAuthorities = ref([]);


function selectCertificateType(id: number) {
  certyficateTypeId.value = id
}

function selectAuthority(authorityAddress: string) {
  const index = allowedAuthorities.value.findIndex(aut => aut === authorityAddress)
  if (index === -1) {
    allowedAuthorities.value.push(authorityAddress)
  } else {
    allowedAuthorities.value.splice(index, 1)
  }
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
    deviceAddress: UserStore.device.device_address,
    power: power.value,
    allowedAuthorities: [...allowedAuthorities.value],
    certyficateTypeId: certyficateTypeId.value
  };

  const x = txClient().msgCreateUserCertificates({value: msgCreateUserCertificates});
  await confirmTransaction(x);
}
</script>

<style scoped lang="scss">
.activeCertificateType {
  color: green;
}
.certType {
  cursor: pointer;

}
p {
  padding: 0;
  margin: 6px;
}
hr {
  width: 500px;
}
</style>