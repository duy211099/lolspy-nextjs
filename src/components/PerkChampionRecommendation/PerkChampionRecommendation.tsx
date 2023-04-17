import { useGlobalContext } from 'context/global'
import React from 'react'
import { IPerkChampionRecommendation } from 'types/IPerk'
import cx from 'classnames'
import { mapCdragonPath } from 'utils/mapCdragonPath'
import Image from 'next/image'

type Props = {
  perkChampionRecommendation?: IPerkChampionRecommendation
  className?: string
}

export const PerkChampionRecommendation = (props: Props) => {
  const { perkChampionRecommendation, className } = props
  const { perkStyles, allPerks } = useGlobalContext()
  if (!perkChampionRecommendation) return null

  const selectedRuneRecommendation =
    perkChampionRecommendation.runeRecommendations[0]
  const selectedPerkIds = [...selectedRuneRecommendation.perkIds]

  // Primary
  const primaryPerkStyle = perkStyles?.styles?.find(
    (perkStyle) =>
      perkStyle.id === selectedRuneRecommendation.primaryPerkStyleId,
  )
  const primaryKeyStones =
    primaryPerkStyle?.slots.filter((perk) => perk.type === 'kKeyStone') ?? []
  const primaryRegularPerks =
    primaryPerkStyle?.slots.filter(
      (perk) => perk.type === 'kMixedRegularSplashable',
    ) ?? []
  const primaryStats =
    primaryPerkStyle?.slots.filter((perk) => perk.type === 'kStatMod') ?? []

  // Secondary
  const secondaryPerkStyle = perkStyles.styles.find(
    (perkStyle) =>
      perkStyle.id === selectedRuneRecommendation.secondaryPerkStyleId,
  )
  const secondaryRegularPerks =
    secondaryPerkStyle?.slots.filter(
      (perk) => perk.type === 'kMixedRegularSplashable',
    ) ?? []

  const findSelected = (ids: number[]) => {
    const index = selectedPerkIds.findIndex((perkId) => ids?.includes(perkId))
    if (index >= 0) {
      const selected = selectedPerkIds[index]
      selectedPerkIds.splice(index, 1)
      return selected
    }
  }

  return (
    <div className={`flex gap-8 ${className}`}>
      <div>
        <div className="flex items-center justify-center gap-2">
          <Image
            src={mapCdragonPath(primaryPerkStyle?.iconPath ?? '')}
            height={24}
            width={24}
          />
          <p className="text-center">{primaryPerkStyle?.name}</p>
        </div>
        {primaryKeyStones?.map((keyStone) => {
          const selected = findSelected(keyStone.perks)
          return (
            <div className="my-4 flex content-between  justify-center gap-4">
              {keyStone.perks.map((perkId) => {
                const perk = allPerks.find((_) => _.id === perkId)
                return (
                  <div>
                    <div
                      className={cx(
                        'relative flex h-10 w-10 cursor-help select-none items-center justify-center rounded-full border-2 border-general-gold-200',
                        { grayscale: perk?.id !== selected },
                      )}
                    >
                      <Image
                        src={mapCdragonPath(perk?.iconPath ?? '')}
                        height={32}
                        width={32}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
        {primaryRegularPerks?.map((regular) => {
          const selected = findSelected(regular.perks)
          return (
            <div className="my-4 flex content-between justify-center gap-4">
              {regular.perks.map((perkId) => {
                const perk = allPerks.find((_) => _.id === perkId)
                return (
                  <div>
                    <div
                      className={cx(
                        'relative flex h-10 w-10 cursor-help select-none items-center justify-center rounded-full border-2 border-general-gold-200',
                        { grayscale: perk?.id !== selected },
                      )}
                    >
                      <Image
                        src={mapCdragonPath(perk?.iconPath ?? '')}
                        height={32}
                        width={32}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <div>
        <div className="flex items-center justify-center gap-2">
          <Image
            src={mapCdragonPath(secondaryPerkStyle?.iconPath ?? '')}
            height={24}
            width={24}
          />
          <p className="text-center">{secondaryPerkStyle?.name}</p>
        </div>
        {secondaryRegularPerks?.map((regular) => {
          const selected = findSelected(regular.perks)
          return (
            <div className="my-4 flex justify-center gap-4">
              {regular.perks.map((perkId) => {
                const perk = allPerks.find((_) => _.id === perkId)
                return (
                  <div>
                    <div
                      className={cx(
                        'relative flex h-10 w-10 cursor-help select-none items-center justify-center rounded-full border-2 border-general-gold-200',
                        { grayscale: perk?.id !== selected },
                      )}
                    >
                      <Image
                        src={mapCdragonPath(perk?.iconPath ?? '')}
                        height={32}
                        width={32}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
        {primaryStats?.map((stat) => {
          const selected = findSelected(stat.perks)
          return (
            <div className="my-4 flex justify-center gap-4">
              {stat.perks.map((perkId) => {
                const perk = allPerks.find((_) => _.id === perkId)
                return (
                  <div>
                    <div
                      className={cx(
                        'relative flex h-6 w-6 cursor-help select-none items-center justify-center rounded-full border border-general-gold-200',
                        { grayscale: perk?.id !== selected },
                      )}
                    >
                      <Image
                        src={mapCdragonPath(perk?.iconPath ?? '')}
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
