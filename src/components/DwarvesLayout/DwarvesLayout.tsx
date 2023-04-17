import { IconHome } from 'components/icons/components/IconHome'
import { IconTable } from 'components/icons/components/IconTable'
import { DFROUTES } from 'constants/routes'
import Link from 'next/link'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { WithChildren } from 'types/common'
import { Logo } from 'components/Logo'
import { DwarvesHeader } from 'components/DwarvesHeader'
import { useAuthContext } from 'context/auth'
import { useEffect, useState } from 'react'
import { IconBookOpen } from 'components/icons/components/IconBookOpen'
import { IconSwitchVertical } from 'components/icons/components/IconSwitchVertical'

const menuItems = [
  { name: 'Dashboard', href: DFROUTES.DASHBOARD, Icon: IconHome },
  { name: 'Forms', href: DFROUTES.FORMS, Icon: IconTable },
  {
    name: 'Data fetching',
    href: DFROUTES.DATA_FETCHING,
    Icon: IconSwitchVertical,
  },
  {
    name: 'Documentation',
    href: 'https://github.com/dwarvesf/nextjs-boilerplate',
    Icon: IconBookOpen,
  },
]

export const DwarvesLayout = ({ children }: WithChildren) => {
  const { pathname } = useRouter()
  const [hydrated, setHydrated] = useState(false)

  const { isLogin } = useAuthContext()
  const { push } = useRouter()

  useEffect(() => {
    if (!isLogin) {
      push(DFROUTES.LOGIN)
    } else {
      setHydrated(true)
    }
  }, [isLogin, push])

  if (!isLogin || !hydrated) {
    return null
  }

  return (
    <div className="flex h-full bg-gray-100">
      <aside className="flex min-h-screen w-72 flex-col justify-between bg-gray-800 p-4">
        <div className="space-y-5">
          <Logo hasText />
          <nav className="space-y-1">
            {menuItems.map(({ Icon, name, href }) => {
              const external = href.startsWith('http')
              return (
                <Link href={href} key={name}>
                  <a
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener' : undefined}
                    className={cx(
                      'flex w-full space-x-3 rounded-md p-2',
                      'bg-transparent transition-all duration-200',
                      {
                        'bg-gray-900 text-gray-300': pathname === href,
                        'text-gray-400 hover:text-gray-100': pathname !== href,
                      },
                    )}
                  >
                    <Icon className="h-6 w-6" /> <span>{name}</span>
                  </a>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
      <main className="flex-1">
        <DwarvesHeader />
        <div className="px-8 py-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col space-y-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
