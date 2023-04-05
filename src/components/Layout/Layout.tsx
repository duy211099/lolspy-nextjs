import React from 'react'
import { WithChildren } from 'types/common'

export const Layout = ({ children }: WithChildren) => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-gray-100">
      <nav>Nav</nav>
      <main className="flex-1">
        <div>
          <div>{children}</div>
        </div>
      </main>
      <footer>Foot</footer>
    </div>
  )
}
