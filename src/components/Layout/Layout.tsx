import { Header } from 'components/Header'
import { Navbar } from 'components/Navbar'
import React from 'react'
import { WithChildren } from 'types/common'

export const Layout = ({ children }: WithChildren) => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-gray-100">
      <Header />
      <main className="flex-1 flex">
        <Navbar />
        <div>
          <div>{children}</div>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  )
}
