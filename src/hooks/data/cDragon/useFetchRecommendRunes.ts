import { cdragonClient } from 'libs/cdApi'
import useSWR from 'swr'
import { IPerkChampionRecommendation } from 'types/IPerk'

const SWR_KEY = 'GET_PERKS_RECOMM'

export function useFetchRecommendRunes() {
  const rsp = useSWR<IPerkChampionRecommendation[]>(SWR_KEY, () =>
    cdragonClient.getRecommendPerks(),
  )
  return rsp
}
