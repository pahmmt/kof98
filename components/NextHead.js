import Head from 'next/head'

export default function NextHead({ title, description, children }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      {children}
      <meta name="description" content={description || ''} />
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <title>{title}</title>
    </Head>
  )
}
