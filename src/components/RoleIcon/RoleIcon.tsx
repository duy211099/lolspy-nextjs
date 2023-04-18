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
          <div className="relative h-6 w-6">
            <Image layout="fill" src={roleIcon[role]} objectFit="cover" />
          </div>
        )
      })}
    </div>
  )
}
