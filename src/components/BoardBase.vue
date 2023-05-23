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
    <div v-for="x in props.height" class="board-row" :key="x">
      <Square v-for="y in props.width" :key="y">
        <slot :x="x - 1" :y="y - 1"></slot>
      </Square>
    </div>
  </div>
</template>

<style scoped lang="scss">
.board-row {
  display: flex;
}
</style>
