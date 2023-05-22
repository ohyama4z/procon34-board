<script setup lang="ts">
import Square from "@/components/SquareBase.vue"

type Props = {
  width: number
  height: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="board">
    <div v-for="row in props.height" class="board-row" :key="row">
      <Square v-for="col in props.width" :key="col">
        <slot></slot>
      </Square>
    </div>
  </div>
</template>

<style scoped lang="scss">
.board-row {
  display: flex;
}
</style>
