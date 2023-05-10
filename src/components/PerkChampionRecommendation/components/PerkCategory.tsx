import React from 'react'
import { IPerkStyle } from 'types/IPerk'
import { mapCdragonPath } from 'utils/mapCdragonPath'
import Image from 'next/image'

type Props = {
  perk?: IPerkStyle
}

export const PerkStyle = (props: Props) => {
  const { perk } = props

  return (
    <div className="flex items-center justify-center gap-2">
      <Image
        src={mapCdragonPath(perk?.iconPath ?? '')}
        height={24}
        width={24}
      />
      <p className="text-center">{perk?.name}</p>
    </div>
  )
}
