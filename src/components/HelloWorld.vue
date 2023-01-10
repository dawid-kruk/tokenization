<script setup lang="ts">
import {ref} from 'vue'
import * as crypto from '@cosmjs/crypto';
import * as signing from '@cosmjs/proto-signing';
import axios from 'axios'
import {SigningStargateClient} from "@cosmjs/stargate";
import {coins} from "@cosmjs/proto-signing";
import {bytesToHex, getFees, hexToBytes, PRIVATE_KEY} from "./helpers";

const hexPrivateKey = ref("")
const userAddress = ref("")
const buffers = ref([])
const confirmed = ref(false)
const receiverAddress = ref("c4e13fn0ew7chandqc248yv3hvsnle0fprkxny2hz7")

let client:SigningStargateClient
const retrieved = false

const cleanLocalStorage = () => {
  localStorage.removeItem(PRIVATE_KEY)
  location.reload()
}

const getKeyFromLocalstorage = async () => {
  const privateKey = localStorage.getItem(PRIVATE_KEY)

  if (privateKey) {
    confirm("Use this shard to load privateKey: " + privateKey + "?")
    const res = await axios.post("http://localhost:3000/combine", { arrayBuffersSent: [privateKey] });
    hexPrivateKey.value = res.data
    await retrieveKey()
  } else {
    alert("No key in localstorage")
  }
}

const setToLocalstorage = async (privateKey: string) => {
  const response = await axios.post("http://localhost:3000/split", { privateKey });
  localStorage.setItem(PRIVATE_KEY, bytesToHex(response.data[0].data))
  const buffersToHex = []
  for (let i = 0; i < response.data.length; i++) {
    buffersToHex.push(bytesToHex(response.data[i].data))
  }
  buffers.value = buffersToHex
}

const retrieveKey = async() => {
  try {
    await setToLocalstorage(hexPrivateKey.value)
    const keyPair = await crypto.Secp256k1.makeKeypair(hexToBytes(hexPrivateKey.value))
    const wallet = await signing.DirectSecp256k1Wallet.fromKey(keyPair.privkey, "c4e")
    const accounts = await wallet.getAccounts();
    userAddress.value = accounts[0].address
    client = await SigningStargateClient.connectWithSigner(
        "http://0.0.0.0:26657/",
        wallet,
    );
  } catch (e) {
    alert("Wrong private key!")
  }
}

const sendTokens = async() => {
  if (confirm("Confirm transaction")) {
    confirmed.value = true
    try {
      const coinsToSend = new coins(1000, "uc4e")
      const res = await client.sendTokens(userAddress.value, receiverAddress.value, coinsToSend, getFees(), "ABC=")
      confirmed.value = false
      console.log(res)
      if (res.code === 0) {
        alert("Transaction successful! Sent "+ coinsToSend[0].amount +" tokens.")
      } else {
        alert("Transaction error!")
      }
    } catch (e) {
      confirmed.value = false
      alert("Error: " + e.toString())
    }

  }
}

</script>

<template>
  <div id="wrapper">
    <div v-if="!confirmed">
      <button @click="cleanLocalStorage" style="margin: 10px 10px 10px;">Clean localstorage</button>
      <button @click="getKeyFromLocalstorage()">Get from localstorage</button>
      <div class="wrapper">
        <div>
          <h3>Enter Secp256k1 private key in hexadecimal format:</h3>
          <textarea v-model="hexPrivateKey" > </textarea>
          <button @click="retrieveKey(); retrieved = true">Retrieve private key</button>
          <div v-if="retrieved">
            <p v-for="item in buffers" style="overflow-wrap: break-word; inline-size: 300px">{{ item }}</p>
          </div>
        </div>

        <div v-if="userAddress" style="margin-top: 10px">
          <h3>User address: {{userAddress}}</h3>
          <h3>Send tokens to user: </h3>
          <input v-model="receiverAddress" type="text" />
          <button @click="sendTokens()">Send tokens</button>
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
  background: orange;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  align-content: center;
  align-items: center;

  div {
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
