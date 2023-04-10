import { VersionDropdown } from 'components/VersionDropdown/VersionDropdown'
import React from 'react'

export const Header = () => {
  return (
    <div className="flex items-center text-white">
      <span>Header</span>
      <VersionDropdown />
    </div>
  )
}
