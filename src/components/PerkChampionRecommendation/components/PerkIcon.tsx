import React from 'react'
import cx from 'classnames'
import Image from 'next/image'
import { IPerk } from 'types/IPerk'
import { mapCdragonPath } from 'utils/mapCdragonPath'

type Props = {
  outlineSize?: number
  size?: number
  perk?: IPerk
  isSelected?: boolean
}

export const PerkIcon = (props: Props) => {
  const { perk, isSelected, size = 32, outlineSize = 40 } = props

  const imgSrc = mapCdragonPath(perk?.iconPath ?? '')

  return (
    <div>
      <div
        className={cx(
          'relative flex h-10 w-10 cursor-help select-none items-center justify-center rounded-full border-2 border-general-gold-200',
          { grayscale: !isSelected },
        )}
        style={{
          width: outlineSize,
          height: outlineSize,
        }}
      >
        <Image src={imgSrc} height={size} width={size} />
      </div>
    </div>
  )
}
