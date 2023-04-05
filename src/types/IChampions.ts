export interface IChampion {
  version: string
  id: string
  key: string
  name: string
  title: string
  blurb: string
  info: IChampionInfo
  image: IChampionImage
  tag: string[]
  partype: string[]
  stats: any
}

export type tType = 'champion' | string

export type tFormat = 'standAloneComplex' | string

export interface IChampionResponse {
  type: tType
  format: tFormat
  version: string
  data: IChampions
  error: string
}

export interface IChampions {
  [key: string]: IChampion
}

export interface IChampionInfo {
  difficulty: number
}

export interface IChampionImage {
  full: string
  sprite: string
  group: string
  x: number
  y: number
  w: number
  h: number
}
