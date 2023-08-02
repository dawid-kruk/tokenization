<script setup>

</script>

<template>
  <div style="background: white; padding: 20px; margin-top: 15px">
  <div class="nav_div">
  <router-link to="/user/management">Zarządzanie urządzeniami</router-link>
  <router-link to="/user/add-device">Dodaj nowe urządzenie</router-link>
  <router-link to="/user/certificates">Twoje certyfikaty</router-link>
  </div>
  <router-view></router-view>

  </div>
</template>

<style scoped lang="scss">
  .nav_div {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
    a {
      color: black !important;
      text-decoration: none;
      font-weight: bold;
    }
    a:hover {
      font-size: 15px;
    }
  }
</style>