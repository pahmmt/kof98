import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Transition } from '@headlessui/react'
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { useDataContext } from './DataContext'
import navigation from '@/data/navigation'

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { headerActive, setHeaderActive } = useDataContext()

  useEffect(() => {
    const handleActive = (url) => {
      if (url.startsWith('/#')) {
        setHeaderActive(url.substring(1))
      } else {
        setHeaderActive(null)
      }
      setIsMenuOpen(false)
    }

    router.events.on('routeChangeStart', handleActive)
    router.events.on('hashChangeStart', handleActive)
    return () => {
      router.events.off('routeChangeStart', handleActive)
      router.events.off('hashChangeStart', handleActive)
    }
  }, [router, setHeaderActive])

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
      <NavbarContent>
        <NavbarBrand>
          <Link as={NextLink} color="foreground" href="/" className="flex items-center gap-2">
            <Image
              src="/assets/custom/icon.png"
              alt="Site Icon"
              width={40}
              height={40}
              className="h-8 w-8 rounded-sm"
            />
            <span className="font-bold text-inherit">
              {process.env.NEXT_PUBLIC_APP_NAME || 'Untitled'}
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        {navigation.map((item, index) =>
          item.subMenu ? (
            <NavbarItem className="relative" key={`${item.label}-${index}`}>
              <Menu>
                <Button
                  as={Menu.Button}
                  size="lg"
                  disableRipple
                  radius="none"
                  className="h-auto bg-transparent px-0 py-4 data-[hover=true]:bg-transparent"
                  variant="light"
                  endContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                >
                  <span>{item.label}</span>
                </Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-10 -mt-1 box-border min-w-[14rem] max-w-full origin-top-left space-y-0.5 rounded-md bg-content1 p-1 py-1 shadow-medium outline-none">
                    {item.subMenu.map((sub, subindex) => (
                      <Menu.Item key={`navbar-m-${sub.label}-${subindex}`}>
                        <Link
                          as={NextLink}
                          color="foreground"
                          href={sub.href}
                          className={`flex h-full w-full cursor-pointer items-center rounded-md px-4 py-1.5 outline-none hover:bg-slate-400/25 hover:text-white ${
                            router.asPath == sub.href || headerActive == sub.href.substring(1)
                              ? 'bg-slate-400/25'
                              : ''
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </NavbarItem>
          ) : (
            <NavbarItem key={`navbar-${index}`}>
              <Link
                as={NextLink}
                color="foreground"
                href={item.href}
                className={`${
                  router.pathname == item.href || headerActive == item.href.substring(1)
                    ? 'text-secondary-500'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            </NavbarItem>
          )
        )}
      </NavbarContent>
      <NavbarMenu className="gap-0 divide-y divide-slate-400/25">
        {navigation.map((item, index) =>
          item.subMenu ? (
            <NavbarMenuItem className="relative" key={`navbar-m-${index}`}>
              <Menu>
                <Button
                  as={Menu.Button}
                  size="lg"
                  disableRipple
                  radius="none"
                  className="h-auto bg-transparent px-0 py-4 data-[hover=true]:bg-transparent"
                  variant="light"
                  endContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                >
                  <span>{item.label}</span>
                </Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-10 -mt-1 box-border min-w-[20rem] max-w-full origin-top-left space-y-0.5 rounded-md bg-content1 p-1 py-1 shadow-medium outline-none">
                    {item.subMenu.map((sub, subindex) => (
                      <Menu.Item key={`navbar-m-${sub.label}-${subindex}`}>
                        <Link
                          as={NextLink}
                          color="foreground"
                          href={sub.href}
                          className={`flex h-full w-full cursor-pointer items-center rounded-md px-4 py-1.5 outline-none hover:bg-slate-400/25 hover:text-white ${
                            router.asPath == sub.href || headerActive == sub.href.substring(1)
                              ? 'bg-slate-400/25'
                              : ''
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </NavbarMenuItem>
          ) : (
            <NavbarMenuItem key={`navbar-m-${index}`}>
              <Link
                as={NextLink}
                size="md"
                color="foreground"
                href={item.href}
                className={`py-4 ${
                  router.pathname == item.href || headerActive == item.href.substring(1)
                    ? 'text-secondary-500'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          )
        )}
      </NavbarMenu>
    </Navbar>
  )
}
