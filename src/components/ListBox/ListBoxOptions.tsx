import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { WithChildren } from 'types/common'

export const ListBoxOptions = ({ ...props }: WithChildren) => {
  return (
    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-y-auto overflow-x-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {props.children}
      </Listbox.Options>
    </Transition>
  )
}
