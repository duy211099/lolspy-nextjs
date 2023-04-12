import {
  kGetChampionUrl,
  kGetChampionsUrl,
  kLanguageUrl,
  kVersionUrl,
} from 'constants/kDDragonApi'
import { IChampionResponse } from 'types/IChampions'
import fetcher from './fetcher'

class DDragonClient {
  getVersion() {
    return fetcher<string[]>(`${kVersionUrl}`)
  }
  getLanguage() {
    return fetcher<string[]>(`${kLanguageUrl}`)
  }
  getChampions(version: string) {
    return fetcher<IChampionResponse>(kGetChampionsUrl(version))
  }
  getChampion(version: string, id: string) {
    return fetcher<IChampionResponse>(kGetChampionUrl(version, id))
  }
}
const ddragonClient = new DDragonClient()

export { ddragonClient }
