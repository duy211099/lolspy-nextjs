import { createContext } from '@dwarvesf/react-utils'
import {
  useFetchVersion,
  useFetchLanguage,
  useFetchRecommendRunes,
} from 'hooks'
import { useFetchPerkStyles } from 'hooks/data/cDragon/useFetchPerkStyles'
import { useFetchPerks } from 'hooks/data/cDragon/useFetchPerks'
import { useEffect, useState } from 'react'
import { IPerkChampionRecommendation, IPerkStyles } from 'types/IPerk'
import { WithChildren } from 'types/common'

interface GlobalContextValues {
  versions: string[]
  languages: string[]
  selectedVersion: string
  selectedLanguage: string
  perkChampionRecommendations: IPerkChampionRecommendation[]
  allPerks: any[]
  perkStyles?: IPerkStyles

  setVersions: (value: string[]) => void
  setLanguages: (value: string[]) => void
  setSelectedVersion: (value: string) => void
  setSelectedLanguage: (value: string) => void
  setPerkChampionRecommendations: (value: any) => void
  setPerkStyles: (value: any) => void
  setAllPerks: (value: any) => void
}
const [Provider, useGlobalContext] = createContext<GlobalContextValues>({
  name: 'global',
})

const GlobalContextProvider = ({ children }: WithChildren) => {
  const [versions, setVersions] = useState<string[]>([])
  const [languages, setLanguages] = useState<string[]>([])

  const [selectedVersion, setSelectedVersion] = useState<string>('')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const [perkChampionRecommendations, setPerkChampionRecommendations] =
    useState<IPerkChampionRecommendation[]>([])
  const [allPerks, setAllPerks] = useState([])
  const [perkStyles, setPerkStyles] = useState<IPerkStyles>()

  const { version: fetchedVersion } = useFetchVersion()
  const { language: fetchedLanguage } = useFetchLanguage()
  const { data: fetchedRecommendRunes } = useFetchRecommendRunes()
  const { data: fetchedPerks } = useFetchPerks()
  const { data: fetchedPerkStyles } = useFetchPerkStyles()

  useEffect(() => {
    if (
      fetchedLanguage &&
      fetchedVersion &&
      fetchedRecommendRunes &&
      fetchedPerks &&
      fetchedPerkStyles
    ) {
      setVersions(fetchedVersion)
      setLanguages(fetchedLanguage)
      setSelectedVersion(fetchedVersion[0])
      setSelectedLanguage(fetchedLanguage[0])
      setPerkChampionRecommendations(fetchedRecommendRunes)
      setAllPerks(fetchedPerks)
      setPerkStyles(fetchedPerkStyles)
    }
  }, [
    fetchedLanguage,
    fetchedVersion,
    fetchedRecommendRunes,
    fetchedPerks,
    fetchedPerkStyles,
    setVersions,
    setLanguages,
    setSelectedVersion,
    setSelectedLanguage,
    setPerkChampionRecommendations,
    setAllPerks,
    setPerkStyles,
  ])

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
        perkChampionRecommendations,
        setPerkChampionRecommendations,
        allPerks,
        perkStyles,
        setPerkStyles,
        setAllPerks,
      }}
    >
      {children}
    </Provider>
  )
}

export { GlobalContextProvider, useGlobalContext }
