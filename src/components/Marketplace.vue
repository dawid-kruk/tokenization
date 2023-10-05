<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserStore} from "../services/user_store.js";
import {confirmTransaction} from "./helpers";
const userCertificates = ref([]);
onMounted(async () => {
  try {
    const certs = await UserStore.getAllMarketplaceCertificates();
    userCertificates.value.push(...certs)
  } catch (error) {
    console.error("Error fetching devices:", error);
    // Handle the error appropriately
  }
});

async function  buyCertificate(certificateId:number) {
  const msgAddCertificateToMarketplace = {buyer: UserStore.userAddress, marketplaceCertificateId: certificateId,
    certificateId: certificateId};
  const x = txClient().msgBuyCertificate({value: msgAddCertificateToMarketplace});
  await confirmTransaction(x);
}
</script>

<template>
  <div>
  <div v-if="userCertificates.length > 0" style="background: white; padding: 20px; margin-top: 15px">
    <span v-for="cert in userCertificates">
    <div class="listing-div" v-if="cert.buyer === ''">
        <h3>Id: {{cert.id}}</h3>
        <h3>Owner address: {{cert.owner}}</h3>
        <h3>Authorizer: {{cert.authorizer}}</h3>
        <h3>Power: {{cert.power}}Wh</h3>
        <h3>Price: {{cert.price[0].amount}}{{cert.price[0].denom}} ({{cert.price[0].amount / 1000000}}C4E)</h3>
        <span class="listing-div" v-for="measurement in cert.measurements">
          <h3>Measurement id: {{measurement.id}}</h3>
          <h3>Measurement value: {{measurement.reverse_power}}Wh</h3>
          <h3>Measurement timestamp: {{measurement.timestamp}}</h3>
        </span>
        <button @click="buyCertificate( cert.id)">Buy this certificate</button>
    </div>
    </span>
  </div>
  <div v-if="userCertificates.length === 0">
    <h3>There are no certificates on the marketplace yet</h3>
  </div>
  </div>
</template>

<style scoped lang="scss">
</style>