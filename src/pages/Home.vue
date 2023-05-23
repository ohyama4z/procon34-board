<script setup lang="ts">
import { ref, watch } from "vue"
import { useRouter } from "vue-router"
import { useBoardStore } from "@/store"

import Board from "@/components/Home/Board.vue"

const width = ref(3)
const height = ref(3)
watch([width, height], () => {
  width.value = width.value < 1 ? 1 : width.value
  height.value = height.value < 1 ? 1 : height.value
})

const router = useRouter()
const boardStore = useBoardStore()
const goSetting = () => {
  boardStore.width = width.value
  boardStore.height = height.value
  boardStore.initBoards()
  router.push("/setting")
}
</script>

<template>
  <span>
    <span class="setting">
      <h1>盤面サイズの設定</h1>
      <div>
        width:
        <input v-model="width" type="number" />
      </div>
      <div>
        height:
        <input v-model="height" type="number" />
      </div>

      <div>盤面のサイズ:{{ width }}x{{ height }}</div>

      <Board :width="width" :height="height" class="board"></Board>

      <button @click="goSetting">オブジェクト配置設定へ</button>
    </span>
  </span>
</template>

<style scoped lang="scss">
:has(+ .board) {
  margin-bottom: 2em;
}
.board {
  margin-bottom: 2em;
}
</style>
