import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="vi" className="scroll-pt-20 scroll-smooth">
      <Head />
      <body className="bg-background font-normal text-foreground dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
