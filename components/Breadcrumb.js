import { Fragment } from 'react'
import {
  Breadcrumbs,
  BreadcrumbItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react'

export default function BreadCrumb({ data }) {
  const breadcrumbs = [{ name: 'Trang chủ', href: '/' }, ...data]

  return (
    <Breadcrumbs
      maxItems={3}
      itemsBeforeCollapse={1}
      itemsAfterCollapse={2}
      renderEllipsis={({ items, ellipsisIcon, separator }) => (
        <div className="flex items-center">
          <Dropdown>
            <DropdownTrigger>
              <Button
                isIconOnly
                className="h-unit-6 w-unit-6 min-w-unit-6"
                size="sm"
                variant="flat"
              >
                {ellipsisIcon}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Routes">
              {items.map((item, index) => (
                <DropdownItem key={index} href={item.href}>
                  {item.children}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          {separator}
        </div>
      )}
    >
      {breadcrumbs.map((item, index) => (
        <BreadcrumbItem key={index} href={item.href}>
          {item.name}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  )
}
