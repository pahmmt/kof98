import Image from 'next/image'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import { highlightText } from '@/utils/text'

export async function getStaticPaths() {
  const { getPaths } = await import('@/utils/soul')
  const paths = await getPaths()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const { getSoul } = await import('@/utils/soul')
    const data = await getSoul(params.id)
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
      <NextHead title={`Thông tin hồn lực: ${data.name}`} />
      <NextHead
        title={`Thông tin hồn lực: ${data.name}`}
        description={`Thông chi tiết về hồn lực 5: ${data.name}`}
      >
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/soul/${data.id}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Thông tin hồn lực: ${data.name}`} />
        <meta property="og:description" content={`Thông chi tiết về hồn lực 5: ${data.name}`} />
        <meta
          property="og:image"
          content={`${
            process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
          }/assets/items/skill_${data.id}.png`}
        />
      </NextHead>
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: `Hồn lực 5: ${data.name}` }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-8 mt-3 flex flex-col items-center gap-2">
              <Image
                src={`/assets/items/${data.image}.png`}
                alt=""
                width={100}
                height={100}
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <h2 className="text-xl font-semibold">{data.name}</h2>
              <div className="whitespace-pre-wrap">{highlightText(data.description)}</div>
            </div>
            <div className="w-full overflow-x-auto rounded-br-lg rounded-tl-lg border border-orange-400/25">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-orange-400/25">
                    <th className="w-24 border-r border-orange-400/25 px-4 py-2 text-center font-medium last:border-r-0 sm:w-36">
                      Lv
                    </th>
                    <th className="border-r border-orange-400/25 px-4 py-2 font-medium last:border-r-0">
                      Hiệu ứng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.levels.map((item, index) => (
                    <tr key={index} className="border-b border-orange-400/25 last:border-b-0">
                      <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                        <div className="flex items-center justify-center sm:gap-1">
                          {[...Array(item.star)].map((_, index) => (
                            <Image
                              key={index}
                              src="/assets/ui/light_star.png"
                              alt="Star"
                              width={30}
                              height={30}
                              className="h-auto w-3 sm:w-5"
                            />
                          ))}
                        </div>
                      </td>
                      <td className="whitespace-pre-wrap border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                        {highlightText(item.content)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
