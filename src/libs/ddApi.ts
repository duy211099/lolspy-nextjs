import { kGetChampionsUrl, kVersionUrl } from 'constants/kApi'
import { IChampionResponse } from 'types/IChampions'
import fetcher from './fetcher'

class DDragonClient {
  getVersion() {
    return fetcher<string[]>(`${kVersionUrl}`)
  }
  getChampions(version: string) {
    return fetcher<IChampionResponse>(kGetChampionsUrl(version))
  }
}
const ddragonClient = new DDragonClient()

export { ddragonClient }
