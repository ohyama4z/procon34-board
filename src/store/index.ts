import { defineStore } from "pinia"
import {
  MapObject,
  Area,
  Wall,
  Human,
  MapObjectLayer,
  AreaLayer,
  WallLayer,
  HumanLayer,
} from "@/types/Layer"
import { EditMode } from "@/types/Setting"
import { computed, ref } from "vue"

export const useBoardStore = defineStore(
  "board",
  () => {
    const humanNum = ref<number>(1)

    const width = ref<number>(1)
    const height = ref<number>(1)

    const editMode = ref<EditMode>("delete")

    const mapObjectLayer = ref<MapObjectLayer>([])
    const areaLayer = ref<AreaLayer>([])
    const wallLayer = ref<WallLayer>([])
    const humanLayer = ref<HumanLayer>([])
    const player1HumanNum = computed(() => {
      return humanLayer.value
        .flat()
        .filter((human) => human === Human.Player1Human).length
    })
    const player2HumanNum = computed(() => {
      return humanLayer.value
        .flat()
        .filter((human) => human === Human.Player2Human).length
    })

    const initBoards = () => {
      const initBoardBase = Array(width.value)
        .fill(0)
        .map(() => Array(height.value).fill(0))

      mapObjectLayer.value = initBoardBase.map((row) =>
        row.map(() => MapObject.None)
      )
      areaLayer.value = initBoardBase.map((row) =>
        row.map(() => Area.NeutrallArea)
      )
      wallLayer.value = initBoardBase.map((row) => row.map(() => Wall.None))
      humanLayer.value = initBoardBase.map((row) => row.map(() => Human.None))
    }

    return {
      humanNum,
      width,
      height,
      editMode,
      mapObjectLayer,
      areaLayer,
      wallLayer,
      humanLayer,
      player1HumanNum,
      player2HumanNum,
      initBoards,
    }
  },
  {
    persist: true,
  }
)
