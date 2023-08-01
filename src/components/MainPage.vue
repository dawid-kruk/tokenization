<script setup lang="ts">
import {ref} from 'vue'
import {AminoTypes, SigningStargateClient} from "@cosmjs/stargate";
import {coins} from "@cosmjs/proto-signing";
import {createKeplrConfig, createVestingAminoConverters, getFees} from "./helpers";
import {registry} from "../../ts-client";
import {blockchainConfig} from "../blockchainConfig";
import {MsgBurn} from "../../ts-client/chain4energy.c4echain.cfeminter/types/c4echain/cfeminter/tx";
import UserService from "../services/user_service";
const mnemonic = ref("")
const userAddress = ref("")
const amount = ref("")
const confirmed = ref(false)
const toAddress = ref("")

const denomination = 1000000;

let userService:UserService

const createEncodedMsg = (objectToEncode: any) => {
  return {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
    value: objectToEncode,
  };
}
declare global { interface Window {keplr:any} }

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
    userService = new UserService(userAddress.value, client)
}

const splitVesting = async() => {
  if (confirm("Confirm transaction")) {
    confirmed.value = true
    try {
      const coinsToSend = new coins(amount.value * denomination, "uc4e");
      const msgSplitVestsing: MsgBurn = {
        address: "c4e1n65nctlr97na2h9sjul94ge4y95uhtxwmhn9kx",
        amount: [{
          amount: "123",
          denom: "uc4e"
        }]
      }
      const encoded = createEncodedMsg(msgSplitVestsing)
      const x =  await client.signAndBroadcast(this.userAddress, [encoded], getFees())

      console.log(x)
      confirmed.value = false
      // if (res.code === 0) {
      //   alert("Transaction successful! Splitted "+ coinsToSend[0].amount / denomination +"C4E tokens.")
      // } else {
      //   console.log(res.rawLog)
      //   alert("Transaction error! Raw error log:" + res.rawLog)
      // }
    } catch (e) {
      confirmed.value = false
      console.log(e.toString())
      alert("Error: " + e.toString())
    }

  }
}

</script>

<template>
  <div id="wrapper">
    <div v-if="!confirmed">
      <div class="wrapper">
          <div v-if="userAddress">
              <h3>User address: {{userAddress}}</h3>
          </div>
        <div v-if="!userAddress" >
            <h2>To split vesting connect with keplr first</h2>
            <button @click="connectWithKeplr()">Connect with keplr</button>
<!--            TODO: add if needed-->
<!--            <hr style="border: 1px solid grey; width: 100%"/>-->
<!--            <h3>Enter mnemonic:</h3>-->
<!--            <textarea v-model="mnemonic"></textarea>-->
<!--            <button @click="retrieveKey(); retrieved = true">Connect with mnemonic</button>-->
        </div>

        <div v-if="userAddress">
          <h3>Split vesting to new vesting acount: </h3>
          <input v-model="toAddress" type="text" />
          <h3>Amount to split (C4E): </h3>
          <input v-model="amount" type="number" />
          <button @click="splitVesting()">Split vesting</button>
        </div>
      </div>
    </div>

    <div v-if="confirmed">
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
