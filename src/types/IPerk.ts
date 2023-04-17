export interface IPerkChampionRecommendation {
  championId: number
  isOverride: boolean
  runeRecommendations: IRuneRecommendation[]
}
export interface IRuneRecommendation {
  isDefaultPosition: boolean
  mapId: number
  minSummonerLevel: number
  perkIds: number[]
  position: string
  primaryPerkStyleId: number
  secondaryPerkStyleId: number
  summonerSpellIds: number[]
  recommendationId: string
}

export interface IPerkStyles {
  schemaVersion: 2
  styles: IPerkStyle[]
}
export interface IPerkStyle {
  id: number
  iconPath: string
  allowedSubStyles: number[]
  assetMap: any[]
  defaultPageName: string
  defaultPerks: number[]
  defaultPerksWhenSplashed: number[]
  defaultStatModsPerSubStyle: any[]
  defaultSubStyle: number
  isAdvanced: boolean
  name: string
  slots: any[]
  subStyleBonus: any[]
  tooltip: string
}
