import { kRecommendRunes } from 'constants/kCDragonApi'
import fetcher from './fetcher'

class CDragonClient {
  getRecommendRunes() {
    return fetcher<any>(kRecommendRunes)
  }
}
const cdragonClient = new CDragonClient()

export { cdragonClient }
