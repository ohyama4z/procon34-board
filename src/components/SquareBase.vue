<script setup lang="ts">
type Emits = {
  (e: "click-square"): void
}
const emit = defineEmits<Emits>()
const handleClick = () => {
  emit("click-square")
}
</script>

<template>
  <div class="square" @click="handleClick">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.square {
  position: relative;
  padding: auto;
  width: 50px;
  height: 50px;
  border: 1px solid black;
}
</style>
