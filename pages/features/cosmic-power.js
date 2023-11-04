import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export default function Page() {
  return (
    <>
      <NextHead title="Tinh Tú" />
      <main className="mt-4 flex-1 px-4">
        <div className="mx-auto mb-4 max-w-7xl">
          <Breadcrumb data={[{ name: 'Tinh tú' }]} />
        </div>
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">Tinh Tú</h2>
            </div>
            <div className="prose prose-invert mx-2 mb-6 max-w-none sm:mx-4 sm:mb-8">
              <p>
                <strong>Cosmic Power - Tinh Tú</strong> là tính năng tăng lực chiến cực mạnh, giúp
                võ sĩ cường hóa tối đa 3 chỉ sô gốc ATK - DEF - HP, đồng thời nhận thêm các hiệu quả
                khác.
              </p>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
