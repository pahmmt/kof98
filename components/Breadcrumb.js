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
    <Breadcrumbs>
      {breadcrumbs.map((item, index) => (
        <BreadcrumbItem key={index} href={item.href}>
          {item.name}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  )
}
