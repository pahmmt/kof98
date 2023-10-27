import Image from 'next/image'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import OpenGraph from '@/components/OpenGraph'

export async function getStaticProps() {
  try {
    const { getYAML } = await import('@/utils/yaml')
    const data = await getYAML('avatar.yml')
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
      <NextHead title="Avatar Chibi" description="Tổng hợp hình ảnh avatar chibi của các võ sĩ.">
        <OpenGraph
          url={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/resources/avatar`}
          title="Avatar Chibi"
          description="Tổng hợp hình ảnh avatar chibi của các võ sĩ."
        />
      </NextHead>
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Avatar Chibi' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-6 mt-2 sm:mb-8 sm:mt-3 flex flex-col items-center">
              <h2 className="text-lg font-semibold text-center">Avatar Chibi</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {data.map((avatar, index) => (
                <Image
                  key={index}
                  src={`/assets/avatar/${avatar}`}
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
