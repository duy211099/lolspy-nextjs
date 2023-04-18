import { Popover } from '@headlessui/react'
import React from 'react'
import { WithChildren } from 'types/common'

type Props = { className?: string } & WithChildren

export const TooltipButton = (props: Props) => {
  const { children, className } = props

  return (
    <Popover.Button
      className={`cursor-help ${className}`}
      onMouseEnter={(event) => {
        ;(event.target as HTMLButtonElement).click()
      }}
      onMouseLeave={(event) => {
        ;(event.target as HTMLButtonElement).click()
      }}
    >
      {children}
    </Popover.Button>
  )
}
