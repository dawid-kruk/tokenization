<template>
  <div class="container">
    <input class="input-field" v-model="buyer" type="text" placeholder="Buyer"/>
    <input class="input-field" v-model="marketplaceCertificateId" type="number" placeholder="Marketplace Certificate ID"/>
    <button class="action-button" @click="buyCertificate()">Buy certificate</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {confirmTransaction} from "../helpers";
import { txClient} from "../../../ts-client/chain4energy.c4echain.cfetokenization";

const buyer = ref("");
const marketplaceCertificateId = ref(0);

const buyCertificate = async () => {
  const msgBuyCertificate = {buyer: buyer.value, marketplaceCertificateId: marketplaceCertificateId.value};
  const x = txClient().msgBuyCertificate({value: msgBuyCertificate});
  await confirmTransaction(x);
}
</script>