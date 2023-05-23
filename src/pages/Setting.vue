<script setup lang="ts">
import { ref } from "vue"
import { useBoardStore } from "@/store"
import { MapObject } from "@/types/Layer"
import Board from "@/components/Setting/Board.vue"

const boardStore = useBoardStore()
const width = boardStore.width
const height = boardStore.height
const mapObjectLayer = boardStore.mapObjectLayer
const humanLayer = boardStore.humanLayer

const editMode = ref<MapObject>(MapObject.None)
</script>

<template>
  <h1>オブジェクト初期設定</h1>
  <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">オブジェクトの削除</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">城</label>
  </div>

  <div>
    <input type="radio" id="louie" name="drone" value="louie" />
    <label for="louie">池</label>
  </div>

  <div>
    <input type="radio" id="louie" name="drone" value="louie" />
    <label for="louie">職人</label>
  </div>

  <Board
    :width="width"
    :height="height"
    :map-object-layer="mapObjectLayer"
    :human-layer="humanLayer"
  />
</template>
