<script setup lang="ts">
import { useBoardStore } from "@/store"
import BoardBase from "@/components/BoardBase.vue"
import { MapObjectLayer, HumanLayer, MapObject, Human } from "@/types/Layer"

type Props = {
  width: number
  height: number
  mapObjectLayer: MapObjectLayer
  humanLayer: HumanLayer
}

const props = defineProps<Props>()
const boardStore = useBoardStore()

const putHuman = (x: number, y: number, human: Human) => {
  if (
    human === Human.Player1Human &&
    boardStore.player1HumanNum >= boardStore.humanNum
  ) {
    alert(`Player1の職人の数は${boardStore.humanNum}人までです`)
    return
  }

  if (
    human === Human.Player2Human &&
    boardStore.player2HumanNum >= boardStore.humanNum
  ) {
    alert(`Player2の職人の数は${boardStore.humanNum}人までです`)
    return
  }

  boardStore.humanLayer[x][y] = human
}

const clickSquare = (x: number, y: number) => {
  switch (boardStore.editMode) {
    case "castle":
      boardStore.mapObjectLayer[x][y] = MapObject.Castle
      break
    case "pond":
      boardStore.mapObjectLayer[x][y] = MapObject.Pond
      break
    case "player1Human":
      putHuman(x, y, Human.Player1Human)
      break
    case "player2Human":
      putHuman(x, y, Human.Player2Human)
      break
    case "delete":
      boardStore.mapObjectLayer[x][y] = MapObject.None
      boardStore.humanLayer[x][y] = Human.None
      break
  }
}
</script>

<template>
  <BoardBase
    :width="props.width"
    :height="props.height"
    v-slot:default="slotProps"
    @click-square="clickSquare"
    class="board"
  >
    <img
      src="/pond.png"
      alt="池"
      class="image image--pond"
      v-if="props.mapObjectLayer[slotProps.x][slotProps.y] === MapObject.Pond"
    />
    <img
      src="/castle.png"
      alt="城"
      class="image image--castle"
      v-if="props.mapObjectLayer[slotProps.x][slotProps.y] === MapObject.Castle"
    />
    <img
      src="/human_player1.png"
      alt="Player1の職人"
      class="image image--human"
      v-if="props.humanLayer[slotProps.x][slotProps.y] === Human.Player1Human"
    />
    <img
      src="/human_player2.png"
      alt="Player2の職人"
      class="image image--human"
      v-if="props.humanLayer[slotProps.x][slotProps.y] === Human.Player2Human"
    />
  </BoardBase>
</template>

<style scoped lang="scss">
.image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &--pond {
    top: 15%;
    left: 15%;
    width: 70%;
    height: 70%;
    z-index: 100;
  }

  &--castle {
    top: 15%;
    left: 15%;
    width: 70%;
    height: 70%;
    z-index: 100;
  }

  &--human {
    background-color: rgba(174, 174, 174, 0.158);
    z-index: 110;
  }
}
</style>
