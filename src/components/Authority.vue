<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {UserStore} from "../services/user_store.js";
import {txClient} from "../../ts-client/chain4energy.c4echain.cfetokenization";
import {getFees, handleTransaction} from "./helpers";
const userCertificates = ref([]);
const measurementsMap = reactive({});
const validUntillMap = reactive({});
onMounted(async () => {
  try {
    const userCertificatesAllResponse = await UserStore.client.allUserCertificates();
    userCertificatesAllResponse.all_user_certificates.forEach((cert) => {
      cert.certificates.forEach((c) => {
        c.user_address = cert.owner
        userCertificates.value.push(c)
      })
    })
  } catch (error) {
    console.error("Error fetching devices:", error);
    // Handle the error appropriately
  }
});

async function  authorizeCertificate(userAddress:string,certificateId:number) {

  await handleTransaction(() => UserStore.client.authorizeCertificate({
    authorizer: UserStore.userAddress,
    userAddress: userAddress,
    certificateId: certificateId,
    validUntil: new Date(validUntillMap[certificateId])
  }, getFees()));
}
</script>

<template>
  <div>
  <div v-if="userCertificates.length > 0">
    <div  v-for="cert in userCertificates" >
      <div class="listing-div" v-if="cert.allowed_authorities.some(c => c === UserStore.userAddress) && cert.certificate_status === 'INVALID'">
        <h3>Id: {{cert.id}}</h3>
        <h3>Certificate type: {{cert.certyficate_type_id}}</h3>
        <h3>Device address: {{cert.device_address}}</h3>
        <h3>Used power: {{cert.power}}Wh</h3>
        <span class="listing-div"  v-for="measurement in cert.measurements">
        <h3>Measurement id: {{measurement.id}}</h3>
        <h3>Measurement value: {{measurement.reverse_power}}Wh</h3>
        <h3>Measurement timestamp: {{measurement.timestamp}}</h3>
      </span>
      <input class="input-field" v-model="validUntillMap[cert.id]" type="date" placeholder="Valid untill" />
      <button @click="authorizeCertificate(cert.user_address, cert.id)">Authorize this certificate</button>
    </div>
  </div>
  </div>
  <div v-if="userCertificates.length === 0">
    <h3>You don't have any certificates yet</h3>
  </div>
  </div>
</template>

<style scoped lang="scss">
</style>