import { kRecommendPerks } from 'constants/kCDragonApi'
import { kPerks, kPerkStyles } from '../constants/kCDragonApi'
import fetcher from './fetcher'

class CDragonClient {
  getRecommendPerks() {
    return fetcher<any>(kRecommendPerks)
  }
  getPerkStyles() {
    return fetcher<any>(kPerkStyles)
  }
  getPerks() {
    return fetcher<any>(kPerks)
  }
}
const cdragonClient = new CDragonClient()

export { cdragonClient }
