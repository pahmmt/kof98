import { formatUrl } from '@/utils/text'

export default function OpenGraph({ url = null, title = null, description = null, image = null }) {
  return (
    <>
      <meta
        property="og:url"
        content={url || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || process.env.NEXT_PUBLIC_APP_NAME || 'Untitled'} />
      <meta
        property="og:description"
        content={description || process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Chưa có thông tin.'}
      />
      <meta
        property="og:image"
        content={
          image
            ? formatUrl(image)
            : (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000') + '/og_img.jpg'
        }
      />
    </>
  )
}
