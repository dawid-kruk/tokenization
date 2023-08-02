<template>
  <div class="container">
    <input class="input-field" v-model="owner" type="text" placeholder="Owner"/>
    <input class="input-field" v-model="certificateId" type="number" placeholder="Certificate ID"/>
    <button class="action-button" @click="burnCertificate()">Burn certificate</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {confirmTransaction} from "../helpers";
import { txClient} from "../../../ts-client/chain4energy.c4echain.cfetokenization";

const owner = ref("");
const certificateId = ref(0);

const burnCertificate = async () => {
  const msgBurnCertificate = {owner: owner.value, certificateId: certificateId.value};
  const x = txClient().msgBurnCertificate({value: msgBurnCertificate});
  await confirmTransaction(x);
}
</script>