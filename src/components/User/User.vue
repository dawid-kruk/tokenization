<script setup>

</script>

<template>
  <div>
    <div class="router-links">
      <router-link to="/user/management" class="h3">Management</router-link>
      <router-link to="/user/add-device">Add new device</router-link>
      <router-link to="/user/certificates">Your certificates</router-link>
    </div>
    <hr style="border: 1px solid black">
    <router-view></router-view>
    </div>
</template>

<style scoped lang="scss">

</style>