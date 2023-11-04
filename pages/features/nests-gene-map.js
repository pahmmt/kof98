import Image from 'next/image'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export default function Page() {
  const variantColor = {
    100: 'text-red-500',
    70: 'text-yellow-500',
    50: 'text-purple-500',
    35: 'text-blue-500',
    25: 'text-green-500',
  }

  const data = [
    {
      name: 'Sên Ánh Sáng',
      image: 'chip_ChipSuit_4_6_1',
      variant: 100,
      attr_bonus: 'ATK +1670, DEF +420, HP +5830 và 2 chỉ số ngẫu nhiên theo %',
    },
    {
      name: 'Bọ Cạp Đỏ',
      image: 'chip_ChipSuit_4_6_2',
      variant: 100,
      attr_bonus: 'ATK +1670, DEF +420, HP +5830 và 2 chỉ số ngẫu nhiên theo %',
    },
    {
      name: 'Mãng Xà Đá',
      image: 'chip_ChipSuit_4_6_3',
      variant: 100,
      attr_bonus: 'ATK +1670, DEF +420, HP +5830 và 2 chỉ số ngẫu nhiên theo %',
    },
    {
      name: 'Quái Lực',
      image: 'chip_ChipSuit_1_6',
      variant: 100,
      attr_bonus: 'ATK +1670, DEF +1580',
    },
    {
      name: 'Điên Cuồng',
      image: 'chip_ChipSuit_2_6',
      variant: 100,
      attr_bonus: 'ATK +1670, HP +7920',
    },
    {
      name: 'Sôi Máu',
      image: 'chip_ChipSuit_3_6',
      variant: 100,
      attr_bonus: 'HP +16250',
    },
    {
      name: 'Sên Ánh Sáng',
      image: 'chip_ChipSuit_4_5_1',
      variant: 70,
      attr_bonus: 'ATK +830, DEF +210, HP +2920',
    },
    {
      name: 'Bọ Cạp Đỏ',
      image: 'chip_ChipSuit_4_5_2',
      variant: 70,
      attr_bonus: 'ATK +830, DEF +210, HP +2920',
    },
    {
      name: 'Mãng Xà Đá',
      image: 'chip_ChipSuit_4_5_3',
      variant: 70,
      attr_bonus: 'ATK +830, DEF +210, HP +2920',
    },
    {
      name: 'Quái Lực',
      image: 'chip_ChipSuit_1_5',
      variant: 70,
      attr_bonus: 'ATK +830, DEF +790',
    },
    {
      name: 'Điên Cuồng',
      image: 'chip_ChipSuit_2_5',
      variant: 70,
      attr_bonus: 'ATK +830, HP +3960',
    },
    {
      name: 'Sôi Máu',
      image: 'chip_ChipSuit_3_5',
      variant: 70,
      attr_bonus: 'HP +8130',
    },
    {
      name: 'Sên Ánh Sáng',
      image: 'chip_ChipSuit_4_4_1',
      variant: 50,
      attr_bonus: 'ATK +560, DEF +140, HP +1940',
    },
    {
      name: 'Bọ Cạp Đỏ',
      image: 'chip_ChipSuit_4_4_2',
      variant: 50,
      attr_bonus: 'ATK +560, DEF +140, HP +1940',
    },
    {
      name: 'Mãng Xà Đá',
      image: 'chip_ChipSuit_4_4_3',
      variant: 50,
      attr_bonus: 'ATK +560, DEF +140, HP +1940',
    },
    {
      name: 'Quái Lực',
      image: 'chip_ChipSuit_1_4',
      variant: 50,
      attr_bonus: 'ATK +560, DEF +530',
    },
    {
      name: 'Điên Cuồng',
      image: 'chip_ChipSuit_2_4',
      variant: 50,
      attr_bonus: 'ATK +560, HP +2640',
    },
    {
      name: 'Sôi Máu',
      image: 'chip_ChipSuit_3_4',
      variant: 50,
      attr_bonus: 'HP +5420',
    },
    {
      name: 'Quái Lực',
      image: 'chip_ChipSuit_1_3',
      variant: 35,
      attr_bonus: 'ATK +370, DEF +350',
    },
    {
      name: 'Điên Cuồng',
      image: 'chip_ChipSuit_2_3',
      variant: 35,
      attr_bonus: 'ATK +370, HP +1760',
    },
    {
      name: 'Sôi Máu',
      image: 'chip_ChipSuit_3_3',
      variant: 35,
      attr_bonus: 'HP +3610',
    },
    {
      name: 'Quái Lực',
      image: 'chip_ChipSuit_1_2',
      variant: 25,
      attr_bonus: 'ATK +250, DEF +230',
    },
    {
      name: 'Điên Cuồng',
      image: 'chip_ChipSuit_2_2',
      variant: 25,
      attr_bonus: 'ATK +250, HP +1170',
    },
    {
      name: 'Sôi Máu',
      image: 'chip_ChipSuit_3_2',
      variant: 25,
      attr_bonus: 'HP +2410',
    },
  ]

  return (
    <>
      <NextHead title="NESTS Gene Map" />
      <main className="mt-4 flex-1 px-4">
        <div className="mx-auto mb-4 max-w-7xl">
          <Breadcrumb data={[{ name: 'NESTS Gene Map' }]} />
        </div>
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">NESTS Gene Map</h2>
            </div>
            <div className="prose prose-invert mx-2 mb-6 max-w-none sm:mx-4 sm:mb-8">
              <p>
                <strong>NESTS Gene Map - Chip Di Truyền NESTS</strong> là một tính năng cực kỳ quan
                trọng giúp võ sĩ cường hóa các chỉ số của bản thân, đồng thời tăng thêm độ liên kết
                giữa các võ sĩ cùng bộ Gene với nhau.
              </p>
              <p>
                <Image
                  src="/assets/pages/genemap_1.jpg"
                  alt="Gene Map"
                  width={1920}
                  height={930}
                  className="h-auto w-full"
                />
              </p>
              <h3>Quy tắc</h3>
              <ul>
                <li>Một võ sĩ chỉ được đưa vào duy nhất 1 Map</li>
                <li>Cần tiêu tốn kim cương nếu muốn gỡ võ sĩ ra khỏi Map</li>
                <li>Các con Chip sẽ tăng chỉ số cho võ sĩ được trang bị trong Map</li>
                <li>Các con Chip giúp tăng cấp Biến đổi Map, mở khóa các hiệu quả tương đương</li>
                <li>Hiệu quả tương đương chỉ hữu hiệu trong Map nhất định</li>
                <li>Sự tăng cấp Chip giúp tăng Năng lượng Biến đổi</li>
                <li>
                  Tăng cấp Map (Map Upgrade) giúp tăng chỉ số ATK, DEF, HP của các võ sĩ trong Map
                </li>
                <li>
                  Khai mở tính năng sẽ tự động mở 3 bảng Chip. Các bảng sau cần tốn 1 lượng Kim
                  cương nhất định để mở
                </li>
                <li>
                  Có thể lắp 2 võ sĩ vào 1 bảng Chip. Gỡ võ sĩ ra khỏi bảng sẽ tiêu tốn 20 Kim cương
                </li>
              </ul>
              <h3>Chi tiết biến dị</h3>
              <ul>
                <li>
                  <strong>Cấp 1:</strong> Tăng 20% HP của võ sĩ trong Map ở các chế độ Đấu trường,
                  Đấu trường Liên server, Tháp thời không
                </li>
                <li>
                  <strong>Cấp 2:</strong> Tăng 10% HP của võ sĩ trong Map ở các chế độ Võ đài, Võ
                  đài Liên server
                </li>
                <li>
                  <strong>Cấp 3:</strong> Tăng 15% HP của võ sĩ trong Map ở các chế độ Mỏ Thần bi,
                  Tranh đoạt liên server
                </li>
                <li>
                  <strong>Cấp 4:</strong> Nhận được 5% ATK, DEF và HP của cộng sự trong Map ở mọi
                  chế độ
                </li>
                <li>
                  <strong>Cấp 5:</strong> Tăng 40% HP của võ sĩ trong Map ở các chế độ Đấu trường,
                  Đấu trường Liên server, Tháp thời không
                </li>
                <li>
                  <strong>Cấp 6:</strong> Tăng 20% HP của võ sĩ trong Map ở các chế độ Võ đài, Võ
                  đài Liên server
                </li>
                <li>
                  <strong>Cấp 7:</strong> Tăng 30% HP của võ sĩ trong Map ở các chế độ Mỏ Thần bi,
                  Tranh đoạt liên server
                </li>
                <li>
                  <strong>Cấp 8:</strong> Nhận được 10% ATK, DEF và HP của cộng sự trong Map ở mọi
                  chế độ
                </li>
              </ul>
              <h3>Thông tin ô Chip</h3>
              <p>Có 8 ô gắn Chip, trong đó các ô cùng hàng ngang sẽ lắp cùng một loại Chip.</p>
              <ul>
                <li>
                  <p>
                    Hàng đầu tiên lắp Chip <strong>Quái Lực</strong>, giúp tăng ATK, DEF
                  </p>
                </li>
                <li>
                  <p>
                    Hàng thứ hai lắp Chip <strong>Cuồng Bạo</strong>, giúp tăng ATK, HP
                  </p>
                </li>
                <li>
                  <p>
                    Hàng thứ ba lắp Chip <strong>Sôi Máu</strong>, giúp tăng HP
                  </p>
                </li>
                <li>
                  <p>
                    Hàng thứ tư là Chip tính năng, có 3 loại Chip tính năng bao gồm Bọ Cạp Đỏ, Sên
                    Ánh Dáng, Mãng Xà Đá
                  </p>
                </li>
              </ul>
              <h3>Cấp bậc Chip tính năng</h3>
              <p>
                <strong>Bọ Cạp Đỏ</strong>
              </p>
              <p>
                Khi bản thân tung tuyệt kỹ, sẽ hồi HP cho võ sĩ liên kết. Nếu bản thân và võ sĩ liên
                kết cùng tấn công một mục tiêu, sẽ gây thêm sát thương.
              </p>
              <ul>
                <li>
                  <strong>Bậc 1:</strong> Khi bản thân tung tuyệt kỹ, nếu võ sĩ liên kết chưa đầy
                  HP, hồi HP bằng 16% sát thương tuyệt kỹ cho võ sĩ này (tối đa 20% HP, mỗi trận
                  kích hoạt tối đa mỗi võ sĩ 1 lần)
                </li>
                <li>
                  <strong>Bậc 2:</strong> Hồi HP bằng 24% sát thương tuyệt kỹ (tối đa 30% HP)
                </li>
                <li>
                  <strong>Bậc 3:</strong> Khi bản thân tấn công thường hoặc độc chiêu, sẽ đánh dấu
                  lên mục tiêu địch. Trong 3 lượt, khi võ sĩ liên kết tấn công kẻ này, gây thêm sát
                  thương bằng 8% HP, đánh dấu này sẽ biến mất. Mỗi trận, mỗi võ sĩ có thể đánh dấu
                  tối đa 1 lần
                </li>
                <li>
                  <strong>Bậc 4:</strong> Sát thương thêm tăng thành 12% HP
                </li>
                <li>
                  <strong>Bậc 5:</strong> Giới hạn số lần kích hoạt +1
                </li>
                <li>
                  <strong>Bậc 6:</strong> Số lần đánh dấu +1, duy trì đến khi dấu bị xóa
                </li>
              </ul>
              <p>
                <strong>Sên Ánh Sáng</strong>
              </p>
              <p>
                Hồi HP cho võ sĩ liên kết có HP thấp hơn. Võ sĩ nào được hồi sẽ được nhận thêm hiệu
                quả hồi máu liên tục.
              </p>
              <ul>
                <li>
                  <strong>Bậc 1:</strong> Khi vào lượt, hồi 8% HP cho cho võ sĩ liên kết có HP thấp
                  hơn (mỗi trận kích hoạt tối đa 2 lần)
                </li>
                <li>
                  <strong>Bậc 2:</strong> Lượng HP hồi tăng thành 12%
                </li>
                <li>
                  <strong>Bậc 3:</strong> Võ sĩ được hồi HP ở trên sẽ được hồi trong 2 lượt (tính cả
                  lượt này); vào đầu mỗi lượt kế tiếp sẽ hồi 5% HP (mỗi trận kích hoạt tối đa mỗi võ
                  sĩ 1 lần)
                </li>
                <li>
                  <strong>Bậc 4:</strong> Lượng HP hồi đầu mỗi lượt kế tiếp tăng thành 7.5% HP
                </li>
                <li>
                  <strong>Bậc 5:</strong> Giới hạn số lần hồi HP +2
                </li>
                <li>
                  <strong>Bậc 6:</strong> Giới hạn số lần hồi HP đầu mỗi lượt kế tiếp +1, mỗi 2 lượt
                  kích hoạt 1 lần
                </li>
              </ul>
              <p>
                <strong>Mãng Xà Đá</strong>
              </p>
              <p>
                Khi bản thân nhận sát thương lớn, sẽ tăng cho võ sĩ liên kết Cường hóa sát thương và
                Kháng sát thương
              </p>
              <ul>
                <li>
                  <strong>Bậc 1:</strong> Nếu HP của bản thân bị mất quá 20% từ 1 đòn tấn công của
                  đối phương, trong 2 lượt tăng 16% kháng sát thương cho võ sĩ liên kết (mỗi trận
                  kích hoạt tối đa mỗi võ sĩ 1 lần)
                </li>
                <li>
                  <strong>Bậc 2:</strong> Lượng kháng sát thương tăng thành 24%.
                </li>
                <li>
                  <strong>Bậc 3:</strong> Nếu HP của bản thân bị mất quá 20% trong 1 đòn tấn công
                  của đối phương, trong 2 lượt tăng thêm 16% cường hóa sát thương cho vĩ sĩ liên kết
                </li>
                <li>
                  <strong>Bậc 4:</strong> Lượng cường hóa sát thương tăng thành 24%
                </li>
                <li>
                  <strong>Bậc 5:</strong> Số lần kích hoạt tăng kháng sát thương +1, mỗi 2 lượt kích
                  hoạt 1 lần
                </li>
                <li>
                  <strong>Bậc 6:</strong> Số lần kích hoạt tăng cường hóa sát thương +1, mỗi 2 lượt
                  kích hoạt 1 lần
                </li>
              </ul>
              <h3>Danh sách Chip</h3>
            </div>
            <div className="w-full overflow-x-auto rounded-br-lg rounded-tl-lg border border-orange-400/25">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-orange-400/25">
                    <th className="border-r border-orange-400/25 px-4 py-2 text-center font-semibold last:border-r-0">
                      Chip
                    </th>
                    <th className="border-r border-orange-400/25 px-4 py-2 text-center font-semibold last:border-r-0">
                      Biến dị
                    </th>
                    <th className="border-r border-orange-400/25 px-4 py-2 font-semibold last:border-r-0">
                      Chỉ số
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b border-orange-400/25 last:border-b-0">
                      <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                        <div
                          className={`flex flex-col items-center justify-center gap-1 ${
                            item.effect ? '' : 'px-1'
                          }`}
                        >
                          <Image
                            src={`/assets/ui/genemap/${item.image}.png`}
                            alt={item.name}
                            width={item.effect ? 74 : 59}
                            height={77}
                            className="h-10 w-auto sm:h-12"
                          />
                          <div className={variantColor[item.variant] || ''}>{item.name}</div>
                        </div>
                      </td>
                      <td className="border-r border-orange-400/25 px-4 py-2 text-center last:border-r-0 md:whitespace-pre-wrap">
                        {item.variant}
                      </td>
                      <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0 md:whitespace-pre-wrap">
                        {item.attr_bonus}
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
