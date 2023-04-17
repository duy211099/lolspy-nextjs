export interface IChampion {
  version: string
  id: string
  key: string
  name: string
  title: string
  blurb: string
  info: IChampionInfo
  image: IImage
  tags: string[]
  partype: string[]
  stats: any
  spells: ISpell[]
  passive: IPassive
  allytips: string[]
  enemytips: string[]
}

export interface ISpell {
  id: string
  name: string
  description: string
  tooltip: string
  image: IImage
}
export interface IPassive {
  name: string
  description: string
  image: IImage
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

export interface IImage {
  full: string
  sprite: string
  group: string
  x: number
  y: number
  w: number
  h: number
}
