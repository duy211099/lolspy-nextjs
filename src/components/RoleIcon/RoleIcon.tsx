import { Popover } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

const ASSASSIN_ICON = '/images/roles/icon-assassin.png'
const FIGHTER_ICON = '/images/roles/icon-fighter.png'
const MAGE_ICON = '/images/roles/icon-mage.png'
const MARKSMAN_ICON = '/images/roles/icon-marksman.png'
const SUPPORT_ICON = '/images/roles/icon-support.png'
const TANK_ICON = '/images/roles/icon-tank.png'

const roleIcon = {
  Assassin: ASSASSIN_ICON,
  Fighter: FIGHTER_ICON,
  Mage: MAGE_ICON,
  Marksman: MARKSMAN_ICON,
  Support: SUPPORT_ICON,
  Tank: TANK_ICON,
}

type Props = {
  roles: ('Assassin' | 'Fighter' | 'Mage' | 'Marksman' | 'Support' | 'Tank')[]
}

export const RoleIcon = (props: Props) => {
  const { roles } = props
  return (
    <div className="space-y-2">
      {roles?.map((role) => {
        return (
          <div>
            <Popover className="relative h-6 w-6 ">
              <Popover.Button
                className="cursor-help"
                onMouseEnter={(event) => {
                  ;(event.target as HTMLButtonElement).click()
                }}
                onMouseLeave={(event) => {
                  ;(event.target as HTMLButtonElement).click()
                }}
              >
                <Image layout="fill" src={roleIcon[role]} objectFit="cover" />
              </Popover.Button>
              <Popover.Panel className="absolute -top-12 left-2 z-10 -translate-x-1/2 rounded-md border border-general-base-100 bg-general-base-500 py-2 px-4">
                <div>
                  <p className="text-general-grey-100">{role}</p>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        )
      })}
    </div>
  )
}
