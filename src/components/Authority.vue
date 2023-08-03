<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserStore} from "../services/user_store.js";
import {coins} from "@cosmjs/proto-signing";
import {txClient} from "../../ts-client/chain4energy.c4echain.cfetokenization";
import {confirmTransaction} from "./helpers";
const userCertificates = ref([]);
onMounted(async () => {
  try {
    const certs = await UserStore.getAllUserCertificates();
    certs.forEach((cert) => {
      cert.certificates.forEach((c) => {
        c.user_address = cert.owner
        userCertificates.value.push(c)
      })
    })
    console.log(userCertificates.value)
  } catch (error) {
    console.error("Error fetching devices:", error);
    // Handle the error appropriately
  }
});

async function  authorizeCertificate(userAddress:string,certificateId:number) {
  const msgAddCertificateToMarketplace = {authorizer: UserStore.userAddress, userAddress: userAddress,
    certificateId: certificateId};
  console.log(msgAddCertificateToMarketplace)
  const x = txClient().msgAuthorizeCertificate({value: msgAddCertificateToMarketplace});
  await confirmTransaction(x);
}
</script>

<template>
  <div v-if="userCertificates.length > 0" style="background: white; padding: 20px; margin-top: 15px">
    <div class="input_div" v-for="cert in userCertificates" >
      <div v-if="cert.allowed_authorities.some(c => c === UserStore.userAddress) && cert.certificate_status === 'INVALID'">
      <h3>Id: {{cert.id}}</h3>
      <h3>Certificate type: {{cert.certyficate_type_id}}</h3>
      <h3>Device address: {{cert.device_address}}</h3>
      <h3>Used power: {{cert.power}}</h3>
      <button @click="authorizeCertificate(cert.user_address, cert.id)">Authorize this certificate</button>
    </div>
  </div>
  </div>

</template>

<style scoped lang="scss">
.input_div {
  border-radius: 10px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  padding: 10px
}
</style>