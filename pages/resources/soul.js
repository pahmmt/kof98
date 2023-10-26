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
      <NextHead title="Nguyên liệu nâng cấp Hồn lực 5" />
      <NextHead
        title="Nguyên liệu nâng cấp Hồn lực 5"
        description="Thông tin chi tiết các nguyên liệu để nâng cấp Hồn Lực 5."
      >
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/resources/soul`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nguyên liệu nâng cấp Hồn lực 5" />
        <meta
          property="og:description"
          content="Thông tin chi tiết các nguyên liệu để nâng cấp Hồn Lực 5."
        />
        <meta
          property="og:image"
          content={`${
            process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
          }/assets/cover/og_img.jpg`}
        />
      </NextHead>
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
