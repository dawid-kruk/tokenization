<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserStore} from "../../services/user_store";
import {txClient} from "../../../ts-client/chain4energy.c4echain.cfetokenization";
import {confirmTransaction} from "../helpers";
import {coins} from "@cosmjs/proto-signing";

const userCertificates = ref([]);
const price = ref();
onMounted(async () => {
  try {
    const certs = await UserStore.getUserCertificates();
    userCertificates.value.push(...certs)
  } catch (error) {
    console.error("Error fetching devices:", error);
  }
});

const addCertificateToMarketplace = async (certId:number) => {
  const priceCoins = coins(price.value * 1000000, "uc4e")
  const msgAddCertificateToMarketplace = {owner: UserStore.userAddress, certificateId: certId, price: priceCoins};
  const x = txClient().msgAddCertificateToMarketplace({value: msgAddCertificateToMarketplace});
  await confirmTransaction(x);
}

const burnCertificate = async (certId:number) => {
  const msgAddCertificateToMarketplace = {owner: UserStore.userAddress, certificateId: certId};
  const x = txClient().msgBurnCertificate({value: msgAddCertificateToMarketplace});
  await confirmTransaction(x);
}
</script>

<template>
  <div v-if="userCertificates.length > 0">
    <div class="listing-div" v-for="cert in userCertificates" >
      <h3>Id: {{cert.id}}</h3>
      <h3>Status: {{cert.certificate_status}}</h3>
      <h3>Certificate type: {{cert.certyficate_type_id}}</h3>
      <h3>Device address: {{cert.device_address}}</h3>
      <h3>Used power: {{cert.power}}Wh</h3>
      <h3 v-if="cert.authority != ''">Authority: {{cert.authority}}</h3>
      <div v-if="cert.certificate_status === 'VALID'">
        <div style="text-align: center; margin-bottom: 10px">
          <input class="input-field" v-model="price" type="number" placeholder="Price in C4E"/>
          <button @click="addCertificateToMarketplace(cert.id)">Add certificate to marketplace</button>
        </div>
        <hr>
        <div style="text-align: center; margin-bottom: 10px">
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