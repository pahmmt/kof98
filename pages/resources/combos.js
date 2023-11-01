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
      <NextHead
        title="Combos"
        description="Danh sách các combo ẩn trong game, tìm và kích hoạt để nhận 50 kim cương mỗi ngày."
        openGraphData={{
          url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/resources/combos`,
          title: 'Combos',
          description:
            'Danh sách các combo ẩn trong game, tìm và kích hoạt để nhận 50 kim cương mỗi ngày.',
        }}
      />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Combos' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">Combos</h2>
            </div>
            <div className="prose prose-invert mb-6 max-w-none sm:mb-8">
              <p>
                Dưới đây là danh sách Combo ẩn, sử dụng trong chế độ Vượt ải, Tháp, Boss hội quán để
                có thể nhận 50 kim cương mỗi ngày:
              </p>
            </div>

            <div className="w-full overflow-x-auto rounded-br-lg rounded-tl-lg border border-orange-400/25">
              <table className="w-full min-w-max text-left">
                <thead>
                  <tr className="border-b border-orange-400/25">
                    <th className="border-r border-orange-400/25 px-4 py-2 text-center font-medium last:border-r-0">
                      Combo
                    </th>
                    <th className="border-r border-orange-400/25 px-4 py-2 text-center font-medium last:border-r-0">
                      Combo
                    </th>
                    <th className="border-r border-orange-400/25 px-4 py-2 text-center font-medium last:border-r-0">
                      Combo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GGGGG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GGGGP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GGGPG
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GGGPP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GGPGG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GGPGP
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GGPPG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GGPPP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GPGGG
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GPGGP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GPGPG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GPGPP
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GPPGG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GPPGP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GPPPG
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      GPPPP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PGGGG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PGGGP
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PGGPG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PGGPP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PGPGG
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PGPGP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PGPPG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PGPPP
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PPGGG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PPGGP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PPGPG
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PPGPP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PPPGG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PPPGP
                    </td>
                  </tr>
                  <tr className="border-b border-orange-400/25 last:border-b-0">
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PPPPG
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      PPPPP
                    </td>
                    <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                      -
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
