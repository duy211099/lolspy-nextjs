import { useGlobalContext } from 'context/global'
import React from 'react'
import { IPerkChampionRecommendation } from 'types/IPerk'
import { PerkIcon } from './components/PerkIcon'
import { PerkStyle } from './components/PerkCategory'

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

  const renderPrimaryKeyStones = () => {
    return primaryKeyStones?.map((keyStone) => {
      const selected = findSelected(keyStone.perks)
      return (
        <div className="my-4 flex content-between  justify-center gap-4">
          {keyStone.perks.map((perkId) => {
            const perk = allPerks.find((_) => _.id === perkId)
            return (
              <PerkIcon
                perk={perk}
                isSelected={perk?.id === selected}
                isShowOutline={false}
                size={40}
              />
            )
          })}
        </div>
      )
    })
  }

  const renderPrimaryRegularPerks = () => {
    return primaryRegularPerks?.map((regular) => {
      const selected = findSelected(regular.perks)
      return (
        <div className="my-4 flex content-between justify-center gap-4">
          {regular.perks.map((perkId) => {
            const perk = allPerks.find((_) => _.id === perkId)
            return <PerkIcon perk={perk} isSelected={perk?.id === selected} />
          })}
        </div>
      )
    })
  }

  const renderSecondaryRegularPerks = () => {
    return secondaryRegularPerks?.map((regular) => {
      const selected = findSelected(regular.perks)
      return (
        <div className="my-4 flex justify-center gap-4">
          {regular.perks.map((perkId) => {
            const perk = allPerks.find((_) => _.id === perkId)
            return <PerkIcon perk={perk} isSelected={perk?.id === selected} />
          })}
        </div>
      )
    })
  }

  const renderPrimaryStats = () => {
    return primaryStats?.map((stat) => {
      const selected = findSelected(stat.perks)
      return (
        <div className="my-4 flex justify-center gap-4">
          {stat.perks.map((perkId) => {
            const perk = allPerks.find((_) => _.id === perkId)
            return (
              <PerkIcon
                perk={perk}
                isSelected={perk?.id === selected}
                size={20}
                outlineSize={24}
              />
            )
          })}
        </div>
      )
    })
  }

  return (
    <div className={`flex gap-8 ${className}`}>
      <div>
        <PerkStyle perk={primaryPerkStyle} />
        {renderPrimaryKeyStones()}
        {renderPrimaryRegularPerks()}
      </div>
      <div>
        <PerkStyle perk={secondaryPerkStyle} />
        {renderSecondaryRegularPerks()}
        {renderPrimaryStats()}
      </div>
    </div>
  )
}
