<script setup lang="ts">

import {GlobalStore} from "./services/global_store.js";
</script>

<template>
  <div v-bind:style= "[GlobalStore.loader ? {display: 'none'} : {display: 'block'}]">
    <router-view />
  </div>
  <div v-bind:style= "[!GlobalStore.loader ? {display: 'none'} : {display: 'flex'}]" class="loaderDiv">
    <h1 style="margin: -100px 0 50px 0;">Loading ...</h1>
    <span class="loader"></span>
  </div>
</template>

<style scoped>
.loaderDiv {
  display:flex;
  padding-top: -300px;
  flex-direction: column;
  background: linear-gradient(to right, #be432b, #ef934f);
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.loader {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  position: relative;
  background: rgba(255, 255, 255, 0.8);
}
.loader:before , .loader:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: #FFF;
  animation: slide 1s infinite linear alternate;
  opacity: 0.5;
}
.loader:after {
  animation: slide2 1s infinite linear alternate;
  opacity: 1;

}
@keyframes slide {
  0% , 20% {  transform: translate(0, 0)  }
  80% , 100% { transform: translate(30px, 30px) }
}
@keyframes slide2 {
  0% , 20% {  transform: translate(0, 0) }
  80% , 100% { transform: translate(-30px, -30px) }
}



</style>
