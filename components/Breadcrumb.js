import NextLink from 'next/link'
import { Link } from '@nextui-org/react'

export default function BreadCrumb({ data }) {
  const ArrowIcon = () => (
    <svg
      className="mx-1 h-3 w-3 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  )

  const HomeIcon = () => (
    <svg
      className="mr-1 h-3 w-3 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    </svg>
  )

  const items = [{ name: 'Trang chủ', href: '/' }, ...data]

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex min-w-0 items-center overflow-hidden ${
              index >= 2 ? 'invisible sm:visible' : ''
            }`}
          >
            {index == 0 ? <HomeIcon /> : <ArrowIcon />}
            {item.href ? (
              <Link
                as={NextLink}
                href={item.href}
                className="ml-1 min-w-0 flex-shrink-0 truncate text-sm font-medium text-gray-400 md:ml-2"
              >
                {item.name}
              </Link>
            ) : (
              <span className="ml-1 min-w-0 flex-shrink-0 truncate text-sm font-medium text-gray-400 md:ml-2">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
