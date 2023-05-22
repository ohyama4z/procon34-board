<script setup lang="ts"></script>

<template>
  <span class="container">
    <span>
      <router-view />
    </span>
  </span>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
</style>
