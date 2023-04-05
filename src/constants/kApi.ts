export const kDDragonURL = 'https://ddragon.leagueoflegends.com/cdn'
export const kVersion = '13.6.1'
export const kLanguage = 'en_US'

export const kChampionsUrl = `${kDDragonURL}/${kVersion}/data/${kLanguage}/champion.json`
export const kChampionSplashAssetUrl = (id = '', index = 0) =>
  `${kDDragonURL}/img/champion/splash/${id}_${index}.jpg`
export const kChampionLoadingAssetUrl = (id = '', index = 0) =>
  `${kDDragonURL}/img/champion/loading/${id}_${index}.jpg`
export const kChampionSquareAssetUrl = (id = '') =>
  `${kDDragonURL}/${kVersion}/img/champion/${id}.png`
