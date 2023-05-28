<script setup lang="ts">
import Square from "@/components/SquareBase.vue"

type Props = {
  width: number
  height: number
}

type Emits = {
  (e: "clickSquare", x: number, y: number): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const clickSquare = (x: number, y: number): void => {
  emit("clickSquare", x, y)
}
</script>

<template>
  <div class="board">
    <div v-for="x in props.height" class="board-row" :key="x">
      <Square
        v-for="y in props.width"
        :key="y"
        @click-square="() => clickSquare(x - 1, y - 1)"
      >
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
