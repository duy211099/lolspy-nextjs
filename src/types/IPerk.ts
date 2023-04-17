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
  schemaVersion: number
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
  slots: IPerkSlot[]
  subStyleBonus: any[]
  tooltip: string
}

export interface IPerkSlot {
  type: 'kKeyStone' | 'kMixedRegularSplashable' | 'kStatMod'
  slotLabel: string
  perks: number[]
}

export interface IPerk {
  id: number
  name: string
  longDesc: string
  shortDesc: string
  tooltip: string
}
