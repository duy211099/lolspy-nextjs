import useSWRImmutable from 'swr/immutable'
import { ddragonClient } from 'libs/ddApi'

const SWR_KEY = 'GET_LANGUAGE'

export function useFetchLanguage() {
  const { data, ...rest } = useSWRImmutable(SWR_KEY, () =>
    ddragonClient.getLanguage(),
  )

  return { language: data, ...rest }
}
