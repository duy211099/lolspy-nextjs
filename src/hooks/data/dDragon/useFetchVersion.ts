import useSWRImmutable from 'swr/immutable'
import { ddragonClient } from 'libs/ddApi'

const SWR_KEY = 'GET_VERSION'

export function useFetchVersion() {
  const { data, ...rest } = useSWRImmutable(SWR_KEY, () =>
    ddragonClient.getVersion(),
  )

  return { version: data, ...rest }
}
