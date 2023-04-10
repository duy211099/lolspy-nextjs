import { createContext } from '@dwarvesf/react-utils'
import { useState } from 'react'
import { WithChildren } from 'types/common'

interface GlobalContextValues {
  version: string
  language: string
  setVersion: (value: string) => void
  setLanguage: (value: string) => void
}
const [Provider, useGlobalContext] = createContext<GlobalContextValues>({
  name: 'global',
})

const GlobalContextProvider = ({ children }: WithChildren) => {
  const [version, setVersion] = useState<string>('')
  const [language, setLanguage] = useState<string>('')

  return (
    <Provider value={{ version, setVersion, language, setLanguage }}>
      {children}
    </Provider>
  )
}

export { GlobalContextProvider, useGlobalContext }
