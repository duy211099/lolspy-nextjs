import useSWR from 'swr'
import { ddragonClient } from 'libs/ddApi'

const SWR_KEY = 'GET_CHAMPIONS'

export function useFetchChampions() {
  const result = useSWR(SWR_KEY, () => ddragonClient.getChampions())

  return result
}
