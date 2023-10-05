<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserStore} from "../services/user_store.js";
import {CertificateOffer} from "../ts/Sg721.types";
const marketplaceCertificates = ref<CertificateOffer[]>([]);
onMounted(async () => {
  try {
    marketplaceCertificates.value.push(...await UserStore.client.marketplaceCertificates());
  } catch (error) {
    console.error("Error fetching devices:", error);
  }
});

async function  buyCertificate(certificateId:number) {
  const x = UserStore.client.buyCertificate({buyer: UserStore.userAddress, marketplaceCertificateId: certificateId})
}
</script>

<template>
  <div>
  <div v-if="marketplaceCertificates.length > 0" style="background: white; padding: 20px; margin-top: 15px">
    <span v-for="cert in marketplaceCertificates">
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
  <div v-if="marketplaceCertificates.length === 0">
    <h3>There are no certificates on the marketplace yet</h3>
  </div>
  </div>
</template>

<style scoped lang="scss">
</style>