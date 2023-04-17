import { cdragonClient } from 'libs/cdApi'
import useSWR from 'swr'

const SWR_KEY = 'GET_PERKS'

export function useFetchPerks() {
  const rsp = useSWR(SWR_KEY, () => cdragonClient.getPerks())
  return rsp
}
