<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserStore} from "../services/user_store.js";
import {coins} from "@cosmjs/proto-signing";
import {txClient} from "../../ts-client/chain4energy.c4echain.cfetokenization";
import {confirmTransaction} from "./helpers";
const userCertificates = ref([]);
onMounted(async () => {
  try {
    const certs = await UserStore.getAllMarketplaceCertificates();
    userCertificates.value.push(...certs)
    console.log(userCertificates.value)
  } catch (error) {
    console.error("Error fetching devices:", error);
    // Handle the error appropriately
  }
});

async function  buyCertificate(certificateId:number) {
  const msgAddCertificateToMarketplace = {buyer: UserStore.userAddress, marketplaceCertificateId: certificateId,
    certificateId: certificateId};
  console.log(msgAddCertificateToMarketplace)
  const x = txClient().msgBuyCertificate({value: msgAddCertificateToMarketplace});
  await confirmTransaction(x);
}
</script>

<template>
  <div v-if="userCertificates.length > 0" style="background: white; padding: 20px; margin-top: 15px">
    <span v-for="cert in userCertificates">
    <div class="input_div" v-if="cert.buyer === ''" >
        <h3>Id: {{cert.id}}</h3>
        <h3>Owner address: {{cert.owner}}</h3>
        <h3>Authorizer: {{cert.authorizer}}</h3>
        <h3>Power: {{cert.power}}</h3>
        <h3>Price: {{cert.price[0].amount}}{{cert.price[0].denom}}</h3>
        <button @click="buyCertificate( cert.id)">Buy this certificate</button>
    </div>
      </span>
  </div>

</template>

<style scoped lang="scss">
.input_div {
  border-radius: 10px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  padding: 10px
}
</style>