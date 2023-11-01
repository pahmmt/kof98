import { formatUrl } from '@/utils/text'

export default function OpenGraph({ data }) {
  return (
    <>
      <meta
        property="og:url"
        content={data.url || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={data.title || process.env.NEXT_PUBLIC_APP_NAME || 'Untitled'}
      />
      <meta
        property="og:description"
        content={
          data.description || process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Chưa có thông tin.'
        }
      />
      <meta
        property="og:image"
        content={
          data.image
            ? formatUrl(data.image)
            : (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000') + '/og-image.jpg'
        }
      />
    </>
  )
}
