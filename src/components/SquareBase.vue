<script setup lang="ts"></script>

<template>
  <div class="square">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.square {
  padding: auto;
  width: 50px;
  height: 50px;
  border: 1px solid black;
}
</style>
