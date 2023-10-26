import { Accordion, AccordionItem, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import GateTable from '@/components/GateTable'
import NextHead from '@/components/NextHead'

export const getServerSideProps = async () => {
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
      <NextHead title="Nguyên liệu / Điều kiện khai mở Bát Môn" />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Nguyên liệu Bát Môn' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-4 mt-3 flex flex-col items-center">
              <h2 className="text-xl font-semibold">Nguyên liệu / Điều kiện khai mở Bát Môn</h2>
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
