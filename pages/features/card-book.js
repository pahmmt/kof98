import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export default function Page() {
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
            <div className="mb-6 mt-2 sm:mb-8 sm:mt-3 flex flex-col items-center">
              <h2 className="text-lg font-semibold text-center">Sách sưu tập</h2>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
