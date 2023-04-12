import useSWR from 'swr'
import { ddragonClient } from 'libs/ddApi'

const SWR_KEY = 'GET_LANGUAGE'

export function useFetchLanguage() {
  const { data, ...rest } = useSWR(SWR_KEY, () => ddragonClient.getLanguage())

  return { language: data, ...rest }
}
