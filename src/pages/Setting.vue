<script setup lang="ts">
import { ref, watch } from "vue"
import { useBoardStore } from "@/store"
import { useRouter } from "vue-router"

import { EditMode } from "@/types/Setting"
import Board from "@/components/Setting/Board.vue"

const boardStore = useBoardStore()
const router = useRouter()

const width = boardStore.width
const height = boardStore.height
const mapObjectLayer = boardStore.mapObjectLayer
const humanLayer = boardStore.humanLayer
const editMode = ref<EditMode>(boardStore.editMode)
watch(editMode, () => {
  boardStore.editMode = editMode.value
})

const goHome = () => {
  boardStore.initBoards()
  router.push("/")
}

const startGame = () => {
  if (boardStore.player1HumanNum !== boardStore.humanNum) {
    alert(
      `Player1の職人を${boardStore.humanNum}人配置してください(現在の配置数: ${boardStore.player1HumanNum})`
    )
    return
  }

  if (boardStore.player2HumanNum !== boardStore.humanNum) {
    alert(
      `Player2の職人を${boardStore.humanNum}人配置してください(現在の配置数: ${boardStore.player2HumanNum})`
    )
    return
  }
  router.push("/game")
}
</script>

<template>
  <h1>オブジェクト初期設定</h1>
  <div>
    <input type="radio" id="castle" value="castle" v-model="editMode" />
    <label for="castle">城の設置</label>
  </div>

  <div>
    <input type="radio" id="pond" value="pond" v-model="editMode" />
    <label for="pond">池の設置</label>
  </div>

  <div>
    <input
      type="radio"
      id="player1Human"
      value="player1Human"
      v-model="editMode"
    />
    <label for="player1Human"
      ><span class="player1-font">Player1</span>の職人の設置</label
    >
  </div>

  <div>
    <input
      type="radio"
      id="player2Human"
      value="player2Human"
      v-model="editMode"
    />
    <label for="player2Human"
      ><span class="player2-font">Player2</span>の職人の設置</label
    >
  </div>

  <div>
    <input type="radio" id="delete" value="delete" v-model="editMode" />
    <label for="delete">オブジェクトの削除</label>
  </div>

  <Board
    :width="width"
    :height="height"
    :map-object-layer="mapObjectLayer"
    :human-layer="humanLayer"
    class="board"
  />

  <div class="router-button">
    <button @click="goHome">戻る</button>
    <button @click="startGame">ゲームスタート</button>
  </div>
</template>

<style scoped lang="scss">
.player1-font {
  color: #bc0000;
}

.player2-font {
  color: $color-human-player2;
}

:has(+ .board) {
  margin-bottom: 1em;
}

.board {
  margin-bottom: 1em;
}

.router-button {
  display: flex;
}

.router-button > button {
  margin-right: 1em;
}
</style>
