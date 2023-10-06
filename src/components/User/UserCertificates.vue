<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {UserStore} from "../../services/user_store";
import {getFees, handleTransaction} from "../helpers";
const deviceAddressMap = reactive({});
const userCertificates = ref([]);

const price = ref();

onMounted(async () => {
  try {
    const certs = await UserStore.client.userCertificates({owner: UserStore.userAddress});
    userCertificates.value.push(...certs.user_certificates.certificates)
    console.log(userCertificates.value[0])
  } catch (error) {
    console.error("Error fetching devices:", error);
  }
});

const addCertificateToMarketplace = async (certId:number) => {
  await handleTransaction(() => UserStore.client.addCertificateToMarketplace(
      {
        certificateId: certId,
        price: price.value * 1000000
      }, getFees()));
}

const burnCertificate = async (certId:number) => {
  await handleTransaction(() => UserStore.client.burnCertificate(
      {
        certificateId: certId,
        deviceAddress: deviceAddressMap[certId],
      }, getFees()));
}
</script>

<template>
  <div v-if="userCertificates.length > 0">
    <div class="listing-div" v-for="cert in userCertificates" >
      <h3>Id: {{cert.id}}</h3>
      <h3>Status: {{cert.certificate_status}}</h3>
      <h3>Certificate type: {{cert.certificate_type_id}}</h3>
      <h3>Device address: {{cert.device_address}}</h3>
      <h3>Energy produced: {{cert.power}}Wh</h3>
      <h3 v-if="cert.authority != ''">Authority: {{cert.authority}}</h3>
      <h3 v-if="cert.valid_until != null">Valid until: {{cert.valid_until}}</h3>
      <span class="listing-div" v-for="measurement in cert.measurements">
        <h3>Measurement id: {{measurement.id}}</h3>
        <h3>Measurement value: {{measurement.reverse_power}}Wh</h3>
        <h3>Measurement timestamp: {{new Date(measurement.timestamp * 1000).toLocaleString()}}</h3>
      </span>

      <div v-if="cert.certificate_status === 'Valid'">
        <div style="text-align: center; margin-bottom: 10px">
          <input class="input-field" v-model="price" type="number" placeholder="Price in C4E"/>
          <button @click="addCertificateToMarketplace(cert.id)">Add certificate to marketplace</button>
        </div>
        <hr>
        <div style="text-align: center; margin-bottom: 10px">
          <input class="input-field" v-model="deviceAddressMap[cert.id]" type="text" placeholder="Device address to fulfil used energy"/>
          <button @click="burnCertificate(cert.id)">Burn this certificate</button>
        </div>
      </div>
      <div v-if="cert.certificate_status === 'ON_MARKETPLACE'">
        <h3 style="color: red">Certificate currently on a marketplace</h3>
      </div>
    </div>
  </div>
  <div v-if="userCertificates.length === 0">
    <h3>You don't have any certificates yet</h3>
  </div>
</template>

<style scoped lang="scss">
.input_div {
  border-radius: 10px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  padding: 10px
}
</style>