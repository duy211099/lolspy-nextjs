import React from 'react'
import { LanguageDropdown } from './components/LanguageDropdown/LanguageDropdown'
import { VersionDropdown } from './components/VersionDropdown/VersionDropdown'

export const Header = () => {
  return (
    <div className="flex items-center text-white">
      <span>Header</span>
      <div className="flex gap-8">
        <VersionDropdown />
        <LanguageDropdown />
      </div>
    </div>
  )
}
