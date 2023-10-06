<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserStore} from "../services/user_store.js";
import {CertificateOffer} from "../ts/Sg721.types";
import {getFees, handleTransaction} from "./helpers";
import {coins} from "@cosmjs/amino";
const marketplaceCertificates = ref<CertificateOffer[]>([]);
onMounted(async () => {
  try {
    const marketplaceCertificatesResponse = await UserStore.client.marketplaceCertificates();
    marketplaceCertificates.value.push(...marketplaceCertificatesResponse.marketplace_certificates);
  } catch (error) {
    console.error("Error fetching devices:", error);
  }
});

async function  buyCertificate(certificateId:number, price:number) {
  const new_coins = coins(price, "uc4e")
  console.log(new_coins)
  await handleTransaction(() =>
      UserStore.client.buyCertificate({marketplaceCertificateId: certificateId}, getFees(), "",
          new_coins));
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
        <h3>Price: {{cert.price}}uc4e ({{cert.price / 1000000}}C4E)</h3>
        <span class="listing-div" v-for="measurement in cert.measurements">
          <h3>Measurement id: {{measurement.id}}</h3>
          <h3>Measurement value: {{measurement.reverse_power}}Wh</h3>
          <h3>Measurement timestamp: {{new Date(measurement.timestamp * 1000).toLocaleString()}}</h3>
        </span>
        <button @click="buyCertificate(cert.id, cert.price)">Buy this certificate</button>
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