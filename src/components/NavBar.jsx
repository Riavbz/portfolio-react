import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'About', href: '/about'},
  { name: 'Projects', href: '/projects'},
  { name: 'Contact Me', href: '/contact'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="topNav">
      <div className="mx-auto max-w-7xl px-4 flex h-full items-center justify-between">

          {/* Mobile menu button*/}
          <div className= 'sm:hidden'>
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 ">
            <Bars3Icon className="block size-6 group-data-open:hidden" aria-hidden="true" />
            <XMarkIcon className="hidden size-6 group-data-open:block" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* LOGO */}
          <Link to="/" className="logo">
            Azaria's Portfolio
          </Link>

        {/* DESKTOP NAV */}
        <div className="hidden sm:flex ml-auto nav-links">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      <DisclosurePanel className=" playfair-display sm:hidden">
        <div className="flex flex-row flex-wrap items-center gap-4">
        {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className="nav-links block text-black hover:text-amber-500 hover:bg-blue-950 py-2"
              >
                {item.name}
              </DisclosureButton>
        ))}
        </div>
      </DisclosurePanel>
      </Disclosure>
  )
}