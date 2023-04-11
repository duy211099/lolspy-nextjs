export const kDDragonURL = 'https://ddragon.leagueoflegends.com'
export const kDDragonCDN = `${kDDragonURL}/cdn`
export const kDDragonAPI = `${kDDragonURL}/api`
export const kVersion = '13.6.1'
export const kLanguage = 'en_US'

export const kVersionUrl = `${kDDragonAPI}/versions.json`
export const kLanguageUrl = `${kDDragonCDN}/languages.json`

export const kGetChampionsUrl = (version: string) =>
  `${kDDragonCDN}/${version}/data/${kLanguage}/champion.json`
export const kChampionSplashUrl = (id = '', index = 0) =>
  `${kDDragonCDN}/img/champion/splash/${id}_${index}.jpg`
export const kChampionLoadingUrl = (id = '', index = 0) =>
  `${kDDragonCDN}/img/champion/loading/${id}_${index}.jpg`
export const kChampionIconUrl = (id = '') =>
  `${kDDragonCDN}/${kVersion}/img/champion/${id}.png`
