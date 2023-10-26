import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DataProvider from '@/components/DataContext'
import NextNProgress from 'nextjs-progressbar'

export const font = JetBrains_Mono({ subsets: ['vietnamese'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <NextUIProvider>
        <DataProvider>
          <NextNProgress color="#9455d3" options={{ showSpinner: false }} />
          <div className="flex min-h-screen flex-col">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </DataProvider>
      </NextUIProvider>
    </>
  )
}
