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

export const useBoardStore = defineStore({
  id: "board",
  state: () => {
    return {
      width: 0,
      height: 0,
      mapObjectLayer: [] as MapObjectLayer,
      areaLayer: [] as AreaLayer,
      wallLayer: [] as WallLayer,
      humanLayer: [] as HumanLayer,
    }
  },
  actions: {
    initBoards() {
      const initBoardBase = Array(this.width)
        .fill(0)
        .map(() => Array(this.height).fill(0))

      this.mapObjectLayer = initBoardBase.map((row) =>
        row.map(() => MapObject.None)
      )
      this.areaLayer = initBoardBase.map((row) =>
        row.map(() => Area.NeutrallArea)
      )
      this.wallLayer = initBoardBase.map((row) => row.map(() => Wall.None))
      this.humanLayer = initBoardBase.map((row) => row.map(() => Human.None))
    },
  },
})
