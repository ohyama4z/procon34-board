<script setup lang="ts">
import { ref, watch } from "vue"
import { useRouter } from "vue-router"
import { useBoardStore } from "@/store"
import Board from "@/components/Home/Board.vue"

const boardStore = useBoardStore()
const router = useRouter()

const humanNum = ref(1)
watch([humanNum], () => {
  if (humanNum.value < 1) {
    humanNum.value = 1
    return
  }

  if (humanNum.value > (width.value * height.value) / 2) {
    humanNum.value = Math.floor((width.value * height.value) / 2)
    return
  }
})

const width = ref(3)
const height = ref(3)
watch([width, height], () => {
  width.value = width.value < 1 ? 1 : width.value
  height.value = height.value < 1 ? 1 : height.value
})

const goSetting = () => {
  boardStore.width = width.value
  boardStore.height = height.value
  boardStore.humanNum = humanNum.value
  boardStore.initBoards()
  router.push("/setting")
}
</script>

<template>
  <span>
    <span class="setting">
      <h1>ルールの設定</h1>
      <div>職人の人数: <input v-model="humanNum" type="number" /></div>
      <div>
        width:
        <input v-model="width" type="number" />
      </div>
      <div>
        height:
        <input v-model="height" type="number" />
      </div>

      <div></div>
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
