import { useGlobalContext } from 'context/global'
import React from 'react'
import { IPerkChampionRecommendation } from 'types/IPerk'
import cx from 'classnames'

type Props = {
  perkChampionRecommendation?: IPerkChampionRecommendation
}

export const PerkChampionRecommendation = (props: Props) => {
  const { perkChampionRecommendation } = props
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
    <div className="flex">
      <div>
        <p className="text-center">{primaryPerkStyle?.name}</p>
        {primaryKeyStones?.map((keyStone) => {
          const selected = findSelected(keyStone.perks)
          return (
            <div className="flex justify-center gap-4">
              {keyStone.perks.map((perkId) => {
                const perk = allPerks.find((_) => _.id === perkId)
                return (
                  <div className={cx({ 'text-red-600': perk.id === selected })}>
                    {perk.name}
                  </div>
                )
              })}
            </div>
          )
        })}
        {primaryRegularPerks?.map((regular) => {
          const selected = findSelected(regular.perks)
          return (
            <div className="flex justify-center gap-4">
              {regular.perks.map((perkId) => {
                const perk = allPerks.find((_) => _.id === perkId)
                return (
                  <div className={cx({ 'text-red-600': perk.id === selected })}>
                    {perk.name}
                  </div>
                )
              })}
            </div>
          )
        })}
        {primaryStats?.map((stat) => {
          const selected = findSelected(stat.perks)
          return (
            <div className="flex justify-center gap-4">
              {stat.perks.map((perkId) => {
                const perk = allPerks.find((_) => _.id === perkId)
                return (
                  <div className={cx({ 'text-red-600': perk.id === selected })}>
                    {perk.name}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <div>
        <p className="text-center">{secondaryPerkStyle?.name}</p>
        {secondaryRegularPerks?.map((regular) => {
          const selected = findSelected(regular.perks)
          return (
            <div className="flex justify-center gap-4">
              {regular.perks.map((perkId) => {
                const perk = allPerks.find((_) => _.id === perkId)
                return (
                  <div className={cx({ 'text-red-600': perk.id === selected })}>
                    {perk.name}
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
