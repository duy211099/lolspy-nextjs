import { useFetchChampions } from 'hooks/data/useFetchChampions'
import React from 'react'

export const ChampionList = () => {
  const { data, isLoading } = useFetchChampions()

  if (isLoading) return <>'Loading...'</>

  const champions = data?.data ?? {}

  const championKeys = Object.keys(champions)
  return (
    <div>
      {championKeys.map((key) => {
        const champion = champions[key]
        return <h1>{champion.name}</h1>
      })}
    </div>
  )
}
