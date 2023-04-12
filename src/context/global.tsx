import { createContext } from '@dwarvesf/react-utils'
import { useState } from 'react'
import { WithChildren } from 'types/common'

interface GlobalContextValues {
  versions: string[]
  languages: string[]
  selectedVersion: string
  selectedLanguage: string
  recommendRunes: any[]

  setVersions: (value: string[]) => void
  setLanguages: (value: string[]) => void
  setSelectedVersion: (value: string) => void
  setSelectedLanguage: (value: string) => void
  setRecommendRunes: (value: any) => void
}
const [Provider, useGlobalContext] = createContext<GlobalContextValues>({
  name: 'global',
})

const GlobalContextProvider = ({ children }: WithChildren) => {
  const [versions, setVersions] = useState<string[]>([])
  const [languages, setLanguages] = useState<string[]>([])

  const [selectedVersion, setSelectedVersion] = useState<string>('')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const [recommendRunes, setRecommendRunes] = useState<any[]>([])

  return (
    <Provider
      value={{
        versions,
        languages,
        selectedVersion,
        selectedLanguage,
        setSelectedLanguage,
        setVersions,
        setLanguages,
        setSelectedVersion,
        recommendRunes,
        setRecommendRunes,
      }}
    >
      {children}
    </Provider>
  )
}

export { GlobalContextProvider, useGlobalContext }
