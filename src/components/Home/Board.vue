<script setup lang="ts">
import BoardBase from "@/components/BoardBase.vue"
type Props = {
  width: number
  height: number
}

const props = defineProps<Props>()
</script>

<template>
  <BoardBase :width="props.width" :height="props.height"></BoardBase>
</template>
