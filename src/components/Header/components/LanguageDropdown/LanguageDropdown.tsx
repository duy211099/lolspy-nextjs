import { Listbox } from '@headlessui/react'
import React from 'react'
import { useGlobalContext } from 'context/global'
import { ListboxButton } from 'components/ListBox/ListboxButton'
import { ListBoxOptions } from 'components/ListBox/ListBoxOptions'
import { ListBoxOption } from 'components/ListBox/ListBoxOption'

export const LanguageDropdown = () => {
  const { selectedLanguage, languages, setSelectedLanguage } =
    useGlobalContext()

  return (
    <div className="w-40">
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <div className="relative mt-1">
          <ListboxButton>{selectedLanguage}</ListboxButton>
          <ListBoxOptions>
            {languages?.map((item, index) => (
              <ListBoxOption key={index} value={item}>
                {item}
              </ListBoxOption>
            ))}
          </ListBoxOptions>
        </div>
      </Listbox>
    </div>
  )
}
