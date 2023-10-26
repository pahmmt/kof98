import { Accordion, AccordionItem, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import AidTable from '@/components/AidTable'
import NextHead from '@/components/NextHead'
import OpenGraph from '@/components/OpenGraph'

export async function getStaticProps() {
  try {
    const { getAidTable } = await import('@/utils/fighter')
    const data = await getAidTable()
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
        title="Nguyên liệu nâng cấp Viện trợ"
        description="Bảng nguyên liệu nâng cấp viện trợ võ sĩ tư chất 13, 14, 15..."
      >
        <OpenGraph
          url={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/resources/aid`}
          title="Nguyên liệu nâng cấp Viện trợ"
          description="Bảng nguyên liệu nâng cấp viện trợ võ sĩ tư chất 13, 14, 15..."
        />
      </NextHead>
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Nguyên liệu Viện trợ' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-4 mt-3 flex flex-col items-center">
              <h2 className="text-xl font-semibold">Nguyên liệu nâng cấp Viện trợ</h2>
            </div>
            <Accordion defaultExpandedKeys={['15']}>
              <AccordionItem key="15" aria-label="Tư chất 15" title="Tư chất 15">
                <AidTable data={data.apt_15} />
              </AccordionItem>
              <AccordionItem key="14" aria-label="Tư chất 14" title="Tư chất 14">
                <AidTable data={data.apt_14} />
              </AccordionItem>
              <AccordionItem key="13" aria-label="Tư chất 13" title="Tư chất 13">
                <AidTable data={data.apt_13} />
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
