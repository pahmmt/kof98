import Head from 'next/head'

export default function NextHead({ title, description, children }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content={description || ''} />
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      {children}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <title>{title}</title>
    </Head>
  )
}
