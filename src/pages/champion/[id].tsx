import {
  kChampionIconUrl,
  kGetPassiveImgUrl,
  kGetSpellImgUrl,
} from 'constants/kDDragonApi'
import { useGlobalContext } from 'context/global'
import { useFetchChampion } from 'hooks/data/dDragon/useFetchChampion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

interface ParsedUrlQueryForPage extends ParsedUrlQuery {
  id: string
}

const Champion = () => {
  const router = useRouter()
  const { selectedVersion, recommendRunes } = useGlobalContext()
  const { id } = router.query as ParsedUrlQueryForPage
  const { data } = useFetchChampion(selectedVersion, id)

  const champion = data?.data[id]
  const key = champion?.key
  const recommendRune: any = recommendRunes.find(
    (_) => _.championId.toString() === key,
  )
  if (!champion || !id) return <>Loading...</>

  return (
    <div className="m-8 text-white">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-general-gold-200">
          <Image
            src={kChampionIconUrl(champion?.id)}
            alt={`${champion?.key}` ?? ''}
            priority
            layout="fill"
            className="scale-110 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-xl tracking-wide">{champion?.name}</h2>
          <div className="my-2 flex gap-2">
            <div className="relative inline-block h-8 w-8">
              <Image
                layout="fill"
                src={kGetPassiveImgUrl(
                  selectedVersion,
                  champion?.passive?.image?.full,
                )}
              />
            </div>
            {champion?.spells?.map((spell) => {
              return (
                <div key={spell?.id} className="relative inline-block h-8 w-8">
                  <Image
                    layout="fill"
                    src={kGetSpellImgUrl(selectedVersion, spell.image.full)}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>{JSON.stringify(recommendRune)}</div>
      <h3>General information</h3>
      <div className="flex gap-4">
        <div>
          <h4>Ally Tips</h4>
          <ul>
            {champion?.allytips?.map((tip, index) => {
              return <li key={index}>{tip}</li>
            })}
          </ul>
        </div>
        <div>
          <h4>Enemy Tips</h4>
          <ul>
            {champion?.enemytips?.map((tip) => {
              return <li>{tip}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Champion
