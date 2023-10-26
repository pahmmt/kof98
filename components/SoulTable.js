import { Fragment } from 'react'
import Image from 'next/image'

export default function SoulTable({ data }) {
  return (
    <div className="w-full overflow-x-auto rounded-br-lg rounded-tl-lg border border-orange-400/25">
      <table className="w-full min-w-max text-left">
        <thead>
          <tr className="border-b border-orange-400/25">
            <th className="border-r border-orange-400/25 px-4 py-2 text-center font-medium last:border-r-0">
              Lv
            </th>
            <th
              className="border-r border-orange-400/25 px-4 py-2 text-center font-medium last:border-r-0"
              colSpan="2"
            >
              Nguyên liệu
            </th>
            <th className="border-r border-orange-400/25 px-4 py-2 font-medium last:border-r-0">
              Vàng
            </th>
            <th className="border-r border-orange-400/25 px-4 py-2 font-medium last:border-r-0">
              Chỉ số hồn lực
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Fragment key={index}>
              {item.levels.map((level, levelIndex) => (
                <tr key={levelIndex} className="border-b border-orange-400/25 last:border-b-0">
                  {levelIndex === 0 && (
                    <td
                      className="border-r border-orange-400/25 px-4 py-2 last:border-r-0"
                      rowSpan={item.levels.length}
                    >
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
                  )}
                  <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                    {levelIndex == 0 ? 'Kích hoạt' : levelIndex}
                  </td>
                  <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                    <div className="flex items-center gap-4">
                      {level.items.map((item, itemIndex) => (
                        <div
                          key={`soulit-${index}-${levelIndex}-${itemIndex}`}
                          className="flex items-center gap-2"
                        >
                          <Image
                            src={`/assets/items/${item.image}.png`}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="h-8 w-8 sm:h-10 sm:w-10"
                          />
                          <span>{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/ui/zc_icon/zc_ico_main_gb.png"
                        alt="Gold"
                        width={49}
                        height={47}
                        className="h-6 w-6 sm:h-8 sm:w-8"
                      />
                      <span>
                        {level.gold_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                      </span>
                    </div>
                  </td>
                  <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                    {level.attr_bonus}
                  </td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
