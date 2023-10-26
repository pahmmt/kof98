import { Fragment, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Button, Card, CardBody, CardHeader, Divider, Link, Switch, cn } from '@nextui-org/react'
import { colorMap } from '@/utils/text'

export default function FighterSection({ fighters, className = '' }) {
  const paginate = 10
  const [aptiFilter, setAptiFilter] = useState(15)
  const [soulFilter, setSoulFilter] = useState(null)
  const [aidFilter, setAidFilter] = useState(false)
  const [visible, setVisible] = useState(paginate)

  const filteredFighters = fighters
    .filter((fighter) => {
      const aptiPass = aptiFilter ? fighter.aptitude === aptiFilter : true
      const soulPass = soulFilter ? fighter.soul === soulFilter : true
      const aidPass = !aidFilter || fighter.open_aid
      return aptiPass && soulPass && aidPass
    })
    .sort((a, b) => b.id - a.id)

  const displayedFighters = filteredFighters.slice(0, visible)

  const handleAptiFilterClick = (apti) => {
    setAptiFilter(apti)
    setVisible(paginate)
  }

  const handleSoulFilterClick = (soul) => {
    setSoulFilter(soulFilter === soul ? null : soul)
    setVisible(paginate)
  }

  const loadMoreFighters = () => {
    if (displayedFighters.length >= filteredFighters.length) {
      alert('Không còn võ sĩ nào để hiển thị')
      return
    }
    setVisible((prev) => prev + paginate)
  }

  const souls = [
    {
      id: 'bear',
      name: 'Gấu',
      image: 'crazybear',
    },
    {
      id: 'tiger',
      name: 'Hổ',
      image: 'huduntiger',
    },
    {
      id: 'snake',
      name: 'Rắn',
      image: 'greensnake',
    },
    {
      id: 'turtle',
      name: 'Rùa',
      image: 'turtle',
    },
    {
      id: 'vacuum',
      name: 'Hư Vô',
      image: 'blackvacuum',
    },
  ]

  return (
    <Card
      fullWidth
      className={`z-10 mx-auto max-w-7xl overflow-visible ${className}`}
      id="fighters"
    >
      <CardHeader className="h-16 flex-nowrap bg-[url(/assets/custom/bg_head2.png)] bg-right-bottom bg-no-repeat">
        <div className="flex-1">
          <h2 className="text-stroke font-semibold drop-shadow">Võ sĩ mới nhất</h2>
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {[15, 14, 13, 12, 11].map((apti, index) => (
                  <button
                    key={index}
                    className={`px-1 outline-none drop-shadow ${
                      aptiFilter === apti ? 'font-medium' : 'text-slate-200/50'
                    }`}
                    onClick={() => handleAptiFilterClick(apti)}
                  >
                    {apti}
                  </button>
                ))}
              </div>
              {displayedFighters && (
                <Menu as="div" className="relative">
                  <Menu.Button>
                    <span className="text-stroke overflow-visible px-1 outline-none drop-shadow sm:hidden">
                      Hồn lực
                    </span>
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
                    <Menu.Items className="absolute left-0 z-50 box-border min-w-[7rem] max-w-full origin-top-left space-y-0.5 rounded-md bg-content1 p-1 py-1 shadow-medium outline-none">
                      {souls.map((soul, index) => (
                        <Menu.Item key={index} onClick={() => handleSoulFilterClick(soul.id)}>
                          <span
                            className={`flex h-full w-full cursor-pointer items-center rounded-md px-4 py-1.5 outline-none hover:bg-slate-400/25 hover:text-white ${
                              soulFilter == soul.id ? 'bg-slate-400/25' : ''
                            }`}
                          >
                            {soul.name}
                          </span>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
              <div>
                <Switch
                  color="secondary"
                  size="sm"
                  isSelected={aidFilter}
                  onValueChange={setAidFilter}
                  classNames={{
                    wrapper: 'w-8 h-4',
                    thumb: cn(
                      'w-3 h-3',
                      'group-data-[hover=true]:border-primary',
                      //selected
                      'group-data-[selected=true]:ml-3',
                      // pressed
                      'group-data-[pressed=true]:w-3',
                      'group-data-[selected]:group-data-[pressed]:ml-2'
                    ),
                  }}
                >
                  <span className="text-stroke text-xs">Viện trợ</span>
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden gap-4 sm:flex sm:items-center">
          {souls.map((soul, index) => (
            <button
              type="button"
              key={index}
              className={`rounded-full border-2 ${
                soulFilter === soul.id ? 'border-secondary-500' : 'border-slate-100'
              }`}
            >
              <Image
                src={`/assets/items/skill_battlesoul_${soul.image}.png`}
                alt={soul.name}
                width={100}
                height={100}
                className="h-10 w-10"
                onClick={() => handleSoulFilterClick(soul.id)}
              />
            </button>
          ))}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-5">
          {displayedFighters.map((fighter, index) => (
            <Link
              href={`/fighter/${fighter.id}`}
              as={NextLink}
              className="relative flex flex-col justify-between"
              key={index}
              title={fighter.name}
            >
              <Image
                src={`/assets/custom/heroType/${fighter.type}.png`}
                alt=""
                width={48}
                height={28}
                className="absolute left-1 top-1 h-auto w-9"
              />
              <Image
                src={`/assets/heros/${fighter.id}/large/largepic_${fighter.id}.png`}
                alt={fighter.name}
                width={872}
                height={640}
                className="mx-auto p-2"
              />
              <div
                className={`w-full truncate rounded-md px-1 text-center text-sm text-black ${
                  colorMap[fighter.aptitude] || 'bg-gray-200'
                }`}
              >
                {fighter.name}
              </div>
            </Link>
          ))}
        </div>
        {displayedFighters.length < filteredFighters.length && (
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
              onClick={loadMoreFighters}
            >
              Xem thêm
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  )
}
