import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export default function Page() {
  return (
    <>
      <NextHead title="Cải tạo NESTS" />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Cải tạo NESTS' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">Cải tạo NESTS</h2>
            </div>
            <div className="prose prose-invert mb-6 max-w-none sm:mb-8">
              <p>
                <strong>NESTS Transform - Cải tạo Nests</strong> là tính năng tăng lực chiến rất
                mạnh, cường hóa các chỉ số cơ bản và chỉ số phụ, đồng thời có thể thay đổi thứ tự
                tuyệt kỹ (chế độ tự động) của các võ sĩ, với 2 phần cơ bản là Hạt nhân (Core) và Cơ
                năng (Part).
              </p>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
