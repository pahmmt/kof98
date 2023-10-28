import Image from 'next/image'
import { Accordion, AccordionItem, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import NextHead from '@/components/NextHead'
import { highlightText } from '@/utils/text'

export async function getStaticProps() {
  try {
    const { getRunes } = await import('@/utils/features')
    const data = await getRunes()
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
      <NextHead title="Thức tỉnh huyết mạch (Rune)" />
      <main className="mt-4 flex-1 space-y-8 px-4">
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardHeader>
            <Breadcrumb data={[{ name: 'Rune' }]} />
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">
                Thức tỉnh huyết mạch (Rune)
              </h2>
            </div>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-1 sm:mb-6 sm:gap-2">
              {data.map((item, index) => (
                <Image
                  key={index}
                  src={`/assets/custom/rune/${item.image}_ic.png`}
                  alt="Rune"
                  width={100}
                  height={100}
                  className="h-10 w-10 sm:h-14 sm:w-14"
                />
              ))}
            </div>
            <div className="prose prose-invert mb-8 max-w-none sm:mb-6">
              <p>
                Mỗi võ sĩ có 6 ô rune tương ứng với rune số 1-6, mỗi ô chỉ được trang bị một rune
                của vị trí tương ứng.
              </p>
              <p>
                Khi thu thập được 2/4/6 mảnh của cùng một bộ rune, các hiệu ứng bộ tương ứng có thể
                được kích hoạt. Các hiệu ứng bộ được phân biệt theo chất lượng. Dữ liệu trên trang
                này sử dụng rune đỏ cấp cao nhất làm ví dụ.
              </p>
              <p>
                Hiệu ứng bộ có thể bao gồm 2 bộ thuộc tính rune kết hợp 2+4 hoặc 3 bộ thuộc tính
                rune kết hợp 2+2+2, nhưng sẽ chỉ có tối đa một bộ hiệu ứng nổ (ví dụ: kết hợp 2+4)
              </p>
            </div>
            <Accordion defaultExpandedKeys={['15']}>
              {data.map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label={item.name}
                  title={item.name}
                  startContent={
                    <Image
                      src={`/assets/custom/rune/${item.image}.png`}
                      alt="Rune"
                      width={137}
                      height={77}
                      className="h-auto w-24 sm:w-32"
                    />
                  }
                >
                  <ul>
                    {item.sets.map((set, setIndex) => (
                      <li key={setIndex}>
                        <span className="mr-2 font-semibold text-yellow-400">
                          Bộ {set.set} ngọc:
                        </span>
                        <span>{highlightText(set.content)}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </Accordion>
          </CardBody>
        </Card>
      </main>
    </>
  )
}
