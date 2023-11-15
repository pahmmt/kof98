import { useState } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Button, Card, CardBody, CardHeader, Divider, Link } from '@nextui-org/react'
import bgHead from '@/public/assets/custom/bg_soul.png'

export default function SoulSection({ data, className = '' }) {
  const paginate = 10
  const [visible, setVisible] = useState(paginate)

  const displayedSouls = data.slice(0, visible)

  const loadMoreSouls = () => {
    if (displayedSouls.length >= data.length) {
      alert('Không còn võ sĩ nào để hiển thị')
      return
    }
    setVisible((prev) => prev + paginate)
  }

  return (
    <Card fullWidth className={`z-0 mx-auto max-w-7xl ${className}`} id="souls">
      <CardHeader
        className="h-14 justify-between bg-right-bottom bg-no-repeat sm:h-16"
        style={{ backgroundImage: `url(${bgHead.src})` }}
      >
        <h2 className="text-stroke font-semibold drop-shadow">Hồn lực 5</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-5">
          {displayedSouls.map((item, index) => (
            <div className="flex flex-col justify-between" key={index}>
              <Link
                href={`/soul/${item.id}`}
                as={NextLink}
                className="relative flex flex-col justify-between"
              >
                <Image
                  src={`/assets/items/skill_${item.id}.png`}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="mx-auto p-2"
                />
                <div className="w-full truncate rounded-md bg-orange-200 px-1 text-center text-sm text-black">
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
        {displayedSouls.length < data.length && (
          <div className="mt-6 text-center">
            <Button
              radius="none"
              disableRipple
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              variant="light"
              endContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 animate-bounce"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              onClick={loadMoreSouls}
            >
              Xem thêm
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  )
}
