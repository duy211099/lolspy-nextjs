import { ddragonClient } from 'libs/ddApi'
import useSWRImmutable from 'swr/immutable'

const SWR_KEY = 'GET_CHAMPIONS'

export function useFetchChampions(version: string) {
  const { data, ...rest } = useSWRImmutable(SWR_KEY, () =>
    ddragonClient.getChampions(version),
  )

  return { champion: data, ...rest }
}
