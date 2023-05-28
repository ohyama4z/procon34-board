type LayerBase<T> = T[][]

export enum MapObject {
  None = 0,
  Pond,
  Castle,
}

export enum Area {
  NeutrallArea = 0,
  Player1Area,
  Player2Area,
  BothPlayerArea,
}

export enum Wall {
  None = 0,
  Player1Wall,
  Player2Wall,
}

export enum Human {
  None = 0,
  Player1Human,
  Player2Human,
}

export type MapObjectLayer = LayerBase<MapObject>
export type AreaLayer = LayerBase<Area>
export type WallLayer = LayerBase<Wall>
export type HumanLayer = LayerBase<Human>

export type Layer = MapObjectLayer | AreaLayer | WallLayer | HumanLayer
