<script setup lang="ts">
import {ref} from 'vue'
import { SigningStargateClient} from "@cosmjs/stargate";
import { createKeplrConfig} from "./helpers";
import {registry} from "../../ts-client";
import {UserStore} from "../services/user_store";
import {GlobalStore} from "../services/global_store";

const userAddress = ref("")

const denomination = 1000000;

const connectWithKeplr = async () => {
    const chainInfo = createKeplrConfig();
    console.log(chainInfo)
    await window.keplr.experimentalSuggestChain(chainInfo);
    await window.keplr.enable("c4echain");
    const offlineSigner = window.keplr.getOfflineSigner("c4echain");
    const accounts = await offlineSigner.getAccounts();
    userAddress.value = accounts[0].address
    const client = await SigningStargateClient.connectWithSigner(
        "localhost:26657",
        offlineSigner,
        {registry}
    );

    UserStore.setUserAddress(userAddress.value)
    UserStore.setUserClient(client)
}

</script>

<template>
  <div id="wrapper">
    <div v-if="!GlobalStore.loader">
      <div class="wrapper" style="width: 100%">
          <div v-if="userAddress">
              <h3>Account address: {{userAddress}}</h3>
            <div>
              <h1>Connect as:</h1>
              <router-link to="/user">User</router-link>
              <router-link to="/device">Device</router-link>
              <router-link to="/authority">Authority</router-link>
            </div>

          </div>
        <div v-if="!userAddress" >
            <h2>To split vesting connect with keplr first</h2>
            <button @click="connectWithKeplr()">Connect with keplr</button>
        </div>

          <router-view  v-if="userAddress">

          </router-view>

      </div>
    </div>

    <div v-if="GlobalStore.loader">
      <h1 style="font-size:45px; text-align: center; padding: 300px 0; margin: 0">Loading...</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">


#wrapper {
  height: 100vh;
  padding-top: 40px;
  background: orange;
}
textarea {
  min-height: 150px;
  border-radius: 10px;
  border: 1px solid;
  padding: 7px;
  font-size: 15px;
  box-shadow: 3px 4px 4px grey;
}
input {
  border-radius: 10px;
  border: 1px solid;
  padding: 7px;
  font-size: 15px;
  box-shadow: 3px 4px 4px grey;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;

  div {
    box-shadow: 2px 5px 24px 0px rgba(66, 68, 90, 1);
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background: white;
  }
}

</style>
