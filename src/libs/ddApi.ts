import { kChampionsUrl } from 'constants/kApi'
import { IChampionResponse } from 'types/IChampions'
import fetcher from './fetcher'

class DDragonClient {
  getChampions() {
    return fetcher<IChampionResponse>(`${kChampionsUrl}`)
  }
}
const ddragonClient = new DDragonClient()

export { ddragonClient }
