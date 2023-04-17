import { PerkChampionRecommendation } from 'components/PerkChampionRecommendation/PerkChampionRecommendation'
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
import React, { useEffect } from 'react'

interface ParsedUrlQueryForPage extends ParsedUrlQuery {
  id: string
}

const Champion = () => {
  const router = useRouter()
  const { selectedVersion, perkChampionRecommendations } = useGlobalContext()
  const { id } = router.query as ParsedUrlQueryForPage
  const { data, trigger } = useFetchChampion(selectedVersion, id)

  useEffect(() => {
    trigger()
  }, [id, trigger])

  const champion = data?.data[id]
  const key = champion?.key
  const perkChampionRecommendation = perkChampionRecommendations.find(
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
      <PerkChampionRecommendation
        perkChampionRecommendation={perkChampionRecommendation}
      />
      <div className="mt-16">
        {JSON.stringify(perkChampionRecommendation?.runeRecommendations[0])}
      </div>
      <h3 className=" mt-16">General information</h3>
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
            {champion?.enemytips?.map((tip, index) => {
              return <li key={index}>{tip}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Champion
