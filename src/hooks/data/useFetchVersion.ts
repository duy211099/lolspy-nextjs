import useSWR from 'swr'
import { ddragonClient } from 'libs/ddApi'

const SWR_KEY = 'GET_VERSION'

export function useFetchVersion() {
  const result = useSWR(SWR_KEY, () => ddragonClient.getVersion())

  return result
}
