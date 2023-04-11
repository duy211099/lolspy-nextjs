import { Listbox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { WithChildren } from 'types/common'

export const ListboxButton = ({ ...props }: WithChildren) => {
  return (
    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
      <span className="block truncate text-black">{props.children}</span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronUpDownIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
    </Listbox.Button>
  )
}
