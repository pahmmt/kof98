import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export default function Page() {
  return (
    <>
      <NextHead title="NESTS Gene Map" />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'NESTS Gene Map' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">NESTS Gene Map</h2>
            </div>
            <div className="prose prose-invert mb-6 max-w-none sm:mb-8">
              <p><strong>NESTS Gene Map - Chip Di Truyền NESTS</strong> là một tính năng cực kỳ quan trọng giúp võ sĩ cường hóa các chỉ số của bản thân, đồng thời tăng thêm độ liên kết giữa các võ sĩ cùng bộ Gene với nhau.</p>
              <p>
                <img src="https://i.imgur.com/ZkF1cwd.png" alt="" className="h-auto w-full" />
              </p>
              <h3>Rules - Quy tắc</h3>
              <ul>
                <li>Một võ sĩ chỉ được đưa vào duy nhất 1 Map</li>
                <li>Cần tiêu tốn kim cương nếu muốn gỡ võ sĩ ra khỏi Map</li>
                <li>Các con Chip sẽ tăng chỉ số cho võ sĩ được trang bị trong Map</li>
                <li>Các con Chip giúp tăng cấp Biến đổi Map, mở khóa các hiệu quả tương đương</li>
                <li>Hiệu quả tương đương chỉ hữu hiệu trong Map nhất định</li>
                <li>Sự tăng cấp Chip giúp tăng Năng lượng Biến đổi</li>
                <li>Tăng cấp Map (Map Upgrade) giúp tăng chỉ số ATK, DEF, HP của các võ sĩ trong Map</li>
              </ul>
              <h3>Variation Details - Chi tiết biến thể</h3>
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
                  chế độ.
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
              <h3>Variation Details - Chi tiết biến thể</h3>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
