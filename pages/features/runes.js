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
      <NextHead title="Thức Tỉnh Huyết Mạch" />
      <main className="mt-4 flex-1 px-4">
        <div className="mx-auto mb-4 max-w-7xl">
          <Breadcrumb data={[{ name: 'Runes' }]} />
        </div>
        <Card fullWidth className="mx-auto max-w-7xl">
          <CardBody>
            <div className="mb-6 mt-2 flex flex-col items-center sm:mb-8 sm:mt-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">Thức Tỉnh Huyết Mạch</h2>
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
            <div className="prose prose-invert mx-2 mb-8 max-w-none sm:mx-4 sm:mb-6">
              <p>
                <strong>Thức Tỉnh Huyết Mạch - Runes</strong> được coi là một trong những tính năng
                quan trọng bậc nhất game, có ảnh hưởng to lớn tới sức mạnh võ sĩ cũng như cơ chế sử
                dụng võ sĩ. Gia tăng tối đa các chỉ số gốc và chỉ số phụ, đồng thời Kích hoạt Rune
                có ảnh hưởng trực tiếp trong trận đấu.
              </p>
              <h3>Quy tắc chung</h3>
              <ul>
                <li>
                  Mỗi võ sĩ có 6 ô rune tương ứng với rune số 1-6, mỗi ô chỉ được trang bị một rune
                  của vị trí tương ứng.
                </li>
                <li>
                  Khi thu thập được 2/4/6 mảnh của cùng một bộ rune, các hiệu ứng bộ tương ứng có
                  thể được kích hoạt. Các hiệu ứng bộ được phân biệt theo chất lượng. Dữ liệu trên
                  trang này sử dụng rune đỏ cấp cao nhất làm ví dụ.
                </li>
                <li>
                  Hiệu ứng bộ có thể bao gồm 2 bộ thuộc tính rune kết hợp 2+4 hoặc 3 bộ thuộc tính
                  rune kết hợp 2+2+2, nhưng sẽ chỉ có tối đa một bộ hiệu ứng nổ (ví dụ: kết hợp 2+4)
                </li>
              </ul>
              <h3>Các loại Rune</h3>
            </div>
            <Accordion>
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
