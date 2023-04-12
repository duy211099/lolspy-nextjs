import React from 'react'
import { IconHome } from 'components/icons/components/IconHome'
import { IconTable } from 'components/icons/components/IconTable'
import { ROUTES } from 'constants/routes'
import Link from 'next/link'
import cx from 'classnames'

const menuItems = [
  { name: 'Home', href: ROUTES.HOME, Icon: IconHome },
  { name: 'Profile', href: ROUTES.PROFILE, Icon: IconTable },
  { name: 'Champions', href: ROUTES.CHAMPIONS, Icon: IconTable },
  { name: 'Items', href: ROUTES.ITEMS, Icon: IconTable },
]

export const Navbar = () => {
  return (
    <div className="border-r border-white border-r-nav-border text-white">
      {menuItems.map(({ Icon, name, href }) => {
        const external = href.startsWith('http')
        return (
          <Link href={href} key={name}>
            <a
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener' : undefined}
              className={cx('flex w-full space-x-3 rounded-md p-2')}
            >
              <Icon className="h-6 w-6" /> <span>{name}</span>
            </a>
          </Link>
        )
      })}
    </div>
  )
}
