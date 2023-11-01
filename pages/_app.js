import '@/styles/globals.css'
import Script from 'next/script'
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
      <style jsx global>
        {`
          html {
            font-family: ${font.style.fontFamily};
          }
        `}
      </style>
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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
