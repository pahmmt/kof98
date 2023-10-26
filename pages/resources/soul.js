import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import SoulTable from '@/components/SoulTable'

export const getServerSideProps = async () => {
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
      <NextHead title="Nguyên liệu nâng cấp Hồn lực 5" />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Nguyên liệu Hồn lực 5' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-8 mt-3 flex flex-col items-center">
              <h2 className="text-xl font-semibold">Nguyên liệu nâng cấp Hồn lực 5</h2>
            </div>
            <SoulTable data={data} />
          </CardBody>
        </Card>
      </main>
    </>
  )
}
