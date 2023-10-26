import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export default function Page() {
  return (
    <>
      <NextHead title="Chip" />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Chip' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-8 mt-3 flex flex-col items-center">
              <h2 className="text-xl font-semibold">Chip</h2>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
