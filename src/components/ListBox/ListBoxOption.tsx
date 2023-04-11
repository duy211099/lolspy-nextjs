import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'

export const ListBoxOption = ({ ...props }) => {
  const { value } = props

  return (
    <Listbox.Option
      className={({ active }) =>
        `relative cursor-default select-none py-2 pl-10 pr-4 ${
          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
        }`
      }
      value={value}
    >
      {(options) => {
        const { selected } = options
        return (
          <>
            <span
              className={`block truncate ${
                selected ? 'font-medium' : 'font-normal'
              }`}
            >
              {props.children}
            </span>
            {selected ? (
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : null}
          </>
        )
      }}
    </Listbox.Option>
  )
}
