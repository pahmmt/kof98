/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export async function getStaticProps() {
  try {
    const { fateFiles } = await import('@/utils/features')
    const data = await fateFiles()
    if (!data || data.length <= 0) {
      return {
        notFound: true,
      }
    }
    return {
      props: { data },
    }
  } catch (e) {
    console.error('Error fetching data:', e)
  }
}

export default function Page({ data }) {
  return (
    <>
      <NextHead title="Sách sưu tập" />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Sách sưu tập' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">Sách sưu tập</h2>
            </div>
            <div className="prose prose-invert mb-6 max-w-none sm:mb-8">
              <p>
                <strong>Card Book - Sách Sưu Tập</strong> là một tính năng tăng nhẹ lực chiến dựa
                trên các võ sĩ đã sở hữu, đồng thời hỗ trợ người chơi trong các chế độ khác nhau.
              </p>
              <h3>Phần 1. Card Book</h3>
              <p>
                <Image
                  src="/assets/pages/cardbook_1.jpg"
                  alt=""
                  className="h-auto w-full"
                  width={1920}
                  height={886}
                />
              </p>
              <p>Có 10 bộ sách tất cả, mỗi bộ sách bao gồm các võ sĩ riêng biệt. </p>
              <p>
                Các bộ sách tăng các chỉ số cơ bản là ATK - DEF - HP. Đồng thời mỗi bộ sách sẽ hỗ
                trợ 1 hiệu quả khác nhau.
              </p>
              <p>
                Sở hữu võ sĩ, tăng đẳng - sao - cấp trang bị - sao trang bị để tăng điểm cho võ sĩ
                đó, góp phần tăng điểm và lên cấp cho bộ sách.
              </p>
              <p>
                <strong>Thông tin về các bộ sách:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Fatal Fury</strong>: Tăng thưởng nhận được của chế độ Nữ vs Nữ (%)
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Art of Fighting</strong>: Tăng số lượt đấu trường miên phí
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Three Clans</strong>: Tăng thưởng nhận được của chế độ Tháo xe vàng
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Hakkesshu</strong>: Tăng thưởng nhân được của chế độ Xóa ảo ảnh
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Chinese Kung Fu</strong>: Tăng EXP trong Tập luyện hội quán
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Ikari Team</strong>: Giảm vàng tiêu hao trong Tinh luyện Thần khí
                  </p>
                </li>
                <li>
                  <p>
                    <strong>All Leaders</strong>: Tăng thưởng nhận được của chế độ Gỡ thùng EXP
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Classic Group</strong>: Giảm thời gian chờ đấu trường
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Nests Characters</strong>: Tăng công thủ trong Vượt tháp
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Distant Land</strong>: Nhận rương mảnh Sách sưu tập hàng ngày
                  </p>
                </li>
              </ul>
              <h3>Phần 2. Fate File</h3>
              <p>
                <Image
                  src="/assets/pages/cardbook_2.jpg"
                  alt=""
                  className="h-auto w-full"
                  width={1920}
                  height={886}
                />
              </p>
              <p>
                Chỉ võ sĩ đã sở hữu mới xuất hiện, nếu sở hữu nhiều phiên bản của 1 võ sĩ, chỉ hiển
                thị tư chất cao nhất.
              </p>
              <p>Mỗi trang có 2 nhánh đỏ - xanh riêng biệt, độc lập với nhau.</p>
              <p>
                Sử dụng [Mảnh Dữ liệu] để mở khóa các ô (nhận được từ võ đài), các ô phải được mở
                khóa theo thứ tự, càng về sau số mảnh yêu cầu để mở 1 ô càng nhiều.
              </p>
              <p>
                Khi đáp ứng được các bộ trong cùng nhánh, kích hoạt hiệu quả và hiển thị ở góc phải
                của trang.
              </p>
              <p>
                Võ sĩ được gắn vào phải phù hợp với tiêu chí của ô, chỉ hiển thị tư chất cao nhất.
                Nếu một võ sĩ sở hữu nhiều phiên bản, có thể cùng lúc đáp ứng được nhiều tiêu chí.
              </p>
              <p>Chỉ số nhóm được tăng thêm dựa trên tư chất các võ sĩ có trong nhóm.</p>
              <p>
                <strong>Danh sách các nhóm võ sĩ:</strong>
              </p>
            </div>
            <div className="w-full overflow-x-auto rounded-br-lg rounded-tl-lg border border-orange-400/25">
              <table className="w-full min-w-max text-left">
                <thead>
                  <tr className="border-b border-orange-400/25">
                    <th className="border-r border-orange-400/25 px-4 py-2 text-center font-semibold last:border-r-0">
                      Nhóm võ sĩ
                    </th>
                    <th className="border-r border-orange-400/25 px-4 py-2 font-semibold last:border-r-0">
                      Thông tin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b border-orange-400/25 last:border-b-0">
                      <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                        <div className="flex items-center justify-center gap-2">
                          {item.fates.map((fate, index) => (
                            <Link href={`/fighter/${fate.id}`} title={fate.name} key={index}>
                              <Image
                                src={`/assets/heros/${fate.id}/smallpic_${fate.id}.png`}
                                alt={fate.name}
                                width={100}
                                height={100}
                                className="mx-auto h-8 w-8 cursor-pointer rounded-lg border border-orange-400/25 hover:bg-orange-400/25 sm:h-14 sm:w-14"
                              />
                            </Link>
                          ))}
                        </div>
                      </td>
                      <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                        <div className="flex flex-col gap-1">
                          <div className="font-semibold text-yellow-500">{item.name}</div>
                          <div>{item.attr_bonus}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
