<script setup lang="ts">
import {ref} from 'vue'
import { SigningStargateClient} from "@cosmjs/stargate";
import { createKeplrConfig} from "./helpers";
import {registry} from "../../ts-client";
import {UserStore} from "../services/user_store";

const userAddress = ref("")

const denomination = 1000000;

const connectWithKeplr = async () => {
    const chainInfo = createKeplrConfig();
    console.log(chainInfo)
    await window.keplr.experimentalSuggestChain(chainInfo);
    await window.keplr.enable("c4echain");
    const offlineSigner = window.keplr.getOfflineSigner("c4echain");
    const accounts = await offlineSigner.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(
        "localhost:26657",
        offlineSigner,
        {registry}
    );

    UserStore.setUserAddress( accounts[0].address)
    UserStore.setUserClient(client)
  userAddress.value = accounts[0].address
}

</script>
<template>
  <div id="wrapper">
    <div v-if="userAddress" class="navbar">
      <div class="account-address">
        <h3>Account address: {{userAddress}}</h3>
      </div>
      <div class="router-links">
        <router-link to="/user">User</router-link>
        <router-link to="/device">Device</router-link>
        <router-link to="/authority">Authority</router-link>
      </div>
    </div>
    <div v-if="!userAddress">
      <h2>To split vesting connect with keplr first</h2>
      <button @click="connectWithKeplr()">Connect with keplr</button>
    </div>
    <router-view v-if="userAddress"></router-view>
  </div>
</template>

<style scoped lang="scss">
#wrapper {
  background: linear-gradient(to right, #be432b, #ef934f);
  height: 100vh;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 8px;
}

.router-links {
  display: flex;
  gap: 15px;

  a {
    color: black !important;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    font-size: 15px;
  }
}

button {
  padding: 10px 20px;
  border: none;
  background: #ff9800;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e68400;
  }
}

</style>