import useSWR from 'swr'
import { ddragonClient } from 'libs/ddApi'

const SWR_KEY = 'GET_CHAMPION'

export function useFetchChampion(version: string, id: string) {
  const rsp = useSWR(SWR_KEY, () => ddragonClient.getChampion(version, id))

  return rsp
}
