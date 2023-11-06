import Image from 'next/image'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export async function getStaticProps() {
  try {
    const { getAvatars } = await import('@/utils/features')
    const data = await getAvatars()
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
        title="Bộ sưu tập ảnh đại diện"
        description="Tổng hợp hình ảnh đại diện trong game."
        openGraphData={{
          url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/resources/avatar`,
          title: 'Bộ sưu tập ảnh đại diện',
          description: 'Tổng hợp hình ảnh đại diện trong game.',
        }}
      />
      <main className="mt-4 flex-1 px-4">
        <div className="mx-auto mb-4 max-w-7xl">
          <Breadcrumb data={[{ name: 'Bộ sưu tập ảnh đại diện' }]} />
        </div>
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">Bộ sưu tập ảnh đại diện</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {data.map((avatar, index) => (
                <Image
                  key={index}
                  src={`/assets/avatars/${avatar}`}
                  alt="Avatar"
                  width={100}
                  height={100}
                  quality={100}
                  className="h-20 w-20"
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
