import { useGlobalContext } from 'context/global'
import React from 'react'
import { IPerkChampionRecommendation } from 'types/IPerk'

type Props = {
  perkChampionRecommendation?: IPerkChampionRecommendation
}

export const PerkChampionRecommendation = (props: Props) => {
  const { perkChampionRecommendation } = props
  const { perkStyles } = useGlobalContext()
  if (!perkChampionRecommendation) return null

  const primaryPerkStyle = perkStyles?.styles?.find(
    (perkStyle) =>
      perkStyle.id ===
      perkChampionRecommendation.runeRecommendations[0].primaryPerkStyleId,
  )
  const secondaryPerkStyle = perkStyles?.styles?.find(
    (perkStyle) =>
      perkStyle.id ===
      perkChampionRecommendation.runeRecommendations[0].secondaryPerkStyleId,
  )

  return (
    <div>
      {primaryPerkStyle?.name}
      {secondaryPerkStyle?.name}
    </div>
  )
}
