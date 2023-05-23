<script setup lang="ts">
import BoardBase from "@/components/BoardBase.vue"
import { MapObjectLayer, HumanLayer, MapObject, Human } from "@/types/Layer"

type Props = {
  width: number
  height: number
  mapObjectLayer: MapObjectLayer
  humanLayer: HumanLayer
}

const props = defineProps<Props>()
</script>

<template>
  <BoardBase
    :width="props.width"
    :height="props.height"
    v-slot:default="slotProps"
  >
    <img
      src="/lake.png"
      alt="池"
      class="object object--lake"
      v-if="props.mapObjectLayer[slotProps.x][slotProps.y] === MapObject.Lake"
    />
    <img
      src="/castle.png"
      alt="城"
      class="object object--castle"
      v-if="props.mapObjectLayer[slotProps.x][slotProps.y] === MapObject.Castle"
    />
    <img
      src="/human_1.png"
      alt="城"
      class="object object--human"
      v-if="props.humanLayer[slotProps.x][slotProps.y] === Human.Player1Human"
    />
    <img
      src="/human_2.png"
      alt="城"
      class="object object--human"
      v-if="props.humanLayer[slotProps.x][slotProps.y] === Human.Player2Human"
    />
  </BoardBase>
</template>

<style scoped lang="scss">
.object {
  width: 100%;
  height: 100%;
  object-fit: contain;
  &--lake {
    z-index: 10;
    position: relative;
    top: 0;
    left: 0;
  }

  &--castle {
    width: 80%;
    height: 80%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 11;
  }
  &--human {
    position: relative;
    top: 0;
    left: 0;
    background-color: rgba(128, 128, 128, 0.158);
    z-index: 12;
  }
}
</style>
