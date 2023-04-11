import useSWR from 'swr'
import { ddragonClient } from 'libs/ddApi'

const SWR_KEY = 'GET_CHAMPIONS'

export function useFetchChampions(version: string) {
  const { data, ...rest } = useSWR(SWR_KEY, () =>
    ddragonClient.getChampions(version),
  )

  return { champion: data, ...rest }
}
