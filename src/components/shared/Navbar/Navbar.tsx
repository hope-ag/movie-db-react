import { Fragment, useRef, useState } from 'react'
import { Transition } from '@headlessui/react';
import { useClickAway } from 'ahooks';
import { HiSearch, HiX } from 'react-icons/hi'
import { getMovieMenuOptions } from './menuOptions';
import DropdownMenu from '../DropdownMenu';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleSearch = () => {
    setSearchOpen(val => !val)
  }

  const searchEl = useRef<HTMLDivElement>(null);

  useClickAway(() => {
    setSearchOpen(false);
  }, searchEl);

  return (
    <nav className="relative h-20 mb-8">
      <Transition
        as={Fragment}
        show={!searchOpen}
        enter="transition ease-in-out duration-200"
        enterFrom="opacity-0 -translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 absolute -translate-y-6"
      >
        <div className="h-full w-full flex items-center">
          <div className="container flex h-full items-center justify-between">
            <div className="logo text-2xl font-semibold">Mov</div>
            <ul className="flex gap-6">
              <li><button className="py-4" type="button">Home</button></li>
              <li className="py-4">
                <DropdownMenu
                  title="Movies"
                  options={getMovieMenuOptions()}
                  footer={{
                    title: 'Movies',
                    description: 'Explore a curated list of awesome movies'
                  }}
                />
              </li>
              <li className="py-4">
                <DropdownMenu
                  title="TV Shows"
                  options={getMovieMenuOptions('tv')}
                  footer={{
                    title: 'Shows',
                    description: 'Explore a variety of TV Shows from here'
                  }}
                />
              </li>
              <li><button className="py-4" type="button">People</button></li>
            </ul>
            <div>
              <button
                type="button"
                onClick={toggleSearch}
                className="text-2xl font-semibold grid place-items-center"
              >
                <HiSearch />
              </button>
            </div>
          </div>
        </div>
      </Transition>
      <Transition
        as={Fragment}
        show={searchOpen}
        enter="transition ease-in-out duration-200"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 absolute translate-y-6"
      >
        <div ref={searchEl} className="flex items-center bg-gray-200 dark:bg-gray-800/50 h-full w-full">
          <form action="" className="container h-full w-full flex justify-center items-center">
            <HiSearch className="ml-auto text-2xl font-semibold translate-x-8 text-gray-500" />
            <input
              type="text"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              placeholder="Search"
              className="py-2 w-full dark:bg-gray-900 outline-none border focus:border-gray-300 dark:border-gray-800 dark:focus:border-gray-600 sm:w-96 pl-10 rounded-full"
            />
            <button
              type="button"
              onClick={toggleSearch}
              className="text-2xl font-semibold grid place-items-center ml-auto"
            >
              <HiX />
            </button>
          </form>
        </div>
      </Transition>
    </nav>
  );
}

export default Navbar;
