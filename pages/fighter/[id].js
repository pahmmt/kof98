import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
} from '@nextui-org/react'
import PictureCard from '@/components/PictureCard'
import BreadCrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import { highlightText } from '@/utils/text'
import { SkillState, skillStateMap, skillTypeMap } from '@/utils/text'

export async function getStaticPaths() {
  const { getPaths } = await import('@/utils/fighter')
  const paths = getPaths()
  
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const { getFighter } = await import('@/utils/fighter')
    const data = await getFighter(params.id)
    if (!data || data.length <= 0) {
      return {
        notFound: true,
      }
    }
    return {
      props: { fighter: data },
    }
  } catch (e) {
    console.error('Error fetching data:', e)
  }
}

export default function Page({ fighter }) {
  const [modalStates, setModalStates] = useState([])
  const [skillState, setSkillState] = useState(SkillState.NORMAL)

  const handleToggle = (index, action) => {
    const newModalStates = [...modalStates]
    newModalStates[index] = action
    setModalStates(newModalStates)

    if (!action) {
      setSkillState(SkillState.NORMAL)
    }
  }

  const getSkillDetail = (skill, state) => {
    const skillDetail = skill.detail.find((detail) => detail.state == state)
    return skillDetail?.content || 'Chưa có thông tin.'
  }

  const getSkillClass = (skillDetail) => {
    const classMapping = {
      [SkillState.WEAPON_AWAKEN]: {
        border: 'border-yellow-500/25',
        active: 'bg-yellow-500 text-black',
        inactive: 'text-yellow-500',
      },
      [SkillState.LAKE_ELEMENT]: {
        border: 'border-yellow-500/25',
        active: 'bg-yellow-500 text-black',
        inactive: 'text-yellow-500',
      },
      [SkillState.THUNDER_ELEMENT]: {
        border: 'border-yellow-500/25',
        active: 'bg-yellow-500 text-black',
        inactive: 'text-yellow-500',
      },
      [SkillState.WATER_ELEMENT]: {
        border: 'border-red-500/25',
        active: 'bg-red-500 text-white',
        inactive: 'text-red-500',
      },
    }

    const classInfo = classMapping[skillDetail.state] || {
      border: 'border-slate-500/25',
      active: 'bg-slate-400/25 text-white',
      inactive: 'text-slate-200',
    }

    if (skillState === skillDetail.state) {
      return `${classInfo.border} ${classInfo.active}`
    }
    return `${classInfo.border} ${classInfo.inactive}`
  }

  return (
    <>
      <NextHead title={`Thông tin võ sĩ: ${fighter.name}`} />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <BreadCrumb data={[{ name: fighter.name }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="space-y-4 md:flex md:gap-4 md:space-y-0">
              {fighter.galleries[0] && (
                <PictureCard
                  pictureSrc={`/assets/ui/kapai/bg/${fighter.galleries[0].image}.png`}
                  frameSrc={`/assets/custom/cardFrame/${fighter.aptitude}_${fighter.type}.png`}
                  title={fighter.name}
                  info={fighter.about}
                  className="mx-auto w-full max-w-[300px]"
                />
              )}
              <div className="flex w-full flex-col md:flex-1">
                <Tabs fullWidth color="secondary">
                  <Tab key="features" title="Thông tin">
                    <div className="sm:rounded-lg sm:border sm:border-slate-400/25 sm:p-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold">Tính năng</h3>
                        <div>{fighter.feature.description}</div>
                        <div className="flex flex-wrap gap-2">
                          {fighter.feature.tags.map((tag, index) => (
                            <Chip key={index} size="sm">
                              {tag}
                            </Chip>
                          ))}
                        </div>
                      </div>
                      <Divider className="my-4" />
                      <div className="space-y-3">
                        <h3 className="font-semibold">Duyên</h3>
                        <ul className="space-y-2">
                          {fighter.fates.map((fate, index) => (
                            <li key={index} className="flex gap-4">
                              <div className="w-1/3 font-medium sm:w-48">{fate.name}</div>
                              <div className="flex-1">
                                Có&nbsp;
                                {fate.conditions.map((condition, indexCond) => (
                                  <Fragment key={`${index}-${indexCond}`}>
                                    <span className="text-yellow-500">{condition}</span>
                                    {indexCond < fate.conditions.length - 1 && <span>, </span>}
                                  </Fragment>
                                ))}
                                : {fate.bonus}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Divider className="my-4" />
                      <div className="space-y-3">
                        <h3 className="font-semibold">Duyên ngầm</h3>
                        <div className="flex items-center gap-4">
                          {fighter.element_fates.map((fate, index) => (
                            <Link href={`/fighter/${fate.id}`} title={fate.name} key={index}>
                              <Image
                                src={`/assets/heros/${fate.id}/smallpic_${fate.id}.png`}
                                alt={fate.name}
                                width={100}
                                height={100}
                                className="mx-auto h-14 w-14 cursor-pointer rounded-lg border border-orange-400/25 hover:bg-orange-400/25 sm:h-16 sm:w-16"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                      <Divider className="my-4" />
                      <div className="space-y-3">
                        <h3 className="font-semibold">Kỹ năng</h3>
                        <div className="grid-col-1 grid gap-2 sm:grid-cols-2 sm:gap-4">
                          {fighter.skills.map((skill, index) => (
                            <Fragment key={index}>
                              <div
                                className="flex cursor-pointer items-center gap-2 rounded-br-lg rounded-tl-lg border border-orange-400/25 p-2 drop-shadow hover:bg-orange-400/25"
                                onClick={() => handleToggle(index, true)}
                              >
                                <Image
                                  src={`/assets/items/skill_hero${(fighter.id - 100000)
                                    .toString()
                                    .padStart(3, '0')}_${skill.type}.png`}
                                  alt=""
                                  width={100}
                                  height={100}
                                  className="h-10 w-10 rounded-lg border border-slate-400/25 sm:h-14 sm:w-14"
                                />
                                <div className="flex-1 space-y-1">
                                  <div className="font-medium text-slate-200">
                                    {skill.detail[0].name || 'Không rõ'}
                                  </div>
                                  <div className="text-sm">
                                    {skillTypeMap[skill.type] || 'Không rõ'}
                                  </div>
                                </div>
                              </div>
                              <Modal
                                placement="top"
                                isOpen={modalStates[index] || false}
                                onOpenChange={() => handleToggle(index, false)}
                              >
                                <ModalContent>
                                  {() => (
                                    <>
                                      <ModalHeader className="flex flex-col gap-2">
                                        <div className="flex flex-1 items-center gap-2">
                                          <Image
                                            src={`/assets/items/skill_hero${(fighter.id - 100000)
                                              .toString()
                                              .padStart(3, '0')}_${skill.type}.png`}
                                            alt=""
                                            width={100}
                                            height={100}
                                            className="h-10 w-10 rounded-lg border border-slate-400/25 sm:h-14 sm:w-14"
                                          />
                                          <div className="flex-1 space-y-1">
                                            <div className="text-sm font-medium text-slate-200 sm:text-base">
                                              {skill.detail[0].name || 'Không rõ'}
                                            </div>
                                            <div className="text-sm font-normal">
                                              {skillTypeMap[skill.type] || 'Không rõ'}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs">
                                          {skill.detail.map((detail, indexDetail) => (
                                            <button
                                              key={`detail-${index}-${indexDetail}`}
                                              className={`rounded-md border px-1 py-0.5 outline-none ${getSkillClass(
                                                detail
                                              )}`}
                                              onClick={() => setSkillState(detail.state)}
                                            >
                                              {skillStateMap[detail.state] || 'Không rõ'}
                                            </button>
                                          ))}
                                        </div>
                                      </ModalHeader>
                                      <Divider orientation="horizontal" />
                                      <ModalBody>
                                        <div className="whitespace-pre-wrap rounded-md py-2">
                                          {highlightText(getSkillDetail(skill, skillState))}
                                        </div>
                                      </ModalBody>
                                    </>
                                  )}
                                </ModalContent>
                              </Modal>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                      <Divider className="my-4" />
                      <div className="space-y-3">
                        <h3 className="font-semibold">Hồn lực</h3>
                        <div className="flex cursor-pointer items-center rounded-br-lg rounded-tl-lg border border-orange-400/25 p-2 drop-shadow hover:bg-orange-400/25">
                          <Image
                            src={`/assets/items/${fighter.soul_info.image}.png`}
                            alt=""
                            width={100}
                            height={100}
                            className="h-12 w-12 rounded-lg sm:h-16 sm:w-16"
                          />
                          <div className="flex-1 space-y-1">
                            <div className="font-medium text-slate-200">
                              {fighter.soul_info.name}
                            </div>
                            <div className="text-sm">{fighter.soul_info.description}</div>
                          </div>
                        </div>
                      </div>
                      <Divider className="my-4" />
                      <div className="space-y-3">
                        <h3 className="font-semibold">Trang bị</h3>
                        <div className="grid-col-1 grid gap-2 sm:grid-cols-2 sm:gap-4">
                          {fighter.equipments.map((equipment, index) => (
                            <div
                              key={index}
                              className="flex cursor-pointer items-center gap-2 rounded-br-lg rounded-tl-lg border border-orange-400/25 p-2 drop-shadow hover:bg-orange-400/25"
                            >
                              <Image
                                src={`/assets/items/${equipment.image}.png`}
                                alt=""
                                width={100}
                                height={100}
                                className="h-10 w-10 rounded-lg sm:h-14 sm:w-14"
                              />
                              <div className="space-y-1">
                                <div className="font-medium text-slate-200">{equipment.name}</div>
                                <div className="text-sm">{equipment.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab key="aid" title="Viện trợ">
                    <div className="sm:rounded-lg sm:border sm:border-slate-400/25 sm:p-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold">Kỹ năng viện trợ</h3>
                        <div className="flex cursor-pointer items-center gap-2 rounded-br-lg rounded-tl-lg border border-orange-400/25 p-2 drop-shadow hover:bg-orange-400/25">
                          <Image
                            src={`/assets/items/skill_hero${(fighter.id - 100000)
                              .toString()
                              .padStart(3, '0')}_a2.png`}
                            alt=""
                            width={100}
                            height={100}
                            className="h-10 w-10 rounded-lg border border-slate-400/25 sm:h-14 sm:w-14"
                          />
                          <div className="flex-1 space-y-1">
                            <div className="font-medium text-slate-200">
                              Sóng Phượng hoàng Caesar
                            </div>
                            <div className="text-sm">
                              Bắt đầu từ vòng đầu tiên, võ sĩ linh hồn rùa sẽ thực hiện một pha nguy
                              hiểm hoặc nó sẽ kích hoạt sau khi thực hiện tổng cộng 2 pha nguy hiểm
                              trong vòng này.
                            </div>
                          </div>
                        </div>
                      </div>
                      <Divider className="my-4" />
                      <div className="space-y-3">
                        <h3 className="font-semibold">Đẳng viện trợ</h3>
                        <div className="flex cursor-pointer flex-col gap-2 rounded-br-lg rounded-tl-lg border border-orange-400/25 px-2 py-4 drop-shadow">
                          <div className="flex items-center gap-4">
                            <div className="w-20 truncate rounded-md bg-white py-0.5 text-center text-sm text-black">
                              Trắng
                            </div>
                            <div className="flex-1">Kích hoạt kỹ năng viện trợ</div>
                          </div>
                          <Divider className="my-2" />
                          <div className="flex items-center gap-4">
                            <div className="w-20 truncate rounded-md bg-emerald-500 py-0.5 text-center text-sm text-white">
                              Lục
                            </div>
                            <div className="flex-1">
                              Sau khi vào trận, bạn sẽ tăng vĩnh viễn tỷ lệ sát thương của bản thân
                              thêm 15%, tỷ lệ tránh sát thương thêm 30% và tỷ lệ chặn đòn thêm 10%,
                              khe kỹ năng số 1 được mở.
                            </div>
                          </div>
                          <Divider className="my-2" />
                          <div className="flex items-center gap-4">
                            <div className="w-20 truncate rounded-md bg-blue-500 py-0.5 text-center text-sm text-white">
                              Lam
                            </div>
                            <div className="flex-1">
                              Thêm 150% sát thương phòng thủ của chính nó, kỹ năng 2 được kích hoạt,
                              +1 số lần sử dụng
                            </div>
                          </div>
                          <Divider className="my-2" />
                          <div className="flex items-center gap-4">
                            <div className="w-20 truncate rounded-md bg-purple-500 py-0.5 text-center text-sm text-white">
                              Tím
                            </div>
                            <div className="flex-1">
                              Phục hồi 12% máu tối đa cho người chiến đấu có lượng máu thấp nhất và
                              thêm máu tương đương 200% khả năng phòng thủ của chính mình; Kỹ năng 3
                              đang bật
                            </div>
                          </div>
                          <Divider className="my-2" />
                          <div className="flex items-center gap-4">
                            <div className="w-20 truncate rounded-md bg-orange-500 py-0.5 text-center text-sm text-white">
                              Cam
                            </div>
                            <div className="flex-1">
                              Tăng khả năng phòng thủ lên 24%; Tăng 100% hiệu quả của các pha nguy
                              hiểm đã học (hiệu ứng kiểm soát được tăng lên bởi xác suất kích hoạt);
                              Khi bạn có thẻ, bạn có thể chơi từ vòng đầu tiên
                            </div>
                          </div>
                          <Divider className="my-2" />
                          <div className="flex items-center gap-4">
                            <div className="w-20 truncate rounded-md bg-red-500 py-0.5 text-center text-sm text-white">
                              Đỏ
                            </div>
                            <div className="flex-1">
                              Tăng 30% sát thương kỹ năng; Chuyển đổi các pha nguy hiểm, tấn công
                              các đơn vị kẻ thù để gây sát thương, đánh cắp một phần hiệu ứng của
                              tất cả các pha nguy hiểm của kẻ thù và thêm chúng vào kỹ năng này (nếu
                              bạn nhận được buff, hãy thêm nó vào người triệu hồi); Khi bạn lần đầu
                              tiên phát hành hỗ trợ của mình, bạn có thể hồi sinh một chiến binh
                              ngẫu nhiên về phía bạn một lần, khôi phục 30% sức khỏe của bạn và thừa
                              hưởng sự tức giận; Số lần sử dụng +1
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab key="gallery" title="Hình ảnh">
                    <div className="sm:rounded-lg sm:border sm:border-slate-400/25 sm:p-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold">Hình ảnh</h3>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
                          {fighter.galleries.map((picture, index) => (
                            <div key={index} className="flex flex-col justify-between">
                              <PictureCard
                                pictureSrc={`/assets/ui/kapai/bg/${picture.image}.png`}
                                className="max-w-full"
                              />
                              <div className="w-full text-center text-xs font-medium text-yellow-500 sm:text-base">
                                {picture.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
