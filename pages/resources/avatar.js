import Image from 'next/image'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

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
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/resources/avatar`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Avatar Chibi" />
        <meta property="og:description" content="Tổng hợp hình ảnh avatar chibi của các võ sĩ." />
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
            <Breadcrumb data={[{ name: 'Avatar Chibi' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-8 mt-3 flex flex-col items-center">
              <h2 className="text-xl font-semibold">Avatar Chibi</h2>
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
