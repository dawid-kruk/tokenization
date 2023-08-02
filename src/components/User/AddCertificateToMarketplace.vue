<template>
  <div class="container">
    <input class="input-field" v-model="owner" type="text" placeholder="Owner"/>
    <input class="input-field" v-model="certificateId" type="number" placeholder="Certificate ID"/>
    <!-- You can further customize price input -->
    <button class="action-button" @click="addCertificateToMarketplace()">Add certificate to marketplace</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {confirmTransaction} from "../helpers";
import { txClient} from "../../../ts-client/chain4energy.c4echain.cfetokenization";

const owner = ref("");
const certificateId = ref(0);
const price = ref([]); // you can further customize this field


</script>