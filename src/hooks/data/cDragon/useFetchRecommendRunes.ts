import { cdragonClient } from 'libs/cdApi'
import useSWR from 'swr'

const SWR_KEY = 'GET_RECOM_RUNE'

export function useFetchRecommendRunes() {
  const rsp = useSWR(SWR_KEY, () => cdragonClient.getRecommendRunes())
  return rsp
}
