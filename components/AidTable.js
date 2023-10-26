import Image from 'next/image'

export default function AidTable({ data }) {
  return (
    <div className="w-full overflow-x-auto rounded-br-lg rounded-tl-lg border border-orange-400/25">
      <table className="w-full min-w-max text-left">
        <thead>
          <tr className="border-b border-orange-400/25">
            <th className="border-r border-orange-400/25 px-4 py-2 text-center font-medium last:border-r-0">
              Tiến độ
            </th>
            <th className="border-r border-orange-400/25 px-4 py-2 font-medium last:border-r-0">
              Nguyên liệu
            </th>
            <th className="border-r border-orange-400/25 px-4 py-2 font-medium last:border-r-0">
              Vàng
            </th>
            <th className="border-r border-orange-400/25 px-4 py-2 font-medium last:border-r-0">
              Kích hoạt hiệu ứng
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((aid, index) => (
            <tr key={index} className="border-b border-orange-400/25 last:border-b-0">
              <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                <div className="flex items-center justify-center gap-2">
                  <div
                    className={`w-20 truncate rounded-md py-0.5 text-center text-sm ${aid.progress.from.className}`}
                  >
                    {aid.progress.from.name}
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div
                    className={`w-20 truncate rounded-md py-0.5 text-center text-sm ${aid.progress.to.className}`}
                  >
                    {aid.progress.to.name}
                  </div>
                </div>
              </td>
              <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                <div className="flex items-center gap-4">
                  {aid.items.map((item, indexItem) => (
                    <div key={`aidlvit-${index}-${indexItem}`} className="flex items-center gap-2">
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
                  <span>{aid.gold_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                </div>
              </td>
              <td className="border-r border-orange-400/25 px-4 py-2 last:border-r-0">
                {aid.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
