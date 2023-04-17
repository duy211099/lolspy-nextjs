import { cdragonClient } from 'libs/cdApi'
import useSWR from 'swr'
import { IPerk } from 'types/IPerk'

const SWR_KEY = 'GET_PERKS'

export function useFetchPerks() {
  const rsp = useSWR<IPerk[]>(SWR_KEY, () => cdragonClient.getPerks())
  return rsp
}
