import { Accordion, AccordionItem, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import GateTable from '@/components/GateTable'
import NextHead from '@/components/NextHead'

export async function getStaticProps() {
  try {
    const { getEightGatesTable } = await import('@/utils/fighter')
    const data = await getEightGatesTable()
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
        title="Nguyên liệu / Điều kiện khai mở Bát Môn"
        description="Bảng nguyên liệu / Điều kiện để khai mở bát môn cho các võ sĩ tư chất 13, 14, 15..."
        openGraphData={{
          url: `${
            process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
          }/resources/eight-gates`,
          title: 'Nguyên liệu / Điều kiện khai mở Bát Môn',
          description:
            'Bảng nguyên liệu / Điều kiện để khai mở bát môn cho các võ sĩ tư chất 13, 14, 15...',
        }}
      />
      <main className="mt-4 flex-1 px-4">
        <div className="mx-auto mb-4 max-w-7xl">
          <Breadcrumb data={[{ name: 'Bát môn' }]} />
        </div>
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardBody>
            <div className="mb-4 mt-3 flex flex-col items-center">
              <h2 className="text-center text-xl font-bold sm:text-2xl">
                Nguyên liệu / Điều kiện khai mở Bát Môn
              </h2>
            </div>
            <Accordion defaultExpandedKeys={['15']}>
              <AccordionItem key="15" aria-label="Tư chất 15" title="Tư chất 15">
                <GateTable data={data.apt_15} />
              </AccordionItem>
              <AccordionItem key="14" aria-label="Tư chất 14" title="Tư chất 14">
                <GateTable data={data.apt_14} />
              </AccordionItem>
              <AccordionItem key="13" aria-label="Tư chất 13" title="Tư chất 13">
                <GateTable data={data.apt_13} />
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
