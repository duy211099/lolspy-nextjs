import useSWRImmutable from 'swr/immutable'
import { client } from 'libs/api'

const SWR_KEY = 'GET_USERS'

export function useFetchUsers() {
  const { data, ...rest } = useSWRImmutable(SWR_KEY, () => client.getUsers())

  return {
    users: data,
    ...rest,
  }
}
