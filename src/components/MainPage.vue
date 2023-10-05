<script setup lang="ts">
import {ref} from 'vue'
import { SigningStargateClient} from "@cosmjs/stargate";
import { createKeplrConfig} from "./helpers";
import {registry} from "../../ts-client";
import {UserStore} from "../services/user_store";
import {SigningCosmWasmClient} from "@cosmjs/cosmwasm-stargate";

const userAddress = ref("")

const denomination = 1000000;

const connectWithKeplr = async () => {
    const chainInfo = createKeplrConfig();
    await window.keplr.experimentalSuggestChain(chainInfo);
    await window.keplr.enable(chainInfo.chainId);
    const offlineSigner = window.keplr.getOfflineSigner(chainInfo.chainId);
    const accounts = await offlineSigner.getAccounts();
    const client = await SigningCosmWasmClient.connectWithSigner(
        chainInfo.rpc,
        offlineSigner,
    );

    UserStore.setUserAddress( accounts[0].address)
    UserStore.setUserClient(client)
    userAddress.value = accounts[0].address
}

</script>
<template>
  <div id="wrapper">
    <div v-if="!userAddress" class="keplr-div">
      <h2>Connect with keplr first</h2>
      <button @click="connectWithKeplr()" class="keplr-button">Connect with keplr</button>
    </div>
    <div v-if="userAddress" class="navbar">
      <div class="account-address">
        <h3>Account address: {{userAddress}}</h3>
      </div>
      <div class="router-links">
        <router-link to="/user">User</router-link>
        <router-link to="/device">Device</router-link>
        <router-link to="/authority">Authority</router-link>
        <router-link to="/marketplace">Marketplace</router-link>
      </div>
    </div>
    <router-view v-if="userAddress" class="router-view">

    </router-view>
  </div>
</template>

<style scoped lang="scss">
#wrapper {
  background: linear-gradient(to right, #be432b, #ef934f);
  height: 100vh;
  padding: 20px;
}

.navbar {
  box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 8px;
}

.router-view {
  box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
  margin-top: 10px;
  border-radius: 10px;
  background: white;
  padding: 15px 10px;
}

.keplr-button {
  font-size: 22px;
}

.keplr-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
}


</style>