import { useDisclosure } from '@dwarvesf/react-hooks'
import { Menu, Transition } from '@headlessui/react'
import { Divider } from 'components/Divider'
import { IconLogout } from 'components/icons/components/IconLogout'
import { IconPencilAlt } from 'components/icons/components/IconPencilAlt'
import { Text } from 'components/Text'
import { useAuthContext } from 'context/auth'
import React, { Fragment } from 'react'
import { ProfileModal } from './ProfileModal'

export const DwarvesHeader = () => {
  const { logout, user } = useAuthContext()
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <header className="mx-auto flex justify-end py-2 px-5">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          className="inline-flex items-center space-x-3 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          data-testid="profile-button"
        >
          <img
            src={user.avatar}
            alt=""
            width="40"
            height="40"
            className="rounded-full"
          />
          <Text as="span" className="text-sm text-gray-600">
            {user.firstName}
          </Text>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-1 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-pink-600 text-white' : 'text-gray-500'
                    } group flex w-full items-center space-x-2 rounded-md px-2 py-2 text-sm`}
                    onClick={onOpen}
                  >
                    <IconPencilAlt className="h-5 w-5" />
                    <span>Edit profile</span>
                  </button>
                )}
              </Menu.Item>
              <Divider className="mx-2 mb-px h-0" />
              <div />
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-pink-600 text-white' : 'text-gray-500'
                    } group flex w-full items-center space-x-2 rounded-md px-2 py-2 text-sm`}
                    onClick={logout}
                    data-testid="logout-button"
                  >
                    <IconLogout className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <ProfileModal isOpen={isOpen} onClose={onClose} />
    </header>
  )
}
