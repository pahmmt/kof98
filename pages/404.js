import Link from 'next/link'

export default function Custom404() {
  return (
    <main className="flex flex-1 flex-col justify-center px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-6xl font-extrabold tracking-tight text-secondary-500 lg:text-8xl">
              404
            </h1>
            <p className="mb-4 text-lg font-light text-gray-400">
              Xin lỗi, trang bạn truy cập không tồn tại.
            </p>
            <Link
              href="/"
              className="my-4 inline-flex rounded-lg bg-secondary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-secondary-800 focus:outline-none focus:ring-4 focus:ring-primary-900"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
