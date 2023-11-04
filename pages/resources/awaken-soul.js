import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import SoulTable from '@/components/SoulTable'

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
        description="Thông tin chi tiết các nguyên liệu để nâng cấp Hồn lực 5."
        openGraphData={{
          url: `${
            process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
          }/resources/awaken-soul`,
          title: 'Nguyên liệu nâng cấp Hồn lực 5',
          description: 'Thông tin chi tiết các nguyên liệu để nâng cấp Hồn lực 5.',
        }}
      />
      <main className="mt-4 flex-1 px-4">
        <div className="mx-auto mb-4 max-w-7xl">
          <Breadcrumb data={[{ name: 'Hồn lực 5' }]} />
        </div>
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">
                Nguyên liệu nâng cấp Hồn lực 5
              </h2>
            </div>
            <SoulTable data={data} />
          </CardBody>
        </Card>
      </main>
    </>
  )
}
