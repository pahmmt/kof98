import { Skeleton } from '@nextui-org/react'

export default function ItemLoading({ type, count = 1 }) {
  return (
    <>
      {type === 'fighter' ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-5">
          {[...Array(count)].map((_, index) => (
            <div key={`${type}-${index}`} className="flex w-full flex-col gap-2">
              <Skeleton className="mx-auto h-32 w-full rounded-md" />
              <Skeleton className="h-5 w-full rounded-md" />
            </div>
          ))}
        </div>
      ) : type === 'fighter_detail' ? (
        <div className="space-y-4 md:flex md:items-center md:gap-4 md:space-y-0">
          <div>
            <Skeleton className="mx-auto h-96 max-w-full rounded-md md:w-80" />
          </div>
          <div className="md:flex-1">
            <Skeleton className="h-96 max-w-full rounded-md" />
          </div>
        </div>
      ) : type === 'element' ? (
        <div>
          <Skeleton className="h-96 max-w-full rounded-md" />
        </div>
      ) : type === 'soul' ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-5">
          {[...Array(count)].map((_, index) => (
            <div key={`${type}-${index}`} className="flex w-full flex-col gap-2">
              <Skeleton className="mx-auto h-20 w-20 rounded-full" />
              <Skeleton className="h-5 w-full rounded-md" />
            </div>
          ))}
        </div>
      ) : type === 'news' ? (
        <div className="-my-2 divide-y divide-slate-400/25">
          {[...Array(count)].map((_, index) => (
            <div key={`${type}-${index}`} className="flex w-full items-center gap-3 py-2 md:gap-5">
              <Skeleton className="h-12 w-24 rounded-md md:h-16 md:w-32" />
              <div className="flex-1 space-y-1">
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-3 w-full rounded-lg" />
              </div>
              <Skeleton className="hidden h-3 w-24 rounded-lg sm:block" />
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}
