import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import { IconType } from 'react-icons';

interface Options {
  name: string;
  description: string;
  href: string;
  icon: IconType;
}

interface IProps {
  options: Options[];
  footer?: { title: string; description: string }
}

export default function DropdownMenu({ options, footer = undefined }: IProps) {
  return (
    <Popover className="relative">
      <Popover.Button
        className="ui-open:text-primary-700 group inline-flex items-center rounded-full bg-white text-base font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:ring-offset-4"
      >
        <span>Solutions</span>
        <HiChevronDown
          className="ui-open:text-primary-700 ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-primary-600"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 lg:max-w-3xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
              {options.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white sm:h-12 sm:w-12">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
            {
              footer
                ? (
                  <div className="bg-gray-50 p-5 sm:p-8">
                    <button
                      type="button"
                      className="-m-3 flow-root rounded-md p-3 transition duration-150 ease-in-out text-left hover:bg-gray-100 w-full"
                    >
                      <span className="text-base font-medium text-gray-900">Enterprise</span>
                      <span className="mt-1 block text-sm text-gray-500">
                        Empower your entire team with even more advanced tools.
                      </span>
                    </button>
                  </div>
                )
                : null
            }
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
