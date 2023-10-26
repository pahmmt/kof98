export default function Custom500() {
  return (
    <main className="flex flex-1 flex-col justify-center px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-6xl font-extrabold tracking-tight text-secondary-500 lg:text-8xl">
              500
            </h1>
            <p className="mb-4 text-lg font-light text-gray-400">Internal Server Error</p>
          </div>
        </div>
      </div>
    </main>
  )
}
