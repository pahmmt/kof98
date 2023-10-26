import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DataProvider from '@/components/DataContext'
import NextNProgress from 'nextjs-progressbar'

const inter = Inter({ subsets: ['vietnamese'] })

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <DataProvider>
        <NextNProgress color="#9455d3" options={{ showSpinner: false }} />
        <div className={`flex min-h-screen flex-col ${inter.className}`}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </DataProvider>
    </NextUIProvider>
  )
}
