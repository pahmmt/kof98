import Image from 'next/image'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'

export default function Page() {
  const data = [
    'GGGGG',
    'GGGGP',
    'GGGPG',
    'GGGPP',
    'GGPGG',
    'GGPGP',
    'GGPPG',
    'GGPPP',
    'GPGGG',
    'GPGGP',
    'GPGPG',
    'GPGPP',
    'GPPGG',
    'GPPGP',
    'GPPPG',
    'GPPPP',
    'PGGGG',
    'PGGGP',
    'PGGPG',
    'PGGPP',
    'PGPGG',
    'PGPGP',
    'PGPPG',
    'PGPPP',
    'PPGGG',
    'PPGGP',
    'PPGPG',
    'PPGPP',
    'PPPGG',
    'PPPGP',
    'PPPPG',
    'PPPPP',
    '-',
  ]

  const chunkedData = data.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return (
    <>
      <NextHead
        title="Combos"
        description="Danh sách Combo ẩn sử dụng trong chế độ Vượt ải, Tháp, Boss hội quán để có thể nhận 50 kim cương mỗi ngày."
        openGraphData={{
          url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/resources/combos`,
          title: 'Combos',
          description:
            'Danh sách Combo ẩn sử dụng trong chế độ Vượt ải, Tháp, Boss hội quán để có thể nhận 50 kim cương mỗi ngày.',
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
                Danh sách Combo ẩn sử dụng trong chế độ Vượt ải, Tháp, Boss hội quán để có thể nhận
                50 kim cương mỗi ngày.
              </p>
            </div>
            <div className="w-full overflow-x-auto rounded-br-lg rounded-tl-lg border border-orange-400/25">
              <table className="w-full min-w-max text-left">
                <tbody>
                  {chunkedData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-orange-400/25 last:border-b-0">
                      {row.map((col, colIndex) => (
                        <td
                          key={`${rowIndex}-${colIndex}`}
                          className="border-r border-orange-400/25 px-4 py-2 text-center last:border-r-0"
                        >
                          {col}
                        </td>
                      ))}
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
