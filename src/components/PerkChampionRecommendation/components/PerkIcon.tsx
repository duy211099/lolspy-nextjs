import React from 'react'
import cx from 'classnames'
import Image from 'next/image'
import { IPerk } from 'types/IPerk'
import { mapCdragonPath } from 'utils/mapCdragonPath'
import { TooltipButton } from 'components/Tooltip'
import { Popover } from '@headlessui/react'

type Props = {
  outlineSize?: number
  size?: number
  perk?: IPerk
  isSelected?: boolean
  isShowOutline?: boolean
}

export const PerkIcon = (props: Props) => {
  const {
    perk,
    isSelected,
    size = 32,
    outlineSize = 40,
    isShowOutline = true,
  } = props
  const imgSrc = mapCdragonPath(perk?.iconPath ?? '')

  return (
    <Popover className="relative">
      <TooltipButton
        className={cx(
          'relative flex h-10 w-10 cursor-help select-none items-center justify-center rounded-full ',
          { grayscale: !isSelected },
          { border: isShowOutline && !isSelected },
          { 'border-2': isShowOutline && isSelected },
          { 'border-general-gold-200': isShowOutline },
        )}
        style={{
          width: outlineSize,
          height: outlineSize,
        }}
      >
        <Image src={imgSrc} height={size} width={size} />
      </TooltipButton>
      <Popover.Panel className="absolute top-full left-1/2 z-10 -translate-x-1/2 translate-y-4 rounded-md border border-general-base-100 bg-general-base-500 py-2 px-4 ">
        <div className="inline-block w-max max-w-[360px] text-general-grey-100">
          <p className="mb-4 text-xl text-general-yellow-100">{perk?.name}</p>
          <p dangerouslySetInnerHTML={{ __html: perk?.longDesc ?? '' }} />
        </div>
      </Popover.Panel>
    </Popover>
  )
}
