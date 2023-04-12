import { useFetchChampions } from 'hooks/data/useFetchChampions'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { kChampionIconUrl } from 'constants/kApi'
import { useGlobalContext } from 'context/global'
import { ROUTES } from 'constants/routes'
import Link from 'next/link'

export const ChampionList = () => {
  const { languages, selectedVersion, selectedLanguage } = useGlobalContext()
  const rs = useFetchChampions(selectedVersion)

  const { champion, isLoading, mutate } = rs

  useEffect(() => {
    mutate()
  }, [selectedVersion, languages, mutate])

  if (isLoading) return <>'Loading...'</>

  const champions = champion?.data ?? {}

  const championKeys = Object.keys(champions)
  return (
    <div>
      <div className="text-white">{championKeys?.length ?? 0}</div>
      <div className="text-white">
        {selectedVersion} - {selectedLanguage}
      </div>
      <div className="grid grid-cols-4 gap-4 px-6 py-4">
        {championKeys.map((key) => {
          const champion = champions[key]
          return (
            <Link href={`${ROUTES.CHAMPION}/${key}`} key={key}>
              <div className="relative flex cursor-pointer flex-col items-center rounded-md border border-solid border-general-base-100 bg-martinique px-5 pt-10 pb-6">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-general-gold-200">
                  <Image
                    src={kChampionIconUrl(champion?.id)}
                    alt={champion?.key ?? ''}
                    priority
                    layout="fill"
                    className="scale-110 rounded-full"
                  />
                </div>
                <p className="mt-6 font-sans text-2xl tracking-wide text-general-gold-200">
                  {champion.name}
                </p>
                <p className="mt-2 whitespace-nowrap text-sm capitalize tracking-wide text-general-grey-200">
                  {champion.title}
                </p>
                <div className="mt-5 flex items-center justify-center gap-4 text-white">
                  <div className="h-4 w-4 rounded-full border-2" />
                  <span>{champion.info.difficulty}</span>
                </div>
                <div>
                  <p className="absolute top-4 left-4 text-white">
                    {champion.tags.reduce((a, b) => `${a} ${b}`, '')}
                  </p>
                  <p className="absolute top-4 right-4 text-white">right</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
