import { Listbox } from '@headlessui/react'
import React from 'react'
import { useGlobalContext } from 'context/global'
import { ListboxButton } from 'components/ListBox/ListboxButton'
import { ListBoxOptions } from 'components/ListBox/ListBoxOptions'
import { ListBoxOption } from 'components/ListBox/ListBoxOption'

export const VersionDropdown = () => {
  const { selectedVersion, versions, setSelectedVersion } = useGlobalContext()

  return (
    <div className="w-40">
      <Listbox value={selectedVersion} onChange={setSelectedVersion}>
        <div className="relative mt-1">
          <ListboxButton>{selectedVersion}</ListboxButton>
          <ListBoxOptions>
            {versions?.map((item, index) => (
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
