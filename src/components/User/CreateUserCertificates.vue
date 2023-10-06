<template>
  <div class="input-div" style="border: 2px solid black;">
    <h2>Add new certificate</h2>
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
        {{cert.id}}
        {{cert.name}} - {{cert.description}}
      </p>
    </div>
    <hr>
    <p>Specify which measurements to use</p>
    <span v-for="measurement in userDevice.measurements">
      <div v-if="!measurement.used_for_certificate" v-bind:class="[measurementsIds.findIndex(x => x === measurement.id) != -1 ? 'activeCertificateType' : '']" @click="measurementsIds.push(measurement.id)" class="listing-div" style="border: 2px solid black; cursor: pointer" >
        <h3>Timestamp: {{new Date(measurement.timestamp * 1000).toLocaleString()}}</h3>
        <h3>Energy produced: {{measurement.reverse_power}}Wh</h3>
      </div>
    </span>

    <hr>
    <!-- You can further customize allowedAuthorities input -->
    <button class="action-button" @click="createUserCertificates()" style="width: 350px;">Create user certificates</button>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserStore} from "../../services/user_store";
import {CertificateType, CertificateTypeAllResponse} from "../../ts/Sg721.types";
import {getFees, handleTransaction} from "../helpers";
const userDevice = ref(UserStore.device)
const power = ref();
const certyficateTypeId = ref('0');
const measurementsIds = ref([]);
const certificateTypes = ref<CertificateType[]>([]);

const allowedAuthoritiesList = ref([
    {address: "c4e1lt5npfrl4fnvkxm387d8fc59x3vwugagm4vnzm", name: "authority 1"},
    {address: "c4e1n65nctlr97na2h9sjul94ge4y95uhtxwmhn9kx", name: "authority 2"},
]);

const allowedAuthorities = ref(["c4e1lt5npfrl4fnvkxm387d8fc59x3vwugagm4vnzm"]);

function selectCertificateType(id: string) {
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
    const certificateTypeAllResponse = await UserStore.client.certificateTypes();
    certificateTypes.value = certificateTypeAllResponse.certificate_types

  } catch (error) {
    console.error("Error fetching devices:", error);
    // Handle the error appropriately
  }
});
const createUserCertificates = async () => {
  await handleTransaction(() => UserStore.client.createUserCertificates(
      {
        certificateTypeId:  +certyficateTypeId.value,
        deviceAddress: UserStore.device.device_address,
        allowedAuthorities: [...allowedAuthorities.value],
        measurements: measurementsIds.value
      }
      , getFees()));
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