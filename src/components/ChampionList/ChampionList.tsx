import { useFetchChampions } from 'hooks/data/useFetchChampions'
import React from 'react'
import Image from 'next/image'
import { kChampionIconUrl } from 'constants/kApi'

export const ChampionList = () => {
  const { data, isLoading } = useFetchChampions()

  if (isLoading) return <>'Loading...'</>

  const champions = data?.data ?? {}

  const championKeys = Object.keys(champions)
  return (
    <div className="flex flex-wrap px-6 py-4 gap-4 ">
      {championKeys.map((key) => {
        const champion = champions[key]
        return (
          <div className="flex flex-col w-40 items-center relative">
            <div>
              <Image
                src={kChampionIconUrl(champion?.id)}
                alt={champion?.key ?? ''}
                priority
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <p>{champion.name}</p>
            <p>{champion.title}</p>
            <p>{champion.info.difficulty}</p>
            <div className="absolute top-0 left-0 right-0 flex justify-between">
              <p>left</p>
              <p>right</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
