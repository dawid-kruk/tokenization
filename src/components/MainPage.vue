<script setup lang="ts">
import {ref} from 'vue'
import {AminoTypes, SigningStargateClient} from "@cosmjs/stargate";
import {createKeplrConfig, createVestingAminoConverters} from "./helpers";
import {registry} from "../../ts-client";
import {blockchainConfig} from "../blockchainConfig";
import {UserStore} from "../services/user_store";
import {GlobalStore} from "../services/global_store";

const userAddress = ref("")

const denomination = 1000000;

const connectWithKeplr = async () => {
    const chainInfo = createKeplrConfig();
    await window.keplr.experimentalSuggestChain(chainInfo);
    await window.keplr.enable(chainInfo.chainId);
    const offlineSigner = window.keplr.getOfflineSigner(chainInfo.chainId);
    const accounts = await offlineSigner.getAccounts();
    userAddress.value = accounts[0].address
    const aminoTypes = new AminoTypes(createVestingAminoConverters())
    const client = await SigningStargateClient.connectWithSigner(
        blockchainConfig.rpcUrl,
        offlineSigner,
        {registry, aminoTypes}
    );
    UserStore.setUserAddress(userAddress.value)
    UserStore.setUserClient(client)
}

</script>

<template>
  <div id="wrapper">
    <div v-if="!GlobalStore.loader">
      <div class="wrapper">
          <div v-if="userAddress">
              <h3>User address: {{userAddress}}</h3>
          </div>
        <div v-if="!userAddress" >
            <h2>To split vesting connect with keplr first</h2>
            <button @click="connectWithKeplr()">Connect with keplr</button>
<!--            <hr style="border: 1px solid grey; width: 100%"/>-->
<!--            <h3>Enter mnemonic:</h3>-->
<!--            <textarea v-model="mnemonic"></textarea>-->
<!--            <button @click="retrieveKey(); retrieved = true">Connect with mnemonic</button>-->
        </div>

        <div v-if="userAddress">
          <h1>Connect as:</h1>
          <router-link to="/user">User</router-link>
          <router-link to="/device">Device</router-link>
          <router-link to="/authority">Authority</router-link>
        </div>
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
    width: 400px;
    background: white;
  }
}

</style>
