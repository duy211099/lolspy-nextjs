export const kDDragonURL = 'https://ddragon.leagueoflegends.com/cdn'
export const kVersion = '13.6.1'
export const kLanguage = 'en_US'

export const kChampionsUrl = `${kDDragonURL}/${kVersion}/data/${kLanguage}/champion.json`
export const kChampionSplashUrl = (id = '', index = 0) =>
  `${kDDragonURL}/img/champion/splash/${id}_${index}.jpg`
export const kChampionLoadingUrl = (id = '', index = 0) =>
  `${kDDragonURL}/img/champion/loading/${id}_${index}.jpg`
export const kChampionIconUrl = (id = '') =>
  `${kDDragonURL}/${kVersion}/img/champion/${id}.png`
