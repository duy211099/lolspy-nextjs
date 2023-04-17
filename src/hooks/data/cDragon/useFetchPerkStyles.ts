import { cdragonClient } from 'libs/cdApi'
import useSWR from 'swr'
import { IPerkStyles } from 'types/IPerk'

const SWR_KEY = 'GET_PERK_STYLES'

export function useFetchPerkStyles() {
  const rsp = useSWR<IPerkStyles>(SWR_KEY, () => cdragonClient.getPerkStyles())
  return rsp
}
