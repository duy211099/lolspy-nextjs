import { Header } from 'components/Header'
import { Navbar } from 'components/Navbar'
import React from 'react'
import { WithChildren } from 'types/common'

export const Layout = ({ children }: WithChildren) => {
  return (
    <div className="flex h-full min-h-screen flex-col bg-general-base-500">
      <Header />
      <main className="flex flex-1">
        <Navbar />
        <div>
          <div className="">{children}</div>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  )
}
