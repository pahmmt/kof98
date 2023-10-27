import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import SoulTable from '@/components/SoulTable'
import OpenGraph from '@/components/OpenGraph'

export async function getStaticProps() {
  try {
    const { getSoulTable } = await import('@/utils/soul')
    const data = await getSoulTable()
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
      <NextHead
        title="Nguyên liệu nâng cấp Hồn lực 5"
        description="Thông tin chi tiết các nguyên liệu để nâng cấp Hồn Lực 5."
      >
        <OpenGraph
          url={`${
            process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
          }/resources/awaken-soul`}
          title="Nguyên liệu nâng cấp Hồn lực 5"
          description="Thông tin chi tiết các nguyên liệu để nâng cấp Hồn Lực 5."
        />
      </NextHead>
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Nguyên liệu Hồn lực 5' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-lg font-bold">Nguyên liệu nâng cấp Hồn lực 5</h2>
            </div>
            <SoulTable data={data} />
          </CardBody>
        </Card>
      </main>
    </>
  )
}
